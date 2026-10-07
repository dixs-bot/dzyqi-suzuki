export default function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="bg-gradient-to-b from-pearl to-ivory pt-32">
      <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8" data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-slate-600">{text}</p>}
      </div>
    </section>
  );
}
