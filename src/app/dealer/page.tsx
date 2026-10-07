import PageHero from "@/components/PageHero";
import { dealer } from "@/data/dealer";
import { waLink } from "@/lib/whatsapp";
import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta("Dealer SUZUKI NJS AHMAD YANI", "Informasi dealer SUZUKI NJS AHMAD YANI. Hubungi Diki untuk alamat dan jam operasional.", "/dealer");
export default function Page() {
  const rows: [string, string | null][] = [["Alamat", dealer.address], ["Jam operasional", dealer.hours], ["Telepon", dealer.phone]];
  return (<><PageHero eyebrow="Dealer" title={dealer.name} /><section className="section !pt-6"><dl className="glass max-w-xl space-y-4 rounded-3xl p-8">
    {rows.map(([k, v]) => (<div key={k}><dt className="text-xs font-bold uppercase tracking-widest text-neon-500">{k}</dt><dd className="mt-1 text-slate-700">{v ?? "Segera ditambahkan — tanyakan ke Diki."}</dd></div>))}
    <a href={waLink("Halo Kak Diki, mohon info alamat dan jam operasional dealer Suzuki NJS Ahmad Yani.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Tanya Lokasi via WhatsApp</a></dl></section></>);
}
