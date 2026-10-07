"use client";
import { lightingPresets } from "./presets";
import type { LightingPresetId } from "@/types";
export default function LightingSystem({ preset }: { preset: LightingPresetId }) {
  const p = lightingPresets.find((l) => l.id === preset) ?? lightingPresets[0];
  return (
    <>
      <color attach="background" args={[p.bg]} />
      <ambientLight intensity={0.5 * p.intensity} />
      <directionalLight position={[5, 8, 5]} intensity={1.4 * p.intensity} color={p.key} />
      {/* subtle blue rim light */}
      <pointLight position={[-4, 2, -4]} intensity={30} color="#1687FF" distance={14} />
      <pointLight position={[4, 1.5, -3]} intensity={14} color="#22D3EE" distance={12} />
    </>
  );
}
