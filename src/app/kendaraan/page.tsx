import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VehicleCard from "@/components/VehicleCard";
import { visibleVehicles } from "@/data/vehicles";
export const metadata: Metadata = { title: "Kendaraan Suzuki", description: "Daftar kendaraan Suzuki: XL7, Fronx, Ertiga, Grand Vitara, Jimny, Ignis, S-Presso, APV, Carry.", alternates: { canonical: "/kendaraan" } };
export default function Page() {
  return (<><PageHero eyebrow="Koleksi" title="Kendaraan Suzuki" text="Pilih mobil yang sesuai gaya hidup Anda." />
    <section className="section !pt-10"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visibleVehicles().map((v) => <VehicleCard key={v.slug} v={v} />)}</div></section></>);
}
