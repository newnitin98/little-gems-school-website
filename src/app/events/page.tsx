import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "Events",
  description:
    "Upcoming and past school events at Little Gems School Jabalpur — annual days, celebrations, parent meetings, and activity days.",
  alternates: { canonical: "https://www.littlegemsschool.in/events" },
};

export default function EventsPage() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-16 text-white sm:pt-20">
        <SectionHeading
          eyebrow="Events"
          title="School events that bring learning, celebration, and community together."
          description="From orientations to festive activities, school events help children participate, express, and enjoy shared experiences."
          theme="dark"
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Upcoming Events"
          title="What families can look forward to"
          description="A preview of planned school moments across the year."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {schoolInfo.eventsPage.upcoming.map((event) => (
            <Card key={event.title} className="p-6 sm:p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-accent">
                {event.date}
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-primary">
                {event.title}
              </h3>
              <p className="mt-3 text-sm font-semibold text-body-text">
                {event.audience}
              </p>
              <p className="mt-4 text-base leading-7 text-subtext">{event.summary}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-light-bg">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Notice Board"
              title="Important updates for parents"
              description="Short reminders and practical information from the school."
            />
            <div className="mt-8 grid gap-4">
              {schoolInfo.eventsPage.notices.map((notice) => (
                <Card key={notice} className="p-5">
                  <p className="text-base leading-7 text-body-text">{notice}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Academic Calendar"
              title="Year-round school highlights"
              description="A simplified overview of key periods across the academic session."
            />
            <div className="mt-8 grid gap-4">
              {schoolInfo.eventsPage.calendar.map((item) => (
                <Card key={item.month} className="p-5">
                  <p className="font-heading text-xl font-semibold text-primary">
                    {item.month}
                  </p>
                  <p className="mt-3 text-base leading-7 text-subtext">
                    {item.highlight}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        title="Stay connected with upcoming school activities."
        description="Contact the school team to learn more about the session calendar, celebrations, and admissions updates."
        href="/contact"
        buttonLabel="Contact School"
        phoneNumber={schoolInfo.phoneNumbers[1]}
      />
    </main>
  );
}
