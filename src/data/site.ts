export const site = {
  name: "BMW Sài Gòn",
  legalName: "Đại lý ủy quyền BMW Sài Gòn",
  tagline: "Sheer Driving Pleasure",
  taglineVi: "Niềm vui thuần khiết sau tay lái",
  description:
    "Đại lý ủy quyền chính hãng BMW tại TP. Hồ Chí Minh — showroom trưng bày, lái thử tận nơi, xưởng dịch vụ tiêu chuẩn toàn cầu và chương trình ưu đãi cập nhật hàng tháng.",
  url: "https://bmwsaigon.vn",

  hotline: "0901 234 567",
  hotlineHref: "tel:+84901234567",
  zalo: "0901234567",
  zaloHref: "https://zalo.me/0901234567",
  email: "sales@bmwsaigon.vn",
  messengerHref: "https://m.me/bmwsaigon",

  address: "Số 1 Đường Nguyễn Văn Linh, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh",
  addressShort: "Q.7, TP. Hồ Chí Minh",
  workingHours: "Thứ 2 – Chủ nhật: 08:00 – 18:00",

  // Google Maps — dùng embed không cần API key.
  mapQuery: "BMW+Nguyen+Van+Linh+Quan+7+Ho+Chi+Minh",
  mapEmbedSrc:
    "https://www.google.com/maps?q=BMW%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%20Qu%E1%BA%ADn%207%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=m&z=15&output=embed&iwloc=near",
  mapDirectionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=BMW%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%20Qu%E1%BA%ADn%207%20H%E1%BB%93%20Ch%C3%AD%20Minh",

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
