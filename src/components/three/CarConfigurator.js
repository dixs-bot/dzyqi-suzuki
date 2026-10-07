"use client";

import { useRef, useState } from "react";
import { CarViewerDynamic } from "./CarViewerDynamic";
import { ColorSelector } from "./ColorSelector";
import { WheelSelector } from "./WheelSelector";
import { InteriorSelector } from "./InteriorSelector";
import { CameraPresets } from "./CameraPresets";

const ENVIRONMENTS = ["studio", "daylight", "sunset", "night", "showroom"];

export function CarConfigurator({ vehicle }) {
  const wrap = useRef(null);
  const [color, setColor] = useState(vehicle.colors[0]);
  const [wheel, setWheel] = useState(vehicle.wheels[0]);
  const [interior, setInterior] = useState(vehicle.interiors[0]);
  const [env, setEnv] = useState("studio");
  const [preset, setPreset] = useState("exterior");
  const [autoRotate, setAutoRotate] = useState(true);

  const enterFullscreen = () => {
    const el = wrap.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  return (
    <div ref={wrap} className="grid gap-0 lg:grid-cols-[1fr_320px]">
      <div className="relative min-h-[520px] bg-ink">
        <CarViewerDynamic
          src={vehicle.model3d?.src || null}
          color={color.hex}
          interiorTone={interior.tone}
          environment={env}
          cameraPreset={preset}
          autoRotate={autoRotate}
          galleryHref={`/vehicles/${vehicle.slug}`}
          className="h-[70vh] min-h-[520px]"
        />
      </div>
      <aside className="space-y-8 border-t border-white/10 bg-navy p-6 lg:border-l lg:border-t-0">
        <div>
          <p className="text-[11px] uppercase tracking-luxury text-metallic">{vehicle.category}</p>
          <h1 className="mt-2 text-3xl font-light">{vehicle.name}</h1>
          <p className="mt-2 text-sm text-ivory/60">{vehicle.tagline}</p>
        </div>
        <CameraPresets
          value={preset}
          onChange={setPreset}
          onReset={() => setPreset("exterior")}
          onFullscreen={enterFullscreen}
        />
        <ColorSelector colors={vehicle.colors} value={color.hex} onChange={setColor} />
        <WheelSelector wheels={vehicle.wheels} value={wheel.id} onChange={setWheel} />
        <InteriorSelector interiors={vehicle.interiors} value={interior.id} onChange={setInterior} />
        <fieldset>
          <legend className="text-[11px] uppercase tracking-wide2 text-metallic">Lighting</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {ENVIRONMENTS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setEnv(item)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wide2 ${
                  env === item ? "bg-accent text-ivory" : "bg-white/5 text-metallic"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="flex items-center gap-3 text-[11px] uppercase tracking-wide2 text-metallic">
          <input
            type="checkbox"
            checked={autoRotate}
            onChange={(e) => setAutoRotate(e.target.checked)}
          />
          Auto-rotate
        </label>
        <p className="text-[11px] leading-relaxed text-metallic">
          {vehicle.model3d?.placeholder
            ? "3D MODEL PLACEHOLDER. Drop a licensed GLB at public/models/{slug}.glb and set model3d.src. Headlights, doors, and trunk animate only when the licensed model exposes those nodes."
            : "Licensed model loaded. Interactive parts appear only when named nodes exist."}
        </p>
      </aside>
    </div>
  );
}
