"use client";
import { cameraPresets, lightingPresets } from "./presets";
import type { CameraPresetId, LightingPresetId } from "@/types";
interface Props {
  camera: CameraPresetId; light: LightingPresetId; autoRotate: boolean;
  onCamera: (c: CameraPresetId) => void; onLight: (l: LightingPresetId) => void;
  onAutoRotate: () => void; onReset: () => void; onFullscreen: () => void; disabled?: boolean;
}
export default function VehicleControls({ camera, light, autoRotate, onCamera, onLight, onAutoRotate, onReset, onFullscreen, disabled }: Props) {
  const chip = (active: boolean) => `rounded-full px-3 py-1.5 text-xs font-semibold transition ${active ? "bg-neon-500 text-white" : "bg-white text-navy hover:text-neon-500"}`;
  return (
    <div className="glass absolute inset-x-3 bottom-3 z-20 space-y-2 rounded-2xl p-3 text-navy">
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Sudut kamera">
        {cameraPresets.map((c) => (<button key={c.id} disabled={disabled} onClick={() => onCamera(c.id)} aria-pressed={camera === c.id} className={chip(camera === c.id)}>{c.label}</button>))}
      </div>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Pencahayaan">
        {lightingPresets.map((l) => (<button key={l.id} disabled={disabled} onClick={() => onLight(l.id)} aria-pressed={light === l.id} className={chip(light === l.id)}>{l.label}</button>))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        <button disabled={disabled} onClick={onAutoRotate} aria-pressed={autoRotate} className={chip(autoRotate)}>Putar Otomatis</button>
        <button onClick={onReset} className={chip(false)}>Reset Kamera</button>
        <button onClick={onFullscreen} className={chip(false)}>Layar Penuh</button>
      </div>
    </div>
  );
}
