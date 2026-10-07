"use client";
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="id"><body style={{ fontFamily: "sans-serif", textAlign: "center", padding: 80 }}>
      <h1>Terjadi kesalahan</h1>
      <button onClick={reset}>Muat ulang</button>
    </body></html>
  );
}
