export type FeatureItem = {
  title: string;
  description: string;
  icon:
    | "shield"
    | "sparkles"
    | "graduation-cap"
    | "trees"
    | "users"
    | "badge-check";
};

export type CoreValue = {
  title: string;
  description: string;
};

export type TimelineStep = {
  title: string;
  description: string;
};

export type ContactHighlight = {
  title: string;
  description: string;
  icon: "map-pin" | "phone" | "clock-3";
  href?: string;
};

export type EventCard = {
  title: string;
  date: string;
  audience: string;
  summary: string;
};

export type SocialLink = {
  platform: "instagram" | "facebook" | "youtube";
  label: string;
  href: string;
};

export const schoolInfo = {
  name: "Little Gems School",
  tagline: "Where Every Child Shines",
  address: "Tilwara Road, Sagda, Jabalpur, Madhya Pradesh",
  phoneNumbers: ["8839225491", "9399098220"],
  whatsappNumber: "918839225491",
  admissions: "Open for 2026-27, Play-Nursery to Class 5",
  hero: {
    eyebrow: "Admissions Open 2026-27",
    headline: "A joyful English-medium school in Jabalpur for curious young minds.",
    subheadline:
      "Little Gems School nurtures children from Pre-Primary to Primary with caring teachers, activity-based learning, and a safe campus close to home in Sagda.",
    primaryCta: { label: "Apply Now", href: "/admissions" },
    secondaryCta: { label: "Book a School Visit", href: "/contact" },
    highlights: [
      "Play-Nursery to Class 5",
      "Activity-based English-medium learning",
      "Safe, welcoming campus on Tilwara Road",
    ],
    image: "/images/school/hero-students-reading.jpeg",
    imageAlt:
      "Little Gems School students focused on reading books in the classroom",
  },
  homepageIntro: {
    whyChooseUsTitle: "Why parents choose Little Gems School",
    whyChooseUsSubtitle:
      "Families trust us for the balance of warmth, discipline, and a foundation-focused learning environment designed around young children.",
    academicsTitle: "Programs Designed for Every Stage of Early Learning",
    academicsSubtitle:
      "From foundational play-based learning to confident primary education, each programme at Little Gems School is thoughtfully designed to support growth, creativity, and communication.",
    facilitiesTitle: "Spaces that support happy and focused learning",
    facilitiesSubtitle:
      "Our campus is planned to feel safe, cheerful, and practical for young learners every single day.",
    galleryTitle: "A quick look into school life",
    gallerySubtitle:
      "Moments from classrooms, celebrations, and hands-on activities that reflect the spirit of Little Gems School.",
    testimonialsTitle: "What parents say about us",
    testimonialsSubtitle:
      "Honest feedback from families who wanted a nearby school where their children feel safe, seen, and supported.",
    faqTitle: "Frequently asked questions",
    faqSubtitle:
      "Helpful answers for parents exploring admissions, visits, timings, and classroom expectations.",
  },
  whyChooseUs: [
    {
      title: "Safe and Caring Environment",
      description:
        "Children learn in a warm, supervised setting with age-appropriate routines, care, and a reassuring atmosphere.",
      icon: "shield",
    },
    {
      title: "Strong English Foundation",
      description:
        "Daily exposure to phonics, reading, speaking, and classroom communication helps children build confidence from the start.",
      icon: "graduation-cap",
    },
    {
      title: "Activity-Based Learning",
      description:
        "Lessons come alive through stories, creative activities, hands-on tasks, and interactive classroom experiences.",
      icon: "sparkles",
    },
    {
      title: "Child-Friendly Campus",
      description:
        "Bright classrooms, play areas, and practical learning corners help children feel comfortable and eager to participate.",
      icon: "trees",
    },
    {
      title: "Teacher–Parent Communication",
      description:
        "Regular updates, meetings, and open communication help parents stay involved in every child's learning progress.",
      icon: "users",
    },
    {
      title: "Value-Based Growth",
      description:
        "Respect, discipline, kindness, and responsibility are gently built into everyday school life.",
      icon: "badge-check",
    },
  ] satisfies FeatureItem[],
  about: {
    storyTitle: "Our story",
    story:
      "LGS is a joyful place where young minds blossom from Pre-Primary to Primary in a warm and caring environment. With dedicated and friendly teachers, we focus on activity-based learning that makes education fun, engaging, and meaningful.",
    storyExtra:
      "Our safe and secure campus, conveniently located at Tilwara Road, near Vishal Mega Mart, ensures comfort for both children and parents.",
    storyClosing:
      "At LGS, we build strong foundations, encourage creativity, and inspire every child to shine with confidence.",
    vision:
      "To create a nurturing school community where every child discovers confidence, character, and a love for learning.",
    mission:
      "To provide quality English-medium education with personal attention, strong foundational skills, and meaningful experiences that help children grow academically, socially, and emotionally.",
    principal: {
      name: "Mrs. Deepika Choudhary",
      title: "Principal, Little Gems School",
      message:
        "Welcome to our Little Gems School family. For the past 18 years, our school has been dedicated to nurturing young minds with love, care, and quality education. We believe that early childhood is the most important stage of learning, where children develop confidence, creativity, curiosity, and strong values.",
      messageExtra:
        "Our aim is to provide a safe, joyful, and stimulating environment where every child feels happy, respected, and encouraged to explore their unique talents. We focus on holistic development through activity-based learning, moral values, discipline, and playful experiences that make learning meaningful and enjoyable.",
      messageClosing:
        "We are grateful to all parents for their continuous trust and support throughout this beautiful journey of 18 years. Together, we will continue shaping bright futures and helping our little learners grow into confident and responsible individuals.",
    },
    coreValues: [
      {
        title: "Care",
        description:
          "Children flourish when they feel safe, heard, and supported in every interaction.",
      },
      {
        title: "Curiosity",
        description:
          "We encourage questions, exploration, and hands-on discovery across the school day.",
      },
      {
        title: "Confidence",
        description:
          "Students are guided to express themselves clearly and take pride in steady progress.",
      },
      {
        title: "Character",
        description:
          "Respect, kindness, discipline, and responsibility are nurtured from the beginning.",
      },
    ] satisfies CoreValue[],
  },
  academics: {
    philosophyTitle: "Our teaching philosophy",
    philosophy:
      "Children learn best when they feel secure, interested, and actively involved. Our classrooms combine foundational academics with activities, repetition, encouragement, and routines that suit the way young learners grow.",
    philosophyPoints: [
      "Concept clarity before rote learning",
      "Language-rich classrooms with guided speaking practice",
      "Frequent revision and teacher feedback",
      "Creative and co-curricular exposure alongside academics",
    ],
    cocurricular: [
      "Art and craft sessions",
      "Music, rhyme, and movement activities",
      "Storytelling and recitation",
      "Festival celebrations and thematic days",
      "Games, sports drills, and free-play routines",
      "Drawing, colouring, and handwriting enrichment",
    ],
  },
  admissionsPage: {
    statusBanner:
      "Admissions are currently open for the 2026-27 academic session from Play-Nursery to Class 5.",
    eligibility: [
      { className: "Play-Nursery", age: "2.5 Years Onwards" },
      { className: "Nursery", age: "3+ Years" },
      { className: "KG", age: "Age-appropriate admission" },
      { className: "Classes 1–3", age: "Age-appropriate admission" },
      { className: "Classes 4–5", age: "Age-appropriate admission" },
    ],
    process: [
      {
        title: "Send an enquiry",
        description:
          "Call, WhatsApp, or submit the enquiry form to share your child's details and class preference.",
      },
      {
        title: "Visit the campus",
        description:
          "Meet the school team, see the learning spaces, and understand the daily routine.",
      },
      {
        title: "Interaction and guidance",
        description:
          "For suitable classes, the school may conduct a simple interaction to understand readiness and support needs.",
      },
      {
        title: "Submit documents",
        description:
          "Complete the admission form and share the required documents for verification.",
      },
      {
        title: "Confirm admission",
        description:
          "After confirmation, parents receive the next steps for fee payment, books, and joining details.",
      },
    ] satisfies TimelineStep[],
    documents: [
      "Birth certificate of the child",
      "Three Recent passport-size photographs ",
      "Address proof of parent or guardian",
      "Aadhaar copy and Samagra id",
      "Transfer certificate for higher classes",
      "Ladli Laxmi Yojna certificate if applicable",
    ],
  },
  facilitiesPage: {
    intro:
      "Every corner of the school is designed to feel welcoming, practical, and secure for growing learners.",
    safetyTitle: "Safety first, every day",
    safetyPoints: [
      "Teacher supervision throughout classroom and transition times",
      "Secure entry routines and visitor awareness",
      "Age-appropriate furniture and organised learning spaces",
      "Clean campus practices that support healthy school days",
    ],
  },
  eventsPage: {
    upcoming: [
      {
        title: "School Reopening Orientation",
        date: "July 2026",
        audience: "All new and returning families",
        summary:
          "A welcome session for parents and students to understand routines, expectations, and the academic year ahead.",
      },
      {
        title: "Monsoon Creativity Week",
        date: "July 2026",
        audience: "Pre-Primary to Class 5",
        summary:
          "A themed week of art, stories, songs, and classroom displays linked to seasonal learning.",
      },
      {
        title: "Grandparents Day Celebration",
        date: "August 2026",
        audience: "Selected classes and families",
        summary:
          "A warm celebration with performances, greetings, and intergenerational participation.",
      },
    ] satisfies EventCard[],
    notices: [
      "Admissions enquiries for the 2026-27 session are open.",
      "Campus visits can be scheduled by prior appointment.",
      "Parents will receive class-specific material lists after admission confirmation.",
    ],
    calendar: [
      { month: "July", highlight: "Orientation and classroom settling period" },
      { month: "August", highlight: "Independence Day and activity showcase" },
      { month: "October", highlight: "Festival celebrations and thematic learning week" },
      { month: "December", highlight: "Winter event and term review" },
    ],
  },
  contactPage: {
    title: "We would love to hear from you",
    subtitle:
      "Reach out to plan a visit, ask about admissions, or speak with the school team about your child.",
    cards: [
      {
        title: "Visit the school",
        description: "Tilwara Road, Sagda, Jabalpur, Madhya Pradesh",
        icon: "map-pin",
      },
      {
        title: "Call for admissions",
        description: "8839225491 / 9399098220",
        icon: "phone",
        href: "tel:918839225491",
      },
      {
        title: "School hours",
        description: "Monday to Saturday, 8:00 AM to 2:00 PM",
        icon: "clock-3",
      },
    ] satisfies ContactHighlight[],
    mapQuery:
      "Little Gems School, Tilwara Road, Sagda, Jabalpur, Madhya Pradesh",
  },
  footer: {
    description:
      "Little Gems School is a caring English-medium school in Jabalpur, helping children grow with confidence from Pre-Primary to Primary.",
    hours: [
      "Monday to Saturday",
      "8:00 AM to 2:00 PM",
      "Campus visits by appointment",
    ],
  },
  socialLinks: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/slittlegems?utm_source=qr&igsh=bXc2azE0ZjJwb3Rr",
    },
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/groups/849457906497895/",
    },
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@ankitakhare1758",
    },
  ] satisfies SocialLink[],
} as const;
