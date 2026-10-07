import { Section } from "@/components/ui/Section";
import { DealerLocator } from "@/components/dealers/DealerLocator";

export const metadata = {
  title: "Dealers",
  description: "Dealer locator architecture with search. Data-driven ateliers.",
};

export default function DealerPage() {
  return (
    <Section eyebrow="Network" title="Ateliers" className="pt-32">
      <DealerLocator />
    </Section>
  );
}
