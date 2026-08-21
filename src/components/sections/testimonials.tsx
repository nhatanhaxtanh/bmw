"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Anh Trần Minh Quân",
    role: "Giám đốc điều hành • BMW 530i M Sport",
    content:
      "Quy trình mua xe rất chuyên nghiệp, tư vấn viên nắm rất chắc sản phẩm và không hề hối thúc. Xe được giao đúng hẹn, thủ tục đăng ký hoàn tất trong ba ngày.",
    rating: 5,
  },
  {
    name: "Chị Nguyễn Thu Hà",
    role: "Chủ doanh nghiệp • BMW X5 xDrive40i",
    content:
      "Tôi ấn tượng nhất với dịch vụ hậu mãi. Mỗi lần mang xe vào bảo dưỡng đều có xe đưa đón, khu chờ thoải mái và báo giá minh bạch trước khi làm.",
    rating: 5,
  },
  {
    name: "Anh Lê Hoàng Nam",
    role: "Kiến trúc sư • BMW i4 eDrive40",
    content:
      "Chuyển từ xe xăng sang xe điện, tôi có rất nhiều câu hỏi. Đội ngũ đã hỗ trợ tận nơi việc lắp bộ sạc tại nhà và hướng dẫn rất kỹ. Rất đáng tiền.",
    rating: 5,
  },
  {
    name: "Chị Phạm Khánh Linh",
    role: "Bác sĩ • BMW X3 xDrive20 M Sport",
    content:
      "Được lái thử tận nhà là điểm cộng rất lớn với người bận rộn như tôi. Sau hai năm sử dụng, xe vẫn vận hành hoàn hảo và mọi lịch bảo dưỡng đều được nhắc trước.",
    rating: 5,
  },
  {
    name: "Anh Vũ Đình Trung",
    role: "Doanh nhân • BMW M4 Competition",
    content:
      "Tìm được một đại lý hiểu về BMW M không dễ. Ở đây các anh em kỹ thuật thật sự am hiểu, tư vấn cả về setup xe cho track day.",
    rating: 5,
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex h-full w-[340px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 sm:w-[400px]">
      <Quote className="size-7 text-primary/25" />
      <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-foreground/85">
        “{t.content}”
      </blockquote>
      <div className="mt-5 flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <figcaption className="mt-4 border-t border-border pt-4">
        <p className="text-sm font-semibold">{t.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="m-stripe h-3 w-9 rounded-full" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Khách hàng nói gì
            </span>
          </div>
          <h2 className="font-heading text-balance-heading mt-4 text-3xl font-bold sm:text-4xl">
            8.500+ khách hàng đã chọn chúng tôi
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Sự hài lòng của quý khách là thước đo duy nhất chúng tôi quan tâm.
          </p>
        </Reveal>
      </div>

      <div
        className="group relative mt-12 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        aria-label="Cảm nhận khách hàng"
      >
        <motion.div
          className={cn(
            "flex w-max gap-5 pl-5",
            "animate-marquee group-hover:[animation-play-state:paused]",
          )}
        >
          {loop.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
