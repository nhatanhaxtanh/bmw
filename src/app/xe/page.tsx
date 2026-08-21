import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { CarLineup } from "@/components/sections/car-lineup";
import { Faq } from "@/components/sections/faq";
import { TestDriveCta } from "@/components/sections/test-drive-cta";
import { cars, formatVnd } from "@/data/cars";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bảng giá xe BMW mới nhất",
  description:
    "Cập nhật bảng giá niêm yết toàn bộ dòng xe BMW: 3 Series, 5 Series, 7 Series, X3, X5, X7, i4, iX3 và BMW M tại đại lý ủy quyền chính hãng.",
};

export default function CarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dòng xe"
        title="Bảng giá xe BMW chính hãng"
        description="Giá niêm yết đã bao gồm VAT, chưa bao gồm lệ phí trước bạ và các chi phí đăng ký. Liên hệ đại lý để nhận báo giá lăn bánh chi tiết và ưu đãi mới nhất."
        crumbs={[{ label: "Dòng xe" }]}
        image="/images/hero/lineup.jpg"
        imageLabel="Ảnh dải sản phẩm BMW"
      />

      <CarLineup
        eyebrow="Toàn bộ sản phẩm"
        title="Chọn chiếc BMW phù hợp với bạn"
        description="Lọc theo phân khúc để tìm nhanh mẫu xe quý khách quan tâm."
        showAllLink={false}
      />

      <section className="border-t border-border bg-muted/40 py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Bảng giá niêm yết theo phiên bản
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Cập nhật tháng {new Date().getMonth() + 1}/{new Date().getFullYear()}.
              Giá có thể thay đổi tùy thời điểm và chương trình khuyến mãi.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/60">
                    <th className="px-5 py-4 text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      Dòng xe
                    </th>
                    <th className="px-5 py-4 text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      Phiên bản
                    </th>
                    <th className="px-5 py-4 text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      Động cơ
                    </th>
                    <th className="px-5 py-4 text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      Công suất
                    </th>
                    <th className="px-5 py-4 text-right text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      Giá niêm yết
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cars.flatMap((car) =>
                    car.variants.map((variant, vi) => (
                      <tr
                        key={`${car.slug}-${variant.name}`}
                        className="border-b border-border/70 last:border-0 hover:bg-accent/40"
                      >
                        <td className="px-5 py-4">
                          {vi === 0 ? (
                            <Link
                              href={`/xe/${car.slug}`}
                              className="font-medium hover:text-primary"
                            >
                              {car.name}
                            </Link>
                          ) : (
                            <span className="text-muted-foreground/50">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4">{variant.name}</td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {variant.engine}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {variant.power}
                        </td>
                        <td className="px-5 py-4 text-right font-semibold whitespace-nowrap text-primary">
                          {formatVnd(variant.price)}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <TestDriveCta />
      <Faq />
    </>
  );
}
