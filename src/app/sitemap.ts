import type { MetadataRoute } from "next";

import { cars } from "@/data/cars";
import { news } from "@/data/news";
import { site } from "@/data/site";

/**
 * Ngày cập nhật nội dung các trang tĩnh. Cập nhật tay khi sửa nội dung thật —
 * không dùng `new Date()` vì như vậy mỗi lần build lại báo "vừa sửa" cho toàn
 * bộ trang, Google sẽ học được rằng tín hiệu này vô nghĩa và bỏ qua nó.
 */
const STATIC_UPDATED = new Date("2026-08-25");

/** Bài mới nhất đại diện cho lần cập nhật gần nhất của trang chủ và mục tin tức. */
const latestNews = news.reduce(
  (latest, article) => (article.date > latest ? article.date : latest),
  news[0].date,
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(latestNews),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/xe`,
      lastModified: STATIC_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/lai-thu`,
      lastModified: STATIC_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/khuyen-mai`,
      lastModified: STATIC_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${site.url}/tin-tuc`,
      lastModified: new Date(latestNews),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${site.url}/lien-he`,
      lastModified: STATIC_UPDATED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // Trang xe không có ngày sửa riêng trong dữ liệu — bỏ trống `lastModified`
    // thay vì bịa một mốc thời gian sai.
    ...cars.map((car) => ({
      url: `${site.url}/xe/${car.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...news.map((article) => ({
      url: `${site.url}/tin-tuc/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
