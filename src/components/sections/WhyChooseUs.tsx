import {
  BadgeCheck,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { schoolInfo } from "@/data/school";

const iconMap = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  "graduation-cap": GraduationCap,
  trees: Trees,
  users: Users,
  "badge-check": BadgeCheck,
} as const;

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us" className="bg-light-bg">
      <SectionHeading
        eyebrow="Why Little Gems"
        title={schoolInfo.homepageIntro.whyChooseUsTitle}
        description={schoolInfo.homepageIntro.whyChooseUsSubtitle}
        align="center"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {schoolInfo.whyChooseUs.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <Card key={item.title} className="p-6 sm:p-7">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-subtext">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
