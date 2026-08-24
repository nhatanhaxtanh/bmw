# BMW Sài Gòn — Landing page đại lý ô tô

Landing page đại lý ủy quyền BMW: Next.js 16 (App Router) · Tailwind CSS 4 ·
shadcn/ui · Framer Motion (`motion`) · lucide-react. Tông màu xanh–trắng theo
nhận diện BMW, kèm dải màu BMW M làm điểm nhấn.

## Chạy dự án

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build production
pnpm lint
```

## Cấu trúc trang

| Đường dẫn | Nội dung |
| --- | --- |
| `/` | Hero carousel, dải sản phẩm, lý do chọn, banner parallax, dịch vụ, cảm nhận khách hàng, form lái thử, tin tức, FAQ, Google Map |
| `/xe` | Bảng giá toàn bộ dòng xe + bảng giá chi tiết theo phiên bản |
| `/xe/[slug]` | Chi tiết dòng xe: gallery, màu ngoại thất, điểm nổi bật, phiên bản & giá, thông số kỹ thuật, xe liên quan |
| `/lai-thu` | Trang đăng ký lái thử (nhận `?xe=<slug>` để chọn sẵn dòng xe) |
| `/khuyen-mai` | Chương trình ưu đãi theo dòng xe |
| `/tin-tuc` | Danh sách tin, lọc theo chuyên mục |
| `/tin-tuc/[slug]` | Chi tiết bài viết + sidebar form lái thử + bài liên quan |
| `/lien-he` | Thông tin phòng ban, bản đồ, form liên hệ |

Ngoài ra có `sitemap.xml`, `robots.txt` và trang 404 tùy biến.

## Nơi cần chỉnh khi triển khai thật

1. **`src/data/site.ts`** — tên đại lý, hotline, số Zalo, email, địa chỉ,
   `mapEmbedSrc` / `mapDirectionsHref` (Google Maps, không cần API key), link mạng xã hội, `url` (dùng cho SEO/sitemap).
   > Bản đồ đang trỏ tới 80 Nguyễn Văn Trỗi, Phường 8, Q. Phú Nhuận, TP.HCM.
2. **`src/data/cars.ts`** — dòng xe, giá, phiên bản, thông số, màu sắc.
3. **`src/data/news.ts`** — bài viết (nội dung dạng block: `paragraph`, `heading`, `list`, `quote`, `image`).
4. **`public/images/`** — xem `public/images/README.md` để biết đường dẫn từng ảnh.
5. **`src/app/actions/test-drive.ts`** — hiện chỉ `console.info` dữ liệu form.
   Nối vào CRM / email / Google Sheet của đại lý tại đây.

## Ảnh

Ảnh chưa có sẽ tự động hiển thị ảnh giữ chỗ nền xanh BMW (component
`SmartImage`), nên trang luôn hiển thị chỉnh chu ngay cả khi thiếu file. Chỉ cần
copy ảnh thật vào đúng đường dẫn trong `public/images/` là ảnh tự hiện lên.

## Widget liên hệ nổi

`src/components/floating-contact.tsx`:

- Desktop: hai nút tròn Zalo + Hotline, hiện nhãn khi rê chuột, kèm nút cuộn lên đầu trang.
- Mobile: một nút chính mở danh sách Zalo / Hotline / Đăng ký lái thử.
