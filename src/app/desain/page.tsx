import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Desain", description: "Eksplorasi desain eksterior Suzuki XL7 dan XL7 Kuro.", alternates: { canonical: "/desain" } };
export default function Page() {
  return (<><PageHero eyebrow="Desain" title="Desain yang berkarakter" text="Eksplorasi tampilan XL7." />
    <section className="section !pt-6 grid gap-6 md:grid-cols-2">{[["/images/newxl7.png", "XL7"], ["/images/xl7-kuro.png", "XL7 Kuro"]].map(([s, n]) => (<div key={n} data-reveal className="rounded-3xl bg-pearl p-6"><Image src={s} alt={`Suzuki ${n}`} width={800} height={500} className="w-full object-contain" /><p className="mt-3 font-bold">{n}</p></div>))}</section></>);
}
