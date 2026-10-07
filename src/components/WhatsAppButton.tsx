import { salesConfig } from "@/data/site";
import { waConsultation } from "@/lib/whatsapp";
export default function WhatsAppButton() {
  return (
    <a href={waConsultation()} target="_blank" rel="noopener noreferrer" aria-label={salesConfig.floatingLabel} className="btn btn-primary fixed bottom-20 right-4 z-40 gap-2 shadow-neon lg:bottom-5 lg:right-5">
      <span aria-hidden>💬</span> <span className="hidden sm:inline">{salesConfig.floatingLabel}</span>
    </a>
  );
}
