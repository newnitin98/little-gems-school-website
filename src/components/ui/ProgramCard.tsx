import { Baby, BookOpen, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Program } from "@/data/programs";

const iconMap = {
  baby: Baby,
  blocks: BookOpen,
  "book-open": BookOpen,
  "graduation-cap": GraduationCap,
} as const;

type ProgramCardProps = {
  program: Program;
  detailed?: boolean;
};

export function ProgramCard({ program, detailed = false }: ProgramCardProps) {
  const Icon = iconMap[program.icon];

  return (
    <Card className="h-full p-6 sm:p-7">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge>Programme {program.stageNumber}</Badge>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-primary">
              {program.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-subtext">
              {program.classRange}{" "}
              <span className="text-accent">·</span>{" "}
              {program.division}
            </p>
          </div>
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-light-bg text-primary">
            <Icon className="h-7 w-7" />
          </span>
        </div>
        <p className="mt-5 text-base leading-7 text-subtext">
          {detailed ? program.detail : program.summary}
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-6 text-body-text">
          {program.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 rounded-2xl bg-light-bg/80 px-4 py-3"
            >
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
