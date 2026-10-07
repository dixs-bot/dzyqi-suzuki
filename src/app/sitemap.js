import { getSiteUrl } from "@/lib/site";
import { getVehicleSlugs } from "@/lib/vehicles";

export default function sitemap() {
  const base = getSiteUrl();
  const staticPaths = [
    "",
    "/vehicles",
    "/technology",
    "/design",
    "/experience",
    "/about",
    "/contact",
    "/test-drive",
    "/dealer",
    "/privacy",
    "/terms",
  ];
  const vehiclePaths = getVehicleSlugs().flatMap((slug) => [
    `/vehicles/${slug}`,
    `/configurator/${slug}`,
  ]);
  return [...staticPaths, ...vehiclePaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-10-07"),
  }));
}
