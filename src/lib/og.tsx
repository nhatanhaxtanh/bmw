import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { site } from "@/data/site";

/** Kích thước chuẩn Facebook / Zalo / X cho ảnh chia sẻ. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Font hệ thống của satori không có dấu tiếng Việt, nên phải nạp Geist —
// cùng bộ chữ với website. Đọc một lần khi module được nạp.
const [geistRegular, geistExtraBold] = await Promise.all([
  readFile(join(process.cwd(), "src/fonts/Geist-Regular.ttf")),
  readFile(join(process.cwd(), "src/fonts/Geist-ExtraBold.ttf")),
]);

const MIME: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
};

/**
 * Đọc ảnh trong /public thành data URI. Trả `null` khi file chưa tồn tại —
 * ảnh OG khi đó rơi về bố cục chỉ có chữ thay vì làm hỏng cả bản build.
 */
async function readPublicImage(path: string) {
  const ext = path.slice(path.lastIndexOf(".")).toLowerCase();
  const mime = MIME[ext];
  if (!mime) return null;

  try {
    const file = await readFile(join(process.cwd(), "public", path));
    return `data:${mime};base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

/** Tiêu đề dài thì thu nhỏ chữ để không tràn khung. */
function titleSize(title: string) {
  if (title.length > 58) return 46;
  if (title.length > 38) return 56;
  return 68;
}

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  image,
  fit = "contain",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  fit?: "cover" | "contain";
}) {
  const src = image ? await readPublicImage(image) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#061f3d",
          backgroundImage:
            "linear-gradient(135deg, #061f3d 0%, #0b3e75 55%, #08529b 100%)",
          fontFamily: "Geist",
        }}
      >
        {/* Cột nội dung */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: src ? 660 : 1200,
            padding: "58px 56px",
          }}
        >
          {/* Nhận diện thương hiệu */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 46,
                padding: "0 16px",
                borderRadius: 999,
                backgroundColor: "#ffffff",
                color: "#061f3d",
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              BMW
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              {site.name}
            </div>
          </div>

          {/* Tiêu đề */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {eyebrow ? (
              <div
                style={{
                  fontSize: 21,
                  fontWeight: 400,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "#7cc4ff",
                  marginBottom: 16,
                }}
              >
                {eyebrow}
              </div>
            ) : null}
            <div
              style={{
                fontSize: titleSize(title),
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#ffffff",
              }}
            >
              {title}
            </div>
            {subtitle ? (
              <div
                style={{
                  marginTop: 20,
                  fontSize: 25,
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.76)",
                }}
              >
                {subtitle}
              </div>
            ) : null}
          </div>

          {/* Thông tin liên hệ */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              color: "rgba(255,255,255,0.62)",
            }}
          >
            <div style={{ display: "flex" }}>{site.hotline}</div>
            <div
              style={{
                display: "flex",
                width: 5,
                height: 5,
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.35)",
              }}
            />
            <div style={{ display: "flex" }}>bmwsaigon.vn</div>
          </div>
        </div>

        {/* Cột ảnh */}
        {src ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 540,
              height: "100%",
              overflow: "hidden",
            }}
          >
            {/* Satori cần kích thước tường minh: `height: "auto"` cho ra ảnh cao 0. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              width={540}
              height={630}
              style={{ width: 540, height: 630, objectFit: fit }}
            />
          </div>
        ) : null}

        {/* Vạch màu BMW dưới cùng */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 1200,
            height: 8,
            backgroundImage:
              "linear-gradient(90deg, #0066b1 0%, #0066b1 33%, #ffffff 33%, #ffffff 66%, #e7222e 66%, #e7222e 100%)",
          }}
        />
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistExtraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
