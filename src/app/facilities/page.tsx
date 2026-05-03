import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { facilities } from "@/data/facilities";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "Facilities",
  description:
    "Explore the child-friendly campus at Little Gems School — bright classrooms, play areas, reading nooks, and a safe learning environment in Jabalpur.",
  alternates: { canonical: "https://www.littlegemsschool.in/facilities" },
};

export default function FacilitiesPage() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-16 text-white sm:pt-20">
        <SectionHeading
          eyebrow="Facilities"
          title="A child-friendly campus built for comfort, focus, and joyful participation."
          description="From classrooms to activity spaces, our environment is designed to support everyday learning for young children."
          theme="dark"
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Campus Spaces"
          title="Facilities families can look forward to"
          description={schoolInfo.facilitiesPage.intro}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility) => (
            <Card key={facility.id} className="overflow-hidden">
              <div className="relative aspect-[4/3] bg-light-bg">
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-accent">
                  {facility.imageLabel}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-primary">
                  {facility.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-subtext">
                  {facility.summary}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-light-bg">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Safety"
              title={schoolInfo.facilitiesPage.safetyTitle}
              description="A secure and organised environment helps children and parents feel comfortable from the first day."
            />
          </div>
          <div className="grid gap-4">
            {schoolInfo.facilitiesPage.safetyPoints.map((point) => (
              <Card key={point} className="p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-success" />
                  <p className="text-base leading-7 text-body-text">{point}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        title="See the learning environment in person."
        description="Families are welcome to book a visit and understand how the campus supports everyday school life."
        href="/contact"
        buttonLabel="Schedule a Visit"
        phoneNumber={schoolInfo.phoneNumbers[1]}
      />
    </main>
  );
}
