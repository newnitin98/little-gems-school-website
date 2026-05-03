# Little Gems School Data Flow

## 1. Primary Content Storage

### Central content source
Most site content lives in `src/data/`.

Key files:
- `src/data/school.ts`
- `src/data/programs.ts`
- `src/data/facilities.ts`
- `src/data/gallery.ts`
- `src/data/faqs.ts`
- `src/data/testimonials.ts`
- `src/data/navigation.ts`

### What each file controls
- `school.ts`
  - school name, address, phone, WhatsApp
  - hero content
  - homepage intros
  - about content
  - academic philosophy
  - admission status/process/documents
  - events/notices/calendar
  - contact cards
  - footer content
- `programs.ts`
  - program titles, summaries, details, age ranges, highlights
- `facilities.ts`
  - facility titles, descriptions, image paths, alt text
- `gallery.ts`
  - gallery titles, categories, image paths, alt text
- `faqs.ts`
  - FAQ copy
- `testimonials.ts`
  - parent testimonial content
- `navigation.ts`
  - navbar and footer links

## 2. Image Reference Flow

### Where images live
- School/facility images: `public/images/school/`
- Gallery images: `public/images/gallery/`
- Brand assets: `public/` and `public/images/logos/`

### How images are referenced
- Hero image path is driven from `schoolInfo.hero.image` in `src/data/school.ts`
- Facilities images are driven from `src/data/facilities.ts`
- Gallery images are driven from `src/data/gallery.ts`
- Principal section image is hardcoded in `src/components/sections/PrincipalMessage.tsx`

### Operational implication
Replacing images usually requires:
1. placing new assets in `public/images/school` or `public/images/gallery`
2. updating file paths in the corresponding data file or component

There is no media library, CMS image manager, or remote DAM integration yet.

## 3. CTA and Contact Detail Flow

### Current source of truth
Contact and CTA details are mostly controlled by `src/data/school.ts`.

Important fields:
- `phoneNumbers`
- `whatsappNumber`
- `admissions`
- `hero.primaryCta`
- `hero.secondaryCta`
- `contactPage.cards`
- footer description and hours

### Where they are consumed
- `Navbar`
- `Footer`
- `AdmissionsStrip`
- `HeroSection`
- all `CTABand` usages
- `ContactPage`
- structured data via `SchemaOrg`

### Current risk
The floating WhatsApp button uses a hardcoded `919399098220` value inside `src/components/WhatsAppButton.tsx` instead of consuming `schoolInfo.whatsappNumber`. That means contact data is not fully centralized yet.

## 4. Enquiry Form Flow

### Frontend
`src/components/ui/ContactForm.tsx`

Behavior:
- client component
- local form state using `useState`
- client-side validation
- submits JSON using `fetch("/api/enquiry")`
- supports success/error states
- displays returned WhatsApp follow-up link

### Backend
`src/app/api/enquiry/route.ts`

Current flow:
1. receives POST request
2. extracts IP from `x-forwarded-for`
3. applies basic in-memory rate limiting
4. sanitizes inputs
5. validates minimum required fields
6. sends email using Resend
7. returns `success: true` and a prefilled WhatsApp URL

### Environment dependencies
- `RESEND_API_KEY`
- `SCHOOL_EMAIL`
- `NEXT_PUBLIC_SITE_URL` for general deployment consistency

### Current limitations
- in-memory rate limiting resets on cold starts/redeploys
- no DB persistence of leads
- no admin dashboard or enquiry history
- no anti-spam captcha/honeypot
- no structured logging/monitoring

## 5. SEO and Metadata Flow

### Global metadata
- `src/app/layout.tsx` defines root metadata
- `src/components/SchemaOrg.tsx` injects JSON-LD

### Route metadata
Each page exports its own metadata object.

### Support endpoints
- `src/app/robots.ts`
- `src/app/sitemap.ts`

### Extra metadata utility
- `src/lib/metadata.ts` exists but is not the active source for page metadata right now

## 6. Deployment and Runtime Flow

### Build/runtime
- Vercel-targeted Next.js app
- `vercel.json` adds redirects and cache headers
- `next.config.js` adds security headers and image config

### Domain readiness
- metadata, sitemap, robots, icons, manifest, schema, and OG asset exist
- real launch still depends on:
  - actual env vars
  - live domain connection
  - production verification of forms and DNS

## 7. How Content Should Work in the Future

### Current model
- developer-managed content via TypeScript data files

### Recommended future model
- move school copy, gallery, notices, and events into a CMS or admin layer
- keep design/layout components in code
- centralize contact/CTA details into one configuration source
- add enquiry storage in a database if admissions workflow becomes active
