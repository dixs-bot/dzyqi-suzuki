import type { CameraPresetId, LightingPresetId } from "@/types";
export const cameraPresets: { id: CameraPresetId; label: string; position: [number, number, number]; target: [number, number, number] }[] = [
  { id: "depan", label: "Depan", position: [0, 1.2, 5.5], target: [0, 0.6, 0] },
  { id: "depan34", label: "3/4 Depan", position: [3.8, 1.6, 3.8], target: [0, 0.6, 0] },
  { id: "samping", label: "Samping", position: [5.5, 1.2, 0], target: [0, 0.6, 0] },
  { id: "belakang", label: "Belakang", position: [0, 1.2, -5.5], target: [0, 0.6, 0] },
  { id: "belakang34", label: "3/4 Belakang", position: [-3.8, 1.6, -3.8], target: [0, 0.6, 0] },
  { id: "interior", label: "Interior", position: [0, 0.95, 0.4], target: [0, 0.9, -2] },
];
export const lightingPresets: { id: LightingPresetId; label: string; env: "apartment" | "city" | "sunset" | "night" | "studio"; bg: string; intensity: number; key: string }[] = [
  { id: "showroom", label: "Showroom Putih", env: "apartment", bg: "#F7F9FC", intensity: 1, key: "#ffffff" },
  { id: "siang", label: "Siang", env: "city", bg: "#E6F2FF", intensity: 1.2, key: "#fffbe8" },
  { id: "senja", label: "Senja", env: "sunset", bg: "#FCE9DA", intensity: 0.9, key: "#ffb27a" },
  { id: "malam", label: "Malam", env: "night", bg: "#0A1426", intensity: 0.6, key: "#8fb8ff" },
  { id: "studio", label: "Studio", env: "studio", bg: "#EEF1F6", intensity: 1.1, key: "#ffffff" },
];
