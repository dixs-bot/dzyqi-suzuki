"use client";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import gsap from "gsap";
import { cameraPresets } from "./presets";
import type { CameraPresetId } from "@/types";
import { prefersReducedMotion } from "@/lib/utils";

export default function CameraController({ preset, autoRotate, resetKey, onInteract }: { preset: CameraPresetId; autoRotate: boolean; resetKey: number; onInteract: () => void }) {
  const controls = useRef<OrbitControlsImpl>(null);
  const camera = useThree((s) => s.camera);
  useEffect(() => {
    const p = cameraPresets.find((c) => c.id === preset) ?? cameraPresets[0];
    const c = controls.current;
    const d = prefersReducedMotion() ? 0 : 1.1;
    const tw = gsap.to(camera.position, { x: p.position[0], y: p.position[1], z: p.position[2], duration: d, ease: "power2.inOut", onUpdate: () => c?.update() });
    const tt = c ? gsap.to(c.target, { x: p.target[0], y: p.target[1], z: p.target[2], duration: d, ease: "power2.inOut" }) : null;
    return () => { tw.kill(); tt?.kill(); };
  }, [preset, resetKey, camera]);
  return (
    <OrbitControls ref={controls} makeDefault enableDamping enablePan enableZoom minDistance={0.5} maxDistance={9} maxPolarAngle={Math.PI * 0.55}
      autoRotate={autoRotate && !prefersReducedMotion()} autoRotateSpeed={0.8} onStart={onInteract} />
  );
}
