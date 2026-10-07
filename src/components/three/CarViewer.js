"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, useProgress } from "@react-three/drei";
import { Suspense, useMemo, useState } from "react";
import { CarScene } from "./CarScene";
import { LoadingProgress } from "./LoadingProgress";
import { ModelErrorBoundary } from "./ModelErrorBoundary";

function LoaderOverlay() {
  const { progress, active } = useProgress();
  if (!active) return null;
  return <LoadingProgress progress={progress} />;
}

export function CarViewer({
  src = null,
  color = "#f4f1ea",
  interiorTone = "#e8e2d6",
  environment = "studio",
  cameraPreset = "exterior",
  autoRotate = false,
  className = "",
  galleryHref = "/vehicles",
}) {
  const [ready, setReady] = useState(false);
  const dpr = useMemo(() => {
    if (typeof window === "undefined") return [1, 1.5];
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    return mobile ? [1, 1.25] : [1, 1.75];
  }, []);

  return (
    <ModelErrorBoundary galleryHref={galleryHref}>
      <div className={`relative h-full min-h-[420px] w-full bg-ink ${className}`}>
        {!src && (
          <p className="pointer-events-none absolute left-4 top-4 z-20 text-[10px] uppercase tracking-wide2 text-metallic">
            3D MODEL PLACEHOLDER
          </p>
        )}
        <Canvas
          shadows
          dpr={dpr}
          camera={{ position: [4.2, 1.6, 4.8], fov: 40, near: 0.1, far: 80 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          onCreated={() => setReady(true)}
        >
          <AdaptiveDpr pixelated />
          <Suspense fallback={null}>
            <CarScene
              src={src}
              color={color}
              interiorTone={interiorTone}
              environment={environment}
              cameraPreset={cameraPreset}
              autoRotate={autoRotate}
            />
          </Suspense>
        </Canvas>
        {!ready && <LoadingProgress progress={12} />}
        <LoaderOverlay />
      </div>
    </ModelErrorBoundary>
  );
}
