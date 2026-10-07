"use client";
import { useMemo, useState } from "react";
import { visibleVehicles } from "@/data/vehicles";
import { tenorOptions, defaultAnnualRate, estimateInstallment, formatRupiah, financeDisclaimer } from "@/data/finance";
import { waSimulation } from "@/lib/whatsapp";

export default function CreditSimulator() {
  const [mobil, setMobil] = useState("XL7");
  const [price, setPrice] = useState("");
  const [dp, setDp] = useState("");
  const [tenor, setTenor] = useState<number>(48);
  const [rate, setRate] = useState(String(defaultAnnualRate));
  const p = Number(price.replace(/\D/g, "")), d = Number(dp.replace(/\D/g, ""));
  const valid = p > 0 && d >= 0 && d < p;
  const angsuran = useMemo(() => (valid ? estimateInstallment(p, d, tenor, Number(rate) || 0) : 0), [valid, p, d, tenor, rate]);
  const link = valid ? waSimulation({ mobil, harga: formatRupiah(p), dp: formatRupiah(d), tenor: `${tenor} bulan`, angsuran: `${formatRupiah(angsuran)}/bulan` }) : "#";
  return (
    <div className="glass grid gap-5 rounded-3xl p-6 md:grid-cols-2 md:p-8">
      <div><label htmlFor="sim-mobil" className="mb-1 block text-sm font-semibold">Kendaraan</label>
        <select id="sim-mobil" className="field" value={mobil} onChange={(e) => setMobil(e.target.value)}>{visibleVehicles().map((v) => <option key={v.slug}>{v.name}</option>)}</select></div>
      <div><label htmlFor="sim-harga" className="mb-1 block text-sm font-semibold">Harga (Rp) — isi sesuai info dari Diki</label>
        <input id="sim-harga" inputMode="numeric" className="field" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Tanyakan harga ke Diki" /></div>
      <div><label htmlFor="sim-dp" className="mb-1 block text-sm font-semibold">DP (Rp)</label>
        <input id="sim-dp" inputMode="numeric" className="field" value={dp} onChange={(e) => setDp(e.target.value)} /></div>
      <div><label htmlFor="sim-tenor" className="mb-1 block text-sm font-semibold">Tenor</label>
        <select id="sim-tenor" className="field" value={tenor} onChange={(e) => setTenor(Number(e.target.value))}>{tenorOptions.map((t) => <option key={t} value={t}>{t} bulan</option>)}</select></div>
      <div><label htmlFor="sim-rate" className="mb-1 block text-sm font-semibold">Asumsi bunga per tahun (%)</label>
        <input id="sim-rate" inputMode="decimal" className="field" value={rate} onChange={(e) => setRate(e.target.value)} />
        <p className="mt-1 text-xs text-slate-500">Angka ilustrasi yang bisa Anda ubah; bukan bunga resmi leasing.</p></div>
      <div className="rounded-2xl border border-neon-500/30 bg-white p-5" aria-live="polite">
        <p className="text-sm text-slate-600">Estimasi angsuran per bulan</p>
        <p className="mt-1 text-3xl font-extrabold text-neon-500">{valid ? formatRupiah(angsuran) : "—"}</p>
        {!valid && <p className="mt-1 text-xs text-slate-500">Isi harga dan DP (DP harus lebih kecil dari harga).</p>}
      </div>
      <a href={link} aria-disabled={!valid} onClick={(e) => { if (!valid) e.preventDefault(); }} target="_blank" rel="noopener noreferrer" className={`btn btn-primary md:col-span-2 ${valid ? "" : "pointer-events-none opacity-50"}`}>Kirim Simulasi ke WhatsApp Diki</a>
      <p className="text-xs text-slate-500 md:col-span-2">{financeDisclaimer}</p>
    </div>
  );
}
