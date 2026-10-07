"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="section text-center">
      <p className="eyebrow">Terjadi kesalahan</p>
      <h1 className="h2">Ups, ada yang tidak beres</h1>
      <button onClick={reset} className="btn btn-primary mt-8">Coba lagi</button>
    </section>
  );
}
