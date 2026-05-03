import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.littlegemsschool.in";
  const pages = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/academics", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/admissions", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/facilities", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/gallery", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/events", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
  ];

  return pages.map(({ path, priority, changeFreq }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
