import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { BmwRoundel } from "@/components/bmw-logo";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/brand-icons";
import { Separator } from "@/components/ui/separator";
import { cars } from "@/data/cars";
import { site } from "@/data/site";

const quickLinks = [
  { label: "Bảng giá xe", href: "/xe" },
  { label: "Đăng ký lái thử", href: "/lai-thu" },
  { label: "Chương trình khuyến mãi", href: "/khuyen-mai" },
  { label: "Tin tức & sự kiện", href: "/tin-tuc" },
  { label: "Liên hệ đại lý", href: "/lien-he" },
];

const services = [
  "Bán xe mới chính hãng",
  "Bảo dưỡng & sửa chữa",
  "Phụ tùng chính hãng",
  "Hỗ trợ trả góp ngân hàng",
  "Cứu hộ 24/7",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-bmw-950 text-white/70">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 size-[420px] rounded-full bg-bmw-700/25 blur-[120px]"
      />
      <div className="m-stripe h-1 w-full" />

      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <BmwRoundel className="size-11 text-white" />
              <div>
                <p className="font-heading text-sm font-semibold tracking-[0.22em] text-white uppercase">
                  Sài Gòn
                </p>
                <p className="mt-1 text-[10px] tracking-[0.14em] uppercase">
                  Đại lý ủy quyền
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.description}
            </p>
            <div className="mt-6 flex gap-2.5">
              {[
                { icon: FacebookIcon, href: site.socials.facebook, label: "Facebook" },
                { icon: YoutubeIcon, href: site.socials.youtube, label: "YouTube" },
                { icon: InstagramIcon, href: site.socials.instagram, label: "Instagram" },
                { icon: TiktokIcon, href: site.socials.tiktok, label: "TikTok" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-white uppercase">
              Dòng xe
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {cars.slice(0, 7).map((car) => (
                <li key={car.slug}>
                  <Link
                    href={`/xe/${car.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {car.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-white uppercase">
              Liên kết
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-[11px] font-semibold tracking-[0.18em] text-white uppercase">
              Dịch vụ
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-white uppercase">
              Thông tin liên hệ
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-bmw-sky" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-bmw-sky" />
                <a href={site.hotlineHref} className="hover:text-white">
                  Hotline: {site.hotline}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-bmw-sky" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-bmw-sky" />
                <span>{site.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Bảo lưu mọi quyền.
          </p>
          <p className="text-center md:text-right">
            Hình ảnh và thông số mang tính tham khảo, có thể thay đổi tùy phiên bản
            và thời điểm.
          </p>
        </div>
      </div>
    </footer>
  );
}
