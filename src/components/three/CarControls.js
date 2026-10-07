"use client";

import { OrbitControls } from "@react-three/drei";

export function CarControls({ autoRotate = false, enablePan = true }) {
  return (
    <OrbitControls
      makeDefault
      enableDamping
      dampingFactor={0.08}
      enableZoom
      enablePan={enablePan}
      autoRotate={autoRotate}
      autoRotateSpeed={0.6}
      minDistance={2.2}
      maxDistance={12}
      maxPolarAngle={Math.PI / 1.7}
    />
  );
}
