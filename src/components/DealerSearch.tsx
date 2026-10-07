"use client";
import { useMemo, useState } from "react";
import { dealers } from "@/data/dealers";
import { waLink } from "@/lib/whatsapp";
export default function DealerSearch() {
  const [q, setQ] = useState("");
  const list = useMemo(() => dealers.filter((d) => `${d.name} ${d.city} ${d.address}`.toLowerCase().includes(q.trim().toLowerCase())), [q]);
  return (
    <div>
      <label htmlFor="dq" className="sr-only">Cari dealer</label>
      <input id="dq" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari kota atau nama dealer…" className="field max-w-md" />
      <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {list.map((d) => (
          <li key={d.id} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-glass">
            <p className="eyebrow !mb-1">{d.city}</p><h3 className="text-lg font-extrabold">{d.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{d.address}</p><p className="mt-1 text-xs text-slate-500">{d.note}</p>
            <a href={waLink(`Halo Kak Diki, mohon info dealer Suzuki di ${d.city}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-4 !py-2">Tanya via WhatsApp</a>
          </li>
        ))}
        {list.length === 0 && <li className="text-slate-500">Dealer tidak ditemukan. Hubungi Diki untuk bantuan.</li>}
      </ul>
    </div>
  );
}
