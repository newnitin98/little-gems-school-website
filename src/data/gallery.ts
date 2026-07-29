export type GalleryCategory =
  | "Campus"
  | "Classrooms"
  | "Activities"
  | "Celebrations";

export type GalleryItem = {
  id: string;
  src: string;
  category: GalleryCategory;
  title: string;
  description: string;
  alt: string;
  featuredOnHome?: boolean;
  displayOrder?: number;
  focalPoint?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "campus-main-building",
    src: "/images/gallery/campus/school-main-building.png",
    category: "Campus",
    title: "Little Gems School – Main Building",
    description:
      "Our purpose-built campus on Tilwara Road offers a bright, welcoming setting for young learners.",
    alt: "Front view of the Little Gems School main building on Tilwara Road, Sagda, Jabalpur",
    displayOrder: 1,
    focalPoint: "50% 40%",
  },
  {
    id: "campus-safe",
    src: "/images/gallery/campus/Safe campus.jpeg",
    category: "Campus",
    title: "Safe and Welcoming Campus",
    description:
      "Secure entry routines and attentive supervision help every child feel safe throughout the school day.",
    alt: "Students walking safely inside the Little Gems School campus",
    displayOrder: 2,
    focalPoint: "50% 50%",
  },
  {
    id: "classroom-focused-learning",
    src: "/images/gallery/Classrooms/classrom_1.jpeg",
    category: "Classrooms",
    title: "Focused Classroom Learning",
    description:
      "Small-group attention and calm classrooms help children concentrate and enjoy learning.",
    alt: "Little Gems School students engaged in a focused classroom lesson",
    featuredOnHome: true,
    displayOrder: 3,
    focalPoint: "55% 50%",
  },
  {
    id: "classroom-reading",
    src: "/images/gallery/Classrooms/Classroom_Image.jpeg",
    category: "Classrooms",
    title: "Reading and Language Development",
    description:
      "Daily reading and speaking activities build confident communication from an early age.",
    alt: "Little Gems School students reading and building language skills in the classroom",
    featuredOnHome: true,
    displayOrder: 4,
    focalPoint: "50% 55%",
  },
  {
    id: "classroom-creative-activity",
    src: "/images/gallery/Classrooms/Classrom activity.jpeg",
    category: "Classrooms",
    title: "Creative Classroom Activity",
    description:
      "Hands-on classroom activities keep young learners engaged, curious, and confident.",
    alt: "Little Gems School students taking part in a creative classroom activity",
    featuredOnHome: true,
    displayOrder: 5,
    focalPoint: "50% 30%",
  },
  {
    id: "classroom-computer",
    src: "/images/gallery/Classrooms/computer room.jpeg",
    category: "Classrooms",
    title: "Computer Learning",
    description:
      "Structured computer sessions introduce children to essential digital skills from primary onward.",
    alt: "Little Gems School students learning in the computer room",
    featuredOnHome: true,
    displayOrder: 6,
    focalPoint: "50% 55%",
  },
  {
    id: "classroom-bright",
    src: "/images/gallery/Classrooms/bright classroom.jpeg",
    category: "Classrooms",
    title: "Bright, Airy Classroom",
    description:
      "Well-lit, ventilated classrooms create a comfortable environment for concentration and learning.",
    alt: "Bright classroom at Little Gems School prepared for young students",
    displayOrder: 7,
    focalPoint: "50% 50%",
  },
  {
    id: "activity-play-area-fun",
    src: "/images/gallery/activities/Play Area_1.jpeg",
    category: "Activities",
    title: "Play Area Fun",
    description:
      "Students take turns on the slide, learning coordination, patience, and playful teamwork.",
    alt: "Little Gems School students enjoying the play area at Little Gems School",
    featuredOnHome: true,
    displayOrder: 8,
    focalPoint: "50% 55%",
  },
  {
    id: "activity-learning-through-play",
    src: "/images/gallery/activities/Play Area 2.jpeg",
    category: "Activities",
    title: "Learning Through Play",
    description:
      "Cheerful outdoor play helps children build confidence and lasting friendships.",
    alt: "Little Gems School children enjoying the outdoor play area with a thumbs-up",
    featuredOnHome: true,
    displayOrder: 9,
    focalPoint: "50% 45%",
  },
  {
    id: "activity-honesty-counter",
    src: "/images/gallery/activities/Honesty Counter.jpeg",
    category: "Activities",
    title: "Honesty Counter",
    description:
      "Our trust-based Honesty Counter teaches children responsibility and integrity every day.",
    alt: "Little Gems School students using the trust-based Honesty Counter",
    featuredOnHome: true,
    displayOrder: 10,
    focalPoint: "50% 55%",
  },
  {
    id: "activity-art-craft",
    src: "/images/gallery/activities/Art and Craft.jpeg",
    category: "Activities",
    title: "Creative Art and Craft",
    description:
      "Art and craft sessions build fine motor skills, imagination, and self-expression.",
    alt: "Little Gems School children creating art and craft together",
    featuredOnHome: true,
    displayOrder: 11,
    focalPoint: "50% 30%",
  },
  {
    id: "activity-art-creativity",
    src: "/images/gallery/activities/Art and creativitity.jpeg",
    category: "Activities",
    title: "Art and Creativity Time",
    description:
      "Dedicated creativity time encourages children to explore colour, texture, and ideas.",
    alt: "Little Gems School students enjoying an art and creativity session",
    displayOrder: 12,
    focalPoint: "50% 50%",
  },
  {
    id: "activity-group-learning",
    src: "/images/gallery/activities/Activities_Images_1.jpeg",
    category: "Activities",
    title: "Group Learning Activity",
    description:
      "Collaborative activities teach children to listen, take turns, and learn from one another.",
    alt: "Little Gems School students working together on a group activity",
    displayOrder: 13,
    focalPoint: "50% 35%",
  },
  {
    id: "activity-interactive",
    src: "/images/gallery/activities/Activities_Images.jpeg",
    category: "Activities",
    title: "Interactive Learning Session",
    description:
      "Interactive activity zones make everyday learning playful and memorable.",
    alt: "Little Gems School children in an interactive learning activity",
    displayOrder: 14,
    focalPoint: "50% 50%",
  },
  {
    id: "activity-art-corner",
    src: "/images/gallery/activities/Art and creative Corner.jpeg",
    category: "Activities",
    title: "Art and Creative Corner",
    description:
      "A dedicated creative corner in every classroom invites children to draw, build, and imagine.",
    alt: "Little Gems School creative corner where children work on art activities",
    displayOrder: 15,
    focalPoint: "50% 50%",
  },
  {
    id: "celebration-annual-day",
    src: "/images/gallery/celebrations/Annual Day.jpeg",
    category: "Celebrations",
    title: "Annual Day Performance",
    description:
      "Our Annual Day brings students, teachers, and families together for performances and pride.",
    alt: "Little Gems School students performing on Annual Day",
    featuredOnHome: true,
    displayOrder: 16,
    focalPoint: "50% 70%",
  },
  {
    id: "celebration-classical-dance",
    src: "/images/gallery/celebrations/Annual Day 9.jpeg",
    category: "Celebrations",
    title: "Classical Dance Performance",
    description:
      "Students take the stage with a graceful classical dance, celebrating culture and confidence.",
    alt: "Little Gems School student performing a classical dance at Annual Day",
    featuredOnHome: true,
    displayOrder: 17,
    focalPoint: "50% 40%",
  },
  {
    id: "celebration-cultural-programme",
    src: "/images/gallery/celebrations/Annual Day 8.jpeg",
    category: "Celebrations",
    title: "Cultural Programme",
    description:
      "A vibrant cultural programme brings colour, music, and energy to the Annual Day stage.",
    alt: "Little Gems School students performing during the Annual Day cultural programme",
    featuredOnHome: true,
    displayOrder: 18,
    focalPoint: "50% 70%",
  },
  {
    id: "celebration-dance-performance",
    src: "/images/gallery/celebrations/Annual Day 3.jpeg",
    category: "Celebrations",
    title: "Dance Performance",
    description:
      "Energetic dance performances light up the Annual Day stage with sparklers and smiles.",
    alt: "Little Gems School students performing a dance with sparklers on Annual Day",
    displayOrder: 19,
    focalPoint: "50% 65%",
  },
  {
    id: "celebration-young-stars",
    src: "/images/gallery/celebrations/Annual Day 4.jpeg",
    category: "Celebrations",
    title: "Young Stars on Stage",
    description:
      "Pre-primary students shine in colourful traditional attire during an Annual Day performance.",
    alt: "Young Little Gems School students in traditional attire dancing on Annual Day",
    displayOrder: 20,
    focalPoint: "50% 45%",
  },
  {
    id: "celebration-stage-presentation",
    src: "/images/gallery/celebrations/Annual Day 5.jpeg",
    category: "Celebrations",
    title: "Stage Presentation",
    description:
      "Students present a synchronised performance on the Annual Day stage.",
    alt: "Little Gems School students in a coordinated stage presentation on Annual Day",
    displayOrder: 21,
    focalPoint: "50% 60%",
  },
  {
    id: "celebration-celebrating-talent",
    src: "/images/gallery/celebrations/Annual Day 7.jpeg",
    category: "Celebrations",
    title: "Celebrating Talent",
    description:
      "Boys perform a lively dance number, celebrating confidence and teamwork on stage.",
    alt: "Little Gems School boys performing a group dance on Annual Day",
    displayOrder: 22,
    focalPoint: "50% 45%",
  },
  {
    id: "celebration-annual-day-2",
    src: "/images/gallery/celebrations/Annual day 2.jpeg",
    category: "Celebrations",
    title: "Annual Day Celebration",
    description:
      "Colourful stage performances celebrate the effort and confidence of every child.",
    alt: "Little Gems School Annual Day celebration on stage",
    displayOrder: 23,
    focalPoint: "50% 50%",
  },
  {
    id: "celebration-festival",
    src: "/images/gallery/celebrations/Celebration.jpeg",
    category: "Celebrations",
    title: "Festival Celebration",
    description:
      "Festival celebrations at school help children learn cultural values and enjoy shared traditions.",
    alt: "Little Gems School students celebrating a festival together",
    featuredOnHome: true,
    displayOrder: 24,
    focalPoint: "50% 65%",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Campus",
  "Classrooms",
  "Activities",
  "Celebrations",
];
