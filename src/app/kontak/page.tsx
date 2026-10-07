import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import { salesConfig } from "@/data/site";
import { waConsultation } from "@/lib/whatsapp";
import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta("Kontak Diki", "Hubungi Diki, Sales Consultant Suzuki, via WhatsApp.", "/kontak");
export default function Page() {
  return (<><PageHero eyebrow="Kontak" title="Hubungi Diki" /><section className="section !pt-6 grid gap-8 lg:grid-cols-2"><div className="glass rounded-3xl p-8">
    <p className="font-bold">{salesConfig.title}</p><p className="mt-2 text-slate-600">WhatsApp: {salesConfig.whatsapp.display}</p>
    <a href={waConsultation()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">Chat via WhatsApp</a></div><LeadForm /></section></>);
}
