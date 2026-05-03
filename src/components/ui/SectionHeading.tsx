import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Badge className={theme === "dark" ? "bg-white/15 text-white" : undefined}>
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-heading text-[26px] font-bold leading-tight sm:text-[36px]",
          theme === "dark" ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-8 sm:text-lg",
            theme === "dark" ? "text-white/80" : "text-subtext",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
