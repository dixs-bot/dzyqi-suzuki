export const salesConfig = {
  name: "Diki",
  brand: "Diki NJS Ahmad Yani",
  title: "DIKI NJS AHMAD YANI — Sales Consultant Suzuki",
  role: "Sales Consultant Suzuki",
  dealerName: "SUZUKI NJS AHMAD YANI",
  description: "Promo, harga, simulasi kredit, dan test drive Suzuki bersama Diki, Sales Consultant Suzuki di NJS Ahmad Yani. Situs independen, bukan situs resmi Suzuki Indonesia.",
  whatsapp: { display: "085189976233", number: "6285189976233", url: "https://wa.me/6285189976233" },
  floatingLabel: "CHAT DENGAN DIKI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
  disclaimer: "Situs ini bukan situs resmi PT Suzuki Indonesia Sales. Ini adalah situs pribadi konsultan penjualan. Merek dan logo Suzuki adalah milik pemiliknya.",
} as const;
