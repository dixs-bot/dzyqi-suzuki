import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Design",
  description: "Original design atelier — line, material, light.",
};

export default function DesignPage() {
  return (
    <Section eyebrow="Atelier" title="Design as restraint." className="pt-32">
      <p className="max-w-2xl text-ivory/70">
        Black, ivory, metallic, dark navy. Suzuki-inspired blue is reserved for interaction. No copyrighted vehicle
        photography is used. Silhouettes are original CSS and SVG compositions.
      </p>
      <div className="mt-16 grid h-48 grid-cols-4">
        {["#07080c", "#f4f1ea", "#b8bec6", "#0b1220"].map((c) => (
          <div key={c} style={{ background: c }} className="border border-white/5" />
        ))}
      </div>
    </Section>
  );
}
