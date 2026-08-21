import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Logo BMW chính thức.
 * - `variant="color"`: bản viền xám — dùng trên nền sáng.
 * - `variant="white"`: bản viền trắng — dùng trên nền tối.
 */
export function BmwRoundel({
  className,
  variant = "color",
  priority = false,
}: {
  className?: string;
  variant?: "color" | "white";
  priority?: boolean;
}) {
  return (
    <Image
      src={
        variant === "white"
          ? "/images/logo/bmw-roundel-white.webp"
          : "/images/logo/bmw-roundel.webp"
      }
      alt="BMW"
      width={960}
      height={960}
      priority={priority}
      sizes="96px"
      className={cn("size-9 object-contain", className)}
    />
  );
}

export function SiteLogo({
  className,
  invert = false,
  priority = false,
}: {
  className?: string;
  invert?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BmwRoundel
        variant={invert ? "white" : "color"}
        priority={priority}
        className="size-10 shrink-0"
      />
      <span
        className={cn(
          "font-heading text-[17px] leading-none font-semibold tracking-[0.22em] uppercase",
          invert ? "text-white" : "text-foreground",
        )}
      >
        Sài Gòn
      </span>
    </span>
  );
}
