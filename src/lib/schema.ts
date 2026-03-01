import { COMPANY, FAQ_ITEMS, SERVICES } from "./constants";
import type { Project } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: COMPANY.url,
    logo: `${COMPANY.url}/logo.png`,
    description: COMPANY.tagline,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/lexumsoft",
      "https://www.linkedin.com/company/lexumsoft",
      "https://twitter.com/lexumsoft",
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.url}/#business`,
    name: COMPANY.name,
    description:
      "Digital marketing agency specializing in plumbing and HVAC companies. We help home service businesses generate more leads, book more jobs, and dominate their local market.",
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function generateServiceSchemas() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    description: service.description,
    areaServed: {
      "@type": "Country",
      name: "US",
    },
  }));
}

export function generateCaseStudySchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/portfolio/${project.slug}`,
    },
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
