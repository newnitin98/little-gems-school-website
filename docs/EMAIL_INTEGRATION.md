# Email Integration — Little Gems School

Admission enquiry emails are sent via [Resend](https://resend.com) from a
server-side Next.js API route. The API key and recipient address are never
exposed to the browser.

---

## How it works

```
Parent fills form  →  POST /api/enquiry  →  Resend API  →  schoollittlegems@gmail.com
                                                         ↓
                                               WhatsApp follow-up URL
                                               returned to parent
```

1. Parent submits the enquiry form on `/admissions` or `/contact`.
2. The form sends a `POST` request to `/api/enquiry` (server-side Route Handler).
3. The server validates fields, runs a honeypot check, then calls the Resend API.
4. Resend delivers the email to `SCHOOL_EMAIL`.
5. The API returns a WhatsApp URL — the parent can optionally send a
   follow-up message to the school on WhatsApp.

---

## Environment variables

| Variable | Purpose | Example value |
|---|---|---|
| `RESEND_API_KEY` | Resend API key (secret — server only) | `re_xxxxxxxxxx` |
| `SCHOOL_EMAIL` | Recipient of all enquiry emails | `schoollittlegems@gmail.com` |
| `ADMISSION_FROM_EMAIL` | Sender name + address shown to recipient | `Little Gems School <noreply@littlegemsschool.in>` |
| `NEXT_PUBLIC_SITE_URL` | Used in email footer and source URL field | `https://www.littlegemsschool.in` |

> **IMPORTANT:** `RESEND_API_KEY` must NEVER be prefixed with `NEXT_PUBLIC_`.
> Any variable starting with `NEXT_PUBLIC_` is bundled into the browser.

---

## Local setup

1. Copy `.env.local.example` (if it exists) or create `.env.local` in the
   project root.
2. Add the four variables above with real values.
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Submit a test enquiry at `http://localhost:3000/admissions`.
5. Check your terminal — if `RESEND_API_KEY` is set, the email is sent live.
   If not, the submission is logged to the terminal with `[Enquiry]` prefix.

> `.env.local` is listed in `.gitignore` and must **never** be committed.

---

## Vercel environment variable setup

1. Go to [vercel.com](https://vercel.com) → your project → **Settings** →
   **Environment Variables**.
2. Add each variable:

   | Name | Environment |
   |---|---|
   | `RESEND_API_KEY` | Production (+ Preview if needed) |
   | `SCHOOL_EMAIL` | Production |
   | `ADMISSION_FROM_EMAIL` | Production |
   | `NEXT_PUBLIC_SITE_URL` | Production |

3. **Redeploy** after adding variables (Vercel does not hot-reload env vars).

---

## Sender domain

- Sender: `noreply@littlegemsschool.in`
- The domain `littlegemsschool.in` must be **verified in Resend** under
  Domains before emails will deliver.
- Steps: Resend Dashboard → Domains → Add Domain → add DNS records
  (SPF, DKIM, DMARC) at your domain registrar → verify.

---

## Recipient

All enquiry emails are delivered to:

```
schoollittlegems@gmail.com
```

This is set via the `SCHOOL_EMAIL` environment variable and can be changed
without a code deploy.

---

## Testing procedure

### Successful submission
1. Fill all fields with valid data (10-digit phone, all required fields).
2. Click **Submit Enquiry**.
3. Expected: green success message + WhatsApp button appears.
4. Expected: email arrives at `schoollittlegems@gmail.com` within seconds.

### Validation errors
1. Submit with an empty Parent Name → expect red error on that field.
2. Submit with phone `12345` (not 10 digits) → expect phone error.
3. Submit with no class selected → expect class error.

### Rate limiting
1. Submit successfully once.
2. Submit again immediately → expect `429 Too many requests` error message.

### Honeypot
The `website` input field is hidden from real users (positioned off-screen,
`tabIndex={-1}`). If a bot fills it, the API silently returns success without
sending an email.

---

## Security notes

- `RESEND_API_KEY` is read only in `src/app/api/enquiry/route.ts` which runs
  server-side. It is never imported into any client component.
- All user input is sanitised with the `safe()` function before being
  inserted into the HTML email (`<`, `>`, `&`, `"`, `'` are stripped).
- Rate limiting blocks more than one submission per IP per 60 seconds.
- The honeypot field silently deflects automated form submissions.

---

## Files involved

| File | Role |
|---|---|
| `src/app/api/enquiry/route.ts` | Server-side API route — Resend call lives here |
| `src/components/ui/ContactForm.tsx` | Client form — posts JSON to `/api/enquiry` |
| `.env.local` | Local secrets (never committed) |
| `docs/EMAIL_INTEGRATION.md` | This document |
