import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Concept } from "./Concept";
import "./concept.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "No Added BS - homepage concept by Lexumsoft",
  description:
    "A homepage concept for No Added BS natural shampoo, built by Lexumsoft from the brand's public content.",
  robots: { index: false, follow: false },
};

export default function NoAddedBsConceptPage() {
  return (
    <div className={`${bricolage.variable} nab`}>
      <Concept />
    </div>
  );
}
