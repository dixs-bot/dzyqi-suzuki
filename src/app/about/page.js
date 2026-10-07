import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Original Suzuki Automotive Experience — independent of official brand sites.",
};

export default function AboutPage() {
  return (
    <Section eyebrow="Studio" title={site.name} className="pt-32">
      <p className="max-w-2xl text-ivory/70">
        This is an original cinematic experience. It does not copy existing Suzuki websites, Bugatti, or Rolls-Royce
        layouts. Product data is placeholder. 3D models are placeholders until a licensed GLB is supplied.
      </p>
    </Section>
  );
}
