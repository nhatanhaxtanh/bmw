"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/smart-image";
import { formatVndShort } from "@/data/cars";
import { cn } from "@/lib/utils";

const slides = [
  {
    slug: "bmw-5-series",
    eyebrow: "Hoàn toàn mới",
    title: "BMW 5 Series",
    subtitle: "Sedan doanh nhân định nghĩa lại đẳng cấp",
    description:
      "BMW Interaction Bar, công nghệ Mild Hybrid 48V và Highway Assistant — thế hệ thứ tám đưa chuẩn mực xe sang lên một tầm cao mới.",
    price: 2_499_000_000,
    image: "/images/hero/hero-5-series.jpg",
  },
  {
    slug: "bmw-x7",
    eyebrow: "SAV đầu bảng",
    title: "BMW X7",
    subtitle: "Bảy chỗ ngồi, một đẳng cấp",
    description:
      "Không gian ba hàng ghế thương gia, trần kính Sky Lounge và hệ thống treo khí nén Executive Drive Pro.",
    price: 5_999_000_000,
    image: "/images/hero/hero-x7.jpg",
  },
  {
    slug: "bmw-i4",
    eyebrow: "Thuần điện",
    title: "BMW i4",
    subtitle: "Tương lai vẫn mang DNA lái của BMW",
    description:
      "340 mã lực, quãng đường tới 590 km và âm thanh IconicSounds Electric do Hans Zimmer thiết kế riêng.",
    price: 3_299_000_000,
    image: "/images/hero/hero-i4.jpg",
  },
];

const AUTOPLAY_MS = 7000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const slide = slides[index];

  return (
    <section
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-bmw-950 pt-24 pb-16 sm:min-h-screen sm:pb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ảnh nền */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.slug}
          className="absolute inset-0 -z-20"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.9 }, scale: { duration: 8, ease: "linear" } }}
        >
          <SmartImage
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            placeholderLabel={`Ảnh hero — ${slide.title}`}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Lớp phủ gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-bmw-950/92 via-bmw-950/70 to-bmw-950/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-linear-to-t from-bmw-950 to-transparent" />

      <div className="container-page relative w-full">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.slug}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3">
                  <span className="m-stripe h-3.5 w-10 rounded-full" />
                  <span className="text-[11px] font-semibold tracking-[0.24em] text-bmw-sky uppercase">
                    {slide.eyebrow}
                  </span>
                </div>

                <h1 className="font-heading text-balance-heading mt-5 text-5xl leading-[1.02] font-bold text-white sm:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="mt-3 text-xl font-light text-white/90 sm:text-2xl">
                  {slide.subtitle}
                </p>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65">
                  {slide.description}
                </p>

                <p className="mt-7 text-sm text-white/60">
                  Giá bán từ{" "}
                  <span className="font-heading text-2xl font-semibold text-white">
                    {formatVndShort(slide.price)}
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="h-12 rounded-full px-7 text-[15px]">
                    <Link href="/lai-thu">
                      Đăng ký lái thử <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-white/30 bg-white/5 px-7 text-[15px] text-white backdrop-blur hover:bg-white/15 hover:text-white"
                  >
                    <Link href={`/xe/${slide.slug}`}>
                      <Play className="size-4" /> Khám phá {slide.title}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Điều hướng slide */}
          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex w-full gap-3 lg:max-w-sm">
              {slides.map((s, i) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Chuyển tới ${s.title}`}
                  aria-current={i === index}
                  className="group flex-1 text-left"
                >
                  <span className="relative block h-0.5 w-full overflow-hidden rounded-full bg-white/25">
                    <motion.span
                      key={`${s.slug}-${i === index}-${index}`}
                      className="absolute inset-y-0 left-0 bg-white"
                      initial={{ width: i === index ? "0%" : "0%" }}
                      animate={{ width: i === index ? "100%" : "0%" }}
                      transition={{
                        duration: i === index && !paused ? AUTOPLAY_MS / 1000 : 0.3,
                        ease: "linear",
                      }}
                    />
                  </span>
                  <span
                    className={cn(
                      "mt-2.5 block text-[11px] font-medium tracking-[0.14em] uppercase transition-colors",
                      i === index
                        ? "text-white"
                        : "text-white/45 group-hover:text-white/80",
                    )}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Slide trước"
                className="grid size-11 place-items-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Slide kế tiếp"
                className="grid size-11 place-items-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
