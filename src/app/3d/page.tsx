import PageHero from "@/components/PageHero";
import VehicleConfigurator from "@/components/three/VehicleConfigurator";
import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta("Pengalaman 3D Suzuki XL7", "Lihat Suzuki XL7 dalam 3D: ganti sudut kamera dan pencahayaan.", "/3d");
export default function Page() { return (<><PageHero eyebrow="3D" title="Pengalaman 3D" text="Tambahkan ?debug3d=true pada URL untuk statistik performa." /><section className="section !pt-6"><VehicleConfigurator /></section></>); }
