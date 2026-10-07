import Image from "next/image";
import Link from "next/link";
import { visibleVehicles, vehicles } from "@/data/vehicles";
import { waConsultation, waVehicle, waTestDrive } from "@/lib/whatsapp";
import VehicleCard from "@/components/VehicleCard";
import VehicleViewer from "@/components/three/VehicleViewer";

const xl7 = vehicles[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-pearl to-ivory pt-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-neon-300/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 md:px-8 lg:grid-cols-2">
        <div data-reveal>
          <p className="eyebrow">Suzuki XL7</p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">SUV UNTUK SETIAP <span className="text-neon-500">PERJALANAN</span></h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600">Rasakan SUV 7-seater bergaya bersama Diki — Sales Consultant Suzuki.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/kendaraan/xl7" className="btn btn-primary">JELAJAHI XL7</Link>
            <Link href="/konfigurator" className="btn btn-ghost">RANCANG XL7 ANDA</Link>
          </div>
        </div>
        <div data-reveal><Image src={xl7.image} alt="Suzuki XL7" width={1000} height={620} priority className="w-full drop-shadow-[0_30px_40px_rgba(0,104,255,.25)]" sizes="(max-width:1024px) 100vw, 50vw" /></div>
      </div>
    </section>
  );
}
export function Showcase() {
  const items = [{ img: "/images/newxl7.png", t: "XL7", d: "Tampilan standar" }, { img: "/images/xl7-kuro.png", t: "XL7 Kuro", d: "Nuansa gelap sporty" }];
  return (
    <section className="section">
      <p className="eyebrow" data-reveal>Vehicle Showcase</p><h2 className="h2" data-reveal>Pilihan tampilan XL7</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((i) => (<div key={i.t} data-reveal className="rounded-3xl bg-gradient-to-br from-pearl to-white p-6 shadow-glass"><Image src={i.img} alt={`Suzuki ${i.t}`} width={800} height={500} className="w-full object-contain" sizes="(max-width:768px) 100vw, 50vw" /><h3 className="mt-4 text-xl font-extrabold">{i.t}</h3><p className="text-sm text-slate-600">{i.d}</p></div>))}
      </div>
    </section>
  );
}
function Feature({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (<div data-reveal><p className="eyebrow">{eyebrow}</p><h2 className="h2">{title}</h2><p className="mt-4 max-w-xl text-slate-600">{text}</p></div>);
}
export function DesignSection() {
  return (<section className="bg-pearl"><div className="section grid items-center gap-10 lg:grid-cols-2"><Feature eyebrow="Desain" title="Siluet SUV yang tegas dan elegan" text="Garis bodi tangguh dengan sentuhan modern. Hubungi Diki untuk melihat detail desain langsung di dealer." />
    <Link href="/desain" className="btn btn-ghost w-fit justify-self-start lg:justify-self-end" data-reveal>Lihat Desain</Link></div></section>);
}
export function TechSection() {
  return (<section className="bg-navy text-white"><div className="section grid items-center gap-10 lg:grid-cols-2"><div data-reveal><p className="eyebrow !text-neon-200">Teknologi</p><h2 className="h2">Teknologi untuk kenyamanan berkendara</h2><p className="mt-4 max-w-xl text-slate-300">Fitur dan spesifikasi berbeda tiap varian. Minta daftar resmi terbaru langsung dari Diki.</p></div>
    <Link href="/teknologi" className="btn btn-primary w-fit justify-self-start lg:justify-self-end" data-reveal>Pelajari Teknologi</Link></div></section>);
}
export function PerformanceSection() {
  const s = [["7", "Kursi penumpang"], ["3", "Baris kabin"], ["SUV", "Karakter bodi"]];
  return (<section className="section"><Feature eyebrow="Performa" title="Siap untuk harian dan akhir pekan" text="Angka resmi performa dan konsumsi BBM dapat dikonfirmasi ke Diki sesuai varian terkini." />
    <div className="mt-10 grid gap-5 sm:grid-cols-3">{s.map(([n, l]) => (<div key={l} data-reveal className="glass rounded-3xl p-8 text-center"><p className="text-5xl font-extrabold text-neon-500">{n}</p><p className="mt-2 text-sm text-slate-600">{l}</p></div>))}</div></section>);
}
export function Experience3D() {
  return (<section className="bg-pearl"><div className="section"><Feature eyebrow="Pengalaman 3D" title="Putar, zoom, dan jelajahi XL7" text="Gunakan kontrol untuk mengganti sudut kamera dan pencahayaan." />
    <div className="mt-10" data-reveal><VehicleViewer modelUrl={xl7.model3d} image={xl7.image} name={xl7.name} /></div></div></section>);
}
export function Collection() {
  return (<section className="section"><p className="eyebrow" data-reveal>Koleksi</p><h2 className="h2" data-reveal>Kendaraan Suzuki</h2>
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visibleVehicles().map((v) => <VehicleCard key={v.slug} v={v} />)}</div></section>);
}
export function TestDriveCTA() {
  return (<section className="bg-gradient-to-r from-neon-500 to-neon-300 text-white"><div className="section text-center"><h2 className="h2" data-reveal>Rasakan sendiri di balik kemudi</h2><p className="mx-auto mt-3 max-w-xl" data-reveal>Jadwalkan test drive bersama Diki.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/test-drive" className="btn bg-white text-neon-500 hover:bg-pearl">Booking Test Drive</Link><a href={waTestDrive()} target="_blank" rel="noopener noreferrer" className="btn border border-white/70 text-white hover:bg-white/10">Langsung ke WhatsApp</a></div></div></section>);
}
export function DealerCTA() {
  return (<section className="section"><Feature eyebrow="Dealer" title="Temukan dealer terdekat" text="Cari dealer berdasarkan kota atau tanyakan langsung ke Diki." /><Link href="/dealer" className="btn btn-ghost mt-6" data-reveal>Cari Dealer</Link></section>);
}
export function ContactCTA() {
  return (<section className="bg-navy text-white"><div className="section text-center"><h2 className="h2" data-reveal>Ada pertanyaan? Chat Diki</h2><p className="mx-auto mt-3 max-w-xl text-slate-300" data-reveal>Info harga, promo, simulasi kredit, dan jadwal test drive.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3"><a href={waConsultation()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Konsultasi via WhatsApp</a><a href={waVehicle("XL7")} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Tanya XL7</a></div></div></section>);
}
