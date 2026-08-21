import { CalendarCheck, CarFront, PhoneCall, Sparkles } from "lucide-react";

import { TestDriveForm } from "@/components/test-drive-form";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    icon: CalendarCheck,
    title: "Điền thông tin",
    description: "Chọn dòng xe, thời gian và địa điểm quý khách mong muốn.",
  },
  {
    icon: PhoneCall,
    title: "Xác nhận trong 30 phút",
    description: "Tư vấn viên gọi lại xác nhận lịch và chuẩn bị hồ sơ cần thiết.",
  },
  {
    icon: CarFront,
    title: "Trải nghiệm thực tế",
    description:
      "Xe được đưa tới tận nơi trong nội thành, đồng hành cùng chuyên viên sản phẩm.",
  },
];

export function TestDriveCta({ defaultCar }: { defaultCar?: string }) {
  return (
    <section
      id="lai-thu"
      className="relative isolate overflow-hidden bg-bmw-950 py-20 text-white sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 size-[460px] rounded-full bg-bmw-700/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-40 size-[420px] rounded-full bg-bmw-500/20 blur-[120px]"
      />

      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="m-stripe h-3 w-9 rounded-full" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-bmw-sky uppercase">
                Đăng ký lái thử
              </span>
            </div>
            <h2 className="font-heading text-balance-heading mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Cảm nhận chiếc BMW của bạn — hoàn toàn miễn phí
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/65">
              Không có cách nào hiểu một chiếc BMW tốt hơn việc tự mình cầm lái.
              Chúng tôi mang xe tới tận nơi quý khách chọn, vào thời gian quý
              khách thuận tiện.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="relative grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5">
                    <step.icon className="size-5 text-bmw-sky" />
                    <span className="absolute -top-1.5 -left-1.5 grid size-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4">
              <Sparkles className="mt-0.5 size-4.5 shrink-0 text-bmw-sky" />
              <p className="text-[13px] leading-relaxed text-white/70">
                Khách hàng đăng ký lái thử trong tháng này nhận ngay voucher bảo
                dưỡng trị giá <strong className="text-white">5.000.000 ₫</strong>{" "}
                khi hoàn tất giao dịch mua xe.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-2xl border border-white/12 bg-background p-6 text-foreground shadow-2xl sm:p-8">
              <h3 className="font-heading text-xl font-semibold">
                Thông tin đăng ký
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Vui lòng điền các trường có dấu <span className="text-destructive">*</span>.
              </p>
              <TestDriveForm defaultCar={defaultCar} className="mt-6" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
