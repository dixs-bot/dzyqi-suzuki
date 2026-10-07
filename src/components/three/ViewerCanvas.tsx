"use client";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import LightingSystem from "./LightingSystem";
import SceneEnvironment from "./Environment";
import CameraController from "./CameraController";
import VehicleModel from "./VehicleModel";
import ModelLoader from "./ModelLoader";
import type { CameraPresetId, LightingPresetId } from "@/types";

export default function ViewerCanvas({ url, camera, light, autoRotate, resetKey, onInteract, debug }: { url: string; camera: CameraPresetId; light: LightingPresetId; autoRotate: boolean; resetKey: number; onInteract: () => void; debug: boolean }) {
  const [, setErr] = useState(false);
  return (
    <>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 40, position: [3.8, 1.6, 3.8] }} gl={{ antialias: true, powerPreference: "high-performance" }} onError={() => setErr(true)}>
        <LightingSystem preset={light} />
        <Suspense fallback={null}>
          <SceneEnvironment preset={light} />
          <VehicleModel url={url} />
        </Suspense>
        <CameraController preset={camera} autoRotate={autoRotate} resetKey={resetKey} onInteract={onInteract} />
        {debug && <Stats />}
      </Canvas>
      <ModelLoader />
    </>
  );
}
