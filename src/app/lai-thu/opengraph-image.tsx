import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Đăng ký lái thử xe BMW miễn phí";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Miễn phí tận nơi",
    title: "Đăng ký lái thử xe BMW",
    subtitle:
      "Chọn mẫu xe, chọn thời gian — chúng tôi mang xe tới tận địa chỉ của quý khách.",
    image: "/images/hero/lai-thu.jpg",
    fit: "cover",
  });
}
