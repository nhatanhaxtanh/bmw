export type CarCategory = "sedan" | "suv" | "electric" | "m-performance";

export type Variant = {
  name: string;
  price: number; // VND
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
  priceFrom: number;
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
    priceFrom: vnd(1_499_000_000),
    badge: "Bán chạy",
    image: "/images/cars/bmw-3-series/hero.png",
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
        name: "320i Sport Line",
        price: vnd(1_499_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "184 mã lực / 300 Nm",
        highlight: "Phiên bản tiêu chuẩn",
      },
      {
        name: "320i M Sport",
        price: vnd(1_599_000_000),
        engine: "2.0L TwinPower Turbo",
        power: "184 mã lực / 300 Nm",
        highlight: "Gói ngoại thất & nội thất M Sport",
      },
      {
        name: "330i M Sport",
        price: vnd(1_899_000_000),
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
    priceFrom: vnd(2_499_000_000),
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
        name: "520i M Sport",
        price: vnd(2_499_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "208 mã lực / 330 Nm",
        highlight: "Phiên bản chủ lực",
      },
      {
        name: "530i M Sport",
        price: vnd(3_099_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "258 mã lực / 400 Nm",
        highlight: "Hiệu năng nâng cao",
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
    priceFrom: vnd(4_499_000_000),
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
      { label: "Công suất", value: "381 mã lực" },
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
        name: "735i M Sport",
        price: vnd(4_499_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
        highlight: "Phiên bản phân phối chính hãng",
      },
      {
        name: "740i Pure Excellence",
        price: vnd(5_599_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
        highlight: "Gói nội thất Executive Lounge",
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
    priceFrom: vnd(1_999_000_000),
    badge: "Bán chạy",
    image: "/images/cars/bmw-x3/hero.png",
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
        name: "X3 xDrive20 xLine",
        price: vnd(1_999_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "208 mã lực / 330 Nm",
      },
      {
        name: "X3 xDrive20 M Sport",
        price: vnd(2_199_000_000),
        engine: "2.0L TwinPower Turbo + 48V",
        power: "208 mã lực / 330 Nm",
        highlight: "Gói M Sport toàn diện",
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
    priceFrom: vnd(3_899_000_000),
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
        name: "X5 xDrive40i M Sport",
        price: vnd(3_899_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
      },
      {
        name: "X5 xDrive40i xLine",
        price: vnd(3_799_000_000),
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
    priceFrom: vnd(5_999_000_000),
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
        name: "X7 xDrive40i M Sport",
        price: vnd(5_999_000_000),
        engine: "3.0L 6 xy-lanh TwinPower Turbo",
        power: "381 mã lực / 540 Nm",
      },
      {
        name: "X7 xDrive40i Pure Excellence",
        price: vnd(6_299_000_000),
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
    priceFrom: vnd(3_299_000_000),
    isNew: true,
    badge: "Thuần điện",
    image: "/images/cars/bmw-i4/hero.jpg",
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
        name: "i4 eDrive40 M Sport",
        price: vnd(3_299_000_000),
        engine: "Mô-tơ điện cầu sau",
        power: "340 mã lực / 430 Nm",
      },
      {
        name: "i4 M50 xDrive",
        price: vnd(4_099_000_000),
        engine: "Hai mô-tơ điện",
        power: "544 mã lực / 795 Nm",
        highlight: "Bản hiệu năng M Performance",
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
    priceFrom: vnd(2_899_000_000),
    isNew: true,
    badge: "Thuần điện",
    image: "/images/cars/bmw-ix3/hero.jpg",
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
        price: vnd(2_899_000_000),
        engine: "Mô-tơ điện cầu sau",
        power: "286 mã lực / 400 Nm",
      },
      {
        name: "iX3 Impressive",
        price: vnd(3_099_000_000),
        engine: "Mô-tơ điện cầu sau",
        power: "286 mã lực / 400 Nm",
        highlight: "Trang bị cao cấp nhất",
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
    image: "/images/cars/bmw-m4/hero.jpg",
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
];

export const carCategories: { value: CarCategory | "all"; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "sedan", label: "Sedan" },
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

export function formatVndShort(value: number) {
  const ty = value / 1_000_000_000;
  return `${ty.toLocaleString("vi-VN", { maximumFractionDigits: 3 })} tỷ`;
}
