export type VehicleStatus = "available" | "comingSoon" | "hidden";
export interface Vehicle {
  slug: string; name: string; category: string; tagline: string; description: string;
  image: string; status: VehicleStatus; seats?: number; highlights: string[]; model3d?: string;
}
export interface Dealer { id: string; name: string; city: string; address: string; note: string }
export interface NavItem { label: string; href: string }
export type CameraPresetId = "depan" | "depan34" | "samping" | "belakang" | "belakang34" | "interior";
export type LightingPresetId = "showroom" | "siang" | "senja" | "malam" | "studio";
