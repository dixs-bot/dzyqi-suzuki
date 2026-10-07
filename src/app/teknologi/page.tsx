import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Teknologi", description: "Informasi teknologi kendaraan Suzuki. Minta spesifikasi resmi terbaru dari Diki.", alternates: { canonical: "/teknologi" } };
const items = [["Keselamatan", "Fitur keselamatan bervariasi per model dan varian."], ["Kenyamanan", "Kabin dirancang untuk perjalanan jauh maupun harian."], ["Konektivitas", "Fitur hiburan & konektivitas tergantung varian."], ["Efisiensi", "Konfirmasi konsumsi BBM resmi per varian ke konsultan."]];
export default function Page() {
  return (<><PageHero eyebrow="Teknologi" title="Teknologi Suzuki" text="Ringkasan umum; spesifikasi resmi dapat berubah sewaktu-waktu." />
    <section className="section !pt-6 grid gap-5 md:grid-cols-2">{items.map(([t, d]) => (<div key={t} data-reveal className="glass rounded-3xl p-8"><h2 className="text-xl font-extrabold text-neon-500">{t}</h2><p className="mt-2 text-slate-600">{d}</p></div>))}</section></>);
}
