import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { SmartImage } from "@/components/smart-image";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  image,
  imageLabel,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
  imageLabel?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-bmw-950 pt-32 pb-16 text-white sm:pt-40 sm:pb-20",
        className,
      )}
    >
      {image ? (
        <>
          <SmartImage
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            placeholderLabel={imageLabel ?? title}
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-bmw-950/95 via-bmw-950/80 to-bmw-950/50" />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -left-24 -z-10 size-[460px] rounded-full bg-bmw-700/30 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:repeating-linear-gradient(115deg,transparent_0_26px,#fff_26px_27px)]"
          />
        </>
      )}

      <div className="container-page relative">
        {crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-white/55">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Trang chủ
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5 opacity-60" />
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/85">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <div className="flex items-center gap-3">
            <span className="m-stripe h-3 w-9 rounded-full" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-bmw-sky uppercase">
              {eyebrow}
            </span>
          </div>
        ) : null}

        <h1 className="font-heading text-balance-heading mt-4 max-w-4xl text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>

        {description ? (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:text-base">
            {description}
          </p>
        ) : null}

        {children}
      </div>
    </section>
  );
}
