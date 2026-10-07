"use client";

import { Suspense } from "react";
import { CarLighting } from "./CarLighting";
import { CarCamera } from "./CarCamera";
import { CarControls } from "./CarControls";
import { CarModel, PlaceholderCar } from "./CarModel";

export function CarScene({
  src,
  color,
  interiorTone,
  environment,
  cameraPreset,
  autoRotate,
}) {
  return (
    <>
      <CarCamera preset={cameraPreset} />
      <CarLighting environment={environment} />
      <CarControls autoRotate={autoRotate} />
      <Suspense fallback={null}>
        {src ? (
          <CarModel src={src} color={color} interiorTone={interiorTone} />
        ) : (
          <PlaceholderCar color={color} interiorTone={interiorTone} />
        )}
      </Suspense>
    </>
  );
}
