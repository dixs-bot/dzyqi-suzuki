import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import VehicleViewer from "@/components/three/VehicleViewer";
import { vehicles } from "@/data/vehicles";
export const metadata: Metadata = { title: "Pengalaman 3D", description: "Jelajahi Suzuki XL7 secara interaktif dalam 3D.", alternates: { canonical: "/pengalaman" } };
export default function Page() {
  const v = vehicles[0];
  return (<><PageHero eyebrow="Pengalaman" title="Pengalaman 3D" text="Putar, zoom, geser. Tambahkan ?debug3d=true pada URL untuk statistik performa." />
    <section className="section !pt-6"><VehicleViewer modelUrl={v.model3d} image={v.image} name={v.name} height="h-[560px] md:h-[680px]" /><Link href="/konfigurator" className="btn btn-primary mt-8">Buka Konfigurator</Link></section></>);
}
