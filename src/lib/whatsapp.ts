import { salesConfig } from "@/data/site";
export function waLink(message: string): string {
  return `${salesConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
}
export const waConsultation = () => waLink("Halo Kak Diki, saya ingin konsultasi mobil Suzuki.");
export const waVehicle = (name: string) => waLink(`Halo Kak Diki, saya tertarik dengan Suzuki ${name}. Mohon info harga, promo, dan simulasi kredit.`);
export const waPromo = (title?: string) => waLink(title ? `Halo Kak Diki, saya ingin menanyakan promo: ${title}.` : "Halo Kak Diki, saya ingin menanyakan promo Suzuki terbaru.");
export const waSimulation = (p: { mobil: string; harga: string; dp: string; tenor: string; angsuran: string }) =>
  waLink(`Halo Kak Diki, saya sudah mencoba simulasi kredit.\nKendaraan: ${p.mobil}\nHarga: ${p.harga}\nDP: ${p.dp}\nTenor: ${p.tenor}\nEstimasi angsuran: ${p.angsuran}\nMohon bantuan penawaran resmi.`);
export const waTestDrive = (p?: { nama: string; telepon: string; mobil: string; kota: string; tanggal: string; waktu: string }) =>
  waLink(p ? `Halo Kak Diki, saya ingin menjadwalkan test drive.\nNama: ${p.nama}\nWhatsApp: ${p.telepon}\nKendaraan: ${p.mobil}\nKota: ${p.kota}\nTanggal: ${p.tanggal}\nWaktu: ${p.waktu}` : "Halo Kak Diki, saya ingin menjadwalkan test drive Suzuki.");
export const waLead = (p: { nama: string; telepon: string; mobil: string; kebutuhan: string }) =>
  waLink(`Halo Kak Diki, saya ingin konsultasi.\nNama: ${p.nama}\nWhatsApp: ${p.telepon}\nKendaraan: ${p.mobil}\nKebutuhan: ${p.kebutuhan}`);
export const waTradeIn = (p: { merk: string; model: string; tahun: string; kondisi: string; nama: string; telepon: string }) =>
  waLink(`Halo Kak Diki, saya ingin tukar tambah.\nMobil lama: ${p.merk} ${p.model} (${p.tahun})\nKondisi: ${p.kondisi}\nNama: ${p.nama}\nWhatsApp: ${p.telepon}`);
