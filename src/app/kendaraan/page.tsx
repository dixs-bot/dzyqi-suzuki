import PageHero from "@/components/PageHero";
import VehicleCard from "@/components/VehicleCard";
import CarFinder from "@/components/CarFinder";
import { visibleVehicles } from "@/data/vehicles";
import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta("Kendaraan Suzuki — Tanyakan Harga", "Daftar kendaraan Suzuki: XL7, Fronx, Ertiga, Grand Vitara, Jimny, Ignis, S-Presso, APV, Carry. Tanyakan harga ke Diki.", "/kendaraan");
export default function Page() {
  return (<><PageHero eyebrow="Kendaraan" title="Kendaraan Suzuki" text="Harga tidak ditampilkan; tanyakan Diki untuk info terbaru." />
    <section className="section !pt-6"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visibleVehicles().map((v) => <VehicleCard key={v.slug} v={v} />)}</div></section>
    <section className="section !pt-0"><h2 className="h2 mb-6">Cari sesuai kebutuhan</h2><CarFinder /></section></>);
}
