"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { schoolInfo } from "@/data/school";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-secondary"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (reducedMotion.matches) {
        return;
      }
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Testimonials"
        title={schoolInfo.homepageIntro.testimonialsTitle}
        description="Families in Sagda and Tilwara Road, Jabalpur share their experience with Little Gems School."
        align="center"
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Card
            key={testimonial.name}
            className={cn(
              "h-full p-6 transition duration-500 sm:p-7",
              index === activeIndex % 3
                ? "border-accent/30 bg-white shadow-soft"
                : "bg-white/85",
            )}
          >
            <StarRating rating={testimonial.rating} />
            <p className="mt-4 text-lg leading-8 text-body-text">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
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
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-3 rounded-full transition",
              index === activeIndex % 3 ? "w-10 bg-accent" : "w-3 bg-primary/20",
            )}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
