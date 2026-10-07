import Link from "next/link";
import { waConsultation } from "@/lib/whatsapp";
export default function MobileCtaBar() {
  return (
    <nav aria-label="Aksi cepat" className="glass fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 p-2 lg:hidden">
      <Link href="/simulasi-kredit" className="btn btn-ghost !px-2 !py-2.5 text-xs">Simulasi</Link>
      <Link href="/test-drive" className="btn btn-ghost !px-2 !py-2.5 text-xs">Test Drive</Link>
      <a href={waConsultation()} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-2 !py-2.5 text-xs">WhatsApp</a>
    </nav>
  );
}
