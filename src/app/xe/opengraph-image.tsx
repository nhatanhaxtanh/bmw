import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Bảng giá xe BMW chính hãng";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Bảng giá",
    title: "Bảng giá xe BMW mới nhất",
    subtitle:
      "Giá niêm yết, thông số kỹ thuật và ưu đãi từng phiên bản — cập nhật hàng tháng.",
    image: "/images/hero/lineup.jpg",
    fit: "cover",
  });
}
