"use client";
import { useProgress } from "@react-three/drei";
export default function ModelLoader() {
  const { progress, active } = useProgress();
  if (!active && progress >= 100) return null;
  return (
    <div role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} className="absolute inset-0 z-10 grid place-items-center bg-white/85 backdrop-blur">
      <div className="w-64 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-neon-500">MEMUAT MODEL 3D {Math.round(progress)}%</p>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-gradient-to-r from-neon-500 to-neon-200 transition-all" style={{ width: `${progress}%` }} /></div>
      </div>
    </div>
  );
}
