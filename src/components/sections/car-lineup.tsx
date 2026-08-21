"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { CarCard } from "@/components/car-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { carCategories, cars, type CarCategory } from "@/data/cars";
import { cn } from "@/lib/utils";

export function CarLineup({
  limit,
  title = "Khám phá dải sản phẩm BMW",
  eyebrow = "Dòng xe",
  description = "Từ sedan thể thao tới SAV bảy chỗ và những mẫu xe thuần điện — mỗi chiếc BMW đều được tạo ra cho một hành trình riêng.",
  showAllLink = true,
}: {
  limit?: number;
  title?: string;
  eyebrow?: string;
  description?: string;
  showAllLink?: boolean;
}) {
  const [active, setActive] = useState<CarCategory | "all">("all");

  const filtered = cars.filter(
    (car) => active === "all" || car.category.includes(active),
  );
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="dong-xe" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="m-stripe h-3 w-9 rounded-full" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  {eyebrow}
                </span>
              </div>
              <h2 className="font-heading text-balance-heading mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            {showAllLink ? (
              <Button asChild variant="outline" size="lg" className="w-fit rounded-full">
                <Link href="/xe">
                  Xem toàn bộ bảng giá <ArrowRight className="size-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="hide-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
            {carCategories.map((cat) => {
              const isActive = active === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActive(cat.value)}
                  className={cn(
                    "relative shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors",
                    isActive
                      ? "border-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="lineup-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  ) : null}
                  <span className="relative">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((car, i) => (
              <motion.div
                key={car.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">
            Chưa có mẫu xe nào trong nhóm này.
          </p>
        ) : null}
      </div>
    </section>
  );
}
