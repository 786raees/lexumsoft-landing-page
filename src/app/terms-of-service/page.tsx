import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobilePhoneCTA } from "@/components/layout/MobilePhoneCTA";
import { LegalPageContent } from "@/components/sections/LegalPageContent";
import { TERMS_OF_SERVICE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service | LexumSoft",
  description:
    "Review the terms and conditions that govern your use of the LexumSoft website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar light />
      <main>
        <LegalPageContent page={TERMS_OF_SERVICE} />
      </main>
      <Footer />
      <MobilePhoneCTA />
    </>
  );
}
