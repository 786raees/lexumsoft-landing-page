import type { Metadata } from "next";
import { COMPANY } from "./constants";

export const siteMetadata: Metadata = {
  title: `${COMPANY.name} | #1 Digital Marketing Agency for Plumbing & HVAC Companies`,
  description:
    "LexumSoft helps plumbing and HVAC companies get more leads, book more jobs, and dominate their local market. Custom websites, Google Ads, SEO, and AI receptionists built exclusively for home service businesses. 90-day ROI guarantee.",
  keywords: [
    "plumbing marketing agency",
    "HVAC marketing agency",
    "plumber website design",
    "HVAC lead generation",
    "home service marketing",
    "plumbing SEO",
    "HVAC Google Ads",
    "plumbing lead generation",
    "AI receptionist plumbing",
    "local SEO plumbing HVAC",
  ],
  authors: [{ name: COMPANY.name, url: COMPANY.url }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  metadataBase: new URL(COMPANY.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${COMPANY.name} | Digital Marketing for Plumbing & HVAC`,
    description:
      "Get more leads, book more jobs, and dominate your local market. Custom marketing solutions built exclusively for plumbing and HVAC companies.",
    url: COMPANY.url,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: COMPANY.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Plumbing & HVAC Marketing`,
    description:
      "Get more leads, book more jobs, and dominate your local market. 90-day ROI guarantee.",
    creator: "@lexumsoft",
  },
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
};
