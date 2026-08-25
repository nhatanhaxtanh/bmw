import { cars, formatVndShortOrContact, getCar } from "@/data/cars";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

// `alt` cố định cho cả route: dùng `generateImageMetadata` để có alt riêng từng
// xe sẽ làm Next bỏ prerender, đẩy 19 ảnh sang sinh lúc có request — bot của
// Facebook/Zalo dễ timeout ở lần quét đầu.
export const alt = "Dòng xe BMW chính hãng tại BMW Sài Gòn";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCar(slug);

  if (!car) {
    return renderOgImage({
      eyebrow: "Dòng xe",
      title: "BMW Sài Gòn",
      image: "/images/hero/lineup.jpg",
      fit: "cover",
    });
  }

  return renderOgImage({
    eyebrow: car.series,
    title: car.name,
    subtitle:
      car.priceFrom == null
        ? car.tagline
        : `Giá từ ${formatVndShortOrContact(car.priceFrom)} — ${car.tagline}`,
    image: car.image,
    fit: car.imageFit ?? "contain",
  });
}
