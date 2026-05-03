import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

type CTABandProps = {
  title: string;
  description: string;
  href?: string;
  buttonLabel?: string;
  phoneNumber: string;
};

export function CTABand({
  title,
  description,
  href = "/admissions",
  buttonLabel = "Apply Now",
  phoneNumber,
}: CTABandProps) {
  return (
    <section className="bg-primary py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-white sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-secondary">
            Admissions Support
          </p>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight sm:text-[40px]">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/80">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={href} size="lg" className="whitespace-nowrap">
            {buttonLabel}
          </Button>
          <a
            href={`tel:91${phoneNumber}`}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-base font-semibold text-white transition hover:bg-white/10"
          >
            <PhoneCall className="h-5 w-5" />
            {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
