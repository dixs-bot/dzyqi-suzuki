import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TestDriveForm from "@/components/TestDriveForm";
export const metadata: Metadata = { title: "Booking Test Drive", description: "Booking test drive Suzuki bersama Diki, Sales Consultant Suzuki, melalui WhatsApp.", alternates: { canonical: "/test-drive" } };
export default function Page() { return (<><PageHero eyebrow="Test Drive" title="Booking Test Drive" text="Isi formulir; Anda akan diarahkan ke WhatsApp Diki." /><section className="section !pt-6 max-w-4xl"><TestDriveForm /></section></>); }
