"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/bmw-logo";
import { navItems, site } from "@/data/site";
import { cars } from "@/data/cars";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
          overlay
            ? "bg-transparent"
            : "border-b border-border/70 bg-background/85 shadow-[0_1px_24px_-12px_rgba(6,31,61,0.4)] backdrop-blur-xl",
        )}
      >
        <div className="m-stripe h-[3px] w-full" />
        <div className="container-page flex h-18 items-center justify-between gap-4">
          <Link href="/" aria-label={site.name}>
            <SiteLogo invert={overlay} priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const hasMenu = item.href === "/xe";

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasMenu && setModelsOpen(true)}
                  onMouseLeave={() => hasMenu && setModelsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-md px-3.5 py-2 text-[13.5px] font-medium tracking-wide transition-colors",
                      overlay
                        ? "text-white/85 hover:text-white"
                        : "text-foreground/75 hover:text-primary",
                      active && (overlay ? "text-white" : "text-primary"),
                    )}
                  >
                    {item.label}
                    {active ? (
                      <motion.span
                        layoutId="nav-underline"
                        className={cn(
                          "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                          overlay ? "bg-white" : "bg-primary",
                        )}
                      />
                    ) : null}
                  </Link>

                  {hasMenu ? (
                    <AnimatePresence>
                      {modelsOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 w-[560px] -translate-x-1/2 pt-4"
                        >
                          <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-2.5 shadow-2xl shadow-bmw-950/10">
                            {cars.map((car) => (
                              <Link
                                key={car.slug}
                                href={`/xe/${car.slug}`}
                                className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                              >
                                <span>
                                  <span className="block text-[13.5px] font-medium">
                                    {car.name}
                                  </span>
                                  <span className="block text-xs text-muted-foreground">
                                    {car.tagline}
                                  </span>
                                </span>
                                <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.hotlineHref}
              className={cn(
                "hidden items-center gap-2 rounded-full border px-3.5 py-2 text-[13px] font-semibold transition-colors md:flex",
                overlay
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-border text-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              <Phone className="size-3.5" />
              {site.hotline}
            </a>
            <Button asChild size="lg" className="hidden rounded-full sm:inline-flex">
              <Link href="/lai-thu">Đăng ký lái thử</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Mở menu"
              className={cn(
                "grid size-10 place-items-center rounded-md transition-colors lg:hidden",
                overlay
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-accent",
              )}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Đóng menu"
              className="absolute inset-0 bg-bmw-950/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-background"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <SiteLogo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Đóng menu"
                  className="grid size-10 place-items-center rounded-md hover:bg-accent"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col p-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-3.5 text-[15px] font-medium hover:bg-accent"
                  >
                    {item.label}
                    <ChevronRight className="size-4 text-muted-foreground" />
                  </Link>
                ))}
              </nav>

              <div className="px-3 pb-3">
                <p className="px-3 pt-3 pb-2 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Dòng xe
                </p>
                <div className="flex flex-col">
                  {cars.map((car) => (
                    <Link
                      key={car.slug}
                      href={`/xe/${car.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-accent"
                    >
                      {car.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto space-y-2.5 border-t border-border p-5">
                <Button asChild size="lg" className="w-full rounded-full">
                  <Link href="/lai-thu" onClick={() => setOpen(false)}>
                    Đăng ký lái thử
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full"
                >
                  <a href={site.hotlineHref}>
                    <Phone className="size-4" /> {site.hotline}
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
