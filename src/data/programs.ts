export type Program = {
  id: string;
  title: string;
  ageRange: string;
  summary: string;
  detail: string;
  highlights: string[];
  icon: "baby" | "blocks" | "book-open" | "graduation-cap";
};

export const programs: Program[] = [
  {
    id: "pre-nursery",
    title: "Pre-Nursery",
    ageRange: "2.5 to 3.5 years",
    summary:
      "A gentle first-school experience focused on routines, sensory play, music, and joyful social interaction.",
    detail:
      "Children are introduced to classroom habits through storytelling, movement games, hands-on activities, and plenty of guided care so they feel safe and curious every day.",
    highlights: [
      "Settling support and nurturing classroom routines",
      "Rhymes, free play, storytelling, and fine-motor practice",
      "Teacher-guided social development in a caring environment",
    ],
    icon: "baby",
  },
  {
    id: "nursery-kg",
    title: "Nursery & KG",
    ageRange: "3.5 to 5.5 years",
    summary:
      "Foundational readiness with early literacy, number sense, communication, and creative exploration.",
    detail:
      "Our Nursery and KG program builds confidence through phonics-rich exposure, playful mathematics, themed learning corners, and daily opportunities to speak, create, and collaborate.",
    highlights: [
      "Phonics readiness, vocabulary growth, and conversation practice",
      "Early numeracy with manipulatives, patterns, and puzzles",
      "Art, craft, dance, and celebration-based learning",
    ],
    icon: "blocks",
  },
  {
    id: "class-1-3",
    title: "Class 1 to 3",
    ageRange: "5.5 to 8 years",
    summary:
      "Structured academics blended with projects, reading habits, and concept-based learning across core subjects.",
    detail:
      "Students strengthen English, mathematics, EVS, and general knowledge through classroom interaction, worksheets, mini-projects, and teacher feedback that keeps learning encouraging and clear.",
    highlights: [
      "Strong language and reading comprehension practice",
      "Concept-focused mathematics and EVS activities",
      "Class presentations, handwriting, and daily revision support",
    ],
    icon: "book-open",
  },
  {
    id: "class-4-5",
    title: "Class 4 to 5",
    ageRange: "8 to 10 years",
    summary:
      "Confident primary learning with greater independence, leadership, and preparation for the next stage of schooling.",
    detail:
      "This stage sharpens academic readiness through deeper subject learning, problem-solving tasks, co-curricular participation, and regular mentoring so students grow as capable learners.",
    highlights: [
      "Deeper subject understanding with revision cycles",
      "Leadership roles, public speaking, and responsibility building",
      "Balanced focus on academics, projects, and co-curricular growth",
    ],
    icon: "graduation-cap",
  },
];
