# Future Feature Roadmap

## Overview
The current site is a polished brochure/admissions website. The next evolution should happen in stages so the public website stays stable while administrative capability grows gradually.

## Phase 1: Post-Launch Quality and Conversion Layer
Goal: improve trust, conversion, and owner convenience without changing the core architecture drastically.

Potential features:
- Real school image library replacement
- Analytics and conversion tracking
- Site-guidance chatbot for admissions/navigation support
- Better enquiry reporting and notification rules
- Basic content update workflow documentation

## Phase 2: CMS / Admin Content Control
Goal: allow non-developers to update content without editing code.

Recommended scope:
- Admin login
- Edit homepage highlights
- Update school story and principal message
- Manage programs copy
- Manage facilities copy
- Upload/reorder gallery images
- Update events and notice board
- Update contact details and timings

Recommended architecture options:
- Headless CMS
- Supabase-backed admin
- Custom internal dashboard

Why this matters:
- removes developer dependency for small content changes
- keeps admissions updates timely
- enables school staff participation

## Phase 3: Notice Management
Goal: let staff publish timely communication.

Feature ideas:
- Add, edit, archive notices
- Pin urgent notices on homepage or events page
- Tag notice type:
  - admissions
  - holiday
  - activity
  - parent meeting
- Optional publish/unpublish scheduling

## Phase 4: Gallery Management
Goal: make the site visually current throughout the year.

Feature ideas:
- Category-based uploads
- Reordering
- Featured image selection
- Captions and alt text editing
- Publish status
- Compression/cropping workflow

## Phase 5: Admission Enquiry Dashboard
Goal: turn website leads into manageable school admissions workflow.

Feature ideas:
- Lead table with filters
- Status pipeline:
  - new
  - contacted
  - visit scheduled
  - admitted
  - closed
- Notes per enquiry
- Call/WhatsApp follow-up tracking
- CSV export
- Email notifications for new leads

## Phase 6: Parent Portal
Goal: create a logged-in experience for parents.

Possible capabilities:
- school notices
- event reminders
- homework updates
- attendance visibility
- fee reminders
- downloadable circulars

This should only begin after content/admin systems are stable.

## Phase 7: Student Login
Goal: provide student-specific access if the school wants a digital learning/support layer.

Possible capabilities:
- class resources
- homework
- announcements
- worksheets
- event participation details

This likely overlaps with the parent portal and could be merged into a single family account system.

## Phase 8: Fee Payment
Goal: enable online fee convenience.

Possible capabilities:
- secure payment gateway integration
- payment receipts
- due amount view
- installment status
- parent payment history

Important note:
- This feature introduces higher compliance, support, and failure-handling needs than brochure-site functionality.

## Phase 9: Homework Section
Goal: improve parent-school academic communication.

Possible capabilities:
- class-wise homework posting
- attachment support
- homework archive by date
- teacher publishing workflow

## Phase 10: Attendance Section
Goal: give parents transparency into school attendance.

Possible capabilities:
- daily attendance status
- absence alerts
- monthly summary
- admin/staff attendance entry workflow

## Chatbot Roadmap
The chatbot is not implemented today.

Recommended staged rollout:
1. Site-guide bot
   - answers using existing website content
   - helps users find admissions, academics, timings, contact info
   - can direct users to forms and WhatsApp
2. Assisted admissions bot
   - collects basic lead details
   - pre-qualifies for class/age
   - hands off to form or WhatsApp
3. Admin-aware bot
   - only after a dashboard/CMS exists
   - can surface dynamic notices, events, and lead updates

## Recommended Order of Execution
1. Launch-quality polish
2. CMS/admin content control
3. Enquiry dashboard
4. Notice/gallery management
5. Chatbot
6. Parent/student portal
7. Fees/homework/attendance

## Architectural Guidance
- Keep the public marketing site fast and mostly static.
- Add dynamic/admin capability behind authenticated routes or separate admin apps.
- Avoid mixing critical school operations into the brochure layer too early.
- Introduce database-backed features only when there is a defined operational owner at the school.
