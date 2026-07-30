"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Sparkles, Trophy, X } from "lucide-react";
import { achievementAlt, featuredAchievements } from "@/data/achievements";

const SESSION_KEY = "lgs-achievement-popup-dismissed-2026-sof-hindi-v1";
const APPEAR_DELAY_MS = 2500;

const achievers = featuredAchievements;

export function AchievementPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    const timer = window.setTimeout(() => setIsOpen(true), APPEAR_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === "Tab") {
        const container = dialogRef.current;
        if (!container) return;
        const focusable = container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      window.clearTimeout(focusTimer);
      previouslyFocusedRef.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function close() {
    try {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // ignore quota / privacy-mode failures
    }
    setIsOpen(false);
  }

  if (!isOpen) return null;

  const enterAnimation = prefersReducedMotion
    ? ""
    : "animate-[lgsAchievementFadeIn_240ms_ease-out]";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-primary/70 px-4 py-6 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <style>{`
        @keyframes lgsAchievementFadeIn {
          from { opacity: 0; transform: scale(0.96) translateY(6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-white shadow-2xl ${enterAnimation}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,rgba(245,197,24,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_50%)]"
        />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Close student achievement announcement"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-light-bg text-primary transition hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative px-6 pb-8 pt-10 sm:px-10 sm:pt-12">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-accent">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Student Achievement
            </span>
            <span className="mt-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-white shadow-card">
              <Trophy className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2
              id={titleId}
              className="mt-5 font-heading text-2xl font-bold leading-tight text-primary sm:text-3xl"
            >
              International Rank 1 in SOF Hindi Olympiad
            </h2>
            <p
              id={descId}
              className="mt-4 max-w-xl text-sm leading-7 text-subtext sm:text-base sm:leading-8"
            >
              We are proud to celebrate the outstanding achievement of our
              students, whose dedication and academic excellence have brought
              honour to Little Gems School.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {achievers.map((achiever) => (
              <div
                key={achiever.id}
                className="flex flex-col overflow-hidden rounded-[22px] border border-primary/10 bg-white shadow-card"
              >
                <div className="relative aspect-[3/4] bg-light-bg">
                  <Image
                    src={achiever.image}
                    alt={achievementAlt(achiever)}
                    fill
                    sizes="(max-width: 640px) 90vw, 340px"
                    loading="lazy"
                    className="object-cover"
                    style={{ objectPosition: achiever.focalPoint ?? "50% 30%" }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 text-left">
                  <p className="font-heading text-lg font-semibold text-primary">
                    {achiever.studentName}
                  </p>
                  {achiever.className ? (
                    <p className="mt-1 text-sm font-medium text-subtext">
                      {achiever.className}
                    </p>
                  ) : null}
                  <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    <Trophy className="h-4 w-4" aria-hidden="true" />
                    {achiever.achievement}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-subtext">
                    {achiever.competition}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm leading-7 text-subtext sm:text-base">
            Congratulations to both achievers, their parents, and the entire
            Little Gems School team.
          </p>

          <div className="mt-6 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={close}
              className="inline-flex h-11 items-center justify-center rounded-full border border-primary/20 bg-white px-6 text-sm font-semibold text-primary transition hover:bg-light-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Close
            </button>
            <Link
              href="/achievements"
              onClick={close}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View School Achievements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
