import Header from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shamim Ahammed – Product & Tech Leader | Full-Stack Developer",
    template: "%s | Shamim Ahammed",
  },
  description:
    "I help startups and SMBs build and scale web products— from MVP to market—combining 12+ years of full-stack development with product leadership.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Shamim Ahammed – Product & Tech Leader",
    description:
      "MVPs, SaaS, and product leadership. Results-driven, business-minded engineering.",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamim Ahammed – Product & Tech Leader",
    description:
      "MVPs, SaaS, and product leadership. Results-driven, business-minded engineering.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shamim Ahammed",
    jobTitle: "Head of Technology & Product / Senior Full-Stack Developer",
    url: siteUrl,
    sameAs: ["https://www.linkedin.com/"], // add your profile
  };

  return (
    <html lang="en">
      <body>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10">
            <div className="container py-8 text-sm text-neutral-400">
              © {new Date().getFullYear()} Shamim Ahammed. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
