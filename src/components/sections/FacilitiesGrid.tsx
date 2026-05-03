import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { facilities } from "@/data/facilities";
import { schoolInfo } from "@/data/school";

export function FacilitiesGrid() {
  const featuredFacilities = facilities.slice(0, 5);

  return (
    <SectionWrapper className="bg-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Facilities"
          title={schoolInfo.homepageIntro.facilitiesTitle}
          description={schoolInfo.homepageIntro.facilitiesSubtitle}
        />
        <Button href="/facilities" variant="outline">
          Explore Facilities
        </Button>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredFacilities.map((facility, index) => (
          <div
            key={facility.id}
            className={[
              "group relative overflow-hidden rounded-[30px] border border-primary/10 shadow-card",
              index === 0 ? "md:col-span-2 xl:col-span-2" : "xl:col-span-1",
            ].join(" ")}
          >
            <div className="relative h-64 bg-light-bg xl:h-72">
              <Image
                src={facility.image}
                alt={facility.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.22em] text-secondary">
                  {facility.imageLabel}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold">
                  {facility.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
