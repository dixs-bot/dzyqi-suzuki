"use client";

import { useMemo, useState } from "react";
import { searchDealers } from "@/lib/dealers";
import { getGoogleMapsKey } from "@/lib/site";

export function DealerLocator() {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchDealers(q), [q]);
  const mapsKey = getGoogleMapsKey();

  return (
    <div>
      <label className="block max-w-md">
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Search city, region, or atelier</span>
        <input
          className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Horizon, Harbour, Highland…"
        />
      </label>
      {!mapsKey && (
        <p className="mt-4 text-[11px] uppercase tracking-wide2 text-metallic">
          Map embed is optional — set NEXT_PUBLIC_GOOGLE_MAPS_KEY to enable. Locator works from local data.
        </p>
      )}
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {results.map((d) => (
          <li key={d.id} className="border border-white/10 p-6">
            <p className="text-[11px] uppercase tracking-wide2 text-metallic">{d.region}</p>
            <h3 className="mt-2 text-2xl font-light">{d.name}</h3>
            <p className="mt-2 text-sm text-ivory/70">
              {d.address}, {d.city}
            </p>
            <p className="mt-1 text-sm text-metallic">{d.hours}</p>
            <a className="mt-4 inline-block text-sm text-accent-bright" href={`tel:${d.phone}`}>
              {d.phone}
            </a>
          </li>
        ))}
      </ul>
      {results.length === 0 && <p className="mt-8 text-ivory/60">No ateliers match that search.</p>}
    </div>
  );
}
