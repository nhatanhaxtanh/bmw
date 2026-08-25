/**
 * Nhúng structured data (JSON-LD) cho Google và các công cụ tìm kiếm.
 *
 * Ký tự `<` được thay bằng escape sequence unicode để chuỗi dữ liệu không thể
 * đóng sớm thẻ <script> — khuyến nghị chính thức của Next.js.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
