export type NewsCategory = "Sản phẩm" | "Khuyến mãi" | "Sự kiện" | "Công nghệ" | "Dịch vụ";

export type NewsBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string; // ISO
  readingTime: number;
  author: string;
  cover: string;
  featured?: boolean;
  tags: string[];
  body: NewsBlock[];
};

export const news: Article[] = [
  {
    slug: "bmw-5-series-the-he-moi-ra-mat-viet-nam",
    title: "BMW 5 Series thế hệ thứ tám chính thức ra mắt thị trường Việt Nam",
    excerpt:
      "Mẫu sedan doanh nhân biểu tượng trở lại với thiết kế bề thế hơn, BMW Interaction Bar và công nghệ Mild Hybrid 48V, giá bán từ 2,779 tỷ đồng.",
    category: "Sản phẩm",
    date: "2026-08-12",
    readingTime: 5,
    author: "Ban Truyền thông BMW Sài Gòn",
    cover: "/images/news/5-series-ra-mat/cover.jpg",
    featured: true,
    tags: ["BMW 5 Series", "Ra mắt", "Sedan"],
    body: [
      {
        type: "paragraph",
        text: "Sau nhiều tháng được giới mộ điệu chờ đợi, BMW 5 Series thế hệ thứ tám (mã G60) đã chính thức được giới thiệu tới khách hàng Việt Nam. Đây là bước chuyển mình lớn nhất của dòng sedan doanh nhân này trong hơn một thập kỷ, cả về ngôn ngữ thiết kế lẫn nền tảng công nghệ.",
      },
      {
        type: "heading",
        text: "Thiết kế bề thế và hiện đại hơn",
      },
      {
        type: "paragraph",
        text: "So với thế hệ trước, BMW 5 Series mới dài thêm 97 mm, rộng thêm 32 mm và chiều dài cơ sở tăng 20 mm. Lưới tản nhiệt quả thận được đóng khung bởi dải đèn viền phát sáng, kết hợp cụm đèn pha Adaptive LED mảnh tạo nên nhận diện sắc bén trong đêm.",
      },
      {
        type: "paragraph",
        text: "Phần thân xe áp dụng triết lý 'shy tech' — các đường gân dập nổi được tiết chế, tay nắm cửa dạng phẳng và hệ số cản gió chỉ 0,23 Cd, thuộc nhóm tốt nhất phân khúc.",
      },
      {
        type: "heading",
        text: "Khoang nội thất số hóa toàn diện",
      },
      {
        type: "paragraph",
        text: "Điểm nhấn lớn nhất bên trong là BMW Interaction Bar — dải điều khiển pha lê phát sáng chạy ngang táp-lô và kéo dài sang hai cánh cửa, tích hợp cửa gió điều hòa cùng đèn nội thất đa sắc. Cụm màn hình BMW Curved Display gồm đồng hồ 12,3 inch và màn hình giải trí 14,9 inch chạy hệ điều hành BMW Operating System 8.5.",
      },
      {
        type: "list",
        items: [
          "Ghế thể thao chỉnh điện 14 hướng, có nhớ vị trí, sưởi và thông gió",
          "Hệ thống âm thanh Bowers & Wilkins Diamond Surround",
          "Cửa sổ trời toàn cảnh Panorama Glass Roof",
          "Điều hòa tự động 4 vùng độc lập với lọc bụi mịn PM2.5",
        ],
      },
      {
        type: "heading",
        text: "Động cơ Mild Hybrid 48V",
      },
      {
        type: "paragraph",
        text: "Phiên bản 520i M Sport phân phối tại Việt Nam sử dụng động cơ xăng 2.0L TwinPower Turbo kết hợp mô-tơ điện 48V, cho công suất tổng 208 mã lực và mô-men xoắn 330 Nm. Xe tăng tốc 0–100 km/h trong 7,5 giây, đồng thời tiết kiệm nhiên liệu hơn khoảng 8% so với thế hệ cũ nhờ khả năng tái sinh năng lượng phanh.",
      },
      {
        type: "quote",
        text: "5 Series luôn là chiếc xe cân bằng nhất trong dải sản phẩm BMW — đủ thoải mái để đi làm mỗi ngày và đủ phấn khích cho một cung đường đèo cuối tuần.",
        author: "Chuyên viên tư vấn sản phẩm, BMW Sài Gòn",
      },
      {
        type: "heading",
        text: "Giá bán và ưu đãi",
      },
      {
        type: "paragraph",
        text: "BMW 520i M Sport có giá niêm yết 2,779 tỷ đồng, bản 530i M Sport ở mức 3,189 tỷ đồng. Khách hàng đặt cọc trong tháng này tại BMW Sài Gòn được hỗ trợ 50% lệ phí trước bạ, tặng gói bảo dưỡng 3 năm và bộ phụ kiện chính hãng.",
      },
      {
        type: "paragraph",
        text: "Xe đã có mặt tại showroom để khách hàng tham quan và đăng ký lái thử. Quý khách vui lòng liên hệ hotline để được sắp lịch trải nghiệm tận nơi.",
      },
    ],
  },
  {
    slug: "uu-dai-thang-8-ho-tro-le-phi-truoc-ba",
    title: "Ưu đãi tháng 8: hỗ trợ tới 100% lệ phí trước bạ cho loạt xe BMW",
    excerpt:
      "Chương trình áp dụng cho các mẫu 3 Series, X3, X5 và i4 với mức hỗ trợ lên tới hàng trăm triệu đồng, kèm gói bảo dưỡng miễn phí 3 năm.",
    category: "Khuyến mãi",
    date: "2026-08-05",
    readingTime: 3,
    author: "Phòng Kinh doanh BMW Sài Gòn",
    cover: "/images/news/uu-dai-thang-8/cover.jpg",
    featured: true,
    tags: ["Khuyến mãi", "Trước bạ", "Tháng 8"],
    body: [
      {
        type: "paragraph",
        text: "Nhằm tri ân khách hàng và kích cầu mua sắm cuối quý, BMW Sài Gòn triển khai chương trình ưu đãi lớn nhất trong năm, áp dụng từ ngày 01/08 đến hết 31/08.",
      },
      {
        type: "heading",
        text: "Mức hỗ trợ theo từng dòng xe",
      },
      {
        type: "list",
        items: [
          "BMW 3 Series: hỗ trợ 100% lệ phí trước bạ (tương đương tới 190 triệu đồng)",
          "BMW X3: hỗ trợ 100% lệ phí trước bạ (tương đương tới 250 triệu đồng)",
          "BMW X5: hỗ trợ 50% lệ phí trước bạ + gói phụ kiện 80 triệu đồng",
          "BMW i4 và iX3: miễn lệ phí trước bạ theo chính sách xe điện, tặng bộ sạc tại nhà",
        ],
      },
      {
        type: "heading",
        text: "Quyền lợi đi kèm",
      },
      {
        type: "paragraph",
        text: "Ngoài phần hỗ trợ tài chính, mỗi khách hàng ký hợp đồng trong thời gian diễn ra chương trình còn nhận thêm gói bảo dưỡng chính hãng 3 năm hoặc 60.000 km, bảo hiểm vật chất năm đầu tiên và thẻ thành viên BMW Excellence Club.",
      },
      {
        type: "quote",
        text: "Đây là thời điểm chi phí lăn bánh một chiếc BMW ở mức hợp lý nhất kể từ đầu năm.",
      },
      {
        type: "heading",
        text: "Hỗ trợ tài chính linh hoạt",
      },
      {
        type: "paragraph",
        text: "BMW Sài Gòn liên kết cùng các ngân hàng đối tác cung cấp gói vay tới 80% giá trị xe, thời hạn tối đa 8 năm, lãi suất ưu đãi cố định 12 tháng đầu. Đội ngũ tư vấn sẽ hỗ trợ hoàn tất hồ sơ chỉ trong 24 giờ làm việc.",
      },
      {
        type: "paragraph",
        text: "Số lượng xe áp dụng ưu đãi có hạn theo từng phiên bản và màu sắc. Quý khách vui lòng đăng ký sớm để được giữ xe theo nguyện vọng.",
      },
    ],
  },
  {
    slug: "trai-nghiem-bmw-driving-experience-2026",
    title: "BMW Driving Experience 2026: một ngày làm chủ tốc độ",
    excerpt:
      "Sự kiện lái thử chuyên sâu với các bài tập kiểm soát xe, phanh gấp và vào cua tốc độ cao dưới sự hướng dẫn của huấn luyện viên BMW quốc tế.",
    category: "Sự kiện",
    date: "2026-07-28",
    readingTime: 4,
    author: "Ban Truyền thông BMW Sài Gòn",
    cover: "/images/news/driving-experience/cover.jpg",
    tags: ["Sự kiện", "Lái thử", "BMW M"],
    body: [
      {
        type: "paragraph",
        text: "BMW Driving Experience là chương trình đào tạo kỹ năng lái xe chính thức của BMW, đã có mặt tại hơn 40 quốc gia. Năm nay, chương trình quay trở lại Việt Nam với quy mô lớn nhất từ trước tới nay.",
      },
      {
        type: "heading",
        text: "Nội dung chương trình",
      },
      {
        type: "list",
        items: [
          "Bài tập slalom kiểm soát thân xe ở tốc độ cao",
          "Phanh gấp và đánh lái tránh chướng ngại vật đột ngột",
          "Kỹ thuật vào cua và chọn line tối ưu trên đường đua khép kín",
          "Trải nghiệm chế độ M Drift Analyser trên BMW M4 Competition",
        ],
      },
      {
        type: "paragraph",
        text: "Toàn bộ các bài tập được thực hiện trên đường đua khép kín, có xe cứu hộ và đội ngũ y tế túc trực. Mỗi nhóm tối đa 4 học viên trên một huấn luyện viên, đảm bảo mỗi người đều có thời gian cầm lái đủ dài.",
      },
      {
        type: "quote",
        text: "Bạn sẽ ngạc nhiên khi biết chiếc xe của mình có thể làm được những gì — và giới hạn thật sự thường nằm ở người lái, không phải ở chiếc xe.",
        author: "Huấn luyện viên trưởng BMW Driving Experience",
      },
      {
        type: "heading",
        text: "Cách thức đăng ký",
      },
      {
        type: "paragraph",
        text: "Chương trình ưu tiên khách hàng đang sở hữu xe BMW và khách hàng đã đặt cọc. Số lượng suất tham dự giới hạn ở 60 người cho mỗi ngày. Vui lòng liên hệ hotline hoặc đăng ký qua form lái thử trên website để được xác nhận suất.",
      },
    ],
  },
  {
    slug: "cong-nghe-bmw-edrive-the-he-5",
    title: "Bên trong BMW eDrive thế hệ 5: vì sao xe điện BMW vẫn 'rất BMW'",
    excerpt:
      "Không dùng nam châm đất hiếm, mô-tơ điện tích hợp toàn bộ trong một khối — đây là cách BMW giữ được cảm giác lái đặc trưng trên xe thuần điện.",
    category: "Công nghệ",
    date: "2026-07-15",
    readingTime: 6,
    author: "Kỹ thuật viên trưởng BMW Sài Gòn",
    cover: "/images/news/edrive-gen5/cover.jpg",
    tags: ["Xe điện", "Công nghệ", "eDrive"],
    body: [
      {
        type: "paragraph",
        text: "Khi BMW công bố thế hệ thứ năm của hệ truyền động eDrive, điều gây chú ý không phải là con số công suất mà là cách hãng xe Bavaria tiếp cận bài toán điện hóa: giữ nguyên triết lý lái, chỉ thay đổi nguồn lực đẩy.",
      },
      {
        type: "heading",
        text: "Mô-tơ điện kích từ không dùng đất hiếm",
      },
      {
        type: "paragraph",
        text: "Khác với phần lớn xe điện trên thị trường dùng mô-tơ nam châm vĩnh cửu, BMW sử dụng mô-tơ kích từ điện (electrically excited synchronous motor). Thiết kế này không cần nam châm đất hiếm, giảm phụ thuộc chuỗi cung ứng và cho phép kiểm soát từ trường linh hoạt hơn ở dải vòng tua cao.",
      },
      {
        type: "heading",
        text: "Tích hợp ba trong một",
      },
      {
        type: "paragraph",
        text: "Mô-tơ, hộp số và bộ điều khiển điện tử được đóng gói trong cùng một khối duy nhất. Cách làm này giúp giảm khối lượng khoảng 30% và tiết kiệm không gian đáng kể so với bố trí rời rạc, đồng thời hạ trọng tâm xe xuống thấp hơn.",
      },
      {
        type: "list",
        items: [
          "Hiệu suất chuyển đổi năng lượng đạt tới 93%",
          "Pin dạng module đặt phẳng dưới sàn, hạ trọng tâm và cân bằng phân bổ trọng lượng",
          "Hệ thống làm mát pin bằng dung dịch, duy trì hiệu năng sạc ổn định trong khí hậu nhiệt đới",
          "Phanh tái sinh thích ứng theo dữ liệu bản đồ và giao thông phía trước",
        ],
      },
      {
        type: "heading",
        text: "Âm thanh do Hans Zimmer thiết kế",
      },
      {
        type: "paragraph",
        text: "IconicSounds Electric là phần âm thanh vận hành được nhà soạn nhạc Hans Zimmer phát triển riêng, thay đổi theo mức ga và chế độ lái. Nó không mô phỏng tiếng động cơ đốt trong mà tạo một ngôn ngữ âm thanh mới, đủ để người lái cảm nhận được mức độ dồn lực mà không phá vỡ sự tĩnh lặng của cabin.",
      },
      {
        type: "quote",
        text: "Điện hóa không có nghĩa là từ bỏ niềm vui lái. Nó chỉ đơn giản là một cách khác để tạo ra niềm vui đó.",
      },
      {
        type: "paragraph",
        text: "Khách hàng quan tâm tới BMW i4 hoặc iX3 có thể đăng ký lái thử tại showroom để tự mình cảm nhận sự khác biệt của hệ truyền động này.",
      },
    ],
  },
  {
    slug: "huong-dan-bao-duong-xe-bmw-mua-mua",
    title: "Bảo dưỡng xe BMW mùa mưa: 7 hạng mục không nên bỏ qua",
    excerpt:
      "Độ ẩm cao và ngập nước là hai kẻ thù lớn nhất của xe sang trong mùa mưa Sài Gòn. Đây là danh sách kiểm tra từ xưởng dịch vụ chính hãng.",
    category: "Dịch vụ",
    date: "2026-07-02",
    readingTime: 5,
    author: "Xưởng dịch vụ BMW Sài Gòn",
    cover: "/images/news/bao-duong-mua-mua/cover.jpg",
    tags: ["Bảo dưỡng", "Dịch vụ", "Mẹo sử dụng"],
    body: [
      {
        type: "paragraph",
        text: "Mùa mưa tại TP.HCM kéo dài từ tháng 5 tới tháng 11, kèm theo tình trạng ngập cục bộ ở nhiều tuyến đường. Với những chiếc xe có khoảng sáng gầm thấp như 3 Series hay 5 Series, việc chuẩn bị trước là bắt buộc.",
      },
      { type: "heading", text: "1. Kiểm tra hệ thống phanh" },
      {
        type: "paragraph",
        text: "Nước và bùn làm tăng tốc độ mài mòn má phanh, đồng thời có thể gây gỉ sét bề mặt đĩa. Nên kiểm tra độ dày má phanh và thay dầu phanh nếu đã quá 2 năm.",
      },
      { type: "heading", text: "2. Gạt mưa và nước rửa kính" },
      {
        type: "paragraph",
        text: "Lưỡi gạt cao su xuống cấp sau khoảng 12 tháng dưới nắng nóng. Một cặp gạt mưa mới là khoản đầu tư rẻ nhất cho an toàn tầm nhìn.",
      },
      { type: "heading", text: "3. Lốp và áp suất" },
      {
        type: "paragraph",
        text: "Độ sâu gai lốp dưới 3 mm làm tăng đáng kể nguy cơ trượt nước (aquaplaning). Kiểm tra cả áp suất — lốp non làm giảm khả năng thoát nước của rãnh gai.",
      },
      { type: "heading", text: "4. Hệ thống điện và đèn" },
      {
        type: "paragraph",
        text: "Kiểm tra gioăng cao su quanh cụm đèn, hộp cầu chì và các giắc nối dưới gầm. Hơi ẩm lọt vào cụm đèn LED có thể gây hư hỏng tốn kém.",
      },
      { type: "heading", text: "5. Điều hòa và lọc gió cabin" },
      {
        type: "paragraph",
        text: "Độ ẩm cao khiến nấm mốc phát triển trong dàn lạnh, gây mùi khó chịu. Nên vệ sinh dàn lạnh và thay lọc gió cabin định kỳ mỗi 15.000 km.",
      },
      { type: "heading", text: "6. Gầm xe và chống gỉ" },
      {
        type: "paragraph",
        text: "Sau mỗi lần lội nước, nên rửa gầm để loại bỏ bùn và tạp chất ăn mòn. Với xe trên 3 năm tuổi, phủ gầm chống gỉ là biện pháp đáng cân nhắc.",
      },
      { type: "heading", text: "7. Ắc-quy" },
      {
        type: "paragraph",
        text: "Ắc-quy yếu thường lộ rõ trong mùa mưa khi tải điện tăng do đèn, gạt mưa và điều hòa hoạt động liên tục. Kiểm tra điện áp và tình trạng cọc bình.",
      },
      {
        type: "quote",
        text: "Nếu xe đã lội qua vùng nước ngập tới nửa bánh, hãy mang xe tới xưởng kiểm tra ngay — đừng chờ tới khi có triệu chứng.",
        author: "Kỹ thuật viên trưởng, Xưởng dịch vụ BMW Sài Gòn",
      },
      {
        type: "paragraph",
        text: "BMW Sài Gòn hiện áp dụng gói kiểm tra 21 hạng mục miễn phí cho toàn bộ khách hàng trong mùa mưa. Đặt lịch trước qua hotline để được ưu tiên phục vụ.",
      },
    ],
  },
  {
    slug: "bmw-x7-lot-xac-voi-ban-nang-cap",
    title: "BMW X7 bản nâng cấp: bề thế hơn, công nghệ hơn",
    excerpt:
      "Cụm đèn pha chia đôi, lưới tản nhiệt phát sáng và hệ thống treo Executive Drive Pro đưa X7 lên một đẳng cấp mới trong phân khúc SAV đầu bảng.",
    category: "Sản phẩm",
    date: "2026-06-20",
    readingTime: 4,
    author: "Ban Truyền thông BMW Sài Gòn",
    cover: "/images/news/x7-nang-cap/cover.jpg",
    tags: ["BMW X7", "SUV", "Nâng cấp"],
    body: [
      {
        type: "paragraph",
        text: "BMW X7 bản nâng cấp giữa vòng đời mang tới thay đổi thiết kế mạnh tay nhất mà dòng SAV đầu bảng này từng trải qua, đồng thời bổ sung loạt công nghệ vốn chỉ có trên 7 Series.",
      },
      { type: "heading", text: "Nhận diện hoàn toàn mới" },
      {
        type: "paragraph",
        text: "Cụm đèn pha nay được chia thành hai tầng: dải đèn định vị ban ngày mảnh nằm trên, cụm đèn chiếu sáng chính đặt thấp hơn. Lưới tản nhiệt quả thận lớn hơn và có tùy chọn viền phát sáng Iconic Glow.",
      },
      { type: "heading", text: "Nội thất nâng cấp toàn diện" },
      {
        type: "list",
        items: [
          "BMW Curved Display với hệ điều hành Operating System 8.5",
          "Cần số dạng phím gạt pha lê CraftedClarity",
          "Sky Lounge Panorama Glass Roof với hơn 15.000 điểm sáng LED",
          "Điều hòa 5 vùng độc lập, ghế hàng hai chỉnh điện",
        ],
      },
      { type: "heading", text: "Vận hành êm ái hơn" },
      {
        type: "paragraph",
        text: "Hệ thống treo khí nén hai cầu kết hợp Executive Drive Pro sử dụng camera quét mặt đường phía trước, chủ động điều chỉnh giảm chấn trước khi bánh xe chạm vào mặt đường xấu. Kết quả là khoang cabin gần như không cảm nhận được các gờ giảm tốc ở tốc độ thấp.",
      },
      {
        type: "paragraph",
        text: "BMW X7 xDrive40i M Sport hiện có giá niêm yết 6,299 tỷ đồng. Xe trưng bày đã có mặt tại showroom BMW Sài Gòn.",
      },
    ],
  },
];

export const newsCategories: (NewsCategory | "Tất cả")[] = [
  "Tất cả",
  "Sản phẩm",
  "Khuyến mãi",
  "Sự kiện",
  "Công nghệ",
  "Dịch vụ",
];

export function getArticle(slug: string) {
  return news.find((n) => n.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
