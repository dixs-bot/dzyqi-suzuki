import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Technology",
  description: "Quiet systems — safety, connectivity, efficiency. Original experience copy.",
};

export default function TechnologyPage() {
  const pillars = [
    { t: "Safety assist", d: "A perimeter of sensors described in original language. Not a certified equipment list." },
    { t: "Connected cabin", d: "Infotainment as a calm surface. Placeholder feature set only." },
    { t: "Efficiency", d: "Powertrain narratives withheld as placeholders pending licensed data." },
  ];
  return (
    <Section eyebrow="Systems" title="Technology that recedes." className="pt-32">
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((p) => (
          <article key={p.t} className="border border-white/10 p-6">
            <h2 className="text-2xl font-light">{p.t}</h2>
            <p className="mt-4 text-sm text-ivory/70">{p.d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
