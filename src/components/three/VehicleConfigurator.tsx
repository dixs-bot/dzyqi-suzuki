"use client";
import { useEffect, useState } from "react";
import VehicleViewer from "./VehicleViewer";
import { vehicles } from "@/data/vehicles";
import { waLink } from "@/lib/whatsapp";

/**
 * Capability detection only: fitur ditampilkan HANYA jika model 3D benar-benar
 * mengekspos node/material yang relevan. Tanpa model, tidak ada fitur palsu.
 */
export default function VehicleConfigurator() {
  const xl7 = vehicles[0];
  const [hasModel, setHasModel] = useState<boolean | null>(null);
  useEffect(() => {
    fetch(xl7.model3d!, { method: "HEAD" }).then((r) => setHasModel(r.ok && !(r.headers.get("content-type") ?? "").includes("text/html"))).catch(() => setHasModel(false));
  }, [xl7.model3d]);
  const caps = [
    { k: "Ganti warna bodi", ok: false }, { k: "Ganti velg", ok: false }, { k: "Ganti interior", ok: false }, { k: "Ganti lampu depan", ok: false },
  ];
  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <VehicleViewer modelUrl={xl7.model3d} image={xl7.image} name={xl7.name} />
      <aside className="glass rounded-3xl p-6">
        <h2 className="text-xl font-extrabold">Kapabilitas Konfigurator</h2>
        <p className="mt-2 text-sm text-slate-600">
          {hasModel ? "Model 3D terdeteksi. Opsi kustomisasi akan aktif otomatis hanya bila model memiliki node/material yang dapat dikonfigurasi." : "Model 3D belum tersedia, sehingga kustomisasi belum diaktifkan. Anda tetap dapat melihat foto XL7 dan berkonsultasi dengan Diki."}
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          {caps.map((c) => (<li key={c.k} className="flex justify-between rounded-lg bg-pearl px-3 py-2"><span>{c.k}</span><span className={c.ok ? "text-neon-500" : "text-slate-400"}>{c.ok ? "Tersedia" : "Belum tersedia"}</span></li>))}
        </ul>
        <a href={waLink("Halo Kak Diki, saya ingin berkonsultasi soal pilihan warna & varian Suzuki XL7.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 w-full">Tanya Varian ke Diki</a>
      </aside>
    </div>
  );
}
