import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Chương trình khuyến mãi BMW";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Ưu đãi tháng này",
    title: "Khuyến mãi BMW chính hãng",
    subtitle:
      "Hỗ trợ lệ phí trước bạ, gói bảo dưỡng và quà tặng phụ kiện — số lượng có hạn.",
    image: "/images/banners/khuyen-mai.jpg",
    fit: "cover",
  });
}
