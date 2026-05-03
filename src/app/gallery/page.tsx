import { CTABand } from "@/components/sections/CTABand";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "Gallery",
  description:
    "Photos and moments from classroom life, events, activities, and celebrations at Little Gems School, Jabalpur.",
  alternates: { canonical: "https://www.littlegemsschool.in/gallery" },
};

export default function GalleryPage() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-16 text-white sm:pt-20">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments that reflect the warmth and energy of school life."
          description="Browse filtered snapshots from campus life, classrooms, activities, and celebrations."
          theme="dark"
        />
      </SectionWrapper>

      <SectionWrapper>
        <GalleryGrid items={galleryItems} categories={galleryCategories} />
      </SectionWrapper>

      <CTABand
        title="Want to see the real campus beyond the gallery?"
        description="Plan a school visit and experience the Little Gems environment firsthand."
        href="/contact"
        buttonLabel="Book a Visit"
        phoneNumber={schoolInfo.phoneNumbers[0]}
      />
    </main>
  );
}
