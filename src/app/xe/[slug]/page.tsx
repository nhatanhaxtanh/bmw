import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Download, Phone, Sparkles } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { CarGallery, ColorPicker } from "@/components/car-gallery";
import { CarCard } from "@/components/car-card";
import { Reveal } from "@/components/motion/reveal";
import { TestDriveCta } from "@/components/sections/test-drive-cta";
import { LocationSection } from "@/components/google-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cars, formatVnd, formatVndShort, getCar } from "@/data/cars";
import { site } from "@/data/site";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/xe/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return { title: "Không tìm thấy dòng xe" };

  return {
    title: `${car.name} — Giá bán, thông số & ưu đãi`,
    description: `${car.name}: ${car.tagline}. Giá từ ${formatVndShort(
      car.priceFrom,
    )}. Xem thông số kỹ thuật đầy đủ và đăng ký lái thử miễn phí tại ${site.name}.`,
    openGraph: { title: car.name, description: car.tagline },
  };
}

export default async function CarDetailPage({ params }: PageProps<"/xe/[slug]">) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  const related = cars.filter((c) => c.slug !== car.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={car.series}
        title={car.name}
        description={car.tagline}
        crumbs={[{ label: "Dòng xe", href: "/xe" }, { label: car.name }]}
        image={car.image}
        imageLabel={`Ảnh hero — ${car.name}`}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur">
            <p className="text-[11px] tracking-wide text-white/55 uppercase">
              Giá niêm yết từ
            </p>
            <p className="font-heading text-2xl font-semibold text-white">
              {formatVnd(car.priceFrom)}
            </p>
          </div>
          <Button asChild size="lg" className="h-12 rounded-full px-7">
            <Link href={`/lai-thu?xe=${car.slug}`}>
              Đăng ký lái thử <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-white/30 bg-white/5 px-7 text-white backdrop-blur hover:bg-white/15 hover:text-white"
          >
            <a href={site.hotlineHref}>
              <Phone className="size-4" /> {site.hotline}
            </a>
          </Button>
        </div>

        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/12 pt-8 sm:grid-cols-4">
          {car.quickSpecs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-[10.5px] tracking-[0.12em] text-white/50 uppercase">
                {spec.label}
              </dt>
              <dd className="font-heading mt-1.5 text-[15px] font-semibold text-white">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Tổng quan + gallery */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <Reveal>
              <CarGallery images={car.gallery} name={car.name} />
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-3">
                  <span className="m-stripe h-3 w-9 rounded-full" />
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                    Tổng quan
                  </span>
                </div>
                <h2 className="font-heading text-balance-heading mt-4 text-2xl font-bold sm:text-3xl">
                  {car.tagline}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  {car.description}
                </p>

                <h3 className="mt-9 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Màu ngoại thất
                </h3>
                <div className="mt-4">
                  <ColorPicker colors={car.colors} />
                </div>

                <div className="mt-9 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href={`/lai-thu?xe=${car.slug}`}>Đăng ký lái thử</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                  >
                    <a href={site.zaloHref} target="_blank" rel="noreferrer">
                      <Download className="size-4" /> Nhận báo giá lăn bánh
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Điểm nổi bật */}
      <section className="border-y border-border bg-muted/40 py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="m-stripe h-3 w-9 rounded-full" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                Điểm nổi bật
              </span>
            </div>
            <h2 className="font-heading text-balance-heading mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Những gì làm nên {car.name}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {car.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <span className="font-heading text-3xl font-bold text-primary/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading mt-3 text-lg font-semibold">
                    {h.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Phiên bản & giá */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="m-stripe h-3 w-9 rounded-full" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                Phiên bản & giá bán
              </span>
            </div>
            <h2 className="font-heading mt-4 text-3xl font-bold sm:text-4xl">
              Chọn phiên bản phù hợp
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {car.variants.map((variant, i) => (
              <Reveal key={variant.name} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                  {variant.highlight ? (
                    <Badge variant="secondary" className="w-fit">
                      {variant.highlight}
                    </Badge>
                  ) : null}
                  <h3 className="font-heading mt-3 text-xl font-semibold">
                    {variant.name}
                  </h3>
                  <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {variant.engine}
                    </li>
                    <li className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {variant.power}
                    </li>
                  </ul>
                  <div className="mt-auto border-t border-border pt-5">
                    <p className="text-[11px] text-muted-foreground">
                      Giá niêm yết
                    </p>
                    <p className="font-heading mt-0.5 text-xl font-semibold text-primary">
                      {formatVnd(variant.price)}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-4 w-full rounded-full"
                    >
                      <Link href={`/lai-thu?xe=${car.slug}`}>Nhận tư vấn</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/20 bg-accent/60 p-5">
              <Sparkles className="mt-0.5 size-4.5 shrink-0 text-primary" />
              <p className="text-[13.5px] leading-relaxed text-foreground/80">
                Giá trên là giá niêm yết đã bao gồm VAT, chưa gồm lệ phí trước bạ
                và chi phí đăng ký. Liên hệ hotline{" "}
                <a href={site.hotlineHref} className="font-semibold text-primary">
                  {site.hotline}
                </a>{" "}
                để nhận báo giá lăn bánh và ưu đãi áp dụng trong tháng.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Thông số kỹ thuật */}
      <section className="border-t border-border bg-muted/40 py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="m-stripe h-3 w-9 rounded-full" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                Thông số kỹ thuật
              </span>
            </div>
            <h2 className="font-heading mt-4 text-3xl font-bold sm:text-4xl">
              Chi tiết {car.name}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {car.specs.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.07}>
                <div className="h-full overflow-hidden rounded-2xl border border-border bg-card">
                  <h3 className="font-heading border-b border-border bg-muted/60 px-6 py-4 text-[15px] font-semibold">
                    {group.group}
                  </h3>
                  <dl className="divide-y divide-border">
                    {group.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-baseline justify-between gap-4 px-6 py-3.5"
                      >
                        <dt className="text-[13px] text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="text-right text-[13.5px] font-medium">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestDriveCta defaultCar={car.slug} />

      {/* Xe liên quan */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                Có thể quý khách quan tâm
              </h2>
              <Button asChild variant="outline" className="w-fit rounded-full">
                <Link href="/xe">
                  Xem toàn bộ dòng xe <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.07}>
                <CarCard car={c} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
