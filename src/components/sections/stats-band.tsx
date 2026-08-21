"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

import { stats } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold sm:text-5xl">
      {display.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <section className="relative isolate overflow-hidden bg-bmw-900 py-14 text-white sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(115deg,transparent_0_28px,#fff_28px_29px)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/3 size-96 rounded-full bg-bmw-500/25 blur-[100px]"
      />
      <div className="container-page relative">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <dd>
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-[13px] leading-snug text-white/65">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
