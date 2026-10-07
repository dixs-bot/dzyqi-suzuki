"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { VehiclePlaceholder } from "@/components/ui/VehiclePlaceholder";

export function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-copy] > *", {
        y: 28,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from("[data-hero-visual]", {
        y: 40,
        opacity: 0,
        duration: 1.4,
        delay: 0.2,
        ease: "power2.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden bg-ink pt-24">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        muted
        playsInline
        loop
        poster=""
        aria-hidden="true"
      >
        <source src="/videos/xl7-hero.mp4" type="video/mp4" />
      </video>
      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-cinema items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        <div data-hero-copy>
          <p className="text-[11px] uppercase tracking-luxury text-metallic">Suzuki Automotive Experience</p>
          <h1 className="mt-5 text-5xl font-light tracking-tight md:text-7xl">The New XL7</h1>
          <p className="mt-5 max-w-md text-lg text-ivory/70">Crafted for the journey ahead</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/vehicles/xl7"
              className="border border-accent bg-accent px-6 py-3 text-[11px] uppercase tracking-wide2 hover:bg-accent-bright"
            >
              Explore XL7
            </Link>
            <Link
              href="/configurator/xl7"
              className="border border-ivory/30 px-6 py-3 text-[11px] uppercase tracking-wide2 hover:border-accent hover:text-accent-bright"
            >
              Build Your XL7
            </Link>
          </div>
        </div>
        <div data-hero-visual className="relative">
          <VehiclePlaceholder name="XL7" accent="#1a73c7" className="h-[42vh] min-h-[280px]" />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[10px] uppercase tracking-luxury text-metallic">Scroll</p>
        <span className="mt-2 block h-8 w-px bg-gradient-to-b from-metallic to-transparent mx-auto" />
      </div>
    </section>
  );
}
