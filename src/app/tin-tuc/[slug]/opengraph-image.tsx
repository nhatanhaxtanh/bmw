import { formatDate, getArticle, news } from "@/data/news";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

// Xem ghi chú ở src/app/xe/[slug]/opengraph-image.tsx về lý do dùng `alt` cố định.
export const alt = "Tin tức & sự kiện BMW Sài Gòn";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return renderOgImage({
      eyebrow: "Tin tức",
      title: "Tin tức & sự kiện BMW",
    });
  }

  return renderOgImage({
    eyebrow: article.category,
    title: article.title,
    subtitle: `${formatDate(article.date)} · ${article.readingTime} phút đọc`,
    image: article.cover,
    fit: "cover",
  });
}
