import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import { getAllSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getAllSlugs();

  return [
    {
      url: COMPANY.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${COMPANY.url}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectSlugs.map((slug) => ({
      url: `${COMPANY.url}/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
