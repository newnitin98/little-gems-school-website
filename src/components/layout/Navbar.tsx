"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { navigationLinks } from "@/data/navigation";
import { schoolInfo } from "@/data/school";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const transparentMode = isHome && !isScrolled && !isOpen;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition duration-300",
          transparentMode
            ? "border-primary/10 bg-white/82 shadow-sm backdrop-blur"
            : "border-primary/10 bg-white/95 shadow-sm backdrop-blur",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/little-gems-logo.jpeg"
              alt="Little Gems School logo"
              width={1600}
              height={1037}
              className="h-10 w-auto rounded-xl sm:h-11 md:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition",
                  transparentMode
                    ? "text-body-text hover:text-primary"
                    : "text-body-text hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:91${schoolInfo.phoneNumbers[0]}`}
              className={cn(
                "hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold md:inline-flex",
                transparentMode
                  ? "bg-light-bg text-primary"
                  : "bg-light-bg text-primary",
              )}
            >
              <Phone className="h-4 w-4" />
              {schoolInfo.phoneNumbers[0]}
            </a>
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              Enquire Now
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
                transparentMode ? "bg-light-bg text-primary" : "bg-light-bg text-primary",
              )}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary/95 px-6 py-8 text-white transition lg:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="mt-20 flex h-full flex-col pb-20">
          <nav className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-3xl font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-4 rounded-[28px] border border-white/10 bg-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-secondary">
              Admissions Help
            </p>
            <p className="text-lg font-semibold">{schoolInfo.admissions}</p>
            <Button href="/contact" size="lg" className="w-full">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
