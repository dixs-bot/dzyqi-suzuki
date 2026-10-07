import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 text-center">
      <p className="text-[11px] uppercase tracking-luxury text-metallic">404</p>
      <h1 className="mt-4 text-5xl font-light">This path is empty.</h1>
      <Link href="/" className="mt-8 border border-accent px-6 py-3 text-[11px] uppercase tracking-wide2 hover:bg-accent">
        Return home
      </Link>
    </section>
  );
}
