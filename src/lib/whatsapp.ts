import { siteConfig } from "@/data/site";
export function waLink(message: string): string {
  return `${siteConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
}
export const waConsultation = () => waLink("Halo Kak Diki, saya ingin konsultasi mobil Suzuki.");
export const waTestDrive = (p?: { nama?: string; mobil?: string; tanggal?: string; waktu?: string; kota?: string }) =>
  p
    ? waLink(`Halo Kak Diki, saya ingin booking test drive.\nNama: ${p.nama}\nMobil: ${p.mobil}\nTanggal: ${p.tanggal}\nWaktu: ${p.waktu}\nKota: ${p.kota}`)
    : waLink("Halo Kak Diki, saya ingin booking test drive Suzuki.");
export const waVehicle = (name: string) => waLink(`Halo Kak Diki, saya tertarik dengan Suzuki ${name}. Mohon info harga, promo, dan simulasi kredit.`);
