import { MetadataRoute } from "next";
import { indexableRoutes } from "@/lib/site-links";

const baseUrl = "https://formtools.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
