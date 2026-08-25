import { site } from "@/data/site";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = `${site.name} — Đại lý ủy quyền BMW chính hãng`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Đại lý ủy quyền",
    title: "BMW Sài Gòn",
    subtitle:
      "Bảng giá xe mới nhất, lái thử miễn phí tận nơi và xưởng dịch vụ tiêu chuẩn toàn cầu.",
    image: "/images/hero/hero-5-series.jpg",
    fit: "cover",
  });
}
