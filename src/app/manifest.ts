import type { MetadataRoute } from "next";

import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Đại lý ủy quyền BMW chính hãng`,
    short_name: site.name,
    description: site.description,
    lang: "vi",
    start_url: "/",
    display: "standalone",
    background_color: "#061f3d",
    theme_color: "#0066b1",
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
