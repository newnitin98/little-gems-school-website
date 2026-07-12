"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

const AUTO_ROTATE_MS = 15000;
const SWIPE_THRESHOLD_PX = 40;

type GalleryCarouselProps = {
  items: GalleryItem[];
};

export function GalleryCarousel({ items }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const goTo = useCallback(
    (nextIndex: number) => {
      const total = items.length;
      if (total === 0) return;
      const wrapped = ((nextIndex % total) + total) % total;
      setActiveIndex(wrapped);
    },
    [items.length],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || items.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTO_ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, items.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current;
    if (startX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) {
      if (delta < 0) goNext();
      else goPrev();
      setIsPaused(true);
      window.setTimeout(() => setIsPaused(false), AUTO_ROTATE_MS);
    }
    touchStartXRef.current = null;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-primary shadow-card"
      role="region"
      aria-roledescription="carousel"
      aria-label="Little Gems School moments"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9]">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}: ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                  {item.category}
                </p>
                <h3 className="mt-2 max-w-2xl font-heading text-2xl font-semibold sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => {
          goPrev();
          setIsPaused(true);
          window.setTimeout(() => setIsPaused(false), AUTO_ROTATE_MS);
        }}
        className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-card transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary sm:left-5 sm:h-12 sm:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        type="button"
        onClick={() => {
          goNext();
          setIsPaused(true);
          window.setTimeout(() => setIsPaused(false), AUTO_ROTATE_MS);
        }}
        className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-card transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary sm:right-5 sm:h-12 sm:w-12"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div
        className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 sm:bottom-4"
        role="tablist"
        aria-label="Select slide"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                goTo(index);
                setIsPaused(true);
                window.setTimeout(() => setIsPaused(false), AUTO_ROTATE_MS);
              }}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}: ${item.title}`}
              className={`h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                isActive
                  ? "w-7 bg-secondary"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
