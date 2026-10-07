"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, ctaLink, site } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-cinema items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="tracking-luxury text-[11px] uppercase text-ivory">
          {site.shortName}
          <span className="ml-2 hidden text-metallic sm:inline">Automotive Experience</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-wide2 text-ivory/80 transition-colors hover:text-accent-bright"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaLink.href}
            className="border border-accent/70 px-4 py-2 text-[11px] uppercase tracking-wide2 text-ivory transition-colors hover:bg-accent hover:text-ivory"
          >
            {ctaLink.label}
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-[11px] uppercase tracking-wide2"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col justify-center bg-ink/95 px-8 lg:hidden"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl uppercase tracking-wide2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaLink.href}
              onClick={() => setOpen(false)}
              className="mt-4 text-sm uppercase tracking-wide2 text-accent-bright"
            >
              {ctaLink.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
