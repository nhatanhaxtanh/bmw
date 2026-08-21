import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/smart-image";
import { Reveal } from "@/components/motion/reveal";
import { formatDate, news, type Article } from "@/data/news";
import { cn } from "@/lib/utils";

export function ArticleCard({
  article,
  featured = false,
  className,
}: {
  article: Article;
  featured?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_50px_-32px_rgba(6,31,61,0.45)]",
        featured && "lg:flex-row",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          featured ? "aspect-16/10 lg:aspect-auto lg:w-[55%]" : "aspect-16/10",
        )}
      >
        <SmartImage
          src={article.cover}
          alt={article.title}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
          placeholderLabel={article.category}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <Badge className="absolute top-3.5 left-3.5 bg-primary/95 text-primary-foreground shadow-sm backdrop-blur">
          {article.category}
        </Badge>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col p-5 sm:p-6",
          featured && "lg:justify-center lg:p-9",
        )}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {article.readingTime} phút đọc
          </span>
        </div>

        <h3
          className={cn(
            "font-heading mt-3 leading-snug font-semibold transition-colors group-hover:text-primary",
            featured ? "text-2xl lg:text-[1.75rem]" : "text-lg",
          )}
        >
          <Link href={`/tin-tuc/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h3>

        <p
          className={cn(
            "mt-3 text-[14px] leading-relaxed text-muted-foreground",
            featured ? "line-clamp-4" : "line-clamp-3",
          )}
        >
          {article.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary">
          Đọc tiếp
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

export function NewsSection() {
  const [featured, ...rest] = news;

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="m-stripe h-3 w-9 rounded-full" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  Tin tức & sự kiện
                </span>
              </div>
              <h2 className="font-heading text-balance-heading mt-4 text-3xl font-bold sm:text-4xl">
                Cập nhật mới nhất từ thế giới BMW
              </h2>
            </div>
            <Button asChild variant="outline" size="lg" className="w-fit rounded-full">
              <Link href="/tin-tuc">
                Xem tất cả tin <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6">
          <Reveal delay={0.05}>
            <ArticleCard article={featured} featured />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(0, 3).map((article, i) => (
              <Reveal key={article.slug} delay={0.06 * (i + 1)}>
                <ArticleCard article={article} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
