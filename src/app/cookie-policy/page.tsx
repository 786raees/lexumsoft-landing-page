import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobilePhoneCTA } from "@/components/layout/MobilePhoneCTA";
import { LegalPageContent } from "@/components/sections/LegalPageContent";
import { COOKIE_POLICY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cookie Policy | LexumSoft",
  description:
    "Learn about the cookies and tracking technologies used on the LexumSoft website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar light />
      <main>
        <LegalPageContent page={COOKIE_POLICY} />
      </main>
      <Footer />
      <MobilePhoneCTA />
    </>
  );
}
