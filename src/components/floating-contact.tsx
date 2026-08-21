"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, CalendarCheck, MessageCircle, Phone, X } from "lucide-react";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M24 4C12.4 4 3 12.5 3 23c0 5.9 3 11.1 7.7 14.6-.3 2.6-1.4 5-3.1 7-.4.5 0 1.2.6 1.1 4.2-.6 7.6-2.3 10-4.1 1.9.4 3.8.6 5.8.6 11.6 0 21-8.5 21-19S35.6 4 24 4Z"
      />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="#0068ff"
        fontSize="15"
        fontWeight="700"
        fontFamily="Helvetica, Arial, sans-serif"
      >
        Zalo
      </text>
    </svg>
  );
}

const actions = [
  {
    key: "zalo",
    label: "Chat Zalo",
    sub: site.zalo,
    href: site.zaloHref,
    external: true,
    icon: ZaloIcon,
    className: "bg-[#0068ff] text-white",
  },
  {
    key: "phone",
    label: "Gọi hotline",
    sub: site.hotline,
    href: site.hotlineHref,
    external: false,
    icon: Phone,
    className: "bg-primary text-primary-foreground",
  },
  {
    key: "book",
    label: "Đăng ký lái thử",
    sub: "Miễn phí tận nơi",
    href: "/lai-thu",
    external: false,
    internal: true,
    icon: CalendarCheck,
    className: "bg-bmw-navy text-white",
  },
] as const;

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Lên đầu trang"
            className="grid size-11 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end gap-2.5 sm:hidden"
          >
            {actions.map((action, i) => {
              const Icon = action.icon;
              const content = (
                <>
                  <span className="flex flex-col text-right leading-tight">
                    <span className="text-[13px] font-semibold text-foreground">
                      {action.label}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {action.sub}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-full shadow-md",
                      action.className,
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                </>
              );

              return (
                <motion.li
                  key={action.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  {"internal" in action && action.internal ? (
                    <Link
                      href={action.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-full border border-border bg-background/95 py-1.5 pr-1.5 pl-4 shadow-lg backdrop-blur transition-transform hover:-translate-y-0.5"
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-full border border-border bg-background/95 py-1.5 pr-1.5 pl-4 shadow-lg backdrop-blur transition-transform hover:-translate-y-0.5"
                    >
                      {content}
                    </a>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>

      {/* Desktop: hai nút tròn gọn với nhãn hiện khi rê chuột.
          Mobile: gom vào một nút chính mở danh sách liên hệ. */}
      <div className="flex flex-col items-end gap-3">
        <a
          href={site.zaloHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat Zalo"
          className="group relative hidden size-13 place-items-center rounded-full bg-[#0068ff] text-white shadow-[0_10px_30px_-8px_rgba(0,104,255,0.7)] transition-transform hover:scale-105 sm:grid"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#0068ff]/35 [animation-duration:2.8s]" />
          <ZaloIcon className="relative size-7" />
          <span className="pointer-events-none absolute right-full mr-3 translate-x-2 rounded-full border border-border bg-background px-3.5 py-2 text-[13px] font-medium whitespace-nowrap text-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            Chat Zalo
          </span>
        </a>

        <a
          href={site.hotlineHref}
          aria-label={`Gọi hotline ${site.hotline}`}
          className="group relative hidden size-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(0,102,177,0.75)] transition-transform hover:scale-105 sm:grid"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/35 [animation-duration:2.8s]" />
          <Phone className="relative size-5.5" />
          <span className="pointer-events-none absolute right-full mr-3 flex translate-x-2 flex-col rounded-full border border-border bg-background px-4 py-1.5 leading-tight whitespace-nowrap opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            <span className="text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
              Hotline
            </span>
            <span className="text-[13px] font-semibold text-foreground">
              {site.hotline}
            </span>
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Đóng liên hệ nhanh" : "Mở liên hệ nhanh"}
          className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(0,102,177,0.75)] transition-transform hover:scale-105 sm:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {open ? (
                <X className="size-6" />
              ) : (
                <MessageCircle className="size-6" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
