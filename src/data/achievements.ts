export type AchievementCategory =
  | "sof-hindi-olympiad"
  | "ito-junior-olympiad"
  | "sports"
  | "science-fair"
  | "drawing"
  | "dance"
  | "music"
  | "quiz"
  | "robotics"
  | "debate"
  | "art-craft"
  | "cultural"
  | "other";

export type Achievement = {
  id: string;
  studentName: string;
  className?: string;
  competition: string;
  achievement: string;
  year: number;
  category: AchievementCategory;
  image: string;
  description: string;
  featured?: boolean;
  /** Optional explicit alt text; a descriptive default is generated when omitted. */
  alt?: string;
  /** Optional object-position for the image crop, e.g. "50% 25%". */
  focalPoint?: string;
};

/**
 * Human-readable labels for every category. Add a new entry here (and to
 * AchievementCategory + categoryOrder) when a new competition type is introduced.
 */
export const categoryLabels: Record<AchievementCategory, string> = {
  "sof-hindi-olympiad": "SOF Hindi Olympiad",
  "ito-junior-olympiad": "ITO Junior Olympiad",
  sports: "Sports",
  "science-fair": "Science Fair",
  drawing: "Drawing",
  dance: "Dance",
  music: "Music",
  quiz: "Quiz",
  robotics: "Robotics",
  debate: "Debate",
  "art-craft": "Art & Craft",
  cultural: "Cultural",
  other: "Other",
};

/** Canonical order for rendering filter chips. */
export const categoryOrder: AchievementCategory[] = [
  "sof-hindi-olympiad",
  "ito-junior-olympiad",
  "sports",
  "science-fair",
  "drawing",
  "dance",
  "music",
  "quiz",
  "robotics",
  "debate",
  "art-craft",
  "cultural",
  "other",
];

const ITO_BASE = "/images/achievements/ito-junior-olympiad";
const SOF_BASE = "/images/achievements/sof-hindi-olympiad";

export const achievements: Achievement[] = [
  {
    id: "vedika-mourya",
    studentName: "Vedika Mourya",
    className: "Class 5",
    competition: "SOF Hindi Olympiad",
    achievement: "International Rank 1",
    year: 2026,
    category: "sof-hindi-olympiad",
    image: `${SOF_BASE}/vedika-mourya.jpeg`,
    description: "International Rank 1 in SOF Hindi Olympiad",
    featured: true,
    alt: "Vedika Mourya holding her SOF Hindi Olympiad medal at Little Gems School",
    focalPoint: "50% 25%",
  },
  {
    id: "hansika-patel",
    studentName: "Hansika Patel",
    competition: "SOF Hindi Olympiad",
    achievement: "International Rank 1",
    year: 2026,
    category: "sof-hindi-olympiad",
    image: `${SOF_BASE}/hansika-patel.jpeg`,
    description: "International Rank 1 in SOF Hindi Olympiad",
    featured: true,
    alt: "Hansika Patel holding her SOF Hindi Olympiad medal at Little Gems School",
    focalPoint: "50% 25%",
  },
  {
    id: "daivik-shukla",
    studentName: "Daivik Shukla",
    className: "Sr. KG",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/daivik-shukla.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 22%",
  },
  {
    id: "anvi-tiwari",
    studentName: "Anvi Tiwari",
    className: "Sr. KG",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/anvi-tiwari.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
  {
    id: "aadya-shastri",
    studentName: "Aadya Shastri",
    className: "Sr. KG",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/aadya-shastri.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
  {
    id: "advik-lodhi",
    studentName: "Advik Lodhi",
    className: "Sr. KG",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/advik-lodhi.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
  {
    id: "divya-dwivedi",
    studentName: "Divya Dwivedi",
    className: "Sr. KG",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/divya-dwivedi.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
  {
    id: "shanvi-sen",
    studentName: "Shanvi Sen",
    className: "Sr. KG",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/shanvi-sen.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
  {
    id: "yadhya-likhar",
    studentName: "Yadhya Likhar",
    className: "Sr. KG",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/yadhya-likhar.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
  {
    id: "mitansh-janghela",
    studentName: "Mitansh Janghela",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/mitansh-janghela.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 30%",
  },
  {
    id: "prabhnoor-kaur-gill",
    studentName: "Prabhnoor Kaur Gill",
    className: "Nursery",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/prabhnoor-kaur-gill.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
  {
    id: "purvanshi-ahire",
    studentName: "Purvanshi",
    className: "Nursery",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/purvanshi-ahire.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
  {
    id: "yogita-barman",
    studentName: "Yogita Barman",
    className: "Nursery",
    competition: "ITO Junior Olympiad",
    achievement: "Rank Holder",
    year: 2026,
    category: "ito-junior-olympiad",
    image: `${ITO_BASE}/yogita-barman.jpeg`,
    description: "Rank Holder in the ITO Junior Olympiad",
    focalPoint: "50% 25%",
  },
];

/** Descriptive alt text with a sensible default when none is supplied. */
export function achievementAlt(item: Achievement): string {
  return (
    item.alt ??
    `${item.studentName} with the ${item.competition} medal at Little Gems School`
  );
}

/** Featured achievements, used by the homepage popup. */
export const featuredAchievements = achievements.filter((item) => item.featured);

/**
 * Categories that currently have at least one achievement, in canonical order.
 * The filter list on the achievements page grows automatically from this.
 */
export const activeCategories: AchievementCategory[] = categoryOrder.filter(
  (category) => achievements.some((item) => item.category === category),
);
