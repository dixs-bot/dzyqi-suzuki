import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DealerSearch from "@/components/DealerSearch";
export const metadata: Metadata = { title: "Dealer Suzuki", description: "Cari dealer Suzuki berdasarkan kota.", alternates: { canonical: "/dealer" } };
export default function Page() { return (<><PageHero eyebrow="Dealer" title="Cari Dealer" /><section className="section !pt-6"><DealerSearch /></section></>); }
