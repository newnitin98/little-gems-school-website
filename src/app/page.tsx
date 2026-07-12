import { AdmissionsStrip } from "@/components/layout/AdmissionsStrip";
import { AcademicsPreview } from "@/components/sections/AcademicsPreview";
import { CTABand } from "@/components/sections/CTABand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FacilitiesGrid } from "@/components/sections/FacilitiesGrid";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HeroSection } from "@/components/sections/HeroSection";
import { HonestyCounter } from "@/components/sections/HonestyCounter";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { faqs } from "@/data/faqs";
import { schoolInfo } from "@/data/school";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AdmissionsStrip />
      <HeroSection />
      <WhyChooseUs />
      <section className="border-y border-primary/10 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { number: "18+", label: "Years of Excellence" },
              { number: "500+", label: "Happy Families" },
              { number: "6", label: "Learning Programs" },
              { number: "100%", label: "English Medium" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold text-primary">{stat.number}</p>
                <p className="mt-1 text-sm font-medium text-subtext">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AcademicsPreview />
      <FacilitiesGrid />
      <GalleryPreview />
      <HonestyCounter />
      <TestimonialCarousel />
      <FAQAccordion />
      <CTABand
        title="Begin your child's learning journey with confidence."
        description="Admissions are open for Pre-Nursery to Class 5. Connect with our team to schedule a school visit, ask questions, or start the application process."
        phoneNumber={schoolInfo.phoneNumbers[0]}
      />
    </main>
  );
}
