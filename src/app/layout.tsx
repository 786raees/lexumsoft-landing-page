import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { siteMetadata } from "@/lib/metadata";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FAF8F4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <elevenlabs-convai agent-id="agent_8201kjkb2rv3etbsbe3sznw8ys1k"></elevenlabs-convai>
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </body>
    </html>
  );
}
