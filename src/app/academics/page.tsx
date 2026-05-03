import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { programs } from "@/data/programs";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "Academics",
  description:
    "Our academic programmes for Pre-Nursery through Class 5 — activity-based learning, phonics, early numeracy, and more at Little Gems School, Jabalpur.",
  alternates: { canonical: "https://www.littlegemsschool.in/academics" },
};

export default function AcademicsPage() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-16 text-white sm:pt-20">
        <SectionHeading
          eyebrow="Academics"
          title="A strong foundation built through joyful routines, clear concepts, and caring guidance."
          description="Our academic journey supports children from their first school experience through confident primary learning."
          theme="dark"
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Teaching Philosophy"
              title={schoolInfo.academics.philosophyTitle}
              description={schoolInfo.academics.philosophy}
            />
          </div>
          <Card className="p-6 sm:p-8">
            <ul className="space-y-4">
              {schoolInfo.academics.philosophyPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl bg-light-bg px-4 py-4 text-base leading-7 text-body-text"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-light-bg">
        <SectionHeading
          eyebrow="Programs"
          title="Program details from early years to upper primary"
          description="Each stage is tailored to the child's age, readiness, and growing independence."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} detailed />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Co-Curricular Learning"
          title="Beyond textbooks, children grow through participation"
          description="Co-curricular activities help students communicate, create, collaborate, and build confidence in different ways."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {schoolInfo.academics.cocurricular.map((activity) => (
            <Card key={activity} className="p-6">
              <h3 className="font-heading text-xl font-semibold text-primary">
                {activity}
              </h3>
              <p className="mt-3 text-sm leading-7 text-subtext">
                Age-appropriate guidance helps children participate with confidence and enjoyment.
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <CTABand
        title="Find the right program for your child&apos;s stage of learning."
        description="Speak with the school team to understand class readiness, teaching approach, and admission availability."
        phoneNumber={schoolInfo.phoneNumbers[0]}
      />
    </main>
  );
}
