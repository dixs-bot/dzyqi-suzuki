export type VehicleStatus = "available" | "comingSoon" | "hidden";
export type Need = "keluarga" | "offroad" | "city" | "niaga" | "suv";
export interface Vehicle {
  needs: Need[];
  slug: string; name: string; category: string; tagline: string; description: string;
  image: string; status: VehicleStatus; seats?: number; highlights: string[]; model3d?: string;
}
export interface NavItem { label: string; href: string }
export type CameraPresetId = "depan" | "depan34" | "samping" | "belakang" | "belakang34" | "interior";
export type LightingPresetId = "showroom" | "siang" | "senja" | "malam" | "studio";
