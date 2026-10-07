"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { mainNav } from "@/data/navigation";
import { waConsultation } from "@/lib/whatsapp";
import { prefersReducedMotion } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    document.body.style.overflow = open ? "hidden" : "";
    const reduce = prefersReducedMotion();
    if (open) {
      gsap.set(el, { display: "flex" });
      gsap.fromTo(el, { clipPath: "circle(0% at 95% 4%)" }, { clipPath: "circle(150% at 95% 4%)", duration: reduce ? 0 : 0.7, ease: "power3.out" });
      gsap.fromTo(el.querySelectorAll("a"), { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: reduce ? 0 : 0.06, delay: reduce ? 0 : 0.2, duration: reduce ? 0 : 0.5 });
    } else {
      gsap.to(el, { opacity: 0, duration: reduce ? 0 : 0.25, onComplete: () => { gsap.set(el, { display: "none", opacity: 1 }); } });
    }
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "glass" : "bg-transparent"}`}>
      <nav aria-label="Navigasi utama" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/suzuki-logo.png" alt="Logo Suzuki" width={40} height={40} className="h-9 w-auto" priority />
          <span className="text-sm font-extrabold tracking-wider">SUZUKI <span className="text-neon-500">DIKI</span></span>
        </Link>
        <ul className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {mainNav.map((n) => (<li key={n.href}><Link href={n.href} className="transition hover:text-neon-500">{n.label}</Link></li>))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={waConsultation()} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden md:inline-flex">Konsultasi</a>
          <button aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-neon-500/30 bg-white lg:hidden">
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" ref={menuRef} style={{ display: "none" }} className="fixed inset-0 z-[55] flex-col items-center justify-center gap-5 bg-white text-center">
        {mainNav.map((n) => (<Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-3xl font-extrabold hover:text-neon-500">{n.label}</Link>))}
        <a href={waConsultation()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">Chat dengan Diki</a>
      </div>
    </header>
  );
}
