import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const submissionMap = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const last = submissionMap.get(ip) ?? 0;
  const now = Date.now();

  if (now - last < 60_000) {
    return true;
  }

  submissionMap.set(ip, now);
  return false;
}

const safe = (value: string) =>
  value?.toString().replace(/[<>]/g, "").trim().slice(0, 500) ?? "";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute before trying again." },
      { status: 429 },
    );
  }

  const body = (await req.json()) as Record<string, string>;
  const { parentName, childName, childAge, phone, classApplying, message } = body;

  if (!parentName || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 400 },
    );
  }

  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const schoolEmail =
      process.env.SCHOOL_EMAIL ?? "REPLACE_WITH_SCHOOL_GMAIL@gmail.com";

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "website@littlegemsschool.in",
        to: [schoolEmail],
        replyTo: undefined,
        subject: `New Enquiry: ${safe(parentName)} - ${safe(classApplying)}`,
        html: `
          <h2>New Admission Enquiry - Little Gems School</h2>
          <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
            <tr><td style="padding:8px;font-weight:bold;background:#FFF9E0;">Parent Name</td><td style="padding:8px;">${safe(parentName)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#FFF9E0;">Child Name</td><td style="padding:8px;">${safe(childName)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#FFF9E0;">Child Age</td><td style="padding:8px;">${safe(childAge)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#FFF9E0;">Phone</td><td style="padding:8px;">${safe(phone)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#FFF9E0;">Class Applying For</td><td style="padding:8px;">${safe(classApplying)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#FFF9E0;">Message</td><td style="padding:8px;">${safe(message)}</td></tr>
          </table>
          <p style="margin-top:16px;color:#888;font-size:12px;">Submitted via littlegemsschool.in</p>
        `,
      });
    } else {
      console.info("Enquiry received without RESEND_API_KEY configured", {
        parentName: safe(parentName),
        childName: safe(childName),
        childAge: safe(childAge),
        phone: safe(phone),
        classApplying: safe(classApplying),
        message: safe(message),
        schoolEmail,
      });
    }

    const waMessage = encodeURIComponent(
      `Hello ${safe(parentName)}, thank you for your enquiry at Little Gems School! We received your interest for ${safe(classApplying)}. We will call you at ${safe(phone)} during school hours (Mon-Sat, 8am-2:30pm) to guide you further. - Little Gems School, Jabalpur`,
    );

    return NextResponse.json({
      success: true,
      whatsappUrl: `https://wa.me/919399098220?text=${waMessage}`,
    });
  } catch (err) {
    console.error("Enquiry email error:", err);
    return NextResponse.json(
      { error: "Submission failed. Please call us directly." },
      { status: 500 },
    );
  }
}
