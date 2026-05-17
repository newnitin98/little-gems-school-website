import Image from "next/image";
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { schoolInfo } from "@/data/school";

export function HeroSection() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-light-bg bg-hero-glow pt-10 sm:pt-14">
      <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_left_center,rgba(245,197,24,0.26),transparent_32%),radial-gradient(circle_at_right_bottom,rgba(249,115,22,0.12),transparent_22%)]" />
      <div className="grid min-h-[calc(100svh-9rem)] items-center gap-12 pb-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="relative z-10 rounded-[36px] border border-white/70 bg-white/60 p-6 shadow-soft backdrop-blur sm:p-8 lg:p-10">
          <Badge className="bg-secondary/20 text-primary">{schoolInfo.hero.eyebrow}</Badge>
          <div className="mb-4 mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 text-sm font-bold text-yellow-900 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            18 Years of Excellence in Jabalpur
          </div>
          <h1 className="mt-6 max-w-3xl font-heading text-[32px] font-bold leading-tight text-primary sm:text-[44px] lg:text-[52px]">
            {schoolInfo.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-subtext">
            {schoolInfo.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={schoolInfo.hero.primaryCta.href} size="lg" className="whitespace-nowrap">
              {schoolInfo.hero.primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href={schoolInfo.hero.secondaryCta.href}
              variant="outline"
              size="lg"
              className="whitespace-nowrap"
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              {schoolInfo.hero.secondaryCta.label}
            </Button>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {schoolInfo.hero.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-[24px] border border-primary/10 bg-white px-5 py-4 text-sm font-medium text-body-text shadow-card"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-12 h-24 w-24 rounded-full bg-secondary/30 blur-2xl" />
          <div className="absolute -right-4 bottom-12 h-28 w-28 rounded-full bg-accent/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src={schoolInfo.hero.image}
                alt={schoolInfo.hero.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                loading="eager"
                className="object-cover object-[center_20%]"
                style={{ filter: "brightness(1.05) saturate(1.1) contrast(1.02)" }}
                priority
              />
              {/* Warm bottom gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              {/* Subtle warm top vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-secondary">
                  Little Gems Campus
                </p>
                <p className="mt-2 max-w-xs font-heading text-2xl font-semibold text-white">
                  Focused learning, confident readers, and a caring classroom environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
