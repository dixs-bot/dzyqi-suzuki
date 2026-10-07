export const siteConfig = {
  name: "Suzuki Diki",
  tagline: "Sales Consultant Suzuki",
  consultant: "Diki",
  consultantTitle: "Diki — Sales Consultant Suzuki",
  description:
    "Suzuki Diki — konsultasi, test drive, dan informasi mobil Suzuki bersama Diki, Sales Consultant Suzuki. Situs independen, bukan situs resmi Suzuki Indonesia.",
  whatsapp: { local: "085189976233", international: "6285189976233", url: "https://wa.me/6285189976233" },
  floatingLabel: "CHAT DENGAN DIKI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
  disclaimer: "Situs ini bukan situs resmi PT Suzuki Indonesia Sales. Merek dan logo Suzuki adalah milik pemiliknya masing-masing.",
} as const;
