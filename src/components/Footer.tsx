import Link from "next/link";
import { siteConfig } from "@/data/site";
import { mainNav, footerNav } from "@/data/navigation";
export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-lg font-extrabold text-white">SUZUKI <span className="text-neon-200">DIKI</span></p>
          <p className="mt-2 text-sm">{siteConfig.consultantTitle}</p>
          <p className="mt-4 text-xs text-slate-400">{siteConfig.disclaimer}</p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm">{mainNav.map((n) => (<li key={n.href}><Link href={n.href} className="hover:text-neon-200">{n.label}</Link></li>))}</ul>
        <div className="text-sm">
          <p>WhatsApp: {siteConfig.whatsapp.local}</p>
          <ul className="mt-3 space-y-1">{footerNav.map((n) => (<li key={n.href}><Link href={n.href} className="hover:text-neon-200">{n.label}</Link></li>))}</ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Suzuki Diki. Situs independen, bukan situs resmi Suzuki Indonesia.</p>
    </footer>
  );
}
