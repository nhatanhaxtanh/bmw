import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { GoogleMap } from "@/components/google-map";
import { TestDriveForm } from "@/components/test-drive-form";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Liên hệ đại lý",
  description: `Địa chỉ, hotline và bản đồ đường đi tới ${site.name}. Hỗ trợ tư vấn bán hàng, đặt lịch dịch vụ và cứu hộ 24/7.`,
  alternates: { canonical: "/lien-he" },
};

const departments = [
  {
    title: "Phòng kinh doanh",
    lines: ["Tư vấn mua xe, báo giá lăn bánh, hỗ trợ trả góp"],
    phone: site.hotline,
    href: site.hotlineHref,
  },
  {
    title: "Xưởng dịch vụ",
    lines: ["Đặt lịch bảo dưỡng, sửa chữa, kiểm tra định kỳ"],
    phone: site.hotline,
    href: site.hotlineHref,
  },
  {
    title: "Cứu hộ 24/7",
    lines: ["BMW Roadside Assistance — hỗ trợ trên toàn quốc"],
    phone: "1800 6000",
    href: "tel:18006000",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Liên hệ", path: "/lien-he" }])} />
      <PageHero
        eyebrow="Liên hệ"
        title="Chúng tôi luôn sẵn sàng phục vụ"
        description="Ghé thăm showroom, gọi hotline hoặc để lại thông tin — đội ngũ tư vấn sẽ phản hồi trong thời gian sớm nhất."
        crumbs={[{ label: "Liên hệ" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {departments.map((dept, i) => (
              <Reveal key={dept.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </span>
                  <h2 className="font-heading mt-5 text-lg font-semibold">
                    {dept.title}
                  </h2>
                  {dept.lines.map((line) => (
                    <p
                      key={line}
                      className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground"
                    >
                      {line}
                    </p>
                  ))}
                  <a
                    href={dept.href}
                    className="font-heading mt-4 inline-block text-lg font-semibold text-primary hover:underline"
                  >
                    {dept.phone}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <Reveal direction="right">
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                Thông tin đại lý
              </h2>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Showroom & xưởng dịch vụ</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {site.address}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                    >
                      {site.email}
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

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href={site.hotlineHref}>
                    <Phone className="size-4" /> Gọi {site.hotline}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href={site.zaloHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" /> Chat Zalo
                  </a>
                </Button>
              </div>

              <GoogleMap className="mt-10" height="h-[320px]" />
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="font-heading text-xl font-semibold">
                  Gửi yêu cầu tư vấn
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong vòng 30
                  phút trong giờ làm việc.
                </p>
                <TestDriveForm className="mt-6" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
