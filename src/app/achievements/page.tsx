import { AchievementCard } from "@/components/achievements/AchievementCard";
import { AchievementsExplorer } from "@/components/achievements/AchievementsExplorer";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { featuredAchievements } from "@/data/achievements";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "Student Achievements",
  description:
    "Celebrating the outstanding achievements of Little Gems School students across olympiads, academics, sports, and co-curricular activities in Jabalpur.",
  alternates: { canonical: "https://www.littlegemsschool.in/achievements" },
};

export default function AchievementsPage() {
  return (
    <main id="main-content">
      <SectionWrapper className="bg-primary pt-16 text-white sm:pt-20">
        <SectionHeading
          eyebrow="Achievements"
          title="Student Achievements"
          description="Celebrating the hard work, dedication and outstanding accomplishments of our students across academics, sports, olympiads and co-curricular activities."
          theme="dark"
        />
      </SectionWrapper>

      {featuredAchievements.length > 0 ? (
        <SectionWrapper>
          <SectionHeading
            eyebrow="Featured"
            title="Featured Achievements"
            description="Our students who have brought international honour to Little Gems School."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
            {featuredAchievements.map((item, index) => (
              <AchievementCard
                key={item.id}
                item={item}
                featured
                priority={index === 0}
              />
            ))}
          </div>
        </SectionWrapper>
      ) : null}

      <SectionWrapper className="bg-light-bg">
        <SectionHeading
          eyebrow="Explore"
          title="All Student Achievements"
          description="Filter by competition, search by student or class, and sort the full list of Little Gems School achievers."
        />
        <div className="mt-10">
          <AchievementsExplorer />
        </div>
      </SectionWrapper>

      <CTABand
        title="Give your child a place to shine."
        description="Admissions are open for Pre-Nursery to Class 5. Talk to our team to plan a visit or begin the application process."
        phoneNumber={schoolInfo.phoneNumbers[0]}
      />
    </main>
  );
}
