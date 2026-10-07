import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="h2">Halaman tidak ditemukan</h1>
      <p className="mx-auto mt-4 max-w-md text-slate-600">Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.</p>
      <Link href="/" className="btn btn-primary mt-8">Kembali ke Beranda</Link>
    </section>
  );
}
