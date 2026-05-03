export type Testimonial = {
  quote: string;
  name: string;
  relation: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I was looking for a school close to our home in Sagda that genuinely cares for small children. The teachers at Little Gems are warm, patient, and very approachable, which made my daughter settle in happily.",
    name: "Priya Tiwari",
    relation: "Mother of Ananya (Nursery)",
    rating: 5,
    initials: "PT",
  },
  {
    quote:
      "We chose Little Gems because of the clean facilities and the way the principal spoke during our visit. The school feels disciplined yet friendly, and our son comes home excited to share what he learned.",
    name: "Rajesh Gupta",
    relation: "Father of Aarav (Class 2)",
    rating: 5,
    initials: "RG",
  },
  {
    quote:
      "The school is close, safe, and affordable. What I love most is the activity-based approach that helps children understand concepts instead of only memorising them.",
    name: "Sunita Patel",
    relation: "Mother of Riya (Class 1)",
    rating: 5,
    initials: "SP",
  },
  {
    quote:
      "The school environment is exactly what we wanted for our child's first school experience. Disciplined, caring, and very accessible from Sagda.",
    name: "Meera Joshi",
    relation: "Mother of Kavya (Pre-Nursery)",
    rating: 5,
    initials: "MJ",
  },
  {
    quote:
      "We visited three schools before choosing Little Gems. The personal attention each child receives here made the decision easy for us.",
    name: "Ashok Verma",
    relation: "Father of Rohan (Class 3)",
    rating: 5,
    initials: "AV",
  },
];
