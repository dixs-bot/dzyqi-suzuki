import { faqs } from "@/data/faqs";
export default function Faq() {
  return (<div className="mx-auto max-w-3xl space-y-3">{faqs.map((f) => (
    <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-neon-500/50 open:shadow-neon">
      <summary className="cursor-pointer list-none font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon-500">{f.q}</summary>
      <p className="mt-3 text-sm text-slate-600">{f.a}</p></details>))}</div>);
}
