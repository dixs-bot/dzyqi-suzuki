import Link from "next/link";
import { VehiclePlaceholder } from "@/components/ui/VehiclePlaceholder";

export function VehicleCard({ vehicle }) {
  return (
    <article className="group border border-white/10 bg-navy-mid/40 transition hover:border-accent/50">
      <Link href={`/vehicles/${vehicle.slug}`} className="block">
        <VehiclePlaceholder
          name={vehicle.name}
          accent={vehicle.heroAccent}
          className="h-52"
        />
        <div className="p-6">
          <p className="text-[11px] uppercase tracking-wide2 text-metallic">{vehicle.category}</p>
          <h3 className="mt-2 text-2xl font-light">{vehicle.name}</h3>
          <p className="mt-2 text-sm text-ivory/70">{vehicle.tagline}</p>
          <p className="mt-4 text-[11px] uppercase tracking-wide2 text-metallic">
            {vehicle.price.display}
            <span className="ml-2 text-ivory/40">placeholder</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
