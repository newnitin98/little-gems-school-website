export type GalleryCategory =
  | "Campus"
  | "Classrooms"
  | "Activities"
  | "Celebrations";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "welcome-campus",
    title: "Little Gems School – Main Building",
    category: "Campus",
    image: "/images/gallery/school-main-building.png",
    alt: "Front view of the Little Gems School main building on Tilwara Road, Sagda, Jabalpur",
  },
  {
    id: "happy-classroom",
    title: "Interactive Classroom Session",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    alt: "Students taking part in an interactive classroom lesson at Little Gems School",
  },
  {
    id: "art-activity",
    title: "Creative Art Activity",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80",
    alt: "Children engaged in a creative art and craft session at Little Gems School",
  },
  {
    id: "sports-play",
    title: "Play and Movement Time",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=800&q=80",
    alt: "Students enjoying movement and outdoor play time at Little Gems School",
  },
  {
    id: "storybook-corner",
    title: "Storybook Corner",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    alt: "Children reading together in a calm classroom corner at Little Gems School",
  },
  {
    id: "annual-day",
    title: "Annual Day Performance",
    category: "Celebrations",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    alt: "Students smiling together during a special school celebration at Little Gems School",
  },
  {
    id: "morning-assembly",
    title: "Morning Assembly",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    alt: "Students gathered together for the start of the school day at Little Gems School",
  },
  {
    id: "festival-celebration",
    title: "Festival Celebration",
    category: "Celebrations",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    alt: "Children participating in a joyful classroom celebration at Little Gems School",
  },
  {
    id: "handwriting-practice",
    title: "Focused Handwriting Practice",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    alt: "Students concentrating during a guided writing session at Little Gems School",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Campus",
  "Classrooms",
  "Activities",
  "Celebrations",
];
