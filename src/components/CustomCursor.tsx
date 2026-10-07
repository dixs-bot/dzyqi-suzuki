"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/utils";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    el.style.display = "block";
    const x = gsap.quickTo(el, "x", { duration: 0.25 });
    const y = gsap.quickTo(el, "y", { duration: 0.25 });
    const move = (e: MouseEvent) => { x(e.clientX - 8); y(e.clientY - 8); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} aria-hidden style={{ display: "none" }} className="pointer-events-none fixed left-0 top-0 z-[90] h-4 w-4 rounded-full border-2 border-neon-400 mix-blend-multiply" />;
}
