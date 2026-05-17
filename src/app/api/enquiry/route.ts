import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Rate limiter — one submission per IP per 60 seconds (in-memory, per instance)
// ---------------------------------------------------------------------------
const submissionMap = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const last = submissionMap.get(ip) ?? 0;
  const now = Date.now();
  if (now - last < 60_000) return true;
  submissionMap.set(ip, now);
  return false;
}

// ---------------------------------------------------------------------------
// Sanitise: strip HTML-injection characters, trim, cap length
// ---------------------------------------------------------------------------
const safe = (value: unknown): string =>
  String(value ?? "")
    .replace(/[<>&"']/g, "")
    .trim()
    .slice(0, 500);

// ---------------------------------------------------------------------------
// POST /api/enquiry
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  // Rate limit ----------------------------------------------------------------
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute before trying again." },
      { status: 429 },
    );
  }

  // Parse body ----------------------------------------------------------------
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill this hidden field; real users never see it ------------
  if (body.website) {
    // Silently return success so bots get no signal they were blocked
    return NextResponse.json({ success: true, whatsappUrl: "" });
  }

  // Sanitise all fields -------------------------------------------------------
  const parentName = safe(body.parentName);
  const childName = safe(body.childName);
  const childAge = safe(body.childAge);
  const phone = safe(body.phone);
  const classApplying = safe(body.classApplying);
  const message = safe(body.message);

  // Server-side validation ----------------------------------------------------
  if (!parentName) {
    return NextResponse.json(
      { error: "Parent name is required." },
      { status: 400 },
    );
  }
  if (!childName) {
    return NextResponse.json(
      { error: "Child name is required." },
      { status: 400 },
    );
  }
  if (!classApplying) {
    return NextResponse.json(
      { error: "Class applying for is required." },
      { status: 400 },
    );
  }
  if (!/^\d{10}$/.test(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid 10-digit phone number." },
      { status: 400 },
    );
  }

  // Metadata ------------------------------------------------------------------
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  });
  const sourceUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.littlegemsschool.in";

  // Send email via Resend -----------------------------------------------------
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const schoolEmail =
      process.env.SCHOOL_EMAIL ?? "schoollittlegems@gmail.com";
    const fromEmail =
      process.env.ADMISSION_FROM_EMAIL ??
      "Little Gems School <noreply@littlegemsschool.in>";

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: fromEmail,
        to: [schoolEmail],
        subject: `New Admission Enquiry: ${parentName} — ${classApplying}`,
        html: buildEmailHtml({
          parentName,
          childName,
          childAge,
          phone,
          classApplying,
          message,
          timestamp,
          sourceUrl,
        }),
      });
    } else {
      // Development fallback — logs to server console only, never to the client
      console.info("[Enquiry] RESEND_API_KEY not configured — submission:", {
        parentName,
        childName,
        childAge,
        phone,
        classApplying,
        timestamp,
      });
    }

    // Build WhatsApp follow-up URL (safe to return to frontend) ---------------
    const waMessage = encodeURIComponent(
      `Hello ${parentName}, thank you for your enquiry at Little Gems School! ` +
        `We received your interest for ${classApplying}. ` +
        `We will call you at ${phone} during school hours (Mon-Sat, 8 AM-2:30 PM) to guide you further. ` +
        `- Little Gems School, Jabalpur`,
    );

    return NextResponse.json({
      success: true,
      whatsappUrl: `https://wa.me/918839225491?text=${waMessage}`,
    });
  } catch (err) {
    console.error("[Enquiry] Resend error:", err);
    return NextResponse.json(
      { error: "Submission failed. Please call us directly at 8839225491." },
      { status: 500 },
    );
  }
}

// ---------------------------------------------------------------------------
// Email HTML template (kept here — server-side only, never in client bundle)
// ---------------------------------------------------------------------------
function buildEmailHtml(data: {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  classApplying: string;
  message: string;
  timestamp: string;
  sourceUrl: string;
}): string {
  const {
    parentName,
    childName,
    childAge,
    phone,
    classApplying,
    message,
    timestamp,
    sourceUrl,
  } = data;

  const row = (label: string, value: string, shade: boolean) =>
    `<tr style="${shade ? "background:#F0F6FF;" : ""}">
      <td style="padding:10px 14px;font-weight:600;color:#1A3C6E;width:42%;">${label}</td>
      <td style="padding:10px 14px;">${value || "—"}</td>
    </tr>`;

  return `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1C1C1E;">
  <h2 style="color:#1A3C6E;margin:0 0 4px;">New Admission Enquiry</h2>
  <p style="color:#888;font-size:13px;margin:0 0 20px;">
    Little Gems School &nbsp;&middot;&nbsp; ${timestamp} IST
  </p>

  <table style="border-collapse:collapse;width:100%;font-size:14px;">
    ${row("Parent Name", parentName, true)}
    ${row("Child Name", childName, false)}
    ${row("Child Age", childAge ? `${childAge} years` : "—", true)}
    ${row("Phone Number", phone, false)}
    ${row("Class Applying For", classApplying, true)}
    ${row("Message", message || "—", false)}
    ${row("Submitted At", `${timestamp} IST`, true)}
    <tr>
      <td style="padding:10px 14px;font-weight:600;color:#1A3C6E;">Source URL</td>
      <td style="padding:10px 14px;">
        <a href="${sourceUrl}/admissions" style="color:#F97316;">${sourceUrl}/admissions</a>
      </td>
    </tr>
  </table>

  <div style="margin-top:24px;padding:14px 16px;background:#FFF9E0;border-left:4px solid #F5C518;border-radius:4px;font-size:14px;">
    <strong>Next step:</strong> Call <strong>${parentName}</strong> on
    <strong>${phone}</strong> within one school day to confirm receipt and
    schedule a campus visit.
  </div>

  <p style="margin-top:24px;font-size:11px;color:#bbb;">
    This email was generated automatically from the admissions form at
    <a href="${sourceUrl}" style="color:#bbb;">${sourceUrl}</a>.
    Do not reply to this email directly.
  </p>
</div>
  `.trim();
}
