import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { schoolInfo } from "@/data/school";

export function PrincipalMessage() {
  const principal = schoolInfo.about.principal;

  return (
    <Card className="overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="relative min-h-[320px] bg-light-bg">
          <Image
            src="/images/school/reading-nook.jpg"
            alt="Students reading quietly in a bright learning corner at Little Gems School"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <Badge>Principal&apos;s Message</Badge>
          <h3 className="mt-5 font-heading text-3xl font-semibold text-primary">
            {principal.name}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-subtext">
            {principal.title}
          </p>
          <p className="mt-6 text-base leading-8 text-subtext">
            {principal.message}
          </p>
        </div>
      </div>
    </Card>
  );
}
