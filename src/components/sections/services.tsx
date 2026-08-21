import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SmartImage } from "@/components/smart-image";
import { Reveal } from "@/components/motion/reveal";

const services = [
  {
    title: "Bán xe mới chính hãng",
    description:
      "Hơn 20 xe sẵn kho đủ phiên bản và màu sắc, giao xe nhanh trong 3–7 ngày.",
    image: "/images/services/ban-xe.jpg",
    href: "/xe",
  },
  {
    title: "Bảo dưỡng & sửa chữa",
    description:
      "Xưởng 32 khoang, thiết bị chẩn đoán ISTA nguyên bản, đặt lịch trực tuyến.",
    image: "/images/services/bao-duong.jpg",
    href: "/lien-he",
  },
  {
    title: "Phụ tùng & phụ kiện",
    description:
      "BMW Original Parts và BMW M Performance Parts chính hãng, bảo hành 2 năm.",
    image: "/images/services/phu-tung.jpg",
    href: "/lien-he",
  },
  {
    title: "Hỗ trợ tài chính",
    description:
      "Vay tới 80% giá trị xe, lãi suất ưu đãi, duyệt hồ sơ trong 24 giờ làm việc.",
    image: "/images/services/tai-chinh.jpg",
    href: "/lien-he",
  },
];

export function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="m-stripe h-3 w-9 rounded-full" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Dịch vụ
            </span>
          </div>
          <h2 className="font-heading text-balance-heading mt-4 text-3xl font-bold sm:text-4xl">
            Trọn vẹn hệ sinh thái BMW dưới một mái nhà
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Từ lúc chọn xe tới từng kỳ bảo dưỡng, mọi nhu cầu của quý khách đều
            được phục vụ tại cùng một địa chỉ.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <Link
                href={service.href}
                className="group relative flex h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-border"
              >
                <SmartImage
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholderLabel={service.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bmw-950 via-bmw-950/55 to-transparent transition-opacity group-hover:from-bmw-950 group-hover:via-bmw-950/70" />

                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg leading-snug font-semibold text-white">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="mt-0.5 size-4.5 shrink-0 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                  <p className="mt-2.5 max-h-0 overflow-hidden text-[13px] leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
