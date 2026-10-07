"use client";

import { CAMERA_PRESETS } from "./CarCamera";

export function CameraPresets({ value, onChange, onReset, onFullscreen }) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(CAMERA_PRESETS).map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`px-3 py-1.5 text-[10px] uppercase tracking-wide2 ${
            value === key ? "bg-accent text-ivory" : "bg-white/5 text-metallic hover:text-ivory"
          }`}
        >
          {key}
        </button>
      ))}
      <button
        type="button"
        onClick={onReset}
        className="px-3 py-1.5 text-[10px] uppercase tracking-wide2 text-metallic hover:text-ivory"
      >
        Reset
      </button>
      <button
        type="button"
        onClick={onFullscreen}
        className="px-3 py-1.5 text-[10px] uppercase tracking-wide2 text-metallic hover:text-ivory"
      >
        Fullscreen
      </button>
    </div>
  );
}
