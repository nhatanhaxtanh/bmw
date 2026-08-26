import {
  BadgeCheck,
  Banknote,
  Headphones,
  KeyRound,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SmartImage } from "@/components/smart-image";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Đại lý ủy quyền chính hãng",
    description:
      "Toàn bộ xe được nhập khẩu và lắp ráp theo tiêu chuẩn BMW Group, đầy đủ giấy tờ và bảo hành chính hãng 5 năm không giới hạn số km.",
  },
  {
    icon: Wrench,
    title: "Xưởng dịch vụ tiêu chuẩn toàn cầu",
    description:
      "32 khoang sửa chữa, thiết bị chẩn đoán ISTA nguyên bản và kỹ thuật viên được BMW Group đào tạo, chứng nhận định kỳ.",
  },
  {
    icon: Banknote,
    title: "Hỗ trợ tài chính tới 80%",
    description:
      "Liên kết cùng các ngân hàng đối tác, lãi suất ưu đãi, thời hạn vay tới 8 năm và phê duyệt hồ sơ chỉ trong 24 giờ.",
  },
  {
    icon: KeyRound,
    title: "Lái thử tận nơi miễn phí",
    description:
      "Chúng tôi mang xe tới địa chỉ của quý khách trong nội thành, kèm tư vấn viên đồng hành suốt hành trình trải nghiệm.",
  },
  {
    icon: ShieldCheck,
    title: "Phụ tùng chính hãng",
    description:
      "Kho phụ tùng BMW Original Parts sẵn có, đảm bảo thời gian sửa chữa nhanh và giữ nguyên giá trị chiếc xe của bạn.",
  },
  {
    icon: Headphones,
    title: "Cứu hộ & hỗ trợ 24/7",
    description:
      "BMW Roadside Assistance hoạt động 24 giờ mỗi ngày trên toàn quốc — một cuộc gọi là có đội ngũ lên đường.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/40 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="m-stripe h-3 w-9 rounded-full" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  Vì sao chọn chúng tôi
                </span>
              </div>
              <h2 className="font-heading text-balance-heading mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Hơn cả một nơi mua xe — một hành trình được chăm sóc trọn vẹn
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Suốt 15 năm, chúng tôi đồng hành cùng hơn 8.500 khách hàng trên
                khắp miền Nam. Từ lần lái thử đầu tiên tới mỗi kỳ bảo dưỡng, mọi
                điểm chạm đều được thực hiện theo chuẩn dịch vụ BMW toàn cầu.
              </p>

              <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-2xl">
                <SmartImage
                  src="/images/showroom/showroom-1.jpg"
                  alt="Không gian showroom BMW Sài Gòn"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  placeholderLabel="Ảnh showroom"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-5 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_50px_-32px_rgba(6,31,61,0.5)]">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5.5" />
                  </span>
                  <h3 className="font-heading mt-5 text-[17px] font-semibold">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
