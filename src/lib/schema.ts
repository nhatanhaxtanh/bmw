import type { Article } from "@/data/news";
import type { Car } from "@/data/cars";
import { site } from "@/data/site";

/** Node ID cố định để các schema khác trỏ về cùng một pháp nhân đại lý. */
export const DEALER_ID = `${site.url}/#dealer`;
const WEBSITE_ID = `${site.url}/#website`;

/** Chuyển đường dẫn nội bộ thành URL tuyệt đối — schema.org yêu cầu URL đầy đủ. */
export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${site.url}${path}`;
}

const telephone = site.hotlineHref.replace("tel:", "");

const ALL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/**
 * Đại lý — nguồn cho panel doanh nghiệp trên Google (địa chỉ, giờ mở cửa,
 * hotline). Nhúng một lần ở layout gốc nên có mặt trên mọi trang.
 */
export function dealerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": DEALER_ID,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    slogan: site.taglineVi,
    url: site.url,
    logo: absoluteUrl("/images/logo/bmw-roundel.webp"),
    image: absoluteUrl("/images/showroom/showroom-1.jpg"),
    telephone,
    email: site.email,
    priceRange: "1.500.000.000₫ - 7.000.000.000₫",
    currenciesAccepted: "VND",
    paymentAccepted: "Tiền mặt, chuyển khoản, trả góp ngân hàng",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressParts.street,
      addressLocality: site.addressParts.district,
      addressRegion: site.addressParts.city,
      addressCountry: "VN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ALL_DAYS,
        opens: "08:00",
        closes: "18:00",
      },
    ],
    brand: { "@type": "Brand", name: "BMW" },
    areaServed: {
      "@type": "City",
      name: "Thành phố Hồ Chí Minh",
    },
    sameAs: Object.values(site.socials),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "vi-VN",
    publisher: { "@id": DEALER_ID },
  };
}

/**
 * Trang chi tiết xe — cho phép Google hiển thị khoảng giá ngay trên kết quả
 * tìm kiếm. Xe chưa công bố giá thì bỏ hẳn `offers` thay vì báo giá 0đ.
 */
export function carSchema(car: Car) {
  const url = `${site.url}/xe/${car.slug}`;
  const prices = [
    ...(car.priceFrom == null ? [] : [car.priceFrom]),
    ...car.variants.map((v) => v.price).filter((p): p is number => p != null),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Car",
    "@id": `${url}#product`,
    name: car.name,
    description: car.description,
    url,
    image: [car.image, ...car.gallery.exterior].map(absoluteUrl),
    brand: { "@type": "Brand", name: "BMW" },
    model: car.name.replace(/^BMW\s+/, ""),
    manufacturer: { "@type": "Organization", name: "BMW AG" },
    ...(prices.length > 0
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "VND",
            lowPrice: Math.min(...prices),
            highPrice: Math.max(...prices),
            offerCount: car.variants.length,
            availability: "https://schema.org/InStock",
            url,
            seller: { "@id": DEALER_ID },
          },
        }
      : {}),
  };
}

export function articleSchema(article: Article) {
  const url = `${site.url}/tin-tuc/${article.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    // Google cắt headline ở 110 ký tự.
    headline: article.title.slice(0, 110),
    description: article.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [absoluteUrl(article.cover)],
    datePublished: article.date,
    dateModified: article.date,
    articleSection: article.category,
    keywords: article.tags.join(", "),
    inLanguage: "vi-VN",
    author: {
      "@type": "Organization",
      name: article.author,
      url: site.url,
    },
    // Ghi đầy đủ thay vì tham chiếu @id — rich result cho Article của Google
    // đòi publisher có name và logo ngay trong node.
    publisher: {
      "@type": "Organization",
      "@id": DEALER_ID,
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo/bmw-roundel.webp"),
      },
    },
  };
}

export type Crumb = { name: string; path?: string };

/** Luôn tự thêm "Trang chủ" ở đầu chuỗi breadcrumb. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  const items = [{ name: "Trang chủ", path: "/" }, ...crumbs];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
    })),
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/** Danh sách xe trên trang bảng giá — giúp Google hiểu thứ tự và phạm vi dải sản phẩm. */
export function carListSchema(list: Car[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bảng giá xe BMW",
    numberOfItems: list.length,
    itemListElement: list.map((car, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: car.name,
      url: `${site.url}/xe/${car.slug}`,
    })),
  };
}
