import PageHero from "@/components/PageHero";
import PromoList from "@/components/PromoList";
import LeadForm from "@/components/LeadForm";
import TradeInForm from "@/components/TradeInForm";
import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta("Promo Suzuki Terbaru", "Tanyakan promo Suzuki terbaru langsung ke Diki, Sales Consultant Suzuki NJS Ahmad Yani.", "/promo");
export default function Page() {
  return (<><PageHero eyebrow="Promo" title="Promo Suzuki" text="Promo berubah tiap periode; konfirmasi ke Diki." />
    <section className="section !pt-6"><PromoList /></section>
    <section className="section !pt-0 grid gap-8 lg:grid-cols-2"><div><h2 className="h2 mb-6">Konsultasi</h2><LeadForm /></div><div><h2 className="h2 mb-6">Tukar tambah</h2><TradeInForm /></div></section></>);
}
