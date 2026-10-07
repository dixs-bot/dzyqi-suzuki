import type { MetadataRoute } from "next";
import { salesConfig } from "@/data/site";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${salesConfig.url.replace(/\/$/, "")}/sitemap.xml` };
}
