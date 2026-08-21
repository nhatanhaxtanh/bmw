"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BmwRoundel } from "@/components/bmw-logo";

type SmartImageProps = Omit<ImageProps, "onError" | "alt"> & {
  alt: string;
  /** Nhãn hiển thị trên ảnh giữ chỗ khi chưa có file ảnh thật. */
  placeholderLabel?: string;
  wrapperClassName?: string;
};

/**
 * Ảnh có ảnh giữ chỗ mang nhận diện BMW.
 * Khi ảnh thật được thả vào /public theo đúng đường dẫn, ảnh sẽ tự hiển thị —
 * không cần sửa code.
 */
export function SmartImage({
  className,
  wrapperClassName,
  placeholderLabel,
  alt,
  fill,
  ...props
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "relative isolate flex items-center justify-center overflow-hidden bg-linear-to-br from-bmw-950 via-bmw-800 to-bmw-600",
          fill ? "absolute inset-0 size-full" : "size-full",
          wrapperClassName,
          className,
        )}
        aria-label={alt}
        role="img"
      >
        <div className="absolute inset-0 opacity-[0.14] [background-image:repeating-linear-gradient(115deg,transparent_0_18px,#fff_18px_19px)]" />
        <div className="absolute -right-10 -bottom-16 size-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <BmwRoundel
            variant="white"
            className="size-12 opacity-90 drop-shadow"
          />
          {placeholderLabel ? (
            <span className="max-w-[22ch] text-[11px] font-medium tracking-[0.16em] text-white/70 uppercase">
              {placeholderLabel}
            </span>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <Image
      {...props}
      fill={fill}
      alt={alt}
      className={cn(className)}
      onError={() => setFailed(true)}
    />
  );
}
