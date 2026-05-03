import { schoolInfo } from "@/data/school";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.littlegemsschool.in/#school",
        name: "Little Gems School",
        alternateName: "Little Gems School Jabalpur",
        url: "https://www.littlegemsschool.in",
        logo: "https://www.littlegemsschool.in/logo-full.svg",
        image: "https://www.littlegemsschool.in/og-image.png",
        description:
          "Little Gems School is a trusted English-medium school in Sagda, Jabalpur offering Pre-Nursery to Class 5 with activity-based learning and 18 years of excellence.",
        foundingDate: "2006",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tilwara Road, Sagda",
          addressLocality: "Jabalpur",
          addressRegion: "Madhya Pradesh",
          postalCode: "482002",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "23.1815",
          longitude: "79.9864",
        },
        telephone: "+918839225491",
        openingHours: "Mo-Sa 08:00-14:30",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "School Programmes",
          itemListElement: [
            { "@type": "Course", name: "Pre-Nursery", description: "Age 2.5-3.5 years" },
            { "@type": "Course", name: "Nursery", description: "Age 3.5-4.5 years" },
            { "@type": "Course", name: "KG", description: "Age 4.5-5.5 years" },
            { "@type": "Course", name: "Class 1 to 3", description: "Age 5.5-8 years" },
            { "@type": "Course", name: "Class 4 to 5", description: "Age 8-10 years" },
          ],
        },
        sameAs: schoolInfo.socialLinks.map((link) => link.href),
      },
      {
        "@type": "WebSite",
        "@id": "https://www.littlegemsschool.in/#website",
        url: "https://www.littlegemsschool.in",
        name: "Little Gems School",
        publisher: { "@id": "https://www.littlegemsschool.in/#school" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.littlegemsschool.in/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
