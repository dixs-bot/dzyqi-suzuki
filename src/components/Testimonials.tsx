import { testimonials } from "@/data/testimonials";
export default function Testimonials() {
  if (testimonials.length === 0) return (<p className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">Testimoni pelanggan akan ditampilkan di sini.</p>);
  return (<div className="grid gap-5 md:grid-cols-3">{testimonials.map((t) => (<blockquote key={t.id} className="glass rounded-3xl p-6"><p>{t.text}</p><footer className="mt-3 text-sm font-semibold">{t.name}{t.vehicle ? ` — ${t.vehicle}` : ""}</footer></blockquote>))}</div>);
}
