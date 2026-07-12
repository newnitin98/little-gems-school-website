"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { schoolInfo } from "@/data/school";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const AUTO_ROTATE_MS = 9000;

function StarRating({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label="Positive parent testimonial"
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-secondary"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || testimonials.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Testimonials"
        title={schoolInfo.homepageIntro.testimonialsTitle}
        description="Families in Sagda and Tilwara Road, Jabalpur share their experience with Little Gems School."
        align="center"
      />

      <div
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.name}
            className={cn(
              "flex h-full flex-col p-6 transition duration-500 sm:p-7",
              index === activeIndex
                ? "border-accent/30 bg-white shadow-soft"
                : "bg-white/85",
            )}
          >
            <StarRating count={testimonial.rating} />
            <p className="mt-4 flex-1 text-base leading-7 text-body-text sm:text-lg sm:leading-8">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                aria-hidden="true"
              >
                {testimonial.initials}
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-sm text-subtext">{testimonial.relation}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setIsPaused(true);
              window.setTimeout(() => setIsPaused(false), AUTO_ROTATE_MS);
            }}
            aria-label={`Highlight testimonial ${index + 1} of ${testimonials.length}`}
            aria-current={index === activeIndex}
            className={cn(
              "h-3 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              index === activeIndex ? "w-10 bg-accent" : "w-3 bg-primary/20",
            )}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
