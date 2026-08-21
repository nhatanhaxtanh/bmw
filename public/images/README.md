# Hướng dẫn thả ảnh

Toàn bộ ảnh trên website đọc từ các đường dẫn cố định bên dưới. Chỉ cần copy file
ảnh vào đúng thư mục với **đúng tên file** — website tự động hiển thị, không cần
sửa code. Nếu file chưa tồn tại, hệ thống hiển thị ảnh giữ chỗ nền xanh BMW.

Định dạng khuyến nghị: `.jpg` (hoặc `.webp` — nếu dùng webp thì sửa đuôi tương ứng
trong `src/data/cars.ts`, `src/data/news.ts`, `src/components/sections/hero.tsx`).

---

## 1. Ảnh hero trang chủ — tỉ lệ 16:9, tối thiểu 2400×1350

```
hero/hero-5-series.jpg     Slide 1 — BMW 5 Series
hero/hero-x7.jpg           Slide 2 — BMW X7
hero/hero-i4.jpg           Slide 3 — BMW i4
hero/lineup.jpg            Banner trang "Bảng giá xe"
hero/lai-thu.jpg           Banner trang "Đăng ký lái thử"
```

> Lưu ý: chữ hero nằm bên trái, nên chọn ảnh có chủ thể lệch phải.

## 2. Ảnh xe — `cars/<slug>/`

Mỗi dòng xe cần 1 ảnh `hero.jpg` (16:9) và 4 ảnh gallery (16:10).

```
cars/bmw-3-series/hero.jpg      + gallery-1.jpg … gallery-4.jpg
cars/bmw-5-series/hero.jpg      + gallery-1.jpg … gallery-4.jpg
cars/bmw-7-series/hero.jpg      + gallery-1.jpg … gallery-4.jpg
cars/bmw-x3/hero.jpg            + gallery-1.jpg … gallery-4.jpg
cars/bmw-x5/hero.jpg            + gallery-1.jpg … gallery-4.jpg
cars/bmw-x7/hero.jpg            + gallery-1.jpg … gallery-4.jpg
cars/bmw-i4/hero.jpg            + gallery-1.jpg … gallery-4.jpg
cars/bmw-ix3/hero.jpg           + gallery-1.jpg … gallery-4.jpg
cars/bmw-m4/hero.jpg            + gallery-1.jpg … gallery-4.jpg
```

## 3. Ảnh bài viết — `news/<slug>/cover.jpg` (16:9)

```
news/5-series-ra-mat/cover.jpg
news/uu-dai-thang-8/cover.jpg
news/driving-experience/cover.jpg
news/edrive-gen5/cover.jpg
news/bao-duong-mua-mua/cover.jpg
news/x7-nang-cap/cover.jpg
```

## 4. Ảnh showroom, dịch vụ, banner

```
showroom/showroom-1.jpg        Khối "Vì sao chọn chúng tôi" (4:3)
services/ban-xe.jpg            Thẻ dịch vụ (dọc 3:4)
services/bao-duong.jpg
services/phu-tung.jpg
services/tai-chinh.jpg
banners/driving-pleasure.jpg   Banner parallax trang chủ (16:9, rộng)
banners/khuyen-mai.jpg         Banner trang khuyến mãi (16:9)
```

---

## Thêm dòng xe / bài viết mới

- **Xe**: thêm một object vào mảng `cars` trong `src/data/cars.ts`. Trang chi tiết,
  bảng giá, menu và sitemap tự cập nhật theo.
- **Bài viết**: thêm một object vào mảng `news` trong `src/data/news.ts`.

Tên thư mục ảnh nên đặt trùng với `slug` để dễ quản lý.
