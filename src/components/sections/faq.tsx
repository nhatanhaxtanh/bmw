import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";

/** Dùng lại cho structured data FAQPage ở trang chủ. */
export const faqs = [
  {
    q: "Thủ tục mua xe BMW trả góp cần những giấy tờ gì?",
    a: "Với khách hàng cá nhân: CCCD, sổ hộ khẩu hoặc giấy xác nhận cư trú, giấy đăng ký kết hôn (nếu có) và chứng minh thu nhập (sao kê lương, hợp đồng lao động hoặc giấy tờ tài sản). Với doanh nghiệp: giấy phép kinh doanh, báo cáo tài chính hai năm gần nhất và sao kê tài khoản công ty. Đội ngũ của chúng tôi sẽ hỗ trợ hoàn thiện toàn bộ hồ sơ.",
  },
  {
    q: "Thời gian giao xe là bao lâu?",
    a: "Với các phiên bản và màu sắc sẵn kho, xe được giao trong vòng 3–7 ngày làm việc sau khi hoàn tất thủ tục. Với xe đặt theo yêu cầu riêng về màu sắc hoặc gói trang bị, thời gian dự kiến từ 8–12 tuần tùy lịch sản xuất của nhà máy.",
  },
  {
    q: "Chính sách bảo hành của BMW như thế nào?",
    a: "Toàn bộ xe BMW mới chính hãng được bảo hành 3 năm không giới hạn số km. Riêng pin cao áp trên các dòng xe điện BMW i được bảo hành 8 năm hoặc 160.000 km, tùy điều kiện nào đến trước.",
  },
  {
    q: "Tôi có thể lái thử tại nhà không?",
    a: "Hoàn toàn được. Dịch vụ lái thử tận nơi miễn phí áp dụng trong phạm vi nội thành TP.HCM và các khu vực lân cận. Quý khách chỉ cần đăng ký qua form trên website hoặc gọi hotline, chúng tôi sẽ mang xe tới địa chỉ và thời gian quý khách chọn.",
  },
  {
    q: "Chi phí bảo dưỡng định kỳ khoảng bao nhiêu?",
    a: "Chi phí phụ thuộc vào dòng xe và mốc bảo dưỡng. Trung bình mỗi kỳ bảo dưỡng nhỏ (thay dầu, lọc gió) dao động 6–12 triệu đồng. Đại lý cung cấp các gói bảo dưỡng trọn gói 3 hoặc 5 năm giúp cố định chi phí và tiết kiệm tới 20% so với thanh toán từng lần.",
  },
  {
    q: "Xe điện BMW sạc ở đâu và mất bao lâu?",
    a: "Quý khách có thể sạc tại nhà bằng bộ sạc AC 11 kW (đầy pin sau khoảng 8 tiếng) — chúng tôi hỗ trợ khảo sát và lắp đặt. Ngoài ra, mạng lưới trạm sạc nhanh DC của các đối tác trên toàn quốc cho phép sạc từ 10% lên 80% trong khoảng 30–35 phút.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-border bg-muted/40 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="m-stripe h-3 w-9 rounded-full" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                Giải đáp
              </span>
            </div>
            <h2 className="font-heading text-balance-heading mt-4 text-3xl font-bold sm:text-4xl">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Không tìm thấy câu trả lời quý khách cần? Gọi hotline{" "}
              <a
                href={site.hotlineHref}
                className="font-semibold text-primary hover:underline"
              >
                {site.hotline}
              </a>{" "}
              để được tư vấn trực tiếp.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
