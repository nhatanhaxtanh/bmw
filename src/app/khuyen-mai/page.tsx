import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgePercent, CalendarClock, Check, Gift } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { TestDriveCta } from "@/components/sections/test-drive-cta";
import { LocationSection } from "@/components/google-map";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/smart-image";
import { cars, formatVndShortOrContact } from "@/data/cars";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Chương trình khuyến mãi BMW",
  description:
    "Hỗ trợ tới 100% lệ phí trước bạ, tặng gói bảo dưỡng 3 năm và bảo hiểm vật chất năm đầu cho loạt xe BMW. Ưu đãi áp dụng có giới hạn.",
  alternates: { canonical: "/khuyen-mai" },
};

const promos = [
  {
    slug: "bmw-3-series",
    title: "BMW 3 Series",
    highlight: "Hỗ trợ 100% lệ phí trước bạ",
    value: "Tới 190 triệu đồng",
    perks: [
      "Gói bảo dưỡng chính hãng 3 năm",
      "Bảo hiểm vật chất năm đầu tiên",
      "Bộ phụ kiện chính hãng trị giá 30 triệu",
    ],
  },
  {
    slug: "bmw-x3",
    title: "BMW X3",
    highlight: "Hỗ trợ 100% lệ phí trước bạ",
    value: "Tới 250 triệu đồng",
    perks: [
      "Gói bảo dưỡng chính hãng 3 năm",
      "Phim cách nhiệt cao cấp toàn xe",
      "Thẻ thành viên BMW Excellence Club",
    ],
  },
  {
    slug: "bmw-x5",
    title: "BMW X5",
    highlight: "Hỗ trợ 50% lệ phí trước bạ",
    value: "Tới 200 triệu đồng",
    perks: [
      "Gói phụ kiện trị giá 80 triệu đồng",
      "Bảo hiểm vật chất năm đầu tiên",
      "Ưu tiên giao xe trong 7 ngày",
    ],
  },
  {
    slug: "bmw-i4",
    title: "BMW i4 & iX3",
    highlight: "Miễn lệ phí trước bạ xe điện",
    value: "Theo chính sách hiện hành",
    perks: [
      "Tặng bộ sạc tại nhà 11 kW + lắp đặt",
      "Bảo hành pin 8 năm / 160.000 km",
      "Gói bảo dưỡng 5 năm",
    ],
  },
];

export default function PromotionsPage() {
  const endOfMonth = new Date();
  endOfMonth.setMonth(endOfMonth.getMonth() + 1, 0);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Khuyến mãi", path: "/khuyen-mai" }])}
      />
      <PageHero
        eyebrow="Ưu đãi"
        title="Chương trình khuyến mãi tháng này"
        description="Mức hỗ trợ lớn nhất trong năm dành cho khách hàng ký hợp đồng trong tháng. Số lượng xe áp dụng có giới hạn theo từng phiên bản và màu sắc."
        crumbs={[{ label: "Khuyến mãi" }]}
        image="/images/banners/khuyen-mai.jpg"
        imageLabel="Ảnh banner khuyến mãi"
      >
        <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur">
          <CalendarClock className="size-4 text-bmw-sky" />
          <span className="text-[13.5px] text-white/80">
            Áp dụng đến hết ngày{" "}
            {endOfMonth.toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            {promos.map((promo, i) => {
              const car = cars.find((c) => c.slug === promo.slug);
              return (
                <Reveal key={promo.slug} delay={i * 0.07}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card sm:flex-row">
                    <div className="relative aspect-16/10 shrink-0 bg-muted sm:aspect-auto sm:w-[42%]">
                      <SmartImage
                        src={car?.image ?? "/images/banners/promo.jpg"}
                        alt={promo.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 40vw"
                        placeholderLabel={promo.title}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <Badge className="w-fit bg-destructive text-white">
                        <BadgePercent className="size-3.5" /> Ưu đãi
                      </Badge>
                      <h2 className="font-heading mt-3.5 text-xl font-semibold">
                        {promo.title}
                      </h2>
                      <p className="mt-1.5 text-[15px] font-medium text-primary">
                        {promo.highlight}
                      </p>
                      <p className="mt-0.5 text-[13px] text-muted-foreground">
                        Giá trị {promo.value}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {promo.perks.map((perk) => (
                          <li
                            key={perk}
                            className="flex gap-2.5 text-[13.5px] text-muted-foreground"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                            {perk}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                        {car ? (
                          <div>
                            <p className="text-[11px] text-muted-foreground">
                              Giá từ
                            </p>
                            <p className="font-heading text-lg font-semibold">
                              {formatVndShortOrContact(car.priceFrom)}
                            </p>
                          </div>
                        ) : null}
                        <Button asChild className="rounded-full">
                          <Link href={`/lai-thu?xe=${promo.slug}`}>
                            Nhận ưu đãi <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-primary/20 bg-accent/60 p-6 sm:flex-row sm:items-center">
              <Gift className="size-6 shrink-0 text-primary" />
              <p className="flex-1 text-[14px] leading-relaxed text-foreground/80">
                <strong>Lưu ý:</strong> Các chương trình không áp dụng đồng thời
                với ưu đãi khác. Mức hỗ trợ cụ thể phụ thuộc phiên bản, màu sắc và
                thời điểm ký hợp đồng. Vui lòng liên hệ tư vấn viên để nhận báo giá
                lăn bánh chính xác.
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/lien-he">Liên hệ tư vấn</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <TestDriveCta />
      <LocationSection />
    </>
  );
}
