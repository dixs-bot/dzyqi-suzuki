import Link from "next/link";
import { footerLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto grid max-w-cinema gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <p className="tracking-luxury text-[11px] uppercase">{site.name}</p>
          <p className="mt-4 max-w-xs text-sm text-metallic">{site.tagline}</p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="text-[11px] uppercase tracking-wide2 text-metallic">{group}</p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ivory/80 hover:text-accent-bright">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="luxury-rule" />
      <p className="px-5 py-6 text-center text-[11px] uppercase tracking-wide2 text-metallic md:px-8">
        Original experience · Placeholder product data · Not official Suzuki Motor Corporation materials
      </p>
    </footer>
  );
}
