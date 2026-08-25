import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Tag, User } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ArticleCard } from "@/components/sections/news-section";
import { ShareButtons } from "@/components/share-buttons";
import { SmartImage } from "@/components/smart-image";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TestDriveForm } from "@/components/test-drive-form";
import { formatDate, getArticle, news, type NewsBlock } from "@/data/news";
import { site } from "@/data/site";
import { JsonLd } from "@/components/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return news.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/tin-tuc/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Không tìm thấy bài viết" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/tin-tuc/${article.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/tin-tuc/${article.slug}`,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      modifiedTime: article.date,
      section: article.category,
      tags: [...article.tags],
      authors: [article.author],
    },
  };
}

function Block({ block }: { block: NewsBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="font-heading mt-12 mb-4 text-2xl font-bold sm:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="mt-5 text-[16px] leading-[1.8] text-foreground/85">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="relative pl-6 text-[16px] leading-[1.8] text-foreground/85 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="my-10 border-l-4 border-primary bg-accent/50 py-6 pr-6 pl-6 sm:pl-8">
          <blockquote className="font-heading text-lg leading-relaxed font-medium text-foreground/90 italic sm:text-xl">
            “{block.text}”
          </blockquote>
          {block.author ? (
            <figcaption className="mt-3 text-sm text-muted-foreground not-italic">
              — {block.author}
            </figcaption>
          ) : null}
        </figure>
      );
    case "image":
      return (
        <figure className="my-10">
          <div className="relative aspect-16/9 overflow-hidden rounded-2xl border border-border bg-muted">
            <SmartImage
              src={block.src}
              alt={block.caption ?? ""}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              placeholderLabel={block.caption ?? "Ảnh minh họa"}
              className="object-cover"
            />
          </div>
          {block.caption ? (
            <figcaption className="mt-3 text-center text-[13px] text-muted-foreground">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
  }
}

export default async function ArticlePage({
  params,
}: PageProps<"/tin-tuc/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = news.filter((n) => n.slug !== article.slug).slice(0, 3);
  const url = `${site.url}/tin-tuc/${article.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema(article),
          breadcrumbSchema([
            { name: "Tin tức", path: "/tin-tuc" },
            { name: article.title, path: `/tin-tuc/${article.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        crumbs={[{ label: "Tin tức", href: "/tin-tuc" }, { label: article.category }]}
        image={article.cover}
        imageLabel={`Ảnh bìa — ${article.category}`}
      >
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[13px] text-white/60">
          <span className="inline-flex items-center gap-2">
            <User className="size-3.5" /> {article.author}
          </span>
          <time
            dateTime={article.date}
            className="inline-flex items-center gap-2"
          >
            <CalendarDays className="size-3.5" /> {formatDate(article.date)}
          </time>
          <span className="inline-flex items-center gap-2">
            <Clock className="size-3.5" /> {article.readingTime} phút đọc
          </span>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
            <article>
              <Reveal>
                <p className="text-[17px] leading-[1.75] font-medium text-foreground/90">
                  {article.excerpt}
                </p>
                <Separator className="my-8" />

                <div>
                  {article.body.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </Reveal>

              <Separator className="my-10" />

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="size-4 text-muted-foreground" />
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ShareButtons url={url} title={article.title} />
              </div>

              <Button asChild variant="outline" className="mt-10 rounded-full">
                <Link href="/tin-tuc">
                  <ArrowLeft className="size-4" /> Quay lại danh sách tin
                </Link>
              </Button>
            </article>

            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-[17px] font-semibold">
                  Đăng ký lái thử
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  Để lại thông tin, chúng tôi sẽ liên hệ trong vòng 30 phút.
                </p>
                <TestDriveForm compact className="mt-5" />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-[17px] font-semibold">
                  Bài viết mới nhất
                </h3>
                <ul className="mt-5 space-y-5">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/tin-tuc/${r.slug}`} className="group flex gap-3.5">
                        <span className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                          <SmartImage
                            src={r.cover}
                            alt={r.title}
                            fill
                            sizes="80px"
                            placeholderLabel={r.category}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="line-clamp-2 text-[13.5px] leading-snug font-medium transition-colors group-hover:text-primary">
                            {r.title}
                          </span>
                          <span className="mt-1.5 block text-[11.5px] text-muted-foreground">
                            {formatDate(r.date)}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Bài viết liên quan
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.07}>
                <ArticleCard article={r} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
