import { CheckCircle2 } from "lucide-react";
import { CTABand } from "@/components/sections/CTABand";
import { ContactForm } from "@/components/ui/ContactForm";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "Admissions 2026-27",
  description:
    "Admissions are open at Little Gems School Jabalpur for 2026-27. Play-Nursery to Class 5. Learn the process, documents required, and eligibility criteria.",
  alternates: { canonical: "https://www.littlegemsschool.in/admissions" },
};

export default function AdmissionsPage() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-16 text-white sm:pt-20">
        <SectionHeading
          eyebrow="Admissions"
          title="Admissions open for children ready to learn, play, and grow."
          description="We welcome families looking for a caring English-medium school experience from Play-Nursery to Class 5."
          theme="dark"
        />
      </SectionWrapper>

      <SectionWrapper>
        <Card className="border-secondary/30 bg-secondary/15 p-6 sm:p-8">
          <p className="font-heading text-lg font-semibold text-primary sm:text-xl [text-wrap:balance]">
            {schoolInfo.admissionsPage.statusBanner}
          </p>
        </Card>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Eligibility"
              title="Class-wise eligibility guide"
              description="Use this as a quick reference to find the right starting point for your child. Our team is happy to help if you have any questions."
            />
            <div className="mt-8 overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-card">
              <table className="w-full text-left">
                <thead className="bg-light-bg">
                  <tr>
                    <th className="px-6 py-5 font-heading text-base font-semibold uppercase tracking-wide text-primary">Class</th>
                    <th className="px-6 py-5 font-heading text-base font-semibold uppercase tracking-wide text-primary">Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolInfo.admissionsPage.eligibility.map((row) => (
                    <tr key={row.className} className="border-t border-primary/8 transition-colors hover:bg-light-bg/60">
                      <td className="px-6 py-5 font-medium text-body-text">{row.className}</td>
                      <td className="px-6 py-5">
                        {row.age === "Age-appropriate admission" ? (
                          <span className="font-medium text-primary/55 italic">
                            Age-appropriate admission
                          </span>
                        ) : (
                          <span className="font-semibold text-primary">{row.age}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Documents"
              title="Checklist to keep ready"
              description="These documents help the school complete the admission process smoothly."
            />
            <div className="mt-8 grid gap-4">
              {schoolInfo.admissionsPage.documents.map((document) => (
                <Card key={document} className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-success" />
                    <p className="text-base leading-7 text-body-text">{document}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-light-bg">
        <SectionHeading
          eyebrow="Admission Process"
          title="A simple 5-step journey for families"
          description="Our team supports you from the first enquiry through final confirmation."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {schoolInfo.admissionsPage.process.map((step, index) => (
            <Card key={step.title} className="p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-accent">
                Step {index + 1}
              </p>
              <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-subtext">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[0.75fr,1.25fr]">
          <div>
            <SectionHeading
              eyebrow="Enquiry Form"
              title="Share your details and we&apos;ll guide you next"
              description="Use the form to ask about availability, age criteria, or school visits."
            />
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>

      <CTABand
        title="Ready to take the next step toward admission?"
        description="Call the school directly for guidance on class availability, visits, and documentation."
        phoneNumber={schoolInfo.phoneNumbers[0]}
      />
    </main>
  );
}
