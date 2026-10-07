import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact the Suzuki Automotive Experience studio.",
};

export default function ContactPage() {
  return (
    <Section eyebrow="Studio" title="Contact" className="pt-32">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="text-sm text-ivory/70">
          <p>{site.address}</p>
          <p className="mt-2">{site.email}</p>
          <p className="mt-2">{site.phone}</p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
