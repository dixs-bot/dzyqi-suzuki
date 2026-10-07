import { notFound } from "next/navigation";
import { getVehicleBySlug, getVehicleSlugs } from "@/lib/vehicles";
import { CarConfigurator } from "@/components/three/CarConfigurator";

export function generateStaticParams() {
  return getVehicleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) return { title: "Configurator" };
  return {
    title: `Build ${vehicle.name}`,
    description: `3D configurator for ${vehicle.name}. Placeholder model until a licensed GLB is supplied.`,
  };
}

export default function ConfiguratorPage({ params }) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) notFound();
  return (
    <div className="pt-16">
      <CarConfigurator vehicle={vehicle} />
    </div>
  );
}
