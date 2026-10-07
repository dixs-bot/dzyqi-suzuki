import { vehicles } from "@/data/vehicles";

export function getVehicles() {
  return vehicles;
}

export function getVehicleBySlug(slug) {
  return vehicles.find((v) => v.slug === slug) ?? null;
}

export function getVehicleSlugs() {
  return vehicles.map((v) => v.slug);
}

export function getFeaturedVehicle() {
  return vehicles.find((v) => v.featured) ?? vehicles[0];
}

export function getVehiclesByCategory(category) {
  if (!category || category === "all") return vehicles;
  return vehicles.filter((v) => v.category === category);
}
