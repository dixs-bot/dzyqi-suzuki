import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { visibleVehicles } from "@/data/vehicles";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const pages = ["", "/kendaraan", "/konfigurator", "/teknologi", "/desain", "/pengalaman", "/dealer", "/test-drive", "/kontak", "/tentang", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 })),
    ...visibleVehicles().map((v) => ({ url: `${base}/kendaraan/${v.slug}`, lastModified: new Date(), priority: 0.8 })),
  ];
}
