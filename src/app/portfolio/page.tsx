import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobilePhoneCTA } from "@/components/layout/MobilePhoneCTA";
import { PortfolioHero } from "@/components/sections/PortfolioHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio | LexumSoft - Plumbing & HVAC Marketing Results",
  description:
    "Browse 50+ case studies showing how LexumSoft helps plumbing and HVAC companies generate more leads, book more jobs, and dominate their local market.",
  openGraph: {
    title: "Portfolio | LexumSoft - Plumbing & HVAC Marketing Results",
    description:
      "Browse 50+ case studies showing how LexumSoft helps plumbing and HVAC companies generate more leads.",
    url: "https://www.lexumsoft.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <FinalCTA />
      </main>

      <Footer />
      <MobilePhoneCTA />
    </>
  );
}
