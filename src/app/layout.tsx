import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { Navbar } from "@/components/layout/Navbar";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.littlegemsschool.in"),
  title: {
    default: "Little Gems School Jabalpur | English-Medium School in Sagda",
    template: "%s | Little Gems School Jabalpur",
  },
  description:
    "Little Gems School is a trusted English-medium school in Sagda, Jabalpur offering Pre-Nursery to Class 5 with activity-based learning, caring teachers, and 18 years of excellence.",
  keywords: [
    "Little Gems School Jabalpur",
    "English medium school Jabalpur",
    "school in Sagda Jabalpur",
    "school near Tilwara Road",
    "pre nursery school Jabalpur",
    "nursery school Jabalpur",
    "primary school Jabalpur",
    "kids school Jabalpur",
    "admission 2026 Jabalpur school",
    "best school in Sagda Jabalpur",
    "English medium school Sagda",
    "affordable school Jabalpur",
    "pre primary school near me Jabalpur",
  ],
  authors: [{ name: "Little Gems School" }],
  creator: "Little Gems School",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.littlegemsschool.in",
    siteName: "Little Gems School",
    title: "Little Gems School Jabalpur - Where Every Child Shines",
    description:
      "Admissions open 2026-27. English-medium school in Sagda, Jabalpur - Pre-Nursery to Class 5. Activity-based learning with 18 years of excellence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Little Gems School Jabalpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Gems School Jabalpur",
    description:
      "English-medium school in Sagda, Jabalpur. Admissions open for 2026-27.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
  alternates: {
    canonical: "https://www.littlegemsschool.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFD400",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col pb-16 lg:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow"
        >
          Skip to main content
        </a>
        <SchemaOrg />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <MobileCTABar />
      </body>
    </html>
  );
}
