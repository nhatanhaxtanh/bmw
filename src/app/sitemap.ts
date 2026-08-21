import type { MetadataRoute } from "next";

import { cars } from "@/data/cars";
import { news } from "@/data/news";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/xe", "/lai-thu", "/khuyen-mai", "/tin-tuc", "/lien-he"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...cars.map((car) => ({
      url: `${site.url}/xe/${car.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...news.map((article) => ({
      url: `${site.url}/tin-tuc/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
