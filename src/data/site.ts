export const site = {
  name: "BMW Sài Gòn",
  legalName: "Đại lý ủy quyền BMW Sài Gòn",
  tagline: "Sheer Driving Pleasure",
  taglineVi: "Niềm vui thuần khiết sau tay lái",
  description:
    "Đại lý ủy quyền chính hãng BMW tại TP. Hồ Chí Minh — showroom trưng bày, lái thử tận nơi, xưởng dịch vụ tiêu chuẩn toàn cầu và chương trình ưu đãi cập nhật hàng tháng.",
  url: "https://bmwsaigon.vn",

  hotline: "0949 686 867",
  hotlineHref: "tel:+84949686867",
  zalo: "0949686867",
  zaloHref: "https://zalo.me/0949686867",
  email: "contact.bmwsaigon@gmail.com",
  messengerHref: "https://m.me/bmwsaigon",

  address: "80 Nguyễn Văn Trỗi, Phường 8, Quận Phú Nhuận, TP. Hồ Chí Minh",
  addressShort: "Q. Phú Nhuận, TP. Hồ Chí Minh",
  /** Địa chỉ tách thành phần cho structured data (schema.org PostalAddress). */
  addressParts: {
    street: "80 Nguyễn Văn Trỗi, Phường 8",
    district: "Quận Phú Nhuận",
    city: "TP. Hồ Chí Minh",
  },
  workingHours: "Thứ 2 – Chủ nhật: 08:00 – 18:00",

  // Google Maps — dùng embed không cần API key.
  mapQuery: "80+Nguyen+Van+Troi+Phuong+8+Phu+Nhuan+Ho+Chi+Minh",
  mapEmbedSrc:
    "https://www.google.com/maps?q=80%20Nguy%E1%BB%85n%20V%C4%83n%20Tr%E1%BB%97i%2C%20Ph%C6%B0%E1%BB%9Dng%208%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=m&z=16&output=embed&iwloc=near",
  mapDirectionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=80%20Nguy%E1%BB%85n%20V%C4%83n%20Tr%E1%BB%97i%2C%20Ph%C6%B0%E1%BB%9Dng%208%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh",

  socials: {
    facebook: "https://facebook.com/bmwsaigon",
    youtube: "https://youtube.com/@bmwsaigon",
    instagram: "https://instagram.com/bmwsaigon",
    tiktok: "https://tiktok.com/@bmwsaigon",
  },
} as const;

export const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Dòng xe", href: "/xe" },
  { label: "Lái thử", href: "/lai-thu" },
  { label: "Khuyến mãi", href: "/khuyen-mai" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
] as const;

export const stats = [
  { value: 15, suffix: "+", label: "Năm đồng hành cùng BMW" },
  { value: 8500, suffix: "+", label: "Khách hàng đã bàn giao xe" },
  { value: 32, suffix: "", label: "Khoang sửa chữa tiêu chuẩn" },
  { value: 98, suffix: "%", label: "Khách hàng hài lòng" },
] as const;
