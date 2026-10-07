export interface Promotion { id: string; title: string; description: string; vehicleSlug?: string; validUntil?: string }
// Kosong sengaja: tambahkan promo RESMI yang sedang berlaku. Tidak ada promo/harga karangan.
export const promotions: Promotion[] = [];
