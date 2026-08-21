"use client";

import { Check, Link2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { FacebookIcon, XIcon } from "@/components/brand-icons";
import { cn } from "@/lib/utils";

export function ShareButtons({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Đã sao chép liên kết");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Không sao chép được liên kết");
    }
  };

  const links = [
    {
      label: "Chia sẻ lên Facebook",
      icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "Chia sẻ lên X",
      icon: XIcon,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url,
      )}&text=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="mr-1 text-[13px] text-muted-foreground">Chia sẻ:</span>
      {links.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-primary"
        >
          <Icon className="size-4" />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Sao chép liên kết"
        className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-primary"
      >
        {copied ? <Check className="size-4 text-primary" /> : <Link2 className="size-4" />}
      </button>
    </div>
  );
}
