"use client";
import { useState } from "react";
import { visibleVehicles } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";
import type { Need } from "@/types";
const needs: { id: Need; label: string }[] = [{ id: "keluarga", label: "Keluarga" }, { id: "offroad", label: "Off-road" }, { id: "city", label: "City car" }, { id: "niaga", label: "Usaha / Niaga" }, { id: "suv", label: "SUV bergaya" }];
export default function CarFinder() {
  const [need, setNeed] = useState<Need>("keluarga");
  const list = visibleVehicles().filter((v) => v.needs.includes(need));
  return (
    <div>
      <div role="group" aria-label="Pilih kebutuhan" className="flex flex-wrap gap-2">
        {needs.map((n) => (<button key={n.id} aria-pressed={need === n.id} onClick={() => setNeed(n.id)} className={`btn !py-2 ${need === n.id ? "btn-primary" : "btn-ghost"}`}>{n.label}</button>))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">{list.map((v) => <VehicleCard key={v.slug} v={v} />)}</div>
    </div>
  );
}
