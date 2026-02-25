import type { MetadataRoute } from "next";

// TODO: Replace with real production domain
const BASE_URL = "https://svgmontreal.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/events`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/membership`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/news`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.6 },
  ];
}
