import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/site";
import { waConsultation } from "@/lib/whatsapp";
export const metadata: Metadata = { title: "Kontak", description: "Hubungi Diki, Sales Consultant Suzuki, via WhatsApp.", alternates: { canonical: "/kontak" } };
export default function Page() {
  return (<><PageHero eyebrow="Kontak" title="Hubungi Diki" /><section className="section !pt-6"><div className="glass max-w-xl rounded-3xl p-8">
    <p className="font-bold">{siteConfig.consultantTitle}</p><p className="mt-2 text-slate-600">WhatsApp: {siteConfig.whatsapp.local}</p>
    <a href={waConsultation()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">Chat via WhatsApp</a></div></section></>);
}
