import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollAnimations from "@/components/ScrollAnimations";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Suzuki Diki — Sales Consultant Suzuki", template: "%s | Suzuki Diki" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: siteConfig.locale, siteName: siteConfig.name, title: "Suzuki Diki — Sales Consultant Suzuki", description: siteConfig.description, url: "/", images: [{ url: "/images/newxl7.png", width: 1200, height: 630, alt: "Suzuki XL7" }] },
  twitter: { card: "summary_large_image", title: "Suzuki Diki", description: siteConfig.description, images: ["/images/newxl7.png"] },
  icons: { icon: [{ url: "/favicon.png", sizes: "32x32" }, { url: "/icon-192.png", sizes: "192x192" }], apple: "/icon-192.png" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#FFFFFF", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "id-ID" },
    { "@type": "Person", name: siteConfig.consultant, jobTitle: "Sales Consultant Suzuki", telephone: `+${siteConfig.whatsapp.international}`, url: siteConfig.url },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:p-3">Lewati ke konten</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollAnimations />
        <CustomCursor />
      </body>
    </html>
  );
}
