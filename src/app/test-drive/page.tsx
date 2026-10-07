import PageHero from "@/components/PageHero";
import TestDriveForm from "@/components/TestDriveForm";
import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta("Booking Test Drive Suzuki", "Jadwalkan test drive Suzuki bersama Diki melalui WhatsApp.", "/test-drive");
export default function Page() { return (<><PageHero eyebrow="Test Drive" title="Jadwalkan Test Drive" text="Isi formulir; Anda diarahkan ke WhatsApp Diki." /><section className="section !pt-6 max-w-4xl"><TestDriveForm /></section></>); }
