"use client";

import { Environment } from "@react-three/drei";

const PRESETS = {
  studio: { preset: "studio", intensity: 0.9 },
  daylight: { preset: "city", intensity: 1.1 },
  sunset: { preset: "sunset", intensity: 1 },
  night: { preset: "night", intensity: 0.45 },
  showroom: { preset: "warehouse", intensity: 0.85 },
};

export function CarLighting({ environment = "studio" }) {
  const cfg = PRESETS[environment] || PRESETS.studio;
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 8, 4]} intensity={1.1} color="#f4f1ea" />
      <directionalLight position={[-4, 3, -2]} intensity={0.35} color="#1a73c7" />
      <Environment preset={cfg.preset} environmentIntensity={cfg.intensity} />
    </>
  );
}
