import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { programs } from "@/data/programs";
import { schoolInfo } from "@/data/school";

export function AcademicsPreview() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Academics"
          title={schoolInfo.homepageIntro.academicsTitle}
          description={schoolInfo.homepageIntro.academicsSubtitle}
        />
        <Button href="/academics" variant="outline">
          View Academic Journey
        </Button>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </SectionWrapper>
  );
}
