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
hero/hero-m4.jpg           Slide 3 — BMW M4
hero/lineup.jpg            Banner trang "Bảng giá xe"
hero/lai-thu.jpg           Banner trang "Đăng ký lái thử"
```

> Lưu ý: chữ hero nằm bên trái, nên chọn ảnh có chủ thể lệch phải.

## 2. Ảnh xe — `cars/<slug>/`

Mỗi dòng xe cần 1 ảnh chính (tỉ lệ ngang, nền trắng hoặc tách nền) và 6 ảnh chi
tiết cho gallery ở trang chi tiết: 3 ảnh ngoại thất, 3 ảnh nội thất (16:10).

```
cars/<slug>/ngoai-that-1.jpg … ngoai-that-3.jpg
cars/<slug>/noi-that-1.jpg   … noi-that-3.jpg
```

Ảnh chính của từng dòng xe (tên file khác nhau vì đổi ảnh thì đổi tên để tránh
cache trình duyệt trả về ảnh cũ):

```
cars/bmw-3-series/hero-hd.jpg
cars/bmw-5-series/hero.png
cars/bmw-7-series/hero.png
cars/bmw-x3/hero-g45.png
cars/bmw-x5/hero.png
cars/bmw-x7/hero.png
cars/bmw-i4/hero.png
cars/bmw-ix3/hero.png
cars/bmw-m4/hero.png
cars/bmw-m2/hero-g87.png
cars/bmw-m3/hero.png
cars/bmw-m3-touring/hero.png
cars/bmw-x1/hero.png
cars/bmw-430i-convertible/hero.png
cars/bmw-430i-gran-coupe/hero.png
cars/bmw-x4/hero.png
cars/bmw-x6/hero.png
cars/bmw-z4/hero.png
cars/bmw-i7/hero.png
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
