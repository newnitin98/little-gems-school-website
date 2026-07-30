export type NavigationLink = {
  label: string;
  href: string;
};

export const navigationLinks: NavigationLink[] = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  ...navigationLinks,
];
