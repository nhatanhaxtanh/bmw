"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SmartImage } from "@/components/smart-image";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "exterior", label: "Ngoại thất" },
  { key: "interior", label: "Nội thất" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function CarGallery({
  gallery,
  name,
  className,
}: {
  gallery: { exterior: string[]; interior: string[] };
  name: string;
  className?: string;
}) {
  const [tab, setTab] = useState<TabKey>("exterior");
  const [index, setIndex] = useState(0);

  const images = gallery[tab];
  const go = (n: number) => setIndex((n + images.length) % images.length);
  const switchTab = (next: TabKey) => {
    setTab(next);
    setIndex(0);
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => switchTab(t.key)}
            aria-current={t.key === tab}
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
              t.key === tab
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-border bg-muted">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tab}-${index}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <SmartImage
              src={images[index]}
              alt={`${name} — ${tab === "exterior" ? "ngoại thất" : "nội thất"} ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              placeholderLabel={`${name} — ${tab === "exterior" ? "Ngoại thất" : "Nội thất"} ${index + 1}`}
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

      <div className="grid grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={`${tab}-${src}`}
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
