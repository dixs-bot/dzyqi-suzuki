import PageHero from "@/components/PageHero";
import CreditSimulator from "@/components/CreditSimulator";
import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta("Simulasi Kredit Suzuki", "Hitung estimasi angsuran kredit Suzuki lalu kirim hasilnya ke WhatsApp Diki.", "/simulasi-kredit");
export default function Page() { return (<><PageHero eyebrow="Simulasi Kredit" title="Simulasi Kredit Suzuki" /><section className="section !pt-6"><CreditSimulator /></section></>); }
