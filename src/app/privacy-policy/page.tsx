import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobilePhoneCTA } from "@/components/layout/MobilePhoneCTA";
import { LegalPageContent } from "@/components/sections/LegalPageContent";
import { PRIVACY_POLICY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | LexumSoft",
  description:
    "Learn how LexumSoft collects, uses, and protects your personal information when you visit our website or use our services.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar light />
      <main>
        <LegalPageContent page={PRIVACY_POLICY} />
      </main>
      <Footer />
      <MobilePhoneCTA />
    </>
  );
}
