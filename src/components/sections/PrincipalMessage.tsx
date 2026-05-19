import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { schoolInfo } from "@/data/school";

export function PrincipalMessage() {
  const principal = schoolInfo.about.principal;

  return (
    <Card className="overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.85fr,1.15fr]">
        {/* Principal photo */}
        <div className="relative min-h-[360px] bg-light-bg lg:min-h-[480px]">
          <Image
            src="/images/school/principal-deepika-choudhary.jpeg"
            alt={`${principal.name}, ${principal.title}`}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 38vw"
            className="object-cover object-[center_15%]"
            style={{ filter: "brightness(1.04) contrast(1.03) saturate(1.05)" }}
          />
          {/* Subtle bottom gradient so name badge reads cleanly */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="font-heading text-lg font-semibold text-white drop-shadow">
              {principal.name}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-secondary drop-shadow">
              {principal.title}
            </p>
          </div>
        </div>

        {/* Message content */}
        <div className="p-6 sm:p-8 lg:p-10">
          <Badge>Principal&apos;s Message</Badge>
          <h3 className="mt-5 font-heading text-3xl font-semibold text-primary">
            A message from our Principal
          </h3>

          {/* Opening quote mark */}
          <p className="mt-4 font-heading text-5xl leading-none text-secondary/60 select-none">
            &ldquo;
          </p>

          <div className="space-y-4 text-base leading-8 text-subtext">
            <p>{principal.message}</p>
            <p>{principal.messageExtra}</p>
            <p>{principal.messageClosing}</p>
          </div>

          {/* Signature */}
          <div className="mt-8 flex items-center gap-4 border-t border-primary/10 pt-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              DC
            </div>
            <div>
              <p className="font-heading text-base font-semibold text-primary">
                {principal.name}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-subtext">
                {principal.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
