"use client";
import { Environment as DreiEnvironment, ContactShadows } from "@react-three/drei";
import { lightingPresets } from "./presets";
import type { LightingPresetId } from "@/types";
export default function SceneEnvironment({ preset }: { preset: LightingPresetId }) {
  const p = lightingPresets.find((l) => l.id === preset) ?? lightingPresets[0];
  return (
    <>
      <DreiEnvironment preset={p.env} environmentIntensity={0.6 * p.intensity} />
      <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={12} blur={2.5} far={4} color="#0068FF" />
    </>
  );
}
