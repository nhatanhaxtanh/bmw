import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/sections/stats-band";
import { CarLineup } from "@/components/sections/car-lineup";
import { WhyUs } from "@/components/sections/why-us";
import { ExperienceBanner } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { TestDriveCta } from "@/components/sections/test-drive-cta";
import { NewsSection } from "@/components/sections/news-section";
import { Faq } from "@/components/sections/faq";
import { LocationSection } from "@/components/google-map";

export const metadata: Metadata = {
  title: "Đại lý ủy quyền BMW chính hãng tại TP. Hồ Chí Minh",
  description:
    "Bảng giá xe BMW mới nhất, đăng ký lái thử miễn phí tận nơi, ưu đãi lệ phí trước bạ và dịch vụ hậu mãi tiêu chuẩn toàn cầu tại BMW Sài Gòn.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <CarLineup limit={6} />
      <WhyUs />
      <ExperienceBanner />
      <Services />
      <Testimonials />
      <TestDriveCta />
      <NewsSection />
      <Faq />
      <LocationSection />
    </>
  );
}
