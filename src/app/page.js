import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { getVehicles } from "@/lib/vehicles";

export default function HomePage() {
  const vehicles = getVehicles();
  return (
    <>
      <Hero />
      <Section eyebrow="Showroom" title="The lineup">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </Section>
      <Section eyebrow="Technology" title="Quiet intelligence." className="bg-navy/40">
        <p className="max-w-2xl text-ivory/70">
          Safety, connectivity, and efficiency presented as a calm system — not a spectacle. Specifications on this
          site are labelled placeholders pending licensed product data.
        </p>
        <Link href="/technology" className="mt-8 inline-block text-[11px] uppercase tracking-wide2 text-accent-bright">
          Explore technology
        </Link>
      </Section>
      <Section eyebrow="Interior" title="Cabin as architecture.">
        <p className="max-w-2xl text-ivory/70">
          Ivory, graphite, navy. Materials suggested, never photographed from copyrighted sources. Original gradients
          stand in until licensed imagery is supplied.
        </p>
        <Link href="/design" className="mt-8 inline-block text-[11px] uppercase tracking-wide2 text-accent-bright">
          Design atelier
        </Link>
      </Section>
    </>
  );
}
