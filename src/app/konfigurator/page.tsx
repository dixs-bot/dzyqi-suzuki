import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VehicleConfigurator from "@/components/three/VehicleConfigurator";
export const metadata: Metadata = { title: "Konfigurator XL7", description: "Jelajahi Suzuki XL7 dalam 3D dan atur sudut kamera serta pencahayaan.", alternates: { canonical: "/konfigurator" } };
export default function Page() {
  return (<><PageHero eyebrow="Konfigurator" title="Rancang XL7 Anda" text="Fitur kustomisasi hanya aktif bila model 3D mendukungnya." /><section className="section !pt-6"><VehicleConfigurator /></section></>);
}
