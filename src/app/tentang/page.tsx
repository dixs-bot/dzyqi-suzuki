import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/site";
export const metadata: Metadata = { title: "Tentang", description: "Tentang Suzuki Diki — situs independen sales consultant, bukan situs resmi Suzuki Indonesia.", alternates: { canonical: "/tentang" } };
export default function Page() {
  return (<><PageHero eyebrow="Tentang" title="Tentang Suzuki Diki" /><section className="section !pt-6 max-w-3xl space-y-5 text-slate-700">
    <p>Suzuki Diki adalah situs milik Diki — Sales Consultant Suzuki — untuk membantu calon pelanggan berkonsultasi, memesan test drive, dan mengenal kendaraan Suzuki.</p>
    <p className="rounded-2xl border border-neon-500/30 bg-white p-5 font-semibold text-navy">⚠️ {siteConfig.disclaimer} Ini bukan situs resmi Suzuki Indonesia. Informasi resmi dan harga terkini harap dikonfirmasi ke dealer.</p></section></>);
}
