"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const CAMERA_PRESETS = {
  exterior: { position: [4.2, 1.6, 4.8], target: [0, 0.4, 0] },
  front: { position: [0, 1.2, 6], target: [0, 0.5, 0] },
  side: { position: [6.2, 1.1, 0], target: [0, 0.4, 0] },
  rear: { position: [0, 1.3, -6], target: [0, 0.5, 0] },
  interior: { position: [0.35, 1.05, 0.2], target: [0, 0.9, -1] },
};

export function CarCamera({ preset = "exterior" }) {
  const { camera } = useThree();
  useEffect(() => {
    const p = CAMERA_PRESETS[preset] || CAMERA_PRESETS.exterior;
    camera.position.set(...p.position);
    camera.lookAt(...p.target);
    camera.updateProjectionMatrix();
  }, [camera, preset]);
  return null;
}
