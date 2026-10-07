import type { Metadata } from "next";
import { salesConfig } from "@/data/site";
export function pageMeta(title: string, description: string, path: string): Metadata {
  const full = `${title} | ${salesConfig.brand}`;
  return { title, description, alternates: { canonical: path },
    openGraph: { title: full, description, url: path, type: "website", locale: salesConfig.locale, siteName: salesConfig.brand, images: ["/images/newxl7.png"] },
    twitter: { card: "summary_large_image", title: full, description, images: ["/images/newxl7.png"] } };
}
