# Production Readiness Checklist

## SEO
- [x] Root metadata configured
- [x] Per-page metadata configured
- [x] Canonical URLs defined per page
- [x] Open Graph metadata added
- [x] Twitter card metadata added
- [x] `robots.ts` present
- [x] `sitemap.ts` present
- [x] JSON-LD structured data present
- [ ] Replace Google Search Console verification token
- [ ] Clean encoding artifacts in metadata strings
- [ ] Add `sameAs` links in schema when official socials/maps exist

## Metadata / Brand Assets
- [x] Favicon set exists
- [x] Apple touch icon exists
- [x] Android icons exist
- [x] Web manifest exists
- [x] OG image exists
- [ ] Verify final favicon/logo sizes on production domain
- [ ] Confirm OG share preview renders correctly on WhatsApp, Facebook, X

## Image Optimization
- [x] `next/image` used broadly
- [x] Local image assets used
- [x] `sizes` props added in major image components
- [x] Hero image marked `priority`
- [ ] Replace temporary stock/demo images with real school images
- [ ] Compress final images to production-friendly sizes
- [ ] Ensure all alt text matches real uploaded assets

## Mobile Responsiveness
- [x] Mobile drawer nav exists
- [x] Core layouts use responsive grids
- [ ] Test on real mobile devices, not only desktop emulation
- [ ] Validate sticky header behavior on low-end/mobile browsers
- [ ] Check WhatsApp button overlap on smaller screens
- [ ] Test gallery lightbox interactions on touch devices

## Domain Setup
- [x] Production domain referenced in metadata
- [ ] Attach `littlegemsschool.in` in Vercel
- [ ] Configure DNS at registrar/Cloudflare/GoDaddy
- [ ] Verify apex + `www` redirect strategy
- [ ] Confirm HTTPS certificate issuance after connection

## Vercel Deployment
- [x] `vercel.json` present
- [x] Next.js build is production-compatible
- [x] Cache headers configured for images/manifest assets
- [ ] Confirm latest local changes are deployed to Vercel
- [ ] Verify production build after domain connection
- [ ] Remove or ignore leftover local debug artifacts/screenshots from repo if not needed

## Email Integration
- [x] Resend dependency installed
- [x] Enquiry API route implemented
- [x] Frontend form wired to API
- [ ] Add real `RESEND_API_KEY`
- [ ] Add real `SCHOOL_EMAIL`
- [ ] Verify sender/domain setup for `website@littlegemsschool.in`
- [ ] Test form delivery in production

## WhatsApp Integration
- [x] Floating WhatsApp button present
- [x] API returns WhatsApp follow-up URL after enquiry
- [ ] Centralize WhatsApp number in one source of truth
- [ ] Verify phone/WhatsApp numbers against final school-approved contact data
- [ ] Test WhatsApp deep links on Android, iPhone, and desktop web

## Google Maps
- [x] Contact page embed present
- [ ] Replace temporary embed with official live embed URL from claimed listing
- [ ] Confirm map location pin is accurate
- [ ] Add official Google Business Profile link once available

## Analytics / Tracking
- [ ] Add Google Analytics or plausible equivalent
- [ ] Track:
  - form submissions
  - phone clicks
  - WhatsApp clicks
  - admissions CTA clicks
  - gallery engagement if useful
- [ ] Verify consent/privacy approach if required

## Form Testing
- [x] Client validation exists
- [x] Server validation exists
- [x] Rate limiting exists
- [ ] Test happy path in production
- [ ] Test empty/invalid field submissions
- [ ] Test rate limit behavior from same IP
- [ ] Test email delivery and spam folder behavior
- [ ] Test WhatsApp follow-up link after submission

## Security Basics
- [x] Security headers present in `next.config.js`
- [x] `poweredByHeader` disabled
- [x] CSP configured for production
- [x] Basic rate limiting on form API
- [ ] Review CSP against any future analytics/chatbot additions
- [ ] Consider honeypot or captcha if spam increases
- [ ] Remove placeholder env values before launch
- [ ] Review public repo for sensitive logs/screenshots before release

## Content / Quality
- [ ] Fix all mojibake/encoding issues
- [ ] Replace generic images with school-approved assets
- [ ] Validate all phone numbers, timings, address, and admissions copy with school owner
- [ ] Review grammar/consistency one final time
- [ ] Replace default `README.md` with project-specific documentation summary

## Optional Nice-to-Haves Before Launch
- [ ] Add analytics dashboard access notes
- [ ] Add custom 500/error page if desired
- [ ] Add lightweight chatbot/site guide if approved
- [ ] Add final testimonials or campus tour CTA based on owner input
