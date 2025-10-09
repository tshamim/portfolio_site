import Header from "@/components/header";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shamim.services";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Shamim Ahammed - Product & Tech Leader | Full-Stack Developer",
    template: "%s | Shamim Ahammed",
  },
  description:
    "Fractional CTO and senior full-stack developer helping SaaS, marketplace, and e-commerce teams ship high-performing products with React, Next.js, Node, and Laravel.",
  keywords: [
    "fractional CTO",
    "full-stack developer",
    "Next.js consultant",
    "product strategy",
    "SaaS development",
    "technical leadership",
    "UI UX design",
    "conversion optimization",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Shamim Ahammed - Fractional CTO & Full-Stack Product Leader",
    description:
      "Full-stack development, product leadership, and go-to-market execution for SaaS, e-commerce, and digital products.",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamim Ahammed - Fractional CTO & Full-Stack Developer",
    description:
      "Full-stack development, product leadership, and go-to-market execution for SaaS, e-commerce, and digital products.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/profile.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/profile.jpg", type: "image/jpeg", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getUTCFullYear();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shamim Ahammed",
    jobTitle: "Fractional CTO, Head of Technology & Product, Senior Full-Stack Developer",
    url: siteUrl,
    sameAs: [
      siteUrl,
      "https://www.linkedin.com/in/shamimahammed",
      "https://github.com/shamimahammed",
    ],
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10">
            <div className="container py-8 text-sm text-neutral-400">
              &copy; {currentYear} Shamim Ahammed. All rights
              reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
