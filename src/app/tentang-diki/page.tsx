import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import { salesConfig } from "@/data/site";
import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta("Tentang Diki — Sales Consultant Suzuki", "Kenali Diki, Sales Consultant Suzuki di NJS Ahmad Yani. Situs independen, bukan situs resmi Suzuki Indonesia.", "/tentang-diki");
export default function Page() {
  return (<><PageHero eyebrow="Tentang Diki" title="Diki — Sales Consultant Suzuki" /><section className="section !pt-6 max-w-3xl space-y-5 text-slate-700">
    <div role="img" aria-label="Tempat foto Diki" className="grid h-56 place-items-center rounded-3xl border-2 border-dashed border-neon-500/40 text-sm text-slate-500">Foto Diki (segera ditambahkan)</div>
    <p>Diki membantu calon pelanggan memilih Suzuki, menghitung simulasi kredit, dan menjadwalkan test drive di {salesConfig.dealerName}.</p>
    <p className="rounded-2xl border border-neon-500/30 bg-white p-5 font-semibold text-navy">{salesConfig.disclaimer}</p>
    <h2 className="h2 !text-2xl pt-4">Testimoni</h2><Testimonials /></section></>);
}
