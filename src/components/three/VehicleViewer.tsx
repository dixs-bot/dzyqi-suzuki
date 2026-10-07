"use client";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import ModelFallback from "./ModelFallback";
import VehicleControls from "./VehicleControls";
import { hasWebGL } from "@/lib/utils";
import type { CameraPresetId, LightingPresetId } from "@/types";

const ViewerCanvas = dynamic(() => import("./ViewerCanvas"), { ssr: false, loading: () => <div className="grid h-full place-items-center text-sm text-slate-500">Menyiapkan 3D…</div> });

type State = "checking" | "ready" | "no-model" | "no-webgl";

export default function VehicleViewer({ modelUrl, image, name, height = "h-[480px] md:h-[600px]", showControls = true }: { modelUrl?: string; image: string; name: string; height?: string; showControls?: boolean }) {
  const [state, setState] = useState<State>("checking");
  const [camera, setCamera] = useState<CameraPresetId>("depan34");
  const [light, setLight] = useState<LightingPresetId>("showroom");
  const [autoRotate, setAutoRotate] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [debug, setDebug] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const idle = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDebug(new URLSearchParams(window.location.search).get("debug3d") === "true");
    if (!modelUrl) { setState("no-model"); return; }
    if (!hasWebGL()) { setState("no-webgl"); return; }
    const ctrl = new AbortController();
    fetch(modelUrl, { method: "HEAD", signal: ctrl.signal })
      .then((r) => setState(r.ok && !(r.headers.get("content-type") ?? "").includes("text/html") ? "ready" : "no-model"))
      .catch(() => setState("no-model"));
    return () => ctrl.abort();
  }, [modelUrl]);

  const onInteract = useCallback(() => {
    setAutoRotate(false);
    if (idle.current) clearTimeout(idle.current);
    idle.current = setTimeout(() => setAutoRotate(true), 5000);
  }, []);
  useEffect(() => () => { if (idle.current) clearTimeout(idle.current); }, []);

  const fullscreen = () => {
    const el = wrap.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  const reasons: Record<string, string> = {
    "no-model": "Model 3D belum tersedia — menampilkan foto kendaraan. Letakkan file di public/models/xl7.glb.",
    "no-webgl": "Perangkat/peramban tidak mendukung WebGL — menampilkan foto kendaraan.",
  };

  return (
    <div ref={wrap} className={`relative overflow-hidden rounded-3xl border border-slate-100 bg-pearl shadow-glass ${height}`}>
      {state === "checking" && <div className="grid h-full place-items-center text-sm text-slate-500">Memeriksa model 3D…</div>}
      {(state === "no-model" || state === "no-webgl") && <ModelFallback image={image} name={name} reason={reasons[state]} />}
      {state === "ready" && modelUrl && (
        <ViewerCanvas url={modelUrl} camera={camera} light={light} autoRotate={autoRotate} resetKey={resetKey} onInteract={onInteract} debug={debug} />
      )}
      {showControls && (
        <VehicleControls camera={camera} light={light} autoRotate={autoRotate} disabled={state !== "ready"}
          onCamera={(c) => { setCamera(c); setAutoRotate(false); }} onLight={setLight}
          onAutoRotate={() => setAutoRotate((a) => !a)} onReset={() => { setCamera("depan34"); setResetKey((k) => k + 1); }} onFullscreen={fullscreen} />
      )}
    </div>
  );
}
