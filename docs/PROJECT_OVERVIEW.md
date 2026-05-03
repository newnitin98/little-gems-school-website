# Little Gems School Project Overview

## Purpose
Little Gems School is a marketing and admissions website for a pre-primary to primary English-medium school in Sagda, Jabalpur. Its primary job is to help parents discover the school, understand programs and facilities, build trust through content and testimonials, and convert interest into campus visits or admission enquiries.

## Current Product Scope
- Public-facing brochure/marketing website
- Admissions-focused lead generation
- Multi-page school information hub
- WhatsApp-first contact support
- Email-backed enquiry capture
- SEO-ready static pages with structured data

This project is not currently a CMS, parent portal, admin dashboard, or chatbot-based support system.

## Current Tech Stack
- Framework: Next.js 14 App Router
- Language: TypeScript with `strict` mode
- Styling: Tailwind CSS
- UI approach: Custom reusable component system
- Icons: `lucide-react`
- Fonts: `next/font/google` using Inter and Poppins
- Images: `next/image` with local files in `public/`
- Hosting target: Vercel
- Forms/email: Resend-backed enquiry API
- SEO: Next metadata API, JSON-LD, `robots.ts`, `sitemap.ts`

## Main Pages
- `/` homepage
- `/about`
- `/academics`
- `/admissions`
- `/facilities`
- `/gallery`
- `/events`
- `/contact`
- `/_not-found`

## Main Component Groups
- Layout shell:
  - `Navbar`
  - `Footer`
  - `AdmissionsStrip`
  - floating `WhatsAppButton`
- Homepage sections:
  - `HeroSection`
  - `WhyChooseUs`
  - `AcademicsPreview`
  - `FacilitiesGrid`
  - `GalleryPreview`
  - `TestimonialCarousel`
  - `FAQAccordion`
  - `CTABand`
- Shared sections/UI:
  - `PrincipalMessage`
  - `Button`
  - `Card`
  - `Badge`
  - `SectionHeading`
  - `SectionWrapper`
  - `ProgramCard`
  - `ContactForm`
  - `GalleryGrid`

## Current User Journey
1. Parent lands on homepage from search, direct share, or WhatsApp.
2. Parent sees admissions status, hero messaging, and primary CTAs.
3. Parent explores trust-building sections:
   - school values
   - academics
   - facilities
   - gallery
   - testimonials
   - FAQ
4. Parent navigates to deeper pages:
   - `/admissions` for process and eligibility
   - `/contact` for direct enquiry
   - `/academics` for class/program fit
5. Parent converts through one of these paths:
   - enquiry form
   - click-to-call
   - WhatsApp CTA
   - campus visit request

## Content Architecture
The site is mostly content-driven from TypeScript data files under `src/data/`.

Primary content sources:
- `school.ts`
- `programs.ts`
- `facilities.ts`
- `gallery.ts`
- `faqs.ts`
- `testimonials.ts`
- `navigation.ts`

This means copy, contact details, image paths, and section labels are mostly centralized and not deeply hardcoded across pages.

## Current Strengths
- Good separation between content and presentation
- Consistent component structure
- Clear admissions funnel
- Strong foundational SEO setup
- Local image pipeline ready for real assets
- Vercel-friendly deployment structure

## Current Limitations
- No CMS/admin editing workflow
- No chatbot yet
- No analytics/tracking layer yet
- Temporary imagery is still mixed into the experience
- Some source strings show encoding artifacts
- A few files appear to be legacy or unused

## Future Roadmap Summary
### Near term
- Replace temporary/demo images with real school photography
- Clean text encoding issues
- Add analytics and conversion tracking
- Connect final domain and validate production forms

### Mid term
- Add a simple site-guidance chatbot
- Add CMS/admin control for content, notices, and gallery
- Improve premium visual polish for launch

### Long term
- Admission enquiry dashboard
- Notice management
- Gallery management
- Parent/student portal
- Fee payment
- Homework and attendance systems
