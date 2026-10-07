import { promotions } from "@/data/promotions";
import { waPromo } from "@/lib/whatsapp";
export default function PromoList() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {promotions.map((p) => (
        <article key={p.id} className="glass rounded-3xl p-6"><h3 className="text-xl font-extrabold">{p.title}</h3><p className="mt-2 text-sm text-slate-600">{p.description}</p>
          {p.validUntil && <p className="mt-1 text-xs text-slate-500">Berlaku s.d. {p.validUntil}</p>}
          <a href={waPromo(p.title)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 !py-2">Tanyakan Promo</a></article>))}
      {promotions.length === 0 && (
        <article className="glass rounded-3xl p-6 md:col-span-2"><h3 className="text-xl font-extrabold">Promo terbaru</h3>
          <p className="mt-2 text-sm text-slate-600">Promo dan harga berubah tiap periode. Agar akurat, tanyakan langsung ke Diki.</p>
          <a href={waPromo()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 !py-2">Tanyakan Promo</a></article>)}
    </div>
  );
}
