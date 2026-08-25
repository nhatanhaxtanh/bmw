import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { TestDriveCta } from "@/components/sections/test-drive-cta";
import { LocationSection } from "@/components/google-map";
import { Faq } from "@/components/sections/faq";
import { cars } from "@/data/cars";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Đăng ký lái thử xe BMW miễn phí",
  description:
    "Đăng ký lái thử xe BMW miễn phí tận nơi tại TP.HCM. Chọn dòng xe, thời gian và địa điểm — tư vấn viên xác nhận trong vòng 30 phút.",
  alternates: { canonical: "/lai-thu" },
};

export default async function TestDrivePage({
  searchParams,
}: PageProps<"/lai-thu">) {
  const sp = await searchParams;
  const raw = sp?.xe;
  const requested = Array.isArray(raw) ? raw[0] : raw;
  const defaultCar = cars.some((c) => c.slug === requested) ? requested : undefined;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Lái thử", path: "/lai-thu" }])} />
      <PageHero
        eyebrow="Trải nghiệm"
        title="Đăng ký lái thử miễn phí"
        description="Không có cách nào hiểu một chiếc BMW tốt hơn việc tự mình cầm lái. Chúng tôi mang xe tới tận nơi quý khách chọn, hoàn toàn miễn phí."
        crumbs={[{ label: "Lái thử" }]}
        image="/images/hero/lai-thu.jpg"
        imageLabel="Ảnh lái thử"
      />

      <TestDriveCta defaultCar={defaultCar} />
      <Faq />
      <LocationSection />
    </>
  );
}
