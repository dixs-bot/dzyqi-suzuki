import type { MetadataRoute } from "next";
import { salesConfig } from "@/data/site";
import { visibleVehicles } from "@/data/vehicles";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = salesConfig.url.replace(/\/$/, "");
  const pages = ["", "/kendaraan", "/promo", "/simulasi-kredit", "/test-drive", "/tentang-diki", "/kontak", "/3d", "/dealer", "/teknologi", "/desain", "/pengalaman", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 })),
    ...visibleVehicles().map((v) => ({ url: `${base}/kendaraan/${v.slug}`, lastModified: new Date(), priority: 0.8 })),
  ];
}
