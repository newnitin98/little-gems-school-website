export type Facility = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageLabel: string;
  alt: string;
};

export const facilities = [
  {
    id: "smart-classrooms",
    title: "Bright Classrooms",
    summary:
      "Well-lit, airy rooms designed to help young learners feel focused, comfortable, and engaged.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Classrooms",
    alt: "Bright classroom at Little Gems School prepared for primary students",
  },
  {
    id: "activity-zone",
    title: "Activity Corners",
    summary:
      "Hands-on learning spaces for puzzles, art, storytelling, and collaborative activities.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Activity Zone",
    alt: "Activity corner for pre-primary children at Little Gems School",
  },
  {
    id: "play-area",
    title: "Play Area",
    summary:
      "Outdoor play zones where children can move freely, build confidence, and enjoy group play.",
    image: "/images/gallery/activities-play.png",
    imageLabel: "Play Area",
    alt: "Little Gems School students enjoying outdoor play time on the school playground",
  },
  {
    id: "library-nook",
    title: "Reading Nook",
    summary:
      "A child-friendly reading area that encourages imagination, vocabulary growth, and quiet discovery.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Reading Nook",
    alt: "Reading nook with storybooks for students at Little Gems School",
  },
  {
    id: "safe-campus",
    title: "Safe Campus",
    summary:
      "Secure entry management, attentive supervision, and age-appropriate routines throughout the day.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Safe Campus",
    alt: "Safe and supervised campus environment at Little Gems School",
  },
  {
    id: "event-space",
    title: "Assembly & Events Space",
    summary:
      "Flexible open areas for celebrations, morning assembly, performances, and school showcases.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Events Space",
    alt: "School events and assembly space at Little Gems School",
  },
] satisfies Facility[];
