export type CarCategory =
  | "sedan"
  | "coupe"
  | "suv"
  | "electric"
  | "m-performance";

export type Variant = {
  name: string;
  /** Bỏ trống khi hãng chưa công bố giá — giao diện hiển thị "Liên hệ". */
  price?: number; // VND
  engine: string;
  power: string;
  highlight?: string;
};

export type SpecGroup = {
  group: string;
  items: { label: string; value: string }[];
};

export type Car = {
  slug: string;
  name: string;
  series: string;
  category: CarCategory[];
  tagline: string;
  description: string;
  /** Bỏ trống khi hãng chưa công bố giá — giao diện hiển thị "Liên hệ". */
  priceFrom?: number;
  badge?: string;
  isNew?: boolean;
  /** Ảnh sản phẩm — thay bằng ảnh thật trong /public/images/cars/... */
  image: string;
  /**
   * "contain" dành cho ảnh studio nền trắng: xe hiển thị trọn và nhỏ lại trong
   * khung card thay vì bị crop sát mép như ảnh bối cảnh (mặc định "cover").
   */
  imageFit?: "cover" | "contain";
  /** Lớp Tailwind chỉnh riêng ảnh của xe này trong card (đệm, hiệu ứng hover). */
  imageClassName?: string;
  gallery: string[];
  quickSpecs: { label: string; value: string }[];
  highlights: { title: string; description: string }[];
  variants: Variant[];
  specs: SpecGroup[];
  colors: { name: string; hex: string }[];
};

const vnd = (n: number) => n;

