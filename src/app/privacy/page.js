import { Section } from "@/components/ui/Section";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <Section eyebrow="Legal" title="Privacy" className="pt-32">
      <p className="max-w-2xl text-sm leading-relaxed text-ivory/70">
        This experience collects test-drive enquiry fields solely to demonstrate client validation and a rate-limited
        route. Do not submit real personal data on public previews. No secrets are stored. WhatsApp is opened via
        NEXT_PUBLIC_WHATSAPP_NUMBER only.
      </p>
    </Section>
  );
}
