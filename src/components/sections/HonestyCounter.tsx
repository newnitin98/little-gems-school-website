"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const values = [
  {
    title: "Honesty",
    description: "Doing the right thing, even when no one is watching.",
    icon: ShieldCheck,
  },
  {
    title: "Responsibility",
    description: "Owning small daily choices with care and thoughtfulness.",
    icon: CheckCircle2,
  },
  {
    title: "Self Discipline",
    description: "Following simple rules willingly, without any reminder.",
    icon: Target,
  },
  {
    title: "Trust",
    description: "Building an environment where children feel believed in.",
    icon: Handshake,
  },
  {
    title: "Accountability",
    description: "Learning that every small action carries a value.",
    icon: ClipboardCheck,
  },
  {
    title: "Good Values",
    description: "Turning classroom lessons into lifelong character.",
    icon: Sparkles,
  },
];

export function HonestyCounter() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = sectionRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="honesty-counter" className="bg-light-bg">
      <div
        ref={sectionRef}
        className={`transition-all duration-700 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Character Building"
              title="Building Values Beyond Academics"
              description="Honesty Counter – Learning Integrity Through Practice"
            />

            <div className="mt-6 space-y-4 text-base leading-7 text-subtext sm:text-lg sm:leading-8">
              <p>
                At Little Gems School, we believe education is not limited to
                classrooms. Our Trust-Based Honesty Counter encourages students
                to practice honesty, responsibility, self-discipline, and
                ethical decision-making in their everyday school life.
              </p>
              <p>
                Students independently take the required stationery items and
                deposit the correct amount into the collection box without
                supervision. This simple initiative teaches children that true
                character is reflected by doing the right thing even when no
                one is watching.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="h-full p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/25 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-subtext">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <figure className="mt-10 rounded-[28px] border-l-4 border-secondary bg-white p-6 shadow-card sm:p-7">
              <blockquote className="font-heading text-lg italic leading-8 text-primary sm:text-xl">
                &ldquo;Honesty is doing the right thing, even when no one is
                watching.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Little Gems School
              </figcaption>
            </figure>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-soft">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/school/honesty-counter.jpeg"
                  alt="Little Gems School Honesty Counter poster explaining the trust-based initiative for students"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -top-4 left-6 sm:-top-5 sm:left-8">
              <Badge className="pointer-events-auto bg-accent text-white shadow-card">
                Character Building Initiative
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
