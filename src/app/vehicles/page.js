import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { Section } from "@/components/ui/Section";
import { getVehicles } from "@/lib/vehicles";
import { categories } from "@/data/vehicles";

export const metadata = {
  title: "Vehicles",
  description: "Data-driven Suzuki Automotive Experience lineup. Placeholder pricing and specifications.",
};

export default function VehiclesPage() {
  const vehicles = getVehicles();
  return (
    <Section eyebrow="Catalog" title="Vehicles" className="pt-32">
      <p className="mb-10 max-w-2xl text-sm text-metallic">
        Confirmed experience lineup. Add or remove models in src/data/vehicles.js. Prices and specs are indicative
        placeholders — not official figures. Categories: {categories.join(", ")}.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v) => (
          <VehicleCard key={v.slug} vehicle={v} />
        ))}
      </div>
    </Section>
  );
}
