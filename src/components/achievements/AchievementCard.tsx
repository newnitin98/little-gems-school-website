import Image from "next/image";
import { Medal } from "lucide-react";
import {
  achievementAlt,
  categoryLabels,
  type Achievement,
} from "@/data/achievements";
import { cn } from "@/lib/utils";

type AchievementCardProps = {
  item: Achievement;
  featured?: boolean;
  priority?: boolean;
};

export function AchievementCard({
  item,
  featured = false,
  priority = false,
}: AchievementCardProps) {
  const metaLine = [item.className, categoryLabels[item.category]]
    .filter(Boolean)
    .join(" · ");

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[24px] border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft",
        featured ? "border-accent/30" : "border-primary/10",
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-light-bg">
        <Image
          src={item.image}
          alt={achievementAlt(item)}
          fill
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          sizes={
            featured
              ? "(max-width: 768px) 90vw, 420px"
              : "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
          }
          className="object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: item.focalPoint ?? "50% 25%" }}
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-accent shadow-card backdrop-blur">
          <Medal className="h-3.5 w-3.5" aria-hidden="true" />
          {item.achievement}
        </span>
        {featured ? (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-card">
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3
          className={cn(
            "font-heading font-semibold text-primary",
            featured ? "text-xl" : "text-lg",
          )}
        >
          {item.studentName}
        </h3>
        {metaLine ? (
          <p className="mt-1 text-sm font-medium text-subtext">{metaLine}</p>
        ) : null}
        <p className="mt-3 text-sm leading-6 text-subtext">{item.description}</p>
        <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
          {item.competition} · {item.year}
        </p>
      </div>
    </article>
  );
}
