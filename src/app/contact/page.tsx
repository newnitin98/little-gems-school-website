import { Clock3, MapPin, Phone } from "lucide-react";
import { CTABand } from "@/components/sections/CTABand";
import { ContactForm } from "@/components/ui/ContactForm";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { schoolInfo } from "@/data/school";

const iconMap = {
  "map-pin": MapPin,
  phone: Phone,
  "clock-3": Clock3,
} as const;

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Little Gems School in Sagda, Jabalpur. Call 8839225491 or visit us on Tilwara Road. Enquire about admissions for 2026-27.",
  alternates: { canonical: "https://www.littlegemsschool.in/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-16 text-white sm:pt-20">
        <SectionHeading
          eyebrow="Contact"
          title={schoolInfo.contactPage.title}
          description={schoolInfo.contactPage.subtitle}
          theme="dark"
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-5 md:grid-cols-3">
          {schoolInfo.contactPage.cards.map((card) => {
            const Icon = iconMap[card.icon];

            return (
              <Card key={card.title} className="p-6 sm:p-7">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-light-bg text-primary">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-primary">
                  {card.title}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-4 block text-base leading-7 text-subtext hover:text-primary"
                  >
                    {card.description}
                  </a>
                ) : (
                  <p className="mt-4 whitespace-pre-line text-base leading-7 text-subtext">
                    {card.description}
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-light-bg">
        <div className="grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div>
            <SectionHeading
              eyebrow="Send an Enquiry"
              title="Tell us about your child and what you need"
              description="The enquiry form is a quick way to request a callback or ask about admissions and school visits."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Find Us"
              title="Visit Our Campus"
              description="Little Gems School is located in a well-connected and family-friendly area of Jabalpur, offering a safe and welcoming environment for early learning."
            />
            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=Little+Gems+School+Jabalpur"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:bg-light-bg"
              >
                <MapPin className="h-4 w-4 text-accent" />
                Open in Maps
              </a>
              <div
                className="w-full overflow-hidden rounded-xl shadow-md"
                style={{ height: "380px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1834.4591096672707!2d79.87553796754858!3d23.13666433396337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b232fb00b01d%3A0x6cee9b610da8f553!2sLittle%20Gems%20School!5e0!3m2!1sen!2sin!4v1779040265618!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Little Gems School location on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        title="Prefer speaking directly with the school?"
        description="Call the admissions team or reach out on WhatsApp for quick support during school hours."
        href="/admissions"
        buttonLabel="View Admissions"
        phoneNumber={schoolInfo.phoneNumbers[0]}
      />
    </main>
  );
}
