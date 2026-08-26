"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/smart-image";

const pillars = [
  {
    value: "50:50",
    label: "Phân bổ trọng lượng lý tưởng giữa hai cầu",
  },
  {
    value: "5 năm",
    label: "Bảo hành chính hãng không giới hạn số km",
  },
  {
    value: "24/7",
    label: "Cứu hộ BMW Roadside Assistance toàn quốc",
  },
];

export function ExperienceBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [0.4, 1, 1, 0.5]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-bmw-950 py-24 sm:py-32"
    >
      <motion.div style={{ y }} className="absolute inset-[-12%] -z-20">
        <SmartImage
          src="/images/banners/driving-pleasure.jpg"
          alt="BMW trên cung đường"
          fill
          sizes="100vw"
          placeholderLabel="Ảnh banner — cảm giác lái"
          className="object-cover"
        />
      </motion.div>
      {/* Lớp phủ đã giảm để lộ rõ chiếc xe; bù lại toàn bộ chữ trong khối để
          trắng đặc (không dùng white/xx) nên vẫn đủ tương phản trên nền sáng. */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-bmw-950/95 via-bmw-950/60 to-bmw-950/30" />

      <motion.div style={{ opacity }} className="container-page relative text-center">
        <span className="text-[11px] font-semibold tracking-[0.24em] text-white uppercase">
          Sheer Driving Pleasure
        </span>
        <h2 className="font-heading text-balance-heading mx-auto mt-5 max-w-4xl text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-6xl">
          Niềm vui thuần khiết sau tay lái
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white sm:text-base">
          Hơn một thế kỷ, BMW theo đuổi duy nhất một điều: biến mỗi hành trình
          thành một trải nghiệm đáng nhớ. Đó là sự cân bằng chính xác giữa kỹ
          thuật đỉnh cao, thiết kế tinh tế và cảm xúc thật sau vô-lăng.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.value} className="text-center">
              <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
                {p.value}
              </p>
              <p className="mx-auto mt-2 max-w-[24ch] text-[13px] leading-snug text-white">
                {p.label}
              </p>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="mt-12 h-12 rounded-full px-8 text-[15px]">
          <Link href="/lai-thu">
            Trải nghiệm ngay hôm nay <ArrowRight className="size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
