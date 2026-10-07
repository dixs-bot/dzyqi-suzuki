import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Diki NJS Ahmad Yani", short_name: "Diki NJS", description: "Sales Consultant Suzuki", start_url: "/", display: "standalone", background_color: "#FFFFFF", theme_color: "#0068FF", icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }] };
}
