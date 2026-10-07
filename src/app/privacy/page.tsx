import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
export const metadata = pageMeta('Kebijakan Privasi', 'Kebijakan privasi situs Diki NJS Ahmad Yani.', "/privacy");
export default function Page() { return (<><PageHero eyebrow="Legal" title="Kebijakan Privasi" /><section className="section !pt-6 max-w-3xl space-y-4 text-slate-700"><p>Situs ini (Diki NJS Ahmad Yani) tidak menyimpan data formulir di server. Data test drive hanya dibentuk menjadi pesan WhatsApp yang Anda kirim sendiri kepada Diki.</p><p>Anda dapat meminta penghapusan percakapan WhatsApp kapan saja dengan menghubungi Diki.</p></section></>); }
