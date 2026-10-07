export const tenorOptions = [12, 24, 36, 48, 60] as const;
/** Bunga hanya asumsi ilustrasi yang dapat diubah pengguna; bukan penawaran leasing. */
export const defaultAnnualRate = 8;
export const financeDisclaimer = "Simulasi hanya perkiraan dan bukan penawaran resmi. Angsuran, bunga, asuransi, dan biaya lain mengikuti ketentuan perusahaan pembiayaan. Konfirmasi ke Diki.";
export function estimateInstallment(price: number, dp: number, months: number, annualRatePct: number): number {
  const principal = Math.max(price - dp, 0);
  if (principal === 0 || months <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}
export const formatRupiah = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
