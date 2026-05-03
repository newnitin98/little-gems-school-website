import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { galleryItems } from "@/data/gallery";
import { schoolInfo } from "@/data/school";

export function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 6);

  return (
    <SectionWrapper className="bg-light-bg">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Gallery"
          title={schoolInfo.homepageIntro.galleryTitle}
          description={schoolInfo.homepageIntro.gallerySubtitle}
        />
        <Button href="/gallery" variant="outline">
          See Full Gallery
        </Button>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {previewItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-[30px] border border-primary/10 shadow-card"
          >
            <div className="relative h-56 bg-white sm:h-64">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.22em] text-secondary">
                  {item.category}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
