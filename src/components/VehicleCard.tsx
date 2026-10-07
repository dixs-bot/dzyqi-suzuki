import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/types";
import { waVehicle } from "@/lib/whatsapp";
export default function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article data-reveal className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-glass transition hover:-translate-y-1 hover:shadow-neon">
      <Link href={`/kendaraan/${v.slug}`} className="block bg-gradient-to-br from-pearl to-white p-4">
        <Image src={v.image} alt={`Suzuki ${v.name}`} width={600} height={380} className="h-48 w-full object-contain transition group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
      </Link>
      <div className="p-6">
        <p className="eyebrow !mb-1">{v.category}</p>
        <h3 className="text-2xl font-extrabold">{v.name}{v.status === "comingSoon" && <span className="ml-2 rounded-full bg-neon-200/30 px-2 py-0.5 align-middle text-xs text-neon-500">Segera hadir</span>}</h3>
        <p className="mt-2 text-sm text-slate-600">{v.tagline}</p>
        <div className="mt-5 flex gap-3">
          <Link href={`/kendaraan/${v.slug}`} className="btn btn-ghost !px-4 !py-2">Detail</Link>
          <a href={waVehicle(v.name)} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-4 !py-2">Tanya Diki</a>
        </div>
      </div>
    </article>
  );
}
