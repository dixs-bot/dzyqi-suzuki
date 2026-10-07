import Image from "next/image";
import Link from "next/link";
import { visibleVehicles, vehicles } from "@/data/vehicles";
import { salesConfig } from "@/data/site";
import { waConsultation } from "@/lib/whatsapp";
import VehicleCard from "@/components/VehicleCard";
import VehicleViewer from "@/components/three/VehicleViewer";
import CarFinder from "@/components/CarFinder";
import CreditSimulator from "@/components/CreditSimulator";
import PromoList from "@/components/PromoList";
import TestDriveForm from "@/components/TestDriveForm";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";

const xl7 = vehicles[0];
function Head({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (<div className="mb-10" data-reveal><p className="eyebrow">{eyebrow}</p><h2 className="h2">{title}</h2>{text && <p className="mt-3 max-w-2xl text-slate-600">{text}</p>}</div>);
}
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-pearl to-ivory pt-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-neon-300/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:px-8 lg:grid-cols-2">
        <div data-reveal>
          <p className="eyebrow">{salesConfig.dealerName}</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Beli Suzuki dengan mudah bersama <span className="text-neon-500">Diki</span></h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600">Konsultasi, simulasi kredit, test drive, dan tanya promo terbaru langsung dengan Diki — {salesConfig.role}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waConsultation()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Chat WhatsApp</a>
            <Link href="/simulasi-kredit" className="btn btn-ghost">Simulasi Kredit</Link>
            <Link href="/test-drive" className="btn btn-ghost">Test Drive</Link>
          </div>
        </div>
        <div data-reveal><Image src={xl7.image} alt="Suzuki XL7" width={1000} height={620} priority className="w-full drop-shadow-[0_24px_36px_rgba(0,104,255,.2)]" sizes="(max-width:1024px) 100vw, 50vw" /></div>
      </div>
    </section>
  );
}
export function TrustBar() {
  const items = ["Konsultasi gratis", "Simulasi kredit", "Test drive", "Tukar tambah", "Respons via WhatsApp"];
  return (<section aria-label="Layanan" className="border-y border-slate-100 bg-white"><ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-2 px-5 py-4 text-sm font-semibold text-slate-700">{items.map((i) => <li key={i}><span className="text-neon-500" aria-hidden>✓ </span>{i}</li>)}</ul></section>);
}
export function Featured() {
  return (<section className="section"><Head eyebrow="Kendaraan unggulan" title="Pilihan Suzuki untuk Anda" text="Harga: tanyakan ke Diki untuk info terbaru." />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visibleVehicles().slice(0, 3).map((v) => <VehicleCard key={v.slug} v={v} />)}</div>
    <Link href="/kendaraan" className="btn btn-ghost mt-8">Lihat semua kendaraan</Link></section>);
}
export function PromoSection() {
  return (<section className="bg-pearl"><div className="section"><Head eyebrow="Promo" title="Promo Suzuki" /><PromoList /></div></section>);
}
export function FinderSection() {
  return (<section className="section"><Head eyebrow="Car Finder" title="Cari mobil sesuai kebutuhan" /><CarFinder /></section>);
}
export function SimulatorSection() {
  return (<section className="bg-pearl"><div className="section"><Head eyebrow="Simulasi Kredit" title="Hitung estimasi angsuran" /><CreditSimulator /></div></section>);
}
export function WhyDiki() {
  const r = [["Konsultasi jujur", "Dibantu memilih sesuai kebutuhan dan anggaran."], ["Proses jelas", "Dari simulasi, test drive, hingga serah terima."], ["Respons cepat", "Langsung via WhatsApp."], ["Tukar tambah", "Tanyakan mobil lama Anda."]];
  return (<section className="section"><Head eyebrow="Kenapa Diki" title="Kenapa beli bersama Diki" />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{r.map(([t, d]) => (<div key={t} data-reveal className="glass rounded-3xl p-6"><h3 className="font-extrabold text-neon-500">{t}</h3><p className="mt-2 text-sm text-slate-600">{d}</p></div>))}</div></section>);
}
export function Experience3D() {
  return (<section className="bg-pearl"><div className="section"><Head eyebrow="Pengalaman 3D" title="Lihat XL7 dari berbagai sudut" text="Model 3D tampil bila tersedia; jika tidak, foto kendaraan ditampilkan." />
    <VehicleViewer modelUrl={xl7.model3d} image={xl7.image} name={xl7.name} height="h-[380px] md:h-[480px]" /></div></section>);
}
export function TestDriveSection() {
  return (<section className="section"><Head eyebrow="Test Drive" title="Jadwalkan test drive" /><div className="max-w-4xl"><TestDriveForm /></div></section>);
}
export function AboutDiki() {
  return (<section className="bg-pearl"><div className="section grid items-center gap-10 md:grid-cols-[1fr_2fr]">
    <div role="img" aria-label="Tempat foto Diki" className="grid aspect-square place-items-center rounded-3xl border-2 border-dashed border-neon-500/40 bg-white text-center text-sm text-slate-500">Foto Diki<br />(segera ditambahkan)</div>
    <div data-reveal><p className="eyebrow">Tentang Diki</p><h2 className="h2">Diki — {salesConfig.role}</h2><p className="mt-4 text-slate-600">Saya membantu Anda memilih Suzuki yang tepat, dari konsultasi hingga serah terima.</p>
      <Link href="/tentang-diki" className="btn btn-ghost mt-6">Selengkapnya</Link><div className="mt-8"><Testimonials /></div></div></div></section>);
}
export function FaqSection() { return (<section className="section"><Head eyebrow="FAQ" title="Pertanyaan umum" /><Faq /></section>); }
export function WhatsAppCTA() {
  return (<section className="bg-navy text-white"><div className="section text-center"><h2 className="h2" data-reveal>Siap bantu Anda memilih Suzuki</h2><p className="mx-auto mt-3 max-w-xl text-slate-300">Tanya harga, promo, dan jadwal test drive langsung ke Diki.</p>
    <a href={waConsultation()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">{salesConfig.floatingLabel}</a>
    <div className="mx-auto mt-10 max-w-xl text-left text-navy"><LeadForm /></div></div></section>);
}
