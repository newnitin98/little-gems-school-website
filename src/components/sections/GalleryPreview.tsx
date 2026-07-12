import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GalleryCarousel } from "@/components/sections/GalleryCarousel";
import { galleryItems } from "@/data/gallery";
import { schoolInfo } from "@/data/school";

export function GalleryPreview() {
  const featuredItems = galleryItems.filter((item) => item.featuredOnHome);

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

      <div className="mt-12">
        <GalleryCarousel items={featuredItems} />
      </div>
    </SectionWrapper>
  );
}
