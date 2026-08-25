import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { NewsList } from "@/components/news-list";
import { LocationSection } from "@/components/google-map";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tin tức & sự kiện BMW",
  description:
    "Cập nhật tin ra mắt sản phẩm, chương trình khuyến mãi, sự kiện lái thử và kiến thức sử dụng, bảo dưỡng xe BMW từ đại lý ủy quyền chính hãng.",
  alternates: { canonical: "/tin-tuc" },
};

export default function NewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Tin tức", path: "/tin-tuc" }])} />
      <PageHero
        eyebrow="Tin tức"
        title="Tin tức & sự kiện"
        description="Ra mắt sản phẩm, ưu đãi mới nhất, sự kiện trải nghiệm và những kiến thức hữu ích dành cho chủ xe BMW."
        crumbs={[{ label: "Tin tức" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <NewsList />
        </div>
      </section>

      <LocationSection />
    </>
  );
}
