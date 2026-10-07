import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
export const metadata = pageMeta('Syarat & Ketentuan', 'Syarat dan ketentuan penggunaan situs Diki NJS Ahmad Yani.', "/terms");
export default function Page() { return (<><PageHero eyebrow="Legal" title="Syarat & Ketentuan" /><section className="section !pt-6 max-w-3xl space-y-4 text-slate-700"><p>Informasi pada situs ini bersifat umum dan dapat berubah. Harga, promo, dan spesifikasi resmi harus dikonfirmasi ke dealer Suzuki.</p><p>Situs ini independen dan bukan situs resmi Suzuki Indonesia.</p></section></>); }
