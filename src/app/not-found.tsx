import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function NotFound() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-24 text-white sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">404</p>
          <h1 className="mt-5 font-heading text-[32px] font-bold sm:text-[52px]">
            The page you&apos;re looking for could not be found.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            The link may have changed, or the page may no longer be available. You can return to the homepage or head to admissions and contact from there.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">Back to Homepage</Button>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-5 font-semibold text-white transition hover:bg-white/10"
            >
              Contact School
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
