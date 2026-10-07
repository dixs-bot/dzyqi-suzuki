import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Experience",
  description: "Cinematic Suzuki Automotive Experience — showroom, configurator, test drive.",
};

export default function ExperiencePage() {
  return (
    <Section eyebrow="Journey" title="An experience, not a brochure." className="pt-32">
      <p className="max-w-2xl text-ivory/70">
        Move from lineup to detail to configurator. Sound is optional, muted by default, and never autoplays. Motion
        respects reduced-motion preferences.
      </p>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/vehicles" className="border border-ivory/20 px-5 py-3 text-[11px] uppercase tracking-wide2">
          Showroom
        </Link>
        <Link href="/configurator/xl7" className="border border-accent bg-accent px-5 py-3 text-[11px] uppercase tracking-wide2">
          Configurator
        </Link>
        <Link href="/test-drive" className="border border-ivory/20 px-5 py-3 text-[11px] uppercase tracking-wide2">
          Test drive
        </Link>
      </div>
    </Section>
  );
}
