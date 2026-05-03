import type { Metadata } from "next";
import { schoolInfo } from "@/data/school";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://littlegemsschool.example";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${schoolInfo.name} | ${schoolInfo.tagline}`,
    template: `%s | ${schoolInfo.name}`,
  },
  description:
    "Little Gems School is a warm, English-medium school in Jabalpur offering joyful learning from Pre-Primary to Primary with caring teachers, safe spaces, and activity-based education.",
  applicationName: schoolInfo.name,
  openGraph: {
    title: `${schoolInfo.name} | ${schoolInfo.tagline}`,
    description:
      "Admissions are open for 2026-27 at Little Gems School, Jabalpur for Pre-Nursery to Class 5.",
    url: siteUrl,
    siteName: schoolInfo.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${schoolInfo.name} | ${schoolInfo.tagline}`,
    description:
      "Explore academics, admissions, facilities, events, and contact details for Little Gems School in Jabalpur.",
  },
  keywords: [
    "Little Gems School",
    "school in Jabalpur",
    "English medium school Jabalpur",
    "pre primary school Sagda",
    "primary school Tilwara Road",
    "admissions open 2026 2027",
  ],
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: schoolInfo.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
