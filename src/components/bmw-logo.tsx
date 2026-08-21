import { cn } from "@/lib/utils";

/** BMW roundel — vector, không phụ thuộc file ảnh. */
export function BmwRoundel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="BMW"
      className={cn("size-9", className)}
    >
      <defs>
        <clipPath id="bmw-roundel-clip">
          <circle cx="50" cy="50" r="34" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="48" fill="currentColor" />
      <circle cx="50" cy="50" r="34" fill="#fff" />
      <g clipPath="url(#bmw-roundel-clip)">
        <rect x="50" y="16" width="34" height="34" fill="#0066b1" />
        <rect x="16" y="50" width="34" height="34" fill="#0066b1" />
      </g>
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="50"
        y="12.5"
        textAnchor="middle"
        fontSize="12.5"
        fontWeight="700"
        fill="#fff"
        fontFamily="Helvetica, Arial, sans-serif"
      >
        BMW
      </text>
    </svg>
  );
}

export function SiteLogo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BmwRoundel
        className={cn("size-10 shrink-0", invert ? "text-white" : "text-[#16588e]")}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[15px] font-semibold tracking-[0.22em] uppercase",
            invert ? "text-white" : "text-foreground",
          )}
        >
          Sài Gòn
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] tracking-[0.14em] uppercase",
            invert ? "text-white/65" : "text-muted-foreground",
          )}
        >
          Đại lý ủy quyền
        </span>
      </span>
    </span>
  );
}
