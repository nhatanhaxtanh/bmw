import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/data/site";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Đại lý ủy quyền BMW chính hãng`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "BMW",
    "đại lý BMW",
    "BMW Sài Gòn",
    "giá xe BMW",
    "lái thử BMW",
    "BMW chính hãng",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Đại lý ủy quyền BMW chính hãng`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0066b1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${sans.variable} ${heading.variable} ${mono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingContact />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
