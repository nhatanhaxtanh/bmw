"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ArticleCard } from "@/components/sections/news-section";
import { news, newsCategories } from "@/data/news";
import { cn } from "@/lib/utils";

export function NewsList() {
  const [active, setActive] = useState<string>("Tất cả");

  const filtered = news.filter(
    (a) => active === "Tất cả" || a.category === active,
  );

  return (
    <>
      <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
        {newsCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "relative shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors",
                isActive
                  ? "border-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="news-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              ) : null}
              <span className="relative">{cat}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((article, i) => (
            <motion.div
              key={article.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ArticleCard article={article} className="h-full" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          Chưa có bài viết trong chuyên mục này.
        </p>
      ) : null}
    </>
  );
}
