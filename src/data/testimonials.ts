export type Testimonial = {
  quote: string;
  fullQuote?: string;
  name: string;
  relation: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The teachers give individual attention to every child and interact with them so warmly that children feel comfortable sharing everything. The teaching is very effective, and we are proud to see our child becoming more interested in studies every day.",
    fullQuote:
      "My child studies in Junior KG at Little Gems School. The best thing here is that teachers give individual attention to every child. Their interaction with the kids is so good that children openly share everything with them. The teaching is very effective, and we do not need to provide much additional support at home. It makes us proud to see our child becoming more interested in studies every day. Thank you to the entire school staff.",
    name: "Parents of Prankit Barhaiya",
    relation: "Junior KG",
    rating: 5,
    initials: "PB",
  },
  {
    quote:
      "The education is excellent, and teachers explain every topic clearly. Activities and competitions help children understand concepts, build confidence, and receive opportunities to showcase their talents on stage.",
    fullQuote:
      "My daughter Yashasvi studies in Class 3 at Little Gems School. The education here is excellent, and teachers explain even the smallest topics very clearly. The school conducts many activities that help children understand concepts better. It also organizes competitions where every child gets an opportunity to perform on stage and showcase their talent. Recognition and gifts further boost their confidence and motivation. A big thank you to the entire school staff.",
    name: "Parents of Yashasvi Thakre",
    relation: "Class 3",
    rating: 5,
    initials: "YT",
  },
  {
    quote:
      "The teachers give individual attention to every child, and the school balances academics, play, and moral values very well. Every day, I can see my daughter learning something new and meaningful.",
    fullQuote:
      "My daughter studies in Class 1, and I am very happy with the education provided here. The teachers give individual attention to every child. The school has a large play area and also focuses on teaching moral values. Every day, I feel that my daughter learns something new and meaningful. I would like to thank the entire school staff for providing excellent education and taking such great care of the children.",
    name: "Mother of Syed Aafiyah Hussain",
    relation: "Class 1",
    rating: 5,
    initials: "SA",
  },
  {
    quote:
      "The teachers are polite, caring, and supportive. Along with education, the school also teaches children good etiquette, manners, and values. We are very happy with Little Gems School.",
    fullQuote:
      "The teachers here are very good and polite. Along with education, the school also teaches children good etiquette and manners. I am very happy with this school.",
    name: "Parents of Purvanshi Mahesh Ahire",
    relation: "Junior KG",
    rating: 5,
    initials: "PA",
  },
];
