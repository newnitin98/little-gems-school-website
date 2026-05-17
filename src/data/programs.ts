export type Program = {
  id: string;
  stageNumber: string;
  title: string;
  classRange: string;
  division: string;
  summary: string;
  detail: string;
  highlights: string[];
  icon: "baby" | "blocks" | "book-open" | "graduation-cap";
};

export const programs: Program[] = [
  {
    id: "foundational-stage-1",
    stageNumber: "01",
    title: "Basic Foundational Stage",
    classRange: "Play Nursery to Sr. KG",
    division: "Pre-Primary",
    summary:
      "Building comfort, confidence, and curiosity through storytelling, phonics, play-based activities, music, movement, and hands-on learning experiences.",
    detail:
      "This stage focuses on building comfort, confidence, and curiosity in young learners through storytelling, phonics, play-based activities, music, movement, and hands-on learning experiences. Children develop early language skills, social confidence, and a genuine love for learning in a safe and caring classroom environment.",
    highlights: [
      "Early language and phonics development",
      "Play-based and activity-oriented learning",
      "Social interaction and confidence building",
      "Fine motor skill and creative development",
      "Safe, caring, and engaging classroom environment",
    ],
    icon: "baby",
  },
  {
    id: "foundational-stage-2",
    stageNumber: "02",
    title: "Foundational Stage",
    classRange: "Class 1 and 2",
    division: "Primary Classes",
    summary:
      "Structured academic learning with a strong focus on reading, writing, mathematics, communication skills, and conceptual understanding.",
    detail:
      "Students begin structured academic learning with a strong focus on reading, writing, mathematics, communication skills, and conceptual understanding through interactive classroom activities. Daily revision, teacher guidance, and activity-based approaches ensure every child builds a confident and lasting academic foundation.",
    highlights: [
      "Strong foundation in English and Mathematics",
      "Concept-based classroom learning",
      "Reading comprehension and communication practice",
      "Activity-based EVS and project work",
      "Daily revision and teacher guidance",
    ],
    icon: "book-open",
  },
  {
    id: "preparatory-stage-3",
    stageNumber: "03",
    title: "Preparatory Stage",
    classRange: "Class 3, 4 and 5",
    division: "Primary Classes",
    summary:
      "Preparing students for higher academic readiness through deeper subject understanding, problem-solving, and leadership development.",
    detail:
      "This stage prepares students for higher academic readiness through deeper subject understanding, problem-solving, leadership development, and co-curricular participation. Students build independence, public speaking confidence, and a well-rounded academic profile that sets them up for the next stage of schooling.",
    highlights: [
      "Advanced reading and comprehension skills",
      "Subject-focused academic strengthening",
      "Public speaking and confidence building",
      "Leadership and responsibility development",
      "Balanced focus on academics and activities",
    ],
    icon: "graduation-cap",
  },
];
