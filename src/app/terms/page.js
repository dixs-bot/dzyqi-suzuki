import { Section } from "@/components/ui/Section";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <Section eyebrow="Legal" title="Terms" className="pt-32">
      <p className="max-w-2xl text-sm leading-relaxed text-ivory/70">
        Original independent experience. Not affiliated with Suzuki Motor Corporation product communications. Prices
        and specifications are placeholders. 3D assets are placeholders until licensed GLBs are supplied by you.
      </p>
    </Section>
  );
}
