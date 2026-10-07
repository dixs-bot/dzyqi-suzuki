import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TestDriveForm from "@/components/TestDriveForm";
import PageHero from "@/components/PageHero";
import VehicleViewer from "@/components/three/VehicleViewer";
import { getVehicle, visibleVehicles } from "@/data/vehicles";
import { waVehicle, waTestDrive } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return visibleVehicles().map((v) => ({ slug: v.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const v = getVehicle((await params).slug);
  if (!v) return { title: "Kendaraan tidak ditemukan" };
  return { title: `Suzuki ${v.name} | Harga, Promo & Kredit`, description: `${v.tagline}. ${v.description} Tanyakan harga dan promo ke Diki.`, alternates: { canonical: `/kendaraan/${v.slug}` }, openGraph: { images: [v.image] } };
}
export default async function Page({ params }: Props) {
  const v = getVehicle((await params).slug);
  if (!v) notFound();
  const ld = { "@context": "https://schema.org", "@type": "Product", name: `Suzuki ${v.name}`, description: v.description, image: v.image, brand: { "@type": "Brand", name: "Suzuki" } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <PageHero eyebrow={v.category} title={`Suzuki ${v.name}`} text={v.tagline} />
    <section className="section !pt-6 grid gap-10 lg:grid-cols-2">
      {v.model3d ? <VehicleViewer modelUrl={v.model3d} image={v.image} name={v.name} /> : <Image src={v.image} alt={`Suzuki ${v.name}`} width={900} height={560} priority className="w-full rounded-3xl bg-pearl p-6 object-contain" />}
      <div>
        <p className="text-slate-600">{v.description}</p>
        {v.seats && <p className="mt-4 text-sm font-semibold">Kapasitas: {v.seats} penumpang</p>}
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">{v.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        <p className="mt-4 text-lg font-bold text-neon-500">Tanyakan Harga</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waVehicle(v.name)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Tanya {v.name} ke Diki</a>
          <a href={waTestDrive()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Test Drive</a>
          <Link href="/simulasi-kredit" className="btn btn-ghost">Simulasi Kredit</Link>
        </div>
      </div>
    </section>
    <section className="section !pt-0 max-w-4xl"><h2 className="h2 mb-6">Test drive {v.name}</h2><TestDriveForm defaultCar={v.name} /></section></>);
}
