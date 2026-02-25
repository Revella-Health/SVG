import type { MetadataRoute } from "next";

// TODO: Replace with real production domain
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://svgmontreal.ca/sitemap.xml",
  };
}