export const cars: Car[] = [
  {
    slug: "bmw-3-series",
    name: "BMW 3 Series",
    series: "Series 3",
    category: ["sedan"],
    tagline: "Chuẩn mực sedan thể thao hạng sang",
    description:
      "BMW 3 Series là biểu tượng của dòng sedan thể thao hạng sang suốt gần 50 năm. Thế hệ mới mang ngôn ngữ thiết kế sắc sảo, khoang lái BMW Curved Display và động cơ TwinPower Turbo cân bằng hoàn hảo giữa cảm giác lái phấn khích và sự tiện nghi thường nhật.",
    priceFrom: vnd(1_649_000_000),
    badge: "Bán chạy",
    image: "/images/cars/bmw-3-series/hero-hd.jpg",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-3-series/gallery-1.jpg",
      "/images/cars/bmw-3-series/gallery-2.jpg",
      "/images/cars/bmw-3-series/gallery-3.jpg",
      "/images/cars/bmw-3-series/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "2.0L TwinPower Turbo" },
      { label: "Công suất", value: "184 mã lực" },
      { label: "Tăng tốc 0–100", value: "7,1 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "BMW Curved Display",
        description:
          "Màn hình cong liền mạch 12,3\" + 14,9\" hướng về phía người lái, vận hành trên hệ điều hành BMW iDrive 8.5 với trợ lý ảo thông minh.",
      },
      {
        title: "Khung gầm M Sport",
        description:
          "Hệ thống treo thể thao hạ thấp, vô lăng M Sport và phanh M Sport cho phản hồi tức thì trên mọi cung đường.",
      },
      {
        title: "Cân bằng 50:50",
        description:
          "Phân bổ trọng lượng lý tưởng giữa hai cầu — nền tảng làm nên cảm giác lái đặc trưng của BMW.",
      },
    ],
    variants: [
      {
        name: "320i Sportline LCI",
        price: vnd(1_649_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "184 mã lực / 300 Nm",
        highlight: "Phiên bản tiêu chuẩn",
      },
      {
        name: "320i M Sport LCI",
        price: vnd(1_899_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "184 mã lực / 300 Nm",
        highlight: "Gói ngoại thất & nội thất M Sport",
      },
      {
        name: "330i M Sport LCI",
        price: vnd(2_099_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "258 mã lực / 400 Nm",
        highlight: "Hiệu năng cao nhất dải sản phẩm",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "4 xy-lanh thẳng hàng, TwinPower Turbo" },
          { label: "Dung tích", value: "1.998 cc" },
          { label: "Công suất tối đa", value: "184 mã lực @ 5.000 vòng/phút" },
          { label: "Mô-men xoắn", value: "300 Nm @ 1.350 – 4.000 vòng/phút" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "Cầu sau (RWD)" },
          { label: "Tăng tốc 0–100 km/h", value: "7,1 giây" },
          { label: "Tốc độ tối đa", value: "235 km/h" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.713 × 1.827 × 1.440 mm" },
          { label: "Chiều dài cơ sở", value: "2.851 mm" },
          { label: "Khoang hành lý", value: "480 lít" },
          { label: "Dung tích bình nhiên liệu", value: "59 lít" },
          { label: "Khối lượng không tải", value: "1.590 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Hệ điều hành", value: "BMW iDrive 8.5" },
          { label: "Âm thanh", value: "Harman Kardon Surround 16 loa" },
          { label: "Túi khí", value: "8 túi khí" },
          { label: "Hỗ trợ lái", value: "Driving Assistant, Parking Assistant, camera 360°" },
          { label: "Đèn", value: "Adaptive LED Headlights" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "M Portimao Blue", hex: "#1e4b8f" },
      { name: "Skyscraper Grey", hex: "#7c8288" },
      { name: "Melbourne Red", hex: "#6d1420" },
    ],
  },
  {
    slug: "bmw-5-series",
    name: "BMW 5 Series",
    series: "Series 5",
    category: ["sedan"],
    tagline: "Sedan doanh nhân thế hệ mới",
    description:
      "Thế hệ thứ tám của BMW 5 Series định nghĩa lại khái niệm sedan doanh nhân: dáng xe bề thế hơn, nội thất tối giản sang trọng với BMW Interaction Bar, cùng hàng loạt công nghệ hỗ trợ lái tiên tiến nhất mà BMW từng trang bị.",
    // Giá của bản All-New (G60) chứ không phải bản thấp nhất trong danh sách:
    // trang 5 Series giới thiệu thế hệ mới, các bản G30 tiền nhiệm chỉ là xe
    // còn sẵn nên không dùng làm giá khởi điểm.
    priceFrom: vnd(2_779_000_000),
    isNew: true,
    badge: "Thế hệ mới",
    image: "/images/cars/bmw-5-series/hero.png",
    imageFit: "contain",
    imageClassName: "p-1.5 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-5-series/gallery-1.jpg",
      "/images/cars/bmw-5-series/gallery-2.jpg",
      "/images/cars/bmw-5-series/gallery-3.jpg",
      "/images/cars/bmw-5-series/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "2.0L TwinPower Turbo" },
      { label: "Công suất", value: "208 mã lực" },
      { label: "Tăng tốc 0–100", value: "7,5 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "BMW Interaction Bar",
        description:
          "Dải điều khiển pha lê phát sáng chạy ngang táp-lô, tích hợp cửa gió và đèn nội thất đa sắc theo tâm trạng.",
      },
      {
        title: "Công nghệ Mild Hybrid 48V",
        description:
          "Mô-tơ điện hỗ trợ tăng tốc, tái sinh năng lượng phanh, giúp vận hành êm ái và tiết kiệm nhiên liệu hơn.",
      },
      {
        title: "Highway Assistant",
        description:
          "Hỗ trợ lái bán tự động trên cao tốc, có khả năng chuyển làn bằng ánh mắt xác nhận của người lái.",
      },
    ],
    variants: [
      {
        name: "520i All-New",
        price: vnd(2_779_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "208 mã lực / 330 Nm",
        highlight: "Phiên bản chủ lực",
      },
      {
        name: "530i All-New",
        price: vnd(3_189_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "258 mã lực / 400 Nm",
        highlight: "Hiệu năng nâng cao",
      },
      {
        name: "520i LCI",
        price: vnd(1_979_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "184 mã lực / 290 Nm",
        highlight: "Thế hệ G30 tiền nhiệm",
      },
      {
        name: "520i M Sport LCI",
        price: vnd(2_359_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "184 mã lực / 290 Nm",
        highlight: "Thế hệ G30 tiền nhiệm, gói M Sport",
      },
      {
        name: "530i M Sport LCI",
        price: vnd(2_759_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "252 mã lực / 350 Nm",
        highlight: "Thế hệ G30 tiền nhiệm, hiệu năng cao",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "4 xy-lanh thẳng hàng + mô-tơ 48V" },
          { label: "Dung tích", value: "1.998 cc" },
          { label: "Công suất tối đa", value: "208 mã lực" },
          { label: "Mô-men xoắn", value: "330 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "Cầu sau (RWD)" },
          { label: "Tăng tốc 0–100 km/h", value: "7,5 giây" },
          { label: "Tốc độ tối đa", value: "230 km/h" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "5.060 × 1.900 × 1.515 mm" },
          { label: "Chiều dài cơ sở", value: "2.995 mm" },
          { label: "Khoang hành lý", value: "520 lít" },
          { label: "Dung tích bình nhiên liệu", value: "60 lít" },
          { label: "Khối lượng không tải", value: "1.755 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Hệ điều hành", value: "BMW Operating System 8.5" },
          { label: "Âm thanh", value: "Bowers & Wilkins Diamond Surround" },
          { label: "Ghế", value: "Ghế thể thao chỉnh điện, nhớ vị trí, thông gió" },
          { label: "Hỗ trợ lái", value: "Driving Assistant Professional, Highway Assistant" },
          { label: "Cửa sổ trời", value: "Panorama Glass Roof" },
        ],
      },
    ],
    colors: [
      { name: "Mineral White", hex: "#e8e9eb" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Phytonic Blue", hex: "#23384f" },
      { name: "Sophisto Grey", hex: "#4a4d52" },
    ],
  },
  {
    slug: "bmw-7-series",
    name: "BMW 7 Series",
    series: "Series 7",
    category: ["sedan"],
    tagline: "Đỉnh cao xe sang cỡ lớn",
    description:
      "BMW 7 Series là tuyên ngôn về sự sang trọng tối thượng: lưới tản nhiệt phát sáng Iconic Glow, cửa xe tự động, và BMW Theatre Screen 31 inch độ phân giải 8K biến hàng ghế sau thành rạp chiếu phim riêng.",
    priceFrom: vnd(5_299_000_000),
    badge: "Flagship",
    image: "/images/cars/bmw-7-series/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-7-series/gallery-1.jpg",
      "/images/cars/bmw-7-series/gallery-2.jpg",
      "/images/cars/bmw-7-series/gallery-3.jpg",
      "/images/cars/bmw-7-series/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "3.0L 6 xy-lanh Turbo" },
      { label: "Công suất", value: "286 – 381 mã lực" },
      { label: "Tăng tốc 0–100", value: "5,4 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "BMW Theatre Screen 31\"",
        description:
          "Màn hình 8K thả xuống từ trần xe cùng hệ thống âm thanh Bowers & Wilkins 4D — trải nghiệm giải trí hàng ghế sau chưa từng có.",
      },
      {
        title: "Executive Lounge",
        description:
          "Ghế sau ngả tới 42,5 độ, gác chân, massage và điều khiển bằng màn hình cảm ứng gắn trên cửa.",
      },
      {
        title: "Iconic Glow",
        description:
          "Lưới tản nhiệt phát sáng pha lê Swarovski kết hợp đèn pha Crystal Headlights tạo nhận diện thương hiệu ngay từ xa.",
      },
    ],
    variants: [
      {
        name: "735i M Sport All-New",
        price: vnd(5_299_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "286 mã lực / 450 Nm",
        highlight: "Phiên bản phân phối chính hãng",
      },
      {
        name: "735i Pure Excellence All-New",
        price: vnd(5_899_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "286 mã lực / 450 Nm",
        highlight: "Gói nội thất Executive Lounge",
      },
      {
        name: "740i Pure Excellence All-New",
        price: vnd(6_799_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
        highlight: "Bản mạnh nhất của dải 7 Series",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "6 xy-lanh thẳng hàng, TwinPower Turbo + 48V" },
          { label: "Dung tích", value: "2.998 cc" },
          { label: "Công suất tối đa", value: "286 mã lực (735i) / 381 mã lực (740i)" },
          { label: "Mô-men xoắn", value: "450 Nm (735i) / 540 Nm (740i)" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "Cầu sau (RWD)" },
          { label: "Tăng tốc 0–100 km/h", value: "5,4 giây" },
          { label: "Hệ thống treo", value: "Khí nén hai cầu, Executive Drive Pro" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "5.391 × 1.950 × 1.544 mm" },
          { label: "Chiều dài cơ sở", value: "3.215 mm" },
          { label: "Khoang hành lý", value: "540 lít" },
          { label: "Dung tích bình nhiên liệu", value: "72 lít" },
          { label: "Khối lượng không tải", value: "2.150 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình sau", value: "BMW Theatre Screen 31\" 8K" },
          { label: "Âm thanh", value: "Bowers & Wilkins Diamond Surround 4D, 36 loa" },
          { label: "Cửa xe", value: "Automatic Doors — đóng/mở tự động" },
          { label: "Kính", value: "Kính cách âm nhiều lớp toàn xe" },
          { label: "Hỗ trợ lái", value: "Driving Assistant Professional, Parking Assistant Plus" },
          { label: "Ghế", value: "Executive Lounge, massage, sưởi/thông gió 4 vị trí" },
        ],
      },
    ],
    colors: [
      { name: "Mineral White", hex: "#e8e9eb" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Tanzanite Blue", hex: "#1c2b48" },
      { name: "Oxide Grey", hex: "#565a5f" },
    ],
  },
  {
    slug: "bmw-x3",
    name: "BMW X3",
    series: "X Series",
    category: ["suv"],
    tagline: "SAV hạng sang linh hoạt mọi hành trình",
    description:
      "BMW X3 thế hệ mới sở hữu ngôn ngữ thiết kế mạnh mẽ hơn, khoang cabin rộng rãi và hệ dẫn động xDrive thông minh — lựa chọn cân bằng nhất cho gia đình hiện đại vừa cần tiện nghi vừa muốn cảm giác lái thể thao.",
    priceFrom: vnd(2_299_000_000),
    badge: "Bán chạy",
    image: "/images/cars/bmw-x3/hero-g45.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-x3/gallery-1.jpg",
      "/images/cars/bmw-x3/gallery-2.jpg",
      "/images/cars/bmw-x3/gallery-3.jpg",
      "/images/cars/bmw-x3/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "2.0L TwinPower Turbo" },
      { label: "Công suất", value: "208 mã lực" },
      { label: "Tăng tốc 0–100", value: "7,8 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "BMW xDrive",
        description:
          "Hệ dẫn động 4 bánh toàn thời gian phân bổ mô-men xoắn theo mili-giây, bám đường chắc chắn kể cả khi trời mưa.",
      },
      {
        title: "Khoang hành lý 570 lít",
        description:
          "Mở rộng tới 1.700 lít khi gập hàng ghế sau, cửa cốp điện kích hoạt bằng cử chỉ chân.",
      },
      {
        title: "Panorama Glass Roof",
        description:
          "Cửa sổ trời toàn cảnh mang ánh sáng tự nhiên tràn ngập khoang lái.",
      },
    ],
    variants: [
      {
        name: "X3 20 All-New",
        price: vnd(2_299_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "208 mã lực / 330 Nm",
      },
      {
        name: "X3 20 M Sport All-New",
        price: vnd(2_649_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "208 mã lực / 330 Nm",
        highlight: "Gói M Sport toàn diện",
      },
      {
        name: "X3 30 M Sport Pro All-New",
        price: vnd(2_899_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "258 mã lực / 400 Nm",
        highlight: "Bản cao nhất, dẫn động xDrive",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "4 xy-lanh thẳng hàng + mô-tơ 48V" },
          { label: "Dung tích", value: "1.998 cc" },
          { label: "Công suất tối đa", value: "208 mã lực" },
          { label: "Mô-men xoắn", value: "330 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "xDrive — 4 bánh toàn thời gian" },
          { label: "Tăng tốc 0–100 km/h", value: "7,8 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.755 × 1.920 × 1.660 mm" },
          { label: "Chiều dài cơ sở", value: "2.865 mm" },
          { label: "Khoang hành lý", value: "570 – 1.700 lít" },
          { label: "Khoảng sáng gầm", value: "204 mm" },
          { label: "Khối lượng không tải", value: "1.885 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Âm thanh", value: "Harman Kardon Surround" },
          { label: "Cửa cốp", value: "Điện, cảm biến chân" },
          { label: "Hỗ trợ lái", value: "Parking Assistant Plus, camera 360°" },
          { label: "Túi khí", value: "6 túi khí" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Phytonic Blue", hex: "#23384f" },
      { name: "Dune Grey", hex: "#8d8a83" },
    ],
  },
  {
    slug: "bmw-x5",
    name: "BMW X5",
    series: "X Series",
    category: ["suv"],
    tagline: "Bản lĩnh dẫn đầu phân khúc SAV",
    description:
      "BMW X5 là chiếc SAV khai sinh cả một phân khúc. Phiên bản mới kết hợp động cơ 6 xy-lanh mượt mà, hệ thống treo khí nén hai cầu và nội thất thửa riêng — đủ êm ái cho đường phố, đủ mạnh mẽ cho những hành trình dài.",
    priceFrom: vnd(4_599_000_000),
    image: "/images/cars/bmw-x5/hero.png",
    imageFit: "contain",
    // Đệm mỏng hơn các xe khác để xe to hơn; mức phóng khi hover giảm tương ứng
    // để đầu và đuôi xe không vượt ra ngoài khung.
    imageClassName: "p-1 group-hover:scale-[1.015]",
    gallery: [
      "/images/cars/bmw-x5/gallery-1.jpg",
      "/images/cars/bmw-x5/gallery-2.jpg",
      "/images/cars/bmw-x5/gallery-3.jpg",
      "/images/cars/bmw-x5/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "3.0L 6 xy-lanh Turbo" },
      { label: "Công suất", value: "381 mã lực" },
      { label: "Tăng tốc 0–100", value: "5,4 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "Treo khí nén hai cầu",
        description:
          "Tự động cân bằng chiều cao gầm, nâng/hạ 40 mm theo chế độ lái hoặc địa hình.",
      },
      {
        title: "Động cơ 6 xy-lanh thẳng hàng",
        description:
          "Cỗ máy biểu tượng của BMW cho 381 mã lực với độ mượt và âm thanh đặc trưng khó lẫn.",
      },
      {
        title: "Nội thất Vernasca",
        description:
          "Da Vernasca cao cấp, ốp gỗ tự nhiên và đèn viền nội thất đa sắc.",
      },
    ],
    variants: [
      {
        name: "X5 xDrive40i M Sport LCI",
        price: vnd(4_599_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
      },
      {
        name: "X5 xDrive40i xLine LCI",
        price: vnd(4_949_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "6 xy-lanh thẳng hàng, TwinPower Turbo + 48V" },
          { label: "Dung tích", value: "2.998 cc" },
          { label: "Công suất tối đa", value: "381 mã lực" },
          { label: "Mô-men xoắn", value: "540 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "xDrive" },
          { label: "Tăng tốc 0–100 km/h", value: "5,4 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.935 × 2.004 × 1.755 mm" },
          { label: "Chiều dài cơ sở", value: "2.975 mm" },
          { label: "Khoang hành lý", value: "650 – 1.870 lít" },
          { label: "Khối lượng không tải", value: "2.190 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display" },
          { label: "Âm thanh", value: "Harman Kardon Surround 16 loa" },
          { label: "Cửa cốp", value: "Cốp chia đôi, mở điện" },
          { label: "Hỗ trợ lái", value: "Driving Assistant Professional" },
          { label: "Đèn", value: "Adaptive LED với Laserlight tùy chọn" },
        ],
      },
    ],
    colors: [
      { name: "Mineral White", hex: "#e8e9eb" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "M Marina Bay Blue", hex: "#20558c" },
      { name: "Manhattan Green", hex: "#3a4c42" },
    ],
  },
  {
    slug: "bmw-x7",
    name: "BMW X7",
    series: "X Series",
    category: ["suv"],
    tagline: "SAV 7 chỗ đầu bảng",
    description:
      "BMW X7 mang tới không gian ba hàng ghế đẳng cấp thương gia trong hình hài một chiếc SAV bề thế. Đèn pha chia đôi đặc trưng, treo khí nén Executive Drive và cabin cách âm gần như tuyệt đối.",
    priceFrom: vnd(6_299_000_000),
    badge: "7 chỗ",
    image: "/images/cars/bmw-x7/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-x7/gallery-1.jpg",
      "/images/cars/bmw-x7/gallery-2.jpg",
      "/images/cars/bmw-x7/gallery-3.jpg",
      "/images/cars/bmw-x7/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "3.0L 6 xy-lanh Turbo" },
      { label: "Công suất", value: "381 mã lực" },
      { label: "Tăng tốc 0–100", value: "5,8 giây" },
      { label: "Số chỗ", value: "7 chỗ" },
    ],
    highlights: [
      {
        title: "Ba hàng ghế rộng rãi",
        description:
          "Hàng hai chỉnh điện trượt/ngả, hàng ba đủ chỗ cho người lớn — tiện nghi cho cả gia đình lớn.",
      },
      {
        title: "Sky Lounge Panorama",
        description:
          "Trần kính toàn cảnh với hơn 15.000 điểm sáng LED tạo hiệu ứng bầu trời sao.",
      },
      {
        title: "Executive Drive Pro",
        description:
          "Hệ thống treo chủ động quét trước mặt đường, triệt tiêu rung lắc trước khi bánh xe chạm ổ gà.",
      },
    ],
    variants: [
      {
        name: "X7 xDrive40i M Sport LCI",
        price: vnd(6_299_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
      },
      {
        name: "X7 xDrive40i Pure Excellence LCI",
        price: vnd(6_899_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
        highlight: "Gói ngoại thất crôm sang trọng",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "6 xy-lanh thẳng hàng, TwinPower Turbo + 48V" },
          { label: "Công suất tối đa", value: "381 mã lực" },
          { label: "Mô-men xoắn", value: "540 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "xDrive" },
          { label: "Tăng tốc 0–100 km/h", value: "5,8 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "5.181 × 2.000 × 1.835 mm" },
          { label: "Chiều dài cơ sở", value: "3.105 mm" },
          { label: "Số chỗ ngồi", value: "7 chỗ (3 hàng ghế)" },
          { label: "Khoang hành lý", value: "326 – 2.120 lít" },
          { label: "Khối lượng không tải", value: "2.435 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Trần xe", value: "Sky Lounge Panorama Glass Roof" },
          { label: "Âm thanh", value: "Bowers & Wilkins Diamond Surround" },
          { label: "Điều hòa", value: "5 vùng độc lập" },
          { label: "Hỗ trợ lái", value: "Driving Assistant Professional, camera 360°" },
        ],
      },
    ],
    colors: [
      { name: "Mineral White", hex: "#e8e9eb" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Tanzanite Blue", hex: "#1c2b48" },
      { name: "Ametrine", hex: "#4b3f57" },
    ],
  },
  {
    slug: "bmw-i4",
    name: "BMW i4",
    series: "BMW i",
    category: ["electric", "sedan"],
    tagline: "Gran Coupé thuần điện",
    description:
      "BMW i4 chứng minh xe điện vẫn có thể mang trọn DNA lái của BMW. Mô-men xoắn tức thời, trọng tâm thấp nhờ pin đặt dưới sàn và quãng đường tới 590 km cho mỗi lần sạc đầy.",
    priceFrom: vnd(3_244_000_000),
    isNew: true,
    badge: "Thuần điện",
    image: "/images/cars/bmw-i4/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-i4/gallery-1.jpg",
      "/images/cars/bmw-i4/gallery-2.jpg",
      "/images/cars/bmw-i4/gallery-3.jpg",
      "/images/cars/bmw-i4/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Hệ truyền động", value: "Thuần điện eDrive" },
      { label: "Công suất", value: "340 mã lực" },
      { label: "Quãng đường", value: "Tới 590 km" },
      { label: "Tăng tốc 0–100", value: "5,7 giây" },
    ],
    highlights: [
      {
        title: "Pin 83,9 kWh",
        description:
          "Sạc nhanh DC 205 kW — bổ sung 140 km quãng đường chỉ trong 10 phút.",
      },
      {
        title: "IconicSounds Electric",
        description:
          "Âm thanh vận hành do nhà soạn nhạc Hans Zimmer thiết kế riêng cho dải xe điện BMW.",
      },
      {
        title: "Không phát thải",
        description:
          "Vận hành yên tĩnh tuyệt đối, miễn lệ phí trước bạ theo chính sách xe điện hiện hành.",
      },
    ],
    variants: [
      {
        name: "i4 eDrive40 Gran Coupé",
        price: vnd(3_244_000_000),
        engine: "Mô-tơ điện cầu sau",
        power: "340 mã lực / 430 Nm",
      },
    ],
    specs: [
      {
        group: "Hệ truyền động điện",
        items: [
          { label: "Loại", value: "BMW eDrive thế hệ 5" },
          { label: "Dung lượng pin", value: "83,9 kWh (81,5 kWh khả dụng)" },
          { label: "Công suất tối đa", value: "340 mã lực" },
          { label: "Mô-men xoắn", value: "430 Nm tức thời" },
          { label: "Quãng đường (WLTP)", value: "Tới 590 km" },
          { label: "Sạc nhanh DC", value: "205 kW — 10–80% trong 31 phút" },
          { label: "Sạc AC", value: "11 kW" },
          { label: "Tăng tốc 0–100 km/h", value: "5,7 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.783 × 1.852 × 1.448 mm" },
          { label: "Chiều dài cơ sở", value: "2.856 mm" },
          { label: "Khoang hành lý", value: "470 – 1.290 lít" },
          { label: "Khối lượng không tải", value: "2.125 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Âm thanh", value: "Harman Kardon Surround" },
          { label: "Bảo hành pin", value: "8 năm hoặc 160.000 km" },
          { label: "Hỗ trợ lái", value: "Driving Assistant Professional" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Portimao Blue", hex: "#1e4b8f" },
      { name: "San Remo Green", hex: "#2d4438" },
    ],
  },
  {
    slug: "bmw-ix3",
    name: "BMW iX3",
    series: "BMW i",
    category: ["electric", "suv"],
    tagline: "SAV điện cho đô thị hiện đại",
    description:
      "BMW iX3 mang trọn sự tiện dụng của một chiếc SAV cỡ trung vào hệ truyền động thuần điện. Vận hành êm, chi phí sử dụng thấp và không gian nội thất thân thiện với gia đình.",
    priceFrom: vnd(2_445_000_000),
    isNew: true,
    badge: "Thuần điện",
    image: "/images/cars/bmw-ix3/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-ix3/gallery-1.jpg",
      "/images/cars/bmw-ix3/gallery-2.jpg",
      "/images/cars/bmw-ix3/gallery-3.jpg",
      "/images/cars/bmw-ix3/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Hệ truyền động", value: "Thuần điện eDrive" },
      { label: "Công suất", value: "286 mã lực" },
      { label: "Quãng đường", value: "Tới 460 km" },
      { label: "Tăng tốc 0–100", value: "6,8 giây" },
    ],
    highlights: [
      {
        title: "Chi phí vận hành thấp",
        description:
          "Chỉ khoảng 1/3 chi phí nhiên liệu so với xe xăng cùng phân khúc, ít hạng mục bảo dưỡng định kỳ.",
      },
      {
        title: "Adaptive Recuperation",
        description:
          "Phanh tái sinh thích ứng theo dữ liệu dẫn đường và giao thông phía trước.",
      },
      {
        title: "Trạm sạc BMW",
        description:
          "Hỗ trợ lắp đặt bộ sạc tại nhà và truy cập mạng lưới trạm sạc đối tác toàn quốc.",
      },
    ],
    variants: [
      {
        name: "iX3 M Sport",
        price: vnd(2_445_000_000),
        engine: "Mô-tơ điện cầu sau",
        power: "286 mã lực / 400 Nm",
      },
    ],
    specs: [
      {
        group: "Hệ truyền động điện",
        items: [
          { label: "Loại", value: "BMW eDrive" },
          { label: "Dung lượng pin", value: "80 kWh" },
          { label: "Công suất tối đa", value: "286 mã lực" },
          { label: "Mô-men xoắn", value: "400 Nm" },
          { label: "Quãng đường (WLTP)", value: "Tới 460 km" },
          { label: "Sạc nhanh DC", value: "150 kW — 10–80% trong 34 phút" },
          { label: "Tăng tốc 0–100 km/h", value: "6,8 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.734 × 1.891 × 1.668 mm" },
          { label: "Chiều dài cơ sở", value: "2.864 mm" },
          { label: "Khoang hành lý", value: "510 – 1.560 lít" },
          { label: "Khối lượng không tải", value: "2.185 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Live Cockpit Professional" },
          { label: "Bảo hành pin", value: "8 năm hoặc 160.000 km" },
          { label: "Hỗ trợ lái", value: "Driving Assistant Professional" },
          { label: "Điều hòa", value: "2 vùng, lọc bụi mịn" },
        ],
      },
    ],
    colors: [
      { name: "Mineral White", hex: "#e8e9eb" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Phytonic Blue", hex: "#23384f" },
    ],
  },
  {
    slug: "bmw-m4-competition",
    name: "BMW M4 Competition",
    series: "BMW M",
    category: ["m-performance", "sedan"],
    tagline: "Thuần chất đường đua",
    description:
      "BMW M4 Competition là kết tinh của bộ phận BMW M: động cơ S58 6 xy-lanh tăng áp kép 530 mã lực, khung gầm tinh chỉnh riêng và hàng ghế bucket carbon — chiếc coupé sinh ra cho những vòng đua.",
    priceFrom: vnd(6_499_000_000),
    badge: "BMW M",
    image: "/images/cars/bmw-m4/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-m4/gallery-1.jpg",
      "/images/cars/bmw-m4/gallery-2.jpg",
      "/images/cars/bmw-m4/gallery-3.jpg",
      "/images/cars/bmw-m4/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "3.0L S58 TwinTurbo" },
      { label: "Công suất", value: "530 mã lực" },
      { label: "Tăng tốc 0–100", value: "3,5 giây" },
      { label: "Số chỗ", value: "4 chỗ" },
    ],
    highlights: [
      {
        title: "Động cơ S58",
        description:
          "6 xy-lanh thẳng hàng tăng áp kép, 530 mã lực và 650 Nm — cỗ máy thuần M được phát triển từ đường đua.",
      },
      {
        title: "M xDrive",
        description:
          "Dẫn động 4 bánh có thể chuyển hoàn toàn về cầu sau ở chế độ 2WD để drift đúng chất M.",
      },
      {
        title: "M Carbon Package",
        description:
          "Nắp ca-pô, mui và ghế bucket bằng sợi carbon giúp giảm hơn 20 kg khối lượng.",
      },
    ],
    variants: [
      {
        name: "M4 Competition Coupé",
        price: vnd(6_499_000_000),
        engine: "3.0L S58 TwinPower TwinTurbo",
        power: "530 mã lực / 650 Nm",
      },
      {
        name: "M4 Competition M xDrive",
        price: vnd(7_199_000_000),
        engine: "3.0L S58 TwinPower TwinTurbo",
        power: "530 mã lực / 650 Nm",
        highlight: "Dẫn động 4 bánh M xDrive",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "6 xy-lanh thẳng hàng S58, tăng áp kép" },
          { label: "Dung tích", value: "2.993 cc" },
          { label: "Công suất tối đa", value: "530 mã lực @ 6.250 vòng/phút" },
          { label: "Mô-men xoắn", value: "650 Nm @ 2.750 – 5.500 vòng/phút" },
          { label: "Hộp số", value: "M Steptronic 8 cấp với Drivelogic" },
          { label: "Tăng tốc 0–100 km/h", value: "3,5 giây" },
          { label: "Tốc độ tối đa", value: "290 km/h (gói M Driver's)" },
          { label: "Phanh", value: "M Compound / M Carbon Ceramic tùy chọn" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.794 × 1.887 × 1.393 mm" },
          { label: "Chiều dài cơ sở", value: "2.857 mm" },
          { label: "Mâm xe", value: "M 19\" trước / 20\" sau" },
          { label: "Khối lượng không tải", value: "1.725 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Ghế", value: "M Carbon Bucket Seats" },
          { label: "Chế độ lái", value: "M Setup, M Drive Professional, M Traction Control 10 cấp" },
          { label: "Màn hình", value: "BMW Curved Display với M View" },
          { label: "Âm thanh", value: "Harman Kardon Surround" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Sao Paulo Yellow", hex: "#d8c22a" },
      { name: "Toronto Red", hex: "#8f1420" },
      { name: "Isle of Man Green", hex: "#22412f" },
      { name: "Portimao Blue", hex: "#1e4b8f" },
    ],
  },
  {
    slug: "bmw-m2",
    name: "BMW M2",
    series: "BMW M",
    category: ["m-performance", "coupe"],
    tagline: "Chiếc M nhỏ nhất, thuần chất nhất",
    description:
      "BMW M2 là chiếc xe M cỡ nhỏ cuối cùng còn dẫn động cầu sau thuần tuý và vẫn có tuỳ chọn số sàn sáu cấp. Động cơ S58 mượn từ M3, thân xe ngắn hơn và nhẹ hơn — công thức được giới mê lái xem là gần với tinh thần M nguyên bản nhất hiện nay.",
    priceFrom: vnd(4_099_000_000),
    badge: "BMW M",
    image: "/images/cars/bmw-m2/hero-g87.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-m2/gallery-1.jpg",
      "/images/cars/bmw-m2/gallery-2.jpg",
      "/images/cars/bmw-m2/gallery-3.jpg",
      "/images/cars/bmw-m2/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "3.0L S58 TwinTurbo" },
      { label: "Công suất", value: "480 mã lực" },
      { label: "Tăng tốc 0–100", value: "4,1 giây" },
      { label: "Số chỗ", value: "4 chỗ" },
    ],
    highlights: [
      {
        title: "Cầu sau thuần tuý",
        description:
          "Không có tuỳ chọn dẫn động bốn bánh — toàn bộ 480 mã lực dồn về cầu sau, đúng chất M cổ điển.",
      },
      {
        title: "Vẫn còn số sàn",
        description:
          "Hộp số sàn sáu cấp là tuỳ chọn không mất thêm chi phí, thứ gần như đã tuyệt chủng ở phân khúc này.",
      },
      {
        title: "Động cơ S58",
        description:
          "Cùng khối máy sáu xy-lanh tăng áp kép của M3, đặt trong thân xe ngắn hơn 220 mm và nhẹ hơn.",
      },
    ],
    variants: [
      {
        name: "M2 Coupé",
        price: vnd(4_099_000_000),
        engine: "3.0L S58 TwinPower TwinTurbo",
        power: "480 mã lực / 600 Nm",
        highlight: "Phiên bản phân phối chính hãng",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "6 xy-lanh thẳng hàng S58, tăng áp kép" },
          { label: "Dung tích", value: "2.993 cc" },
          { label: "Công suất tối đa", value: "480 mã lực" },
          { label: "Mô-men xoắn", value: "600 Nm" },
          { label: "Hộp số", value: "M Steptronic 8 cấp hoặc số sàn 6 cấp" },
          { label: "Dẫn động", value: "Cầu sau (RWD)" },
          { label: "Tăng tốc 0–100 km/h", value: "4,1 giây" },
          { label: "Tốc độ tối đa", value: "250 km/h (285 km/h với gói M Driver)" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.580 × 1.887 × 1.403 mm" },
          { label: "Chiều dài cơ sở", value: "2.747 mm" },
          { label: "Khoang hành lý", value: "390 lít" },
          { label: "Dung tích bình nhiên liệu", value: "52 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Ghế", value: "Ghế thể thao M, tuỳ chọn ghế bucket carbon" },
          { label: "Phanh", value: "M Compound, tuỳ chọn M Carbon Ceramic" },
          { label: "Chế độ lái", value: "M Setup, M Drive Professional, M Traction Control 10 cấp" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Zandvoort Blue", hex: "#2b4d8f" },
      { name: "Toronto Red", hex: "#8c1a20" },
    ],
  },
  {
    slug: "bmw-m3",
    name: "BMW M3",
    series: "BMW M",
    category: ["m-performance", "sedan"],
    tagline: "Sedan hiệu năng cao kinh điển",
    description:
      "BMW M3 Competition M xDrive gói trọn 530 mã lực vào thân xe sedan bốn cửa dùng được hằng ngày. Dẫn động bốn bánh M xDrive có thể chuyển hoàn toàn về cầu sau, khung gầm và hệ thống làm mát phát triển riêng cho đường đua.",
    priceFrom: vnd(4_999_000_000),
    badge: "BMW M",
    image: "/images/cars/bmw-m3/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-m3/gallery-1.jpg",
      "/images/cars/bmw-m3/gallery-2.jpg",
      "/images/cars/bmw-m3/gallery-3.jpg",
      "/images/cars/bmw-m3/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "3.0L S58 TwinTurbo" },
      { label: "Công suất", value: "530 mã lực" },
      { label: "Tăng tốc 0–100", value: "3,5 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "M xDrive chuyển được về 2WD",
        description:
          "Ba chế độ 4WD, 4WD Sport và 2WD — tắt hẳn cầu trước và cả kiểm soát lực kéo khi muốn drift.",
      },
      {
        title: "530 mã lực nhưng bốn cửa",
        description:
          "Hiệu năng ngang siêu xe trong thân xe sedan có cốp 480 lít và ghế sau đủ rộng cho gia đình.",
      },
      {
        title: "M Drive Professional",
        description:
          "Bộ chế độ đường đua kèm M Drift Analyser và M Laptimer, ghi lại từng vòng chạy.",
      },
    ],
    variants: [
      {
        name: "M3 Competition M xDrive",
        price: vnd(4_999_000_000),
        engine: "3.0L S58 TwinPower TwinTurbo",
        power: "530 mã lực / 650 Nm",
        highlight: "Phiên bản phân phối chính hãng",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "6 xy-lanh thẳng hàng S58, tăng áp kép" },
          { label: "Dung tích", value: "2.993 cc" },
          { label: "Công suất tối đa", value: "530 mã lực" },
          { label: "Mô-men xoắn", value: "650 Nm" },
          { label: "Hộp số", value: "M Steptronic 8 cấp" },
          { label: "Dẫn động", value: "M xDrive, chuyển được về cầu sau" },
          { label: "Tăng tốc 0–100 km/h", value: "3,5 giây" },
          { label: "Tốc độ tối đa", value: "250 km/h (290 km/h với gói M Driver)" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.801 × 1.903 × 1.441 mm" },
          { label: "Chiều dài cơ sở", value: "2.857 mm" },
          { label: "Khoang hành lý", value: "480 lít" },
          { label: "Dung tích bình nhiên liệu", value: "59 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Ghế", value: "Ghế bucket M Carbon" },
          { label: "Phanh", value: "M Compound, tuỳ chọn M Carbon Ceramic" },
          { label: "Chế độ lái", value: "M Drive Professional, M Traction Control 10 cấp" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Isle of Man Green", hex: "#1f3a2e" },
      { name: "Toronto Red", hex: "#8c1a20" },
    ],
  },
  {
    slug: "bmw-m3-touring",
    name: "BMW M3 Touring",
    series: "BMW M",
    category: ["m-performance", "sedan"],
    tagline: "Wagon 530 mã lực, chở được cả gia đình",
    description:
      "M3 Touring là chiếc M3 phiên bản wagon đầu tiên trong lịch sử BMW M. Vẫn 530 mã lực và khung gầm M xDrive như bản sedan, nhưng khoang hành lý mở rộng tới 1.510 lít — chiếc xe đua đường trường mà vẫn chở trọn hành lý cả nhà.",
    priceFrom: vnd(5_389_000_000),
    badge: "BMW M",
    isNew: true,
    image: "/images/cars/bmw-m3-touring/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-m3-touring/gallery-1.jpg",
      "/images/cars/bmw-m3-touring/gallery-2.jpg",
      "/images/cars/bmw-m3-touring/gallery-3.jpg",
      "/images/cars/bmw-m3-touring/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "3.0L S58 TwinTurbo" },
      { label: "Công suất", value: "530 mã lực" },
      { label: "Tăng tốc 0–100", value: "3,6 giây" },
      { label: "Khoang hành lý", value: "500 – 1.510 lít" },
    ],
    highlights: [
      {
        title: "M3 wagon đầu tiên",
        description:
          "Sau gần 40 năm, BMW M lần đầu làm bản Touring cho M3 — và bán chạy tới mức luôn trong tình trạng chờ xe.",
      },
      {
        title: "1.510 lít khi gập ghế",
        description:
          "Cửa cốp điện, kính sau mở riêng, ray cố định hành lý — thực dụng như một chiếc wagon thường.",
      },
      {
        title: "Nhanh gần bằng bản sedan",
        description:
          "Nặng hơn khoảng 85 kg nhưng chỉ chậm hơn 0,1 giây khi tăng tốc 0–100 km/h.",
      },
    ],
    variants: [
      {
        name: "M3 Touring Competition M xDrive",
        price: vnd(5_389_000_000),
        engine: "3.0L S58 TwinPower TwinTurbo",
        power: "530 mã lực / 650 Nm",
        highlight: "Phiên bản phân phối chính hãng",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "6 xy-lanh thẳng hàng S58, tăng áp kép" },
          { label: "Dung tích", value: "2.993 cc" },
          { label: "Công suất tối đa", value: "530 mã lực" },
          { label: "Mô-men xoắn", value: "650 Nm" },
          { label: "Hộp số", value: "M Steptronic 8 cấp" },
          { label: "Dẫn động", value: "M xDrive, chuyển được về cầu sau" },
          { label: "Tăng tốc 0–100 km/h", value: "3,6 giây" },
          { label: "Tốc độ tối đa", value: "250 km/h (280 km/h với gói M Driver)" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.794 × 1.903 × 1.436 mm" },
          { label: "Chiều dài cơ sở", value: "2.857 mm" },
          { label: "Khoang hành lý", value: "500 – 1.510 lít" },
          { label: "Dung tích bình nhiên liệu", value: "59 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Cốp", value: "Cửa cốp điện, kính sau mở riêng" },
          { label: "Ghế", value: "Ghế thể thao M, tuỳ chọn bucket M Carbon" },
          { label: "Chế độ lái", value: "M Drive Professional, M Traction Control 10 cấp" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Isle of Man Green", hex: "#1f3a2e" },
      { name: "Skyscraper Grey", hex: "#7c8288" },
    ],
  },
  {
    slug: "bmw-x1",
    name: "BMW X1",
    series: "Series X",
    category: ["suv"],
    tagline: "SAV nhỏ gọn, cửa ngõ vào thế giới BMW",
    description:
      "BMW X1 thế hệ mới lớn hơn, vuông vức và hiện đại hơn hẳn đời cũ. Khoang lái BMW Curved Display, cốp rộng 540 lít cùng kích thước gọn gàng khiến X1 trở thành lựa chọn hợp lý nhất để bước vào thương hiệu BMW.",
    priceFrom: vnd(1_689_000_000),
    badge: "Khởi điểm",
    image: "/images/cars/bmw-x1/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-x1/gallery-1.jpg",
      "/images/cars/bmw-x1/gallery-2.jpg",
      "/images/cars/bmw-x1/gallery-3.jpg",
      "/images/cars/bmw-x1/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "2.0L TwinPower Turbo" },
      { label: "Công suất", value: "204 mã lực" },
      { label: "Tăng tốc 0–100", value: "8,3 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "BMW Curved Display",
        description:
          "Màn hình cong 10,25\" + 10,7\" chạy iDrive 9 — trang bị vốn chỉ có ở các dòng xe lớn hơn.",
      },
      {
        title: "Cốp 540 lít",
        description:
          "Cửa cốp điện, hàng ghế sau gập 40:20:40 mở rộng khoang chứa đồ tới 1.600 lít.",
      },
      {
        title: "Kích thước đô thị",
        description:
          "Dài 4,5 mét, bán kính quay vòng nhỏ — dễ xoay trở trong phố và hầm gửi xe chật.",
      },
    ],
    variants: [
      {
        name: "X1 sDrive20i",
        price: vnd(1_689_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "204 mã lực / 300 Nm",
        highlight: "Phiên bản phân phối chính hãng",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "4 xy-lanh thẳng hàng, TwinPower Turbo" },
          { label: "Dung tích", value: "1.998 cc" },
          { label: "Công suất tối đa", value: "204 mã lực" },
          { label: "Mô-men xoắn", value: "300 Nm" },
          { label: "Hộp số", value: "Steptronic ly hợp kép 7 cấp" },
          { label: "Dẫn động", value: "Cầu trước (sDrive)" },
          { label: "Tăng tốc 0–100 km/h", value: "8,3 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.500 × 1.845 × 1.642 mm" },
          { label: "Chiều dài cơ sở", value: "2.692 mm" },
          { label: "Khoang hành lý", value: "540 – 1.600 lít" },
          { label: "Dung tích bình nhiên liệu", value: "54 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 10,25\" + 10,7\"" },
          { label: "Hệ điều hành", value: "BMW iDrive 9" },
          { label: "Hỗ trợ lái", value: "Driving Assistant, Parking Assistant, camera lùi" },
          { label: "Đèn", value: "Adaptive LED Headlights" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Space Silver", hex: "#8e9296" },
    ],
  },
  {
    slug: "bmw-430i-convertible",
    name: "BMW 430i Convertible",
    series: "Series 4",
    category: ["coupe"],
    tagline: "Mui trần bốn chỗ cho ngày nắng",
    description:
      "BMW 430i Convertible giữ nguyên tỷ lệ thể thao và dẫn động cầu sau của dòng 4, nhưng thêm bộ mui vải mở điện — chỉ 18 giây là biến chiếc coupé thành xe mui trần, thao tác được ngay khi đang chạy dưới 50 km/h.",
    priceFrom: vnd(3_399_000_000),
    image: "/images/cars/bmw-430i-convertible/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-430i-convertible/gallery-1.jpg",
      "/images/cars/bmw-430i-convertible/gallery-2.jpg",
      "/images/cars/bmw-430i-convertible/gallery-3.jpg",
      "/images/cars/bmw-430i-convertible/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "2.0L TwinPower Turbo" },
      { label: "Công suất", value: "258 mã lực" },
      { label: "Tăng tốc 0–100", value: "6,2 giây" },
      { label: "Số chỗ", value: "4 chỗ" },
    ],
    highlights: [
      {
        title: "Mui vải mở 18 giây",
        description:
          "Đóng mở hoàn toàn bằng điện, thao tác được khi xe đang chạy tới 50 km/h. Mui đóng lại cách âm gần như một chiếc coupé mui cứng.",
      },
      {
        title: "Air Collar sưởi cổ",
        description:
          "Cửa gió ấm đặt trên lưng ghế thổi vào vùng cổ, cùng kính chắn gió sau giúp mở mui thoải mái cả khi trời se lạnh.",
      },
      {
        title: "Dẫn động cầu sau",
        description:
          "Khung gầm gia cường bù lại phần cứng vững mất đi khi bỏ mái, giữ trọn cảm giác lái đặc trưng của dòng 4.",
      },
    ],
    variants: [
      {
        name: "430i Convertible M Sport LCI",
        price: vnd(3_399_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "258 mã lực / 400 Nm",
        highlight: "Bản nâng cấp giữa vòng đời",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "4 xy-lanh thẳng hàng, TwinPower Turbo" },
          { label: "Dung tích", value: "1.998 cc" },
          { label: "Công suất tối đa", value: "258 mã lực" },
          { label: "Mô-men xoắn", value: "400 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "Cầu sau (RWD)" },
          { label: "Tăng tốc 0–100 km/h", value: "6,2 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.768 × 1.852 × 1.393 mm" },
          { label: "Chiều dài cơ sở", value: "2.851 mm" },
          { label: "Khoang hành lý", value: "385 lít (mui đóng) / 300 lít (mui mở)" },
          { label: "Dung tích bình nhiên liệu", value: "59 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Mui", value: "Mui vải điện, mở trong 18 giây" },
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Âm thanh", value: "Harman Kardon Surround" },
          { label: "Hỗ trợ lái", value: "Driving Assistant, Parking Assistant Plus" },
          { label: "Đèn", value: "Adaptive LED Headlights" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "M Portimao Blue", hex: "#1e4b8f" },
      { name: "San Remo Green", hex: "#2f4038" },
    ],
  },
  {
    slug: "bmw-430i-gran-coupe",
    name: "BMW 430i Gran Coupé",
    series: "Series 4",
    category: ["coupe", "sedan"],
    tagline: "Dáng coupé, cửa sau và cốp mở rộng",
    description:
      "430i Gran Coupé giữ mái dốc và tỷ lệ thể thao của dòng 4 nhưng thêm hai cửa sau cùng cửa cốp mở kiểu hatchback — lựa chọn cho người muốn xe đẹp mà vẫn dùng được hằng ngày.",
    priceFrom: vnd(3_029_000_000),
    image: "/images/cars/bmw-430i-gran-coupe/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-430i-gran-coupe/gallery-1.jpg",
      "/images/cars/bmw-430i-gran-coupe/gallery-2.jpg",
      "/images/cars/bmw-430i-gran-coupe/gallery-3.jpg",
      "/images/cars/bmw-430i-gran-coupe/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "2.0L TwinPower Turbo" },
      { label: "Công suất", value: "258 mã lực" },
      { label: "Tăng tốc 0–100", value: "6,2 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "Cửa cốp hatchback",
        description:
          "Khoang hành lý 470 lít, mở rộng tới 1.290 lít khi gập hàng ghế sau — thực dụng hơn hẳn bản coupé.",
      },
      {
        title: "Khung kính không khung",
        description:
          "Bốn cửa kính không khung giữ trọn nét coupé dù xe có tới năm chỗ ngồi.",
      },
      {
        title: "Gói M Sport",
        description:
          "Bodykit M, treo thể thao và vi sai M Sport tuỳ chọn cho cảm giác lái sắc nét.",
      },
    ],
    variants: [
      {
        name: "430i Gran Coupé M Sport",
        price: vnd(3_029_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "258 mã lực / 400 Nm",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "4 xy-lanh thẳng hàng, TwinPower Turbo" },
          { label: "Dung tích", value: "1.998 cc" },
          { label: "Công suất tối đa", value: "258 mã lực" },
          { label: "Mô-men xoắn", value: "400 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "Cầu sau (RWD)" },
          { label: "Tăng tốc 0–100 km/h", value: "6,2 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.783 × 1.852 × 1.442 mm" },
          { label: "Chiều dài cơ sở", value: "2.856 mm" },
          { label: "Khoang hành lý", value: "470 – 1.290 lít" },
          { label: "Dung tích bình nhiên liệu", value: "59 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Live Cockpit Professional" },
          { label: "Âm thanh", value: "Harman Kardon Surround" },
          { label: "Hỗ trợ lái", value: "Driving Assistant, Parking Assistant Plus" },
          { label: "Đèn", value: "Adaptive LED Headlights" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "M Portimao Blue", hex: "#1e4b8f" },
    ],
  },
  {
    slug: "bmw-x4",
    name: "BMW X4",
    series: "Series X",
    category: ["suv", "coupe"],
    tagline: "SAV Coupé dáng thể thao",
    description:
      "BMW X4 lấy nền tảng X3 nhưng khoác lên thân xe mái dốc kiểu coupé, gầm thấp hơn và khung gầm tinh chỉnh chặt hơn — chiếc SAV cho người ưu tiên dáng xe và cảm giác lái.",
    priceFrom: vnd(2_999_000_000),
    image: "/images/cars/bmw-x4/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-x4/gallery-1.jpg",
      "/images/cars/bmw-x4/gallery-2.jpg",
      "/images/cars/bmw-x4/gallery-3.jpg",
      "/images/cars/bmw-x4/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "2.0L TwinPower Turbo" },
      { label: "Công suất", value: "184 mã lực" },
      { label: "Tăng tốc 0–100", value: "8,3 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "Mái dốc coupé",
        description:
          "Đường mái vuốt về đuôi cùng cụm đèn hậu mảnh tạo dáng thể thao khác biệt hẳn X3.",
      },
      {
        title: "xDrive thông minh",
        description:
          "Dẫn động bốn bánh phân bổ mô-men linh hoạt, thiên về cầu sau khi vào cua.",
      },
      {
        title: "Gói M Sport",
        description:
          "Treo M Sport, bodykit M và ghế thể thao — trang bị tiêu chuẩn trên bản phân phối.",
      },
    ],
    variants: [
      {
        name: "X4 xDrive20i M Sport LCI",
        price: vnd(2_999_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "184 mã lực / 300 Nm",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "4 xy-lanh thẳng hàng, TwinPower Turbo" },
          { label: "Dung tích", value: "1.998 cc" },
          { label: "Công suất tối đa", value: "184 mã lực" },
          { label: "Mô-men xoắn", value: "300 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "Bốn bánh xDrive" },
          { label: "Tăng tốc 0–100 km/h", value: "8,3 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.752 × 1.918 × 1.621 mm" },
          { label: "Chiều dài cơ sở", value: "2.864 mm" },
          { label: "Khoang hành lý", value: "525 – 1.430 lít" },
          { label: "Dung tích bình nhiên liệu", value: "65 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Live Cockpit Professional" },
          { label: "Âm thanh", value: "Harman Kardon Surround" },
          { label: "Hỗ trợ lái", value: "Driving Assistant, camera 360°" },
          { label: "Cửa sổ trời", value: "Panorama Glass Roof" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Phytonic Blue", hex: "#23384f" },
    ],
  },
  {
    slug: "bmw-x6",
    name: "BMW X6",
    series: "Series X",
    category: ["suv", "coupe"],
    tagline: "SAV Coupé cỡ lớn, sáu xy-lanh",
    description:
      "BMW X6 là chiếc SAV Coupé khai sinh cả một phân khúc: kích thước và trang bị của X5, nhưng đường mái vuốt thể thao và động cơ sáu xy-lanh thẳng hàng 381 mã lực.",
    priceFrom: vnd(4_459_000_000),
    image: "/images/cars/bmw-x6/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-x6/gallery-1.jpg",
      "/images/cars/bmw-x6/gallery-2.jpg",
      "/images/cars/bmw-x6/gallery-3.jpg",
      "/images/cars/bmw-x6/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "3.0L 6 xy-lanh Turbo" },
      { label: "Công suất", value: "381 mã lực" },
      { label: "Tăng tốc 0–100", value: "5,4 giây" },
      { label: "Số chỗ", value: "5 chỗ" },
    ],
    highlights: [
      {
        title: "Động cơ B58",
        description:
          "Sáu xy-lanh thẳng hàng tăng áp 381 mã lực kết hợp mild hybrid 48V — mượt và bốc ở mọi dải vòng tua.",
      },
      {
        title: "Lưới tản nhiệt Iconic Glow",
        description:
          "Viền lưới tản nhiệt phát sáng, đèn pha Laserlight tuỳ chọn tạo nhận diện mạnh về đêm.",
      },
      {
        title: "Treo khí nén thích ứng",
        description:
          "Tự cân bằng hai cầu, hạ gầm ở tốc độ cao và nâng khi qua địa hình xấu.",
      },
    ],
    variants: [
      {
        name: "X6 xDrive40i M Sport",
        price: vnd(4_459_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 520 Nm",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "6 xy-lanh thẳng hàng, TwinPower Turbo + 48V" },
          { label: "Dung tích", value: "2.998 cc" },
          { label: "Công suất tối đa", value: "381 mã lực" },
          { label: "Mô-men xoắn", value: "520 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "Bốn bánh xDrive" },
          { label: "Tăng tốc 0–100 km/h", value: "5,4 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.935 × 2.004 × 1.696 mm" },
          { label: "Chiều dài cơ sở", value: "2.975 mm" },
          { label: "Khoang hành lý", value: "580 – 1.530 lít" },
          { label: "Dung tích bình nhiên liệu", value: "83 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình", value: "BMW Curved Display 12,3\" + 14,9\"" },
          { label: "Âm thanh", value: "Harman Kardon Surround" },
          { label: "Hỗ trợ lái", value: "Driving Assistant Professional, camera 360°" },
          { label: "Ghế", value: "Ghế thể thao, sưởi và thông gió" },
        ],
      },
    ],
    colors: [
      { name: "Mineral White", hex: "#e8e9eb" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Dravit Grey", hex: "#5b5d60" },
    ],
  },
  {
    slug: "bmw-z4",
    name: "BMW Z4",
    series: "Series Z",
    category: ["coupe"],
    tagline: "Roadster mui trần hai chỗ",
    description:
      "BMW Z4 sDrive20i là chiếc roadster hai chỗ dẫn động cầu sau với mui vải mở trong 10 giây ở tốc độ tới 50 km/h — mẫu xe thuần cảm xúc nhất trong dải sản phẩm BMW phân phối chính hãng.",
    priceFrom: vnd(3_139_000_000),
    image: "/images/cars/bmw-z4/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-z4/gallery-1.jpg",
      "/images/cars/bmw-z4/gallery-2.jpg",
      "/images/cars/bmw-z4/gallery-3.jpg",
      "/images/cars/bmw-z4/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Động cơ", value: "2.0L TwinPower Turbo" },
      { label: "Công suất", value: "197 mã lực" },
      { label: "Tăng tốc 0–100", value: "6,6 giây" },
      { label: "Số chỗ", value: "2 chỗ" },
    ],
    highlights: [
      {
        title: "Mui vải mở 10 giây",
        description:
          "Đóng mở điện hoàn toàn, thao tác được ngay khi xe đang chạy dưới 50 km/h.",
      },
      {
        title: "Phân bổ trọng lượng 50:50",
        description:
          "Động cơ đặt sau trục trước, cầu sau chủ động — công thức roadster kinh điển của BMW.",
      },
      {
        title: "Khung gầm cứng vững",
        description:
          "Thanh giằng và kết cấu thân xe gia cường bù lại phần cứng vững mất đi khi bỏ mái cứng.",
      },
    ],
    variants: [
      {
        name: "Z4 sDrive20i",
        price: vnd(3_139_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "197 mã lực / 320 Nm",
      },
    ],
    specs: [
      {
        group: "Động cơ & vận hành",
        items: [
          { label: "Loại động cơ", value: "4 xy-lanh thẳng hàng, TwinPower Turbo" },
          { label: "Dung tích", value: "1.998 cc" },
          { label: "Công suất tối đa", value: "197 mã lực" },
          { label: "Mô-men xoắn", value: "320 Nm" },
          { label: "Hộp số", value: "Steptronic Sport 8 cấp" },
          { label: "Dẫn động", value: "Cầu sau (RWD)" },
          { label: "Tăng tốc 0–100 km/h", value: "6,6 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "4.324 × 1.864 × 1.304 mm" },
          { label: "Chiều dài cơ sở", value: "2.470 mm" },
          { label: "Khoang hành lý", value: "281 lít" },
          { label: "Dung tích bình nhiên liệu", value: "52 lít" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Mui", value: "Mui vải điện, mở trong 10 giây" },
          { label: "Màn hình", value: "BMW Live Cockpit Professional" },
          { label: "Âm thanh", value: "Harman Kardon Surround" },
          { label: "Hỗ trợ lái", value: "Driving Assistant, camera lùi" },
        ],
      },
    ],
    colors: [
      { name: "Alpine White", hex: "#f1f2f4" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "San Francisco Red", hex: "#7a1f24" },
    ],
  },
  {
    slug: "bmw-i7",
    name: "BMW i7",
    series: "BMW i",
    category: ["electric", "sedan"],
    tagline: "Limousine thuần điện đầu bảng",
    description:
      "BMW i7 xDrive60 là phiên bản thuần điện của dòng 7 Series: hai mô-tơ cho 544 mã lực, quãng đường tới 625 km mỗi lần sạc, và toàn bộ trang bị thượng lưu của một chiếc limousine — trong sự tĩnh lặng tuyệt đối.",
    priceFrom: vnd(6_449_000_000),
    badge: "Thuần điện",
    image: "/images/cars/bmw-i7/hero.png",
    imageFit: "contain",
    imageClassName: "p-3 group-hover:scale-105",
    gallery: [
      "/images/cars/bmw-i7/gallery-1.jpg",
      "/images/cars/bmw-i7/gallery-2.jpg",
      "/images/cars/bmw-i7/gallery-3.jpg",
      "/images/cars/bmw-i7/gallery-4.jpg",
    ],
    quickSpecs: [
      { label: "Hệ truyền động", value: "Thuần điện xDrive" },
      { label: "Công suất", value: "544 mã lực" },
      { label: "Quãng đường", value: "Tới 625 km" },
      { label: "Tăng tốc 0–100", value: "4,7 giây" },
    ],
    highlights: [
      {
        title: "BMW Theatre Screen 31\"",
        description:
          "Màn hình 8K thả xuống từ trần cùng âm thanh Bowers & Wilkins 4D — rạp chiếu phim riêng ở hàng ghế sau.",
      },
      {
        title: "544 mã lực, tĩnh lặng",
        description:
          "Hai mô-tơ điện cho lực kéo tức thì mà gần như không phát ra tiếng động ở khoang cabin.",
      },
      {
        title: "Sạc nhanh 195 kW",
        description:
          "Nạp 10–80% pin trong khoảng 34 phút, bổ sung tới 170 km chỉ sau 10 phút sạc.",
      },
    ],
    variants: [
      {
        name: "i7 xDrive60",
        price: vnd(6_449_000_000),
        engine: "Hai mô-tơ điện, dẫn động bốn bánh",
        power: "544 mã lực / 745 Nm",
        highlight: "Phiên bản phân phối chính hãng",
      },
    ],
    specs: [
      {
        group: "Hệ truyền động điện",
        items: [
          { label: "Loại", value: "BMW eDrive thế hệ 5, hai mô-tơ" },
          { label: "Dung lượng pin", value: "101,7 kWh" },
          { label: "Công suất tối đa", value: "544 mã lực" },
          { label: "Mô-men xoắn", value: "745 Nm" },
          { label: "Quãng đường (WLTP)", value: "Tới 625 km" },
          { label: "Sạc nhanh DC", value: "195 kW — 10–80% trong 34 phút" },
          { label: "Tăng tốc 0–100 km/h", value: "4,7 giây" },
        ],
      },
      {
        group: "Kích thước & khối lượng",
        items: [
          { label: "Dài × Rộng × Cao", value: "5.391 × 1.950 × 1.544 mm" },
          { label: "Chiều dài cơ sở", value: "3.215 mm" },
          { label: "Khoang hành lý", value: "500 lít" },
          { label: "Khối lượng không tải", value: "2.640 kg" },
        ],
      },
      {
        group: "Tiện nghi & an toàn",
        items: [
          { label: "Màn hình sau", value: "BMW Theatre Screen 31\" 8K" },
          { label: "Cửa xe", value: "Automatic Doors — đóng/mở tự động" },
          { label: "Ghế", value: "Executive Lounge, massage, sưởi/thông gió" },
          { label: "Bảo hành pin", value: "8 năm hoặc 160.000 km" },
          { label: "Hỗ trợ lái", value: "Driving Assistant Professional, Parking Assistant Plus" },
        ],
      },
    ],
    colors: [
      { name: "Mineral White", hex: "#e8e9eb" },
      { name: "Black Sapphire", hex: "#14161a" },
      { name: "Oxide Grey", hex: "#565a5f" },
      { name: "Tanzanite Blue", hex: "#1c2b48" },
    ],
  },
];

export const carCategories: { value: CarCategory | "all"; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "sedan", label: "Sedan" },
  { value: "coupe", label: "Coupé / Roadster" },
  { value: "suv", label: "SAV / SUV" },
  { value: "electric", label: "Xe điện" },
  { value: "m-performance", label: "BMW M" },
];

export function getCar(slug: string) {
  return cars.find((c) => c.slug === slug);
}

export function formatVnd(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + " ₫";
}

/** Giá rút gọn, trả "Liên hệ" cho xe chưa công bố giá. */
export function formatVndShortOrContact(value?: number) {
  return value == null ? "Liên hệ" : formatVndShort(value);
}

/** Giá đầy đủ, trả "Liên hệ" cho xe chưa công bố giá. */
export function formatVndOrContact(value?: number) {
  return value == null ? "Liên hệ" : formatVnd(value);
}

export function formatVndShort(value: number) {
  const ty = value / 1_000_000_000;
  return `${ty.toLocaleString("vi-VN", { maximumFractionDigits: 3 })} tỷ`;
}
