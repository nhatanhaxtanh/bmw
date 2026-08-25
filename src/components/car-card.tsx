import Link from "next/link";
import { ArrowUpRight, Gauge, Timer, Users, Zap } from "lucide-react";

import { SmartImage } from "@/components/smart-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatVndShort, type Car } from "@/data/cars";
import { cn } from "@/lib/utils";

const specIcons = [Zap, Gauge, Timer, Users];

export function CarCard({ car, className }: { car: Car; className?: string }) {
  const contain = car.imageFit === "contain";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_28px_60px_-32px_rgba(6,31,61,0.45)]",
        className,
      )}
    >
      <Link
        href={`/xe/${car.slug}`}
        className={cn(
          "relative block aspect-16/10 overflow-hidden",
          // Ảnh studio nền trắng cần khung trắng để phần lề của object-contain
          // không lộ ra thành viền xám.
          contain ? "bg-white" : "bg-muted",
        )}
      >
        <SmartImage
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          placeholderLabel={car.name}
          className={cn(
            "transition-transform duration-700",
            // Ảnh studio cắt sát thân xe nên mặc định không phóng khi hover —
            // chỉ cần 5% là đầu và đuôi xe chạm mép khung. Đệm và hover của
            // từng xe chỉnh riêng qua `imageClassName`.
            contain ? "object-contain" : "object-cover group-hover:scale-105",
            car.imageClassName,
          )}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/45 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="absolute top-3.5 left-3.5 flex gap-2">
          {car.isNew ? (
            <Badge className="bg-primary text-primary-foreground shadow-sm">
              Mới
            </Badge>
          ) : null}
          {car.badge ? (
            <Badge
              variant="secondary"
              className="bg-white/90 text-bmw-900 shadow-sm backdrop-blur"
            >
              {car.badge}
            </Badge>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {car.series}
            </p>
            <h3 className="font-heading mt-1.5 text-xl font-semibold tracking-tight">
              <Link href={`/xe/${car.slug}`} className="after:absolute after:inset-0">
                {car.name}
              </Link>
            </h3>
          </div>
          <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">{car.tagline}</p>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-5">
          {car.quickSpecs.map((spec, i) => {
            const Icon = specIcons[i % specIcons.length];
            return (
              <div key={spec.label} className="flex items-start gap-2.5">
                <Icon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <dt className="text-[10.5px] tracking-wide text-muted-foreground uppercase">
                    {spec.label}
                  </dt>
                  <dd className="text-[13px] leading-snug font-medium">
                    {spec.value}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>

        <div className="mt-6 flex items-end justify-between gap-3 border-t border-border pt-5">
          <div>
            <p className="text-[11px] text-muted-foreground">Giá từ</p>
            <p className="font-heading text-lg font-semibold text-primary">
              {formatVndShort(car.priceFrom)}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="relative z-10 rounded-full text-primary hover:bg-accent"
            asChild
          >
            <Link href={`/lai-thu?xe=${car.slug}`}>Lái thử</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
