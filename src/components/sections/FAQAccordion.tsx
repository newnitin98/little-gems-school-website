"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { faqs } from "@/data/faqs";
import { schoolInfo } from "@/data/school";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <SectionWrapper className="bg-white">
      <SectionHeading
        eyebrow="FAQ"
        title={schoolInfo.homepageIntro.faqTitle}
        description={schoolInfo.homepageIntro.faqSubtitle}
      />
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItem === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[26px] border border-primary/10 bg-light-bg"
            >
              <button
                type="button"
                onClick={() => setOpenItem(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="font-heading text-lg font-semibold text-primary sm:text-xl">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-primary transition",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-base leading-7 text-subtext sm:px-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
