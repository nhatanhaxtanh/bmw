export type NewsCategory = "Sản phẩm" | "Khuyến mãi" | "Sự kiện" | "Công nghệ" | "Dịch vụ";

export type NewsBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "video"; youtubeId: string; title: string; caption?: string };

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
    slug: "bmw-x1-sdrive20i-2026",
    title: "BMW X1 sDrive20i 2026: chuẩn mực mới của SAV hạng sang cỡ nhỏ",
    excerpt:
      "Ngoại hình vuông vức đậm chất thể thao, khoang lái BMW Curved Display, động cơ TwinPower Turbo 204 mã lực cùng loạt trang bị an toàn hiện đại, giá bán 1,689 tỷ đồng.",
    category: "Sản phẩm",
    date: "2026-10-10",
    readingTime: 6,
    author: "Ban Truyền thông BMW Sài Gòn",
    cover: "/images/news/bmw-x1-sdrive20i/cover.jpg",
    featured: true,
    tags: ["BMW X1", "SAV", "Đánh giá xe"],
    body: [
      { type: "heading", text: "Tổng quan" },
      {
        type: "paragraph",
        text: "Nằm trong dải sản phẩm SAV (Sports Activity Vehicle) danh tiếng của hãng xe Đức, BMW X1 thế hệ mới chính thức xuất hiện và nhanh chóng thiết lập một chuẩn mực hoàn toàn mới cho phân khúc xe gầm cao hạng sang cỡ nhỏ. Mẫu xe này là sự kết hợp hoàn hảo giữa tính đa dụng cho mọi nhu cầu di chuyển thường ngày trong đô thị và cảm giác lái đầy phấn khích trên mọi hành trình dài. Đây là sự lựa chọn lý tưởng dành cho những khách hàng không muốn phải đánh đổi giữa một phong cách thiết kế thời thượng, sự tiện nghi tối đa và hiệu suất vận hành mạnh mẽ đặc trưng của thương hiệu BMW.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/tong-quan-1.jpg",
        caption: "BMW X1 sDrive20i thế hệ mới",
      },
      {
        type: "paragraph",
        text: "Bước sang thế hệ hoàn toàn mới, BMW X1 mang đến sự cân bằng tuyệt vời giữa một không gian nội thất rộng rãi, thoải mái và ngoại hình đậm chất thể thao, phóng khoáng. Với phiên bản sDrive20i được phân phối, mẫu xe hứa hẹn mang đến những trải nghiệm lái khác biệt xuyên suốt 365 ngày cho chủ nhân. Từ khoang lái hiện đại ngập tràn công nghệ cho đến khoang hành lý linh hoạt đáp ứng mọi chuyến đi, chiếc xe luôn sẵn sàng đồng hành cùng bạn khám phá mọi cung đường với một nguồn cảm hứng bất tận và niềm vui cầm lái đích thực.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/mau-son.jpg",
        caption: "8 tùy chọn màu sơn ngoại thất của BMW X1",
      },
      { type: "heading", text: "Ngoại thất" },
      {
        type: "paragraph",
        text: "Ngoại thất BMW X1 sở hữu diện mạo đầy cuốn hút và uy lực ngay từ ánh nhìn đầu tiên. Các kỹ sư đã khéo léo sử dụng các đường gân dập nổi sắc nét chạy dọc thân xe, kết hợp với các mảng khối cơ bắp để tạo nên một tổng thể vững chãi, khỏe khoắn nhưng không kém phần thanh thoát và tinh tế trên từng chi tiết nhỏ nhất.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/ngoai-that-trang.jpg",
        caption: "BMW X1 màu Trắng Alpine",
      },
      {
        type: "paragraph",
        text: "Mẫu xe sở hữu kích thước tổng thể vô cùng ấn tượng với chiều dài, rộng và cao lần lượt là 4.500 x 1.845 x 1.642 (mm). Nhờ thông số này, xe không chỉ mang lại dáng vẻ bề thế khi nhìn từ bên ngoài mà còn tạo tiền đề cho một khoang cabin rộng rãi, đáp ứng tốt nhu cầu sử dụng gia đình cũng như những chuyến đi xa. Ở phần đầu xe, BMW X1 thu hút ánh nhìn bằng lưới tản nhiệt hình quả thận kép cỡ lớn đặt ở vị trí trung tâm, được thiết kế gần như vuông vức, mang đến một diện mạo đầy uy lực và vô cùng hầm hố.",
      },
      {
        type: "paragraph",
        text: "Nằm hai bên mặt ca-lăng là cụm đèn trước Adaptive LED được thiết kế vô cùng thanh mảnh và vuốt ngược sang hai bên thân xe. Cụm đèn này tích hợp công nghệ chiếu xa tự động hiện đại, không chỉ cung cấp luồng sáng tối ưu trong mọi điều kiện thời tiết mà còn đóng vai trò như một điểm nhấn sắc sảo, tôn lên vẻ đẹp mang hơi hướng tương lai của phần đầu xe.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/dau-xe.jpg",
        caption: "Lưới tản nhiệt quả thận kép cỡ lớn và cụm đèn Adaptive LED",
      },
      {
        type: "paragraph",
        text: "Lưới tản nhiệt hình “quả thận” đặc trưng nay được mở rộng và dựng đứng mạnh mẽ hơn. Họa tiết nan đan chéo hiện đại kết hợp cùng dải đèn viền BMW Iconic Glow giúp tăng khả năng nhận diện, đặc biệt trong điều kiện thiếu sáng.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/ngoai-that-den.jpg",
        caption: "BMW X1 màu Đen Sapphire",
      },
      {
        type: "paragraph",
        text: "Nhìn từ góc ngang, BMW X1 thể hiện rõ nét biểu tượng của dòng X với sự tương phản tuyệt đẹp giữa ánh sáng và bóng đổ, tạo nên chiều sâu thị giác đầy ấn tượng. Hốc bánh xe lớn với viền ốp gần như vuông vức kết hợp cùng khoảng sáng gầm xe cao đặc trưng giúp xế hộp toát lên vẻ năng động, sẵn sàng chinh phục mọi địa hình phức tạp. Viền mái xe kéo dài mượt mà ra phía sau, giúp tổng thể trở nên thanh thoát hơn hẳn.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/than-xe.jpg",
        caption: "Thân xe với hốc bánh vuông vức và baga mui ốp nhôm Satin",
      },
      {
        type: "paragraph",
        text: "Để tăng cường sự sang trọng, phần viền cửa sổ và baga mui đều được ốp nhôm Satin sáng bóng. Nâng đỡ toàn bộ khung gầm là bộ mâm hợp kim 19 inch với thiết kế đa chấu thể thao, tôn lên dáng vẻ khỏe khoắn, bám đường tốt và tăng độ ổn định khi xe vận hành ở tốc độ cao.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/mam-19.jpg",
        caption: "Mâm 19 inch V-spoke kiểu 867 Bicolour",
      },
      {
        type: "paragraph",
        text: "Ở phía sau, BMW X1 sDrive20i sở hữu thiết kế gọn gàng nhưng vẫn toát lên sự hiện đại và sang trọng. Cụm đèn hậu LED 3D với đồ họa chữ X cách điệu tạo điểm nhấn thị giác nổi bật. Cánh gió mui vuốt dốc kết hợp cùng hệ thống ống xả kép gia tăng chất thể thao, trong khi các vòm bánh xe mở rộng theo phương ngang giúp tổng thể chiếc SAV trở nên bề thế và vững chắc hơn.",
      },
      {
        type: "paragraph",
        text: "Cản sau được thiết kế dày dặn, tích hợp các mảng ốp tối màu cứng cáp, khẳng định bản chất của một chiếc xe gầm cao đa dụng. Toàn bộ khu vực phía sau được vuốt gọn gàng, tạo nên một cái kết hoàn hảo cho diện mạo năng động, sẵn sàng đồng hành cùng bạn trong mọi chuyến hành trình khám phá.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/duoi-xe.jpg",
        caption: "Đuôi xe với cụm đèn hậu LED 3D",
      },
      { type: "heading", text: "Nội thất" },
      {
        type: "paragraph",
        text: "Bước vào bên trong, nội thất BMW X1 mở ra một không gian rộng mở và tràn đầy cảm hứng. Hãng xe Đức áp dụng triết lý thiết kế tối giản nhằm tập trung tối đa vào trải nghiệm của người lái. Chất liệu da Veganza cao cấp bao phủ các bề mặt, kết hợp cùng các chi tiết viền chrome tinh xảo kéo dài từ bảng điều khiển đến cửa xe, hòa quyện với những đường chỉ khâu mang tông màu đối lập tạo nên một khoang cabin thực sự đẳng cấp.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/noi-that-1.jpg",
        caption: "Khoang cabin bọc da Veganza tông Castanea",
      },
      {
        type: "paragraph",
        text: "BMW X1 là người bạn đồng hành hoàn hảo với những chuyến thám hiểm của bạn đến những vùng đất mới. Nội thất của chiếc BMW X1 đặc biệt phù hợp cho những chuyến phiêu lưu khi mà hành khách có thể nâng vị trí ghế ngồi lên để có tầm nhìn tốt nhất, chiêm ngưỡng quang cảnh xung quanh ở một không gian được cấu thành từ những vật liệu cao cấp. Chiếc BMW X1 sẽ là đối tác lý tưởng cho tất cả các kế hoạch trong tương lai của bạn nhờ vào sự kết hợp giữa cảm giác lái trực tiếp và sử dụng không gian nội thất một cách linh hoạt.",
      },
      {
        type: "paragraph",
        text: "Tâm điểm của bảng táp lô chính là màn hình cong BMW Curved Display liền mạch tuyệt đẹp, bao gồm màn hình hiển thị thông tin 10,25 inch và màn hình giải trí trung tâm 10,7 inch. Hệ thống này hiển thị toàn bộ thông tin quan trọng một cách trực quan chỉ trong một ánh nhìn, cho phép người dùng điều khiển dễ dàng bằng giọng nói hoặc thao tác cảm ứng nhạy bén.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/curved-display.jpg",
        caption: "Màn hình cong BMW Curved Display chạy hệ điều hành BMW OS 9",
      },
      {
        type: "paragraph",
        text: "Vô lăng thể thao bọc da cao cấp mang lại cảm giác cầm nắm đầm chắc, tích hợp hàng loạt phím bấm rảnh tay tiện lợi. Khu vực điều khiển trung tâm phía dưới được làm nổi đầy tinh tế, tối ưu hóa công năng với các nút gạt chuyển số nhỏ gọn, kết hợp không gian để smartphone trang bị sẵn khay sạc không dây vô cùng tiện dụng cho những người bận rộn.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/noi-that-2.jpg",
        caption: "Vô lăng thể thao bọc da và bệ điều khiển trung tâm dạng nổi",
      },
      {
        type: "paragraph",
        text: "Trải nghiệm thư giãn của hành khách được nâng lên tầm cao mới nhờ hàng ghế trước thiết kế kiểu thể thao ôm sát cơ thể. Hàng ghế này có khả năng chỉnh điện linh hoạt, đi kèm chức năng nhớ vị trí tiện lợi cho ghế người lái. Hệ thống điều hòa 2 vùng tự động đảm bảo luồng không khí mát mẻ, cùng dàn âm thanh 12 loa Harman Kardon mang đến chất lượng âm nhạc sống động như một rạp hát thu nhỏ.",
      },
      {
        type: "paragraph",
        text: "Không gian phía sau của BMW X1 cung cấp sự thoải mái vượt trội với chỗ để chân rộng rãi nhờ chiều dài cơ sở lên đến 2.692 mm. Hàng ghế sau bọc da êm ái, có thể gập phẳng theo tỷ lệ 40/20/40 cực kỳ linh hoạt. Khi cần, khoang hành lý có thể mở rộng từ 540 lít lên mức tối đa 1.600 lít, dễ dàng chứa vừa 3–4 vali cỡ lớn cùng nhiều dụng cụ thể thao, đáp ứng hoàn hảo cho những chuyến dã ngoại cuối tuần.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/hang-ghe-sau.jpg",
        caption: "Hàng ghế sau gập linh hoạt theo tỷ lệ 40/20/40",
      },
      { type: "heading", text: "Vận hành" },
      {
        type: "paragraph",
        text: "Cung cấp sức mạnh cho BMW X1 sDrive20i là khối động cơ xăng B48, I4 dung tích 1.998 cc tích hợp công nghệ TwinPower Turbo danh tiếng của BMW. Cỗ máy này sản sinh công suất cực đại 204 mã lực tại dải vòng tua 5.000–6.500 vòng/phút, cùng mô-men xoắn cực đại đạt 300 Nm ngay từ vòng tua thấp 1.450–4.500 vòng/phút. Sức kéo mạnh mẽ này giúp chiếc xe luôn duy trì được sự lanh lẹ và bứt tốc mượt mà trong từng cú đạp ga.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/dong-co.jpg",
        caption: "Động cơ B48 2.0L TwinPower Turbo",
      },
      {
        type: "paragraph",
        text: "Toàn bộ sức mạnh được truyền xuống hệ dẫn động cầu trước thông qua hộp số tự động 7 cấp (7AT) chuyển số chớp nhoáng. Cấu hình này cho phép xe tăng tốc từ 0 đến 100 km/h chỉ trong vỏn vẹn 7,6 giây trước khi chạm ngưỡng tốc độ tối đa 236 km/h. Đáng chú ý, hiệu năng mạnh mẽ lại đi kèm với khả năng tiết kiệm nhiên liệu ấn tượng, mức tiêu thụ kết hợp theo chuẩn WLTP chỉ ở ngưỡng 6,8 lít/100 km, tối ưu hóa chi phí vận hành cho chủ nhân.",
      },
      { type: "heading", text: "An toàn" },
      {
        type: "paragraph",
        text: "Sự an tâm tuyệt đối của hành khách là ưu tiên hàng đầu trên BMW X1. Xe được trang bị hệ thống màn hình hiển thị thông tin trên kính lái (HUD), giúp người điều khiển dễ dàng nắm bắt tốc độ và thông số vận hành mà không cần rời mắt khỏi mặt đường. Bên cạnh đó, hệ thống hỗ trợ cảnh báo và giữ làn đường liên tục giám sát vạch kẻ đường, tự động can thiệp nhẹ vào vô lăng để giữ xe luôn di chuyển ở quỹ đạo an toàn nhất.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/hud.jpg",
        caption: "Màn hình hiển thị thông tin trên kính lái (HUD)",
      },
      {
        type: "paragraph",
        text: "Việc đỗ xe trong những không gian chật hẹp tại đô thị cũng trở nên nhàn hạ hơn bao giờ hết nhờ hệ thống hỗ trợ đỗ xe tự động kết hợp cùng camera 360 độ sắc nét. Hệ thống này cung cấp góc nhìn toàn cảnh xung quanh xe, loại bỏ hoàn toàn các điểm mù nguy hiểm. Ngoài ra, tính năng cảnh báo áp suất lốp liên tục theo dõi tình trạng lốp xe, kịp thời phát tín hiệu nếu có sự sụt giảm áp suất bất thường, ngăn ngừa rủi ro xảy ra trên đường cao tốc.",
      },
      {
        type: "image",
        src: "/images/news/bmw-x1-sdrive20i/camera-360.jpg",
        caption: "Hỗ trợ đỗ xe tự động tích hợp camera 360 độ",
      },
      { type: "heading", text: "Thông số kỹ thuật" },
      {
        type: "list",
        items: [
          "Dài x Rộng x Cao: 4.500 x 1.845 x 1.642 mm, chiều dài cơ sở 2.692 mm",
          "Khoảng sáng gầm: 205 mm, đường kính quay vòng 11,7 m",
          "Khối lượng không tải / toàn tải: 1.505 kg / 2.080 kg",
          "Động cơ: xăng B48 I4, 1.998 cc, TwinPower Turbo",
          "Công suất cực đại: 204 mã lực tại 5.000–6.500 vòng/phút",
          "Mô-men xoắn cực đại: 300 Nm tại 1.450–4.500 vòng/phút",
          "Hộp số: Steptronic ly hợp kép 7 cấp, dẫn động cầu trước",
          "Tăng tốc 0–100 km/h: 7,6 giây, vận tốc tối đa 236 km/h",
          "Khoang hành lý: 540–1.600 lít, bình xăng 54 lít",
        ],
      },
      { type: "heading", text: "Trang bị nổi bật" },
      {
        type: "list",
        items: [
          "Hệ thống an toàn chủ động Active Guard: cảnh báo lệch làn có hỗ trợ đánh lái, cảnh báo va chạm trước và cảnh báo rẽ trái có phanh hỗ trợ",
          "Mâm 19 inch V-spoke kiểu 867 Bicolour, lốp 245/45 R19",
          "BMW Live Cockpit Professional: màn hình cong 10,25 inch + 10,7 inch, BMW OS 9, chế độ thực tế tăng cường Augmented View",
          "Chìa khóa thông minh Comfort Access: mở khóa bằng điện thoại, Apple Watch, thẻ NFC, chia sẻ chìa khóa cho tối đa 5 tài khoản",
          "Cốp điện đóng/mở rảnh tay, thanh giá nóc Aluminium",
          "Ghế trước thể thao chỉnh điện, nhớ 2 vị trí ghế lái",
          "Điều hòa tự động 2 vùng độc lập, sạc không dây 15W",
          "Hệ thống 12 loa Hifi Harman Kardon, Connected+ Unlimited",
          "Đỗ xe tự động tích hợp camera 360, Remote 3D View và BMW Drive Recorder",
          "Màn hình HUD, cụm đèn trước LED thích ứng, đèn chiếu xa tự động",
          "My Modes với 5 chế độ: Personal, Efficient, Sport, Relax, Expressive",
        ],
      },
      { type: "heading", text: "Màu sắc và giá bán" },
      {
        type: "paragraph",
        text: "BMW X1 sDrive20i có 8 màu sơn ngoại thất gồm Trắng Alpine, Đen Sapphire, Xám Dune Grey, Đỏ Fire Red, Xanh Cape York, Trắng Mineral, Bạc Space Silver và Xanh Night Dusk; nội thất da Veganza tùy chọn tông Castanea hoặc Đen.",
      },
      {
        type: "paragraph",
        text: "Giá bán BMW X1 sDrive20i là 1.689.000.000 VNĐ, áp dụng cho xe có trang bị tiêu chuẩn theo thông báo của THACO AUTO, đã bao gồm thuế nhập khẩu, thuế TTĐB và thuế GTGT. Thông số kỹ thuật và trang bị có thể thay đổi mà không báo trước. Quý khách vui lòng liên hệ BMW Sài Gòn để được tư vấn và đăng ký lái thử.",
      },
    ],
  },
  {
    slug: "bmw-3-series-g50-neue-klasse-ra-mat",
    title: "BMW 3 Series G50 ra mắt: ngôn ngữ Neue Klasse, vẫn giữ máy xăng",
    excerpt:
      "Thế hệ thứ tám của 3 Series lớn hơn, chuyển sang thiết kế Neue Klasse với Panoramic iDrive, có cả bản máy xăng mild hybrid 48V lẫn bản thuần điện i3 chạy tới 912 km mỗi lần sạc.",
    category: "Sản phẩm",
    date: "2026-10-10",
    readingTime: 5,
    author: "Ban Truyền thông BMW Sài Gòn",
    cover: "/images/news/bmw-3-series-g50/cover.jpg",
    tags: ["BMW 3 Series", "Neue Klasse", "Ra mắt"],
    body: [
      {
        type: "paragraph",
        text: "BMW vừa chính thức giới thiệu 3 Series thế hệ thứ tám, mã G50. Đây là mẫu sedan đầu tiên mang trọn ngôn ngữ thiết kế Neue Klasse, đồng thời là lời khẳng định rằng dòng xe biểu tượng của hãng vẫn song hành hai lựa chọn: động cơ xăng quen thuộc và phiên bản thuần điện mang tên i3.",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/dau-xe.jpg",
        caption: "BMW 3 Series G50 thế hệ thứ tám",
      },
      {
        type: "video",
        youtubeId: "6Ym-r0VYc_Y",
        title: "Walkaround | THE NEW BMW 3 and THE NEW BMW i3.",
        caption: "Video giới thiệu BMW 3 Series và BMW i3 thế hệ mới",
      },
      { type: "heading", text: "Lớn hơn, gọn gàng hơn" },
      {
        type: "paragraph",
        text: "G50 có kích thước dài x rộng x cao 4.765 x 1.850 x 1.455 mm, chiều dài cơ sở 2.860 mm. So với thế hệ G20, xe dài hơn 52 mm, rộng hơn 23 mm và trục cơ sở tăng 9 mm. Tỷ lệ thân xe kiểu “2.5-box” với trục cơ sở dài, phần nhô trước và sau ngắn giúp chiếc sedan trông thấp và vươn dài hơn.",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/den-luoi-tan-nhiet.jpg",
        caption: "Lưới tản nhiệt quả thận và cụm đèn đôi theo ngôn ngữ Neue Klasse",
      },
      {
        type: "paragraph",
        text: "Phần đầu xe dạng “mũi cá mập” đặc trưng của BMW trở lại, đi cùng lưới tản nhiệt quả thận và cụm đèn đôi được thiết kế lại theo phong cách Neue Klasse. Tay nắm cửa nằm ẩn trong thân xe và tự bật ra khi mở khóa. Bản điện i3 giấu hoàn toàn gioăng kính để tạo bề mặt liền mạch, trong khi các bản máy xăng vẫn giữ nẹp viền kính truyền thống. Khách hàng có tối đa 11 màu sơn, trong đó M Le Castellet Blue dành riêng cho bản hiệu năng cao.",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/i3-than-xe.jpg",
        caption: "BMW i3 với thân xe liền mạch, tay nắm cửa ẩn",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/duoi-xe-m350.jpg",
        caption: "Đuôi xe BMW M350 xDrive với cánh gió và bốn ống xả",
      },
      { type: "heading", text: "Panoramic iDrive và hệ điều hành mới" },
      {
        type: "paragraph",
        text: "Khoang lái tối giản, xoay quanh người lái và không còn cụm đồng hồ riêng sau vô-lăng. Thay vào đó là hệ thống Panoramic iDrive gồm bốn thành phần: dải hiển thị Panoramic Vision chạy dọc chân kính lái, Head-Up Display 3D, màn hình trung tâm 17,9 inch đèn nền matrix và vô-lăng thiết kế mới.",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/khoang-lai.jpg",
        caption: "Khoang lái tối giản với màn hình trung tâm 17,9 inch",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/panoramic-idrive.jpg",
        caption: "Dải hiển thị Panoramic Vision chạy dọc chân kính lái",
      },
      {
        type: "list",
        items: [
          "BMW Operating System X nền tảng Android AOSP, hỗ trợ tối đa 7 người dùng với BMW ID riêng",
          "Apple CarPlay và Android Auto không dây tiêu chuẩn",
          "Trợ lý ảo “Hey BMW” tích hợp AI Amazon Alexa+, tính năng Routines tự động hóa thao tác",
          "Xem video, chơi game qua AirConsole và cloud gaming Boosteroid khi xe đỗ",
          "Âm thanh 7 loa 205W tiêu chuẩn; bản M350 xDrive dùng Harman Kardon hỗ trợ Dolby Atmos",
          "Cửa sổ trời toàn cảnh kính cách nhiệt, điều hòa tự động 2 vùng (tùy chọn 3 vùng)",
        ],
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/ghe-truoc.jpg",
        caption: "Hàng ghế trước chỉnh điện",
      },
      { type: "heading", text: "Ba lựa chọn máy xăng, tất cả đều mild hybrid 48V" },
      {
        type: "paragraph",
        text: "Toàn bộ phiên bản máy xăng của G50 đều được trang bị hệ thống mild hybrid 48V và hộp số Steptronic 8 cấp.",
      },
      {
        type: "list",
        items: [
          "BMW 318: 2.0L 4 xy-lanh, 156 mã lực, 250 Nm, dẫn động cầu sau, 0–100 km/h trong 9,5 giây",
          "BMW 320: 2.0L 4 xy-lanh chu trình Miller, 211 mã lực, 330 Nm, 0–100 km/h trong 7,4 giây, tốc độ tối đa 240 km/h",
          "BMW M350 xDrive: 3.0L 6 xy-lanh thẳng hàng kết hợp mô-tơ điện 13 kW, tổng công suất 443 mã lực, 580 Nm, 0–100 km/h trong 4,1 giây",
        ],
      },
      {
        type: "paragraph",
        text: "Bản 320 mạnh hơn thế hệ trước 20 kW và 20 Nm, mức tiêu thụ nhiên liệu chỉ 6,5–7,5 lít/100 km theo chuẩn WLTP. M350 xDrive thay thế M340i với công suất tăng từ 374 lên 443 mã lực, đi kèm phanh và vi sai M Sport, treo M Adaptive, mâm 19 inch và chế độ Drift Moment dồn toàn bộ lực kéo ra cầu sau.",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/dong-co-m350.jpg",
        caption: "Động cơ 3.0L 6 xy-lanh thẳng hàng trên BMW M350 xDrive",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/mam-m350.jpg",
        caption: "Mâm M 19 inch và phanh M Sport trên M350 xDrive",
      },
      { type: "heading", text: "BMW i3: sedan điện chạy tới 912 km" },
      {
        type: "paragraph",
        text: "Phiên bản thuần điện dùng nền tảng eDrive thế hệ thứ sáu với kiến trúc 800V, pin cell-to-pack có mật độ năng lượng cao hơn 20% so với thế hệ trước. Bộ xử lý trung tâm “Heart of Joy” điều phối đồng thời hệ truyền động, phanh, lái, sạc và thu hồi năng lượng.",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/i3-dau-xe.jpg",
        caption: "BMW i3 thuần điện dùng nền tảng eDrive thế hệ thứ sáu, kiến trúc 800V",
      },
      {
        type: "list",
        items: [
          "i3 40 xDrive: 374 mã lực, 520 Nm, 0–100 km/h trong 5,4 giây, pin 82,8 kWh, quãng đường tới 710 km (WLTP)",
          "i3 50 xDrive: 469 mã lực, 645 Nm, 0–100 km/h trong 4,7 giây, pin 108,7 kWh, quãng đường tới 912 km (WLTP)",
          "Bản hiệu năng cao i3 M60 xDrive dự kiến ra mắt năm 2027",
        ],
      },
      { type: "heading", text: "Khung gầm nâng cấp" },
      {
        type: "paragraph",
        text: "Trục trước chuyển sang thiết kế tay đòn kép với góc caster tăng, camber giảm; trục sau đa liên kết 5 điểm. Tay lái có tỷ số truyền mới, giảm chấn thay đổi theo hành trình là trang bị tiêu chuẩn, đường kính tổng thể bánh xe tăng từ 654 mm lên 680 mm. Khách hàng có thể chọn thêm treo Adaptive hoặc M Adaptive đi kèm tay lái thể thao.",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/khung-gam.jpg",
        caption: "Khung gầm và hệ truyền động của BMW M350 xDrive",
      },
      {
        type: "paragraph",
        text: "BMW 3 Series G50 sẽ bắt đầu sản xuất từ tháng 11/2026: bản điện i3 tại nhà máy Munich, các bản máy xăng tại Dingolfing. Thông tin về thời điểm ra mắt và giá bán tại Việt Nam sẽ được BMW Sài Gòn cập nhật ngay khi có công bố chính thức.",
      },
      {
        type: "image",
        src: "/images/news/bmw-3-series-g50/van-hanh.jpg",
        caption: "BMW 3 Series G50 bắt đầu sản xuất từ tháng 11/2026",
      },
    ],
  },
  {
    slug: "danh-gia-bmw-3-series-2026",
    title: "Đánh giá BMW 3 Series 2026: thông số, trang bị và giá bán",
    excerpt:
      "Mẫu sedan thể thao bán chạy nhất lịch sử BMW có ba phiên bản 320i Sport Line, 320i M Sport và 330i M Sport, giá từ 1,649 tỷ đồng. Cùng xem chi tiết ngoại thất, nội thất và khả năng vận hành.",
    category: "Sản phẩm",
    date: "2026-10-10",
    readingTime: 6,
    author: "Ban Truyền thông BMW Sài Gòn",
    cover: "/images/news/danh-gia-bmw-3-series-2026/cover.jpg",
    tags: ["BMW 3 Series", "Đánh giá xe", "Sedan"],
    body: [
      {
        type: "paragraph",
        text: "BMW 3 Series là dòng xe thành công nhất trong lịch sử thương hiệu và cũng là hình mẫu của phân khúc sedan thể thao hạng sang. Phiên bản nâng cấp (LCI) đang phân phối tại Việt Nam có ba lựa chọn: 320i Sport Line, 320i M Sport và 330i M Sport, với ngoại hình sắc nét hơn và khoang lái số hóa gần như hoàn toàn.",
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/showroom.jpg",
        caption: "BMW 330i M Sport trưng bày tại showroom",
      },
      { type: "heading", text: "Giá bán các phiên bản" },
      {
        type: "list",
        items: [
          "BMW 320i Sport Line: 1.649.000.000 VNĐ",
          "BMW 320i M Sport: 1.899.000.000 VNĐ",
          "BMW 330i M Sport: 2.099.000.000 VNĐ",
        ],
      },
      {
        type: "paragraph",
        text: "Giá trên là giá niêm yết, chưa bao gồm chi phí lăn bánh. Liên hệ BMW Sài Gòn để nhận báo giá chi tiết, ưu đãi trong tháng và phương án trả góp phù hợp.",
      },
      { type: "heading", text: "Thông số kỹ thuật" },
      {
        type: "list",
        items: [
          "Kích thước D x R x C: 4.713 x 1.827 x 1.440 mm, chiều dài cơ sở 2.851 mm",
          "Khoảng sáng gầm 141 mm, hệ số cản gió chỉ 0,24 Cd",
          "Động cơ 2.0L 4 xy-lanh TwinPower Turbo, dung tích 1.998 cc",
          "320i (Sport Line và M Sport): 184 mã lực, 300 Nm, tốc độ tối đa 235 km/h",
          "330i M Sport: 258 mã lực, 400 Nm, 0–100 km/h trong 5,9 giây, tốc độ tối đa 250 km/h",
          "Hộp số tự động Steptronic 8 cấp, dẫn động cầu sau",
          "Mức tiêu thụ nhiên liệu trung bình khoảng 6,4–7,3 lít/100 km",
        ],
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/trung-bay.jpg",
        caption: "Ba phiên bản dùng chung kích thước, khác biệt ở động cơ và trang bị",
      },
      { type: "heading", text: "Ngoại thất" },
      {
        type: "paragraph",
        text: "Đầu xe được tạo hình với các đường gân dập nổi vuốt về phía trước, nhấn mạnh tư thế sẵn sàng tăng tốc. Lưới tản nhiệt quả thận đen bóng được viền chrome bao quanh, giữ đúng nét nhận diện quen thuộc của BMW nhưng trông hiện đại và gọn gàng hơn trước.",
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/dau-xe.jpg",
        caption: "Đầu xe BMW 330i M Sport",
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/luoi-tan-nhiet.jpg",
        caption: "Lưới tản nhiệt quả thận đen bóng viền chrome",
      },
      {
        type: "paragraph",
        text: "Cụm đèn trước LED mảnh hơn, tích hợp đèn chiếu gần, chiếu xa, dải định vị ban ngày và đèn báo rẽ dạng dải. Hệ thống đèn thích ứng tự mở rộng góc chiếu khi vào cua và điều chỉnh chùm sáng để không gây chói cho xe đi ngược chiều.",
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/den-pha.jpg",
        caption: "Cụm đèn trước LED thích ứng",
      },
      {
        type: "paragraph",
        text: "Thân xe giữ dáng sedan thể thao quen thuộc với tay nắm cửa và gương chiếu hậu cùng màu thân xe, đường mái dốc dần về phía sau tạo tỷ lệ cân đối. Bản 320i Sport Line dùng mâm hợp kim 18 inch chấu chữ V, còn hai bản M Sport được trang bị mâm 18 inch chấu V kép thể thao hơn.",
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/than-xe.jpg",
        caption: "Mâm 18 inch chấu V kép trên bản M Sport",
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/mam-truoc.jpg",
        caption: "Bánh trước và hốc gió hông",
      },
      {
        type: "paragraph",
        text: "Phía sau, cụm đèn hậu LED dạng dài và mảnh nối liền hai bên, cản sau được tinh chỉnh với bộ khuếch tán gió cỡ lớn cùng ống xả kép, tạo cảm giác bề thế và thể thao khi nhìn từ phía sau.",
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/duoi-xe.jpg",
        caption: "Đuôi xe với đèn hậu LED và bộ khuếch tán gió",
      },
      {
        type: "image",
        src: "/images/news/danh-gia-bmw-3-series-2026/logo-330i.jpg",
        caption: "Cánh gió đuôi và logo 330i",
      },
      { type: "heading", text: "Nội thất và tiện nghi" },
      {
        type: "paragraph",
        text: "Khoang lái được làm mới toàn diện với BMW Curved Display gồm màn hình thông tin 12,3 inch sau vô-lăng và màn hình trung tâm 14,9 inch ghép liền thành một khối. Số lượng nút bấm vật lý giảm đáng kể, phần lớn thao tác chuyển sang cảm ứng và điều khiển bằng giọng nói. Bệ điều khiển trung tâm gom gọn cần số, nút Start/Stop, iDrive Controller, các chế độ lái và phanh tay.",
      },
      {
        type: "list",
        items: [
          "320i Sport Line: ghế thể thao bọc da Sensatec phối nỉ, âm thanh HiFi 10 loa 205W",
          "320i M Sport và 330i M Sport: ghế thể thao Alcantara phối Sensatec chỉ khâu xanh, chỉnh độ rộng lưng ghế lái, âm thanh Harman Kardon 16 loa 464W",
          "Ghế trước chỉnh điện, nhớ 2 vị trí; hàng ghế sau gập 40:20:40 có bệ tì tay và khay để cốc",
          "Điều hòa tự động 3 vùng độc lập với chế độ MAX A/C làm mát nhanh",
          "Kết nối điện thoại không dây, hiển thị ứng dụng trực tiếp trên màn hình trung tâm",
        ],
      },
      { type: "heading", text: "Vận hành" },
      {
        type: "paragraph",
        text: "Cả ba phiên bản dùng động cơ 2.0L TwinPower Turbo kết hợp hộp số Steptronic 8 cấp có lẫy chuyển số trên vô-lăng và hệ dẫn động cầu sau đặc trưng của BMW. Bản 320i với 184 mã lực đủ linh hoạt trong phố và êm ái trên đường trường, trong khi 330i M Sport với 258 mã lực, 400 Nm mang lại cảm giác lái phấn khích thực thụ, tăng tốc 0–100 km/h chỉ 5,9 giây.",
      },
      { type: "heading", text: "An toàn" },
      {
        type: "list",
        items: [
          "Hệ thống túi khí bảo vệ toàn diện cho hành khách",
          "Camera lùi trên 320i Sport Line và 320i M Sport, camera 360 độ trên 330i M Sport",
          "Hỗ trợ đỗ xe tự động",
          "Kiểm soát hành trình",
        ],
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "BMW 3 Series 2026 tiếp tục là lựa chọn gần như toàn diện trong phân khúc: thiết kế đẹp, trang bị hiện đại và cảm giác lái đúng chất BMW. Đây là mẫu sedan đặc biệt phù hợp với khách hàng trẻ, thành đạt muốn sở hữu một chiếc xe vừa sang trọng vừa thú vị khi cầm lái. Quý khách có thể đăng ký lái thử tại BMW Sài Gòn để tự mình trải nghiệm.",
      },
    ],
  },
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
