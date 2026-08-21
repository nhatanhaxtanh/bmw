import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function GoogleMap({
  className,
  height = "h-[420px]",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-muted",
        height,
        className,
      )}
    >
      <iframe
        title={`Bản đồ đường đi tới ${site.name}`}
        src={site.mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="size-full border-0 grayscale-[0.15]"
      />
    </div>
  );
}

export function LocationSection() {
  return (
    <section className="border-t border-border bg-muted/40 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Ghé thăm chúng tôi
            </p>
            <h2 className="font-heading text-balance-heading mt-4 text-3xl font-bold sm:text-4xl">
              Showroom & xưởng dịch vụ BMW Sài Gòn
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Không gian trưng bày tiêu chuẩn toàn cầu BMW Retail.Next với hơn 20
              xe sẵn kho, khu tiếp khách riêng và xưởng dịch vụ 32 khoang vận hành
              bởi kỹ thuật viên được BMW chứng nhận.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Địa chỉ</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {site.address}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Hotline 24/7</p>
                  <a
                    href={site.hotlineHref}
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    {site.hotline}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Giờ làm việc</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {site.workingHours}
                  </p>
                </div>
              </li>
            </ul>

            <Button asChild size="lg" className="mt-8 rounded-full">
              <a href={site.mapDirectionsHref} target="_blank" rel="noreferrer">
                <Navigation className="size-4" /> Chỉ đường trên Google Maps
              </a>
            </Button>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <GoogleMap height="h-[300px] sm:h-[460px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
