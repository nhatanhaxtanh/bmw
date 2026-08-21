import Link from "next/link";
import { ArrowLeft, CarFront } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BmwRoundel } from "@/components/bmw-logo";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-bmw-950 py-32 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 size-[460px] rounded-full bg-bmw-700/30 blur-[120px]"
      />
      <div className="container-page relative text-center">
        <BmwRoundel variant="white" className="mx-auto size-16" />
        <p className="font-heading mt-8 text-7xl font-bold sm:text-8xl">404</p>
        <h1 className="font-heading mt-4 text-2xl font-semibold sm:text-3xl">
          Trang quý khách tìm không tồn tại
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
          Có thể đường dẫn đã thay đổi hoặc nội dung đã được gỡ bỏ. Hãy quay lại
          trang chủ hoặc khám phá dải sản phẩm BMW.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">
              <ArrowLeft className="size-4" /> Về trang chủ
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
          >
            <Link href="/xe">
              <CarFront className="size-4" /> Xem dòng xe
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
