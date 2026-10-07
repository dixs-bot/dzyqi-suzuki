import { siteConfig } from "@/data/site";
import { waConsultation } from "@/lib/whatsapp";
export default function WhatsAppButton() {
  return (
    <a href={waConsultation()} target="_blank" rel="noopener noreferrer" aria-label={siteConfig.floatingLabel} className="btn btn-primary fixed bottom-5 right-5 z-40 gap-2 shadow-neon">
      <span aria-hidden>💬</span> {siteConfig.floatingLabel}
    </a>
  );
}
