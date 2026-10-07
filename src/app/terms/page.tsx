import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Syarat & Ketentuan", description: "Syarat dan ketentuan penggunaan Suzuki Diki.", alternates: { canonical: "/terms" } };
export default function Page() { return (<><PageHero eyebrow="Legal" title="Syarat & Ketentuan" /><section className="section !pt-6 max-w-3xl space-y-4 text-slate-700"><p>Informasi pada situs ini bersifat umum dan dapat berubah. Harga, promo, dan spesifikasi resmi harus dikonfirmasi ke dealer Suzuki.</p><p>Situs ini independen dan bukan situs resmi Suzuki Indonesia.</p></section></>); }
