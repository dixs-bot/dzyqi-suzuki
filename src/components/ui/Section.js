export function Section({ eyebrow, title, children, className = "", id }) {
  return (
    <section id={id} className={`mx-auto max-w-cinema px-5 py-20 md:px-8 md:py-28 ${className}`}>
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-luxury text-metallic">{eyebrow}</p>
      )}
      {title && (
        <h2 className="mt-3 max-w-3xl text-3xl font-light tracking-tight md:text-5xl">{title}</h2>
      )}
      <div className="mt-10">{children}</div>
    </section>
  );
}
