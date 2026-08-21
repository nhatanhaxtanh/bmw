"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SmartImage } from "@/components/smart-image";
import { cn } from "@/lib/utils";

export function CarGallery({
  images,
  name,
  className,
}: {
  images: string[];
  name: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const go = (n: number) => setIndex((n + images.length) % images.length);

  return (
    <div className={cn("space-y-3", className)}>
      <div className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-border bg-muted">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <SmartImage
              src={images[index]}
              alt={`${name} — ảnh ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              placeholderLabel={`${name} — ảnh ${index + 1}`}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Ảnh trước"
          className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-bmw-900 opacity-0 shadow-lg backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Ảnh kế tiếp"
          className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-bmw-900 opacity-0 shadow-lg backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          <ChevronRight className="size-5" />
        </button>

        <span className="absolute right-3 bottom-3 rounded-full bg-bmw-950/70 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
          {index + 1} / {images.length}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Xem ảnh ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "relative aspect-4/3 overflow-hidden rounded-lg border-2 bg-muted transition-colors",
              i === index
                ? "border-primary"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
          >
            <SmartImage
              src={src}
              alt={`${name} — thumbnail ${i + 1}`}
              fill
              sizes="20vw"
              placeholderLabel={`Ảnh ${i + 1}`}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ColorPicker({
  colors,
}: {
  colors: { name: string; hex: string }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {colors.map((color, i) => (
          <button
            key={color.name}
            type="button"
            onClick={() => setActive(i)}
            title={color.name}
            aria-label={color.name}
            aria-current={i === active}
            className={cn(
              "relative size-11 rounded-full border-2 transition-transform hover:scale-110",
              i === active
                ? "border-primary ring-2 ring-primary/25 ring-offset-2 ring-offset-background"
                : "border-border",
            )}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
      <p className="mt-3 text-sm">
        <span className="text-muted-foreground">Màu đang chọn: </span>
        <span className="font-medium">{colors[active].name}</span>
      </p>
    </div>
  );
}
