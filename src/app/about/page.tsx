import { CTABand } from "@/components/sections/CTABand";
import { PrincipalMessage } from "@/components/sections/PrincipalMessage";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Little Gems School — our story, vision, mission, and the values that guide our English-medium school in Sagda, Jabalpur.",
  alternates: { canonical: "https://www.littlegemsschool.in/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-16 text-white sm:pt-20">
        <SectionHeading
          eyebrow="About Us"
          title="A neighbourhood school built around care, confidence, and a strong beginning."
          description="Little Gems School serves families in Sagda and nearby areas with a warm English-medium environment where children feel safe, valued, and ready to learn."
          theme="dark"
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <Card className="p-6 sm:p-8">
            <SectionHeading title={schoolInfo.about.storyTitle} />
            <p className="mt-6 text-base leading-8 text-subtext">
              {schoolInfo.about.story}
            </p>
            <p className="mt-4 text-base leading-8 text-subtext">
              {schoolInfo.about.storyExtra}
            </p>
          </Card>
          <div className="grid gap-5">
            <Card className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-accent">Vision</p>
              <p className="mt-4 font-heading text-2xl font-semibold text-primary">
                {schoolInfo.about.vision}
              </p>
            </Card>
            <Card className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-accent">Mission</p>
              <p className="mt-4 font-heading text-2xl font-semibold text-primary">
                {schoolInfo.about.mission}
              </p>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-light-bg">
        <SectionHeading
          eyebrow="Leadership"
          title="A message from the principal"
          description="Our leadership vision keeps the school grounded in care, purposeful teaching, and close parent partnership."
        />
        <div className="mt-12">
          <PrincipalMessage />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Core Values"
          title="What guides our school culture"
          description="These values shape how children are taught, supported, and encouraged every day."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {schoolInfo.about.coreValues.map((value) => (
            <Card key={value.title} className="p-6 sm:p-7">
              <h3 className="font-heading text-2xl font-semibold text-primary">
                {value.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-subtext">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <CTABand
        title="Visit the campus and experience the Little Gems environment."
        description="Meet the team, see our classrooms, and understand how we help every child begin with confidence."
        href="/contact"
        buttonLabel="Plan a Visit"
        phoneNumber={schoolInfo.phoneNumbers[0]}
      />
    </main>
  );
}
