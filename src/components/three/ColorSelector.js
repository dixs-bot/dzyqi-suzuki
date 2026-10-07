"use client";

export function ColorSelector({ colors = [], value, onChange }) {
  return (
    <fieldset>
      <legend className="text-[11px] uppercase tracking-wide2 text-metallic">Colour</legend>
      <div className="mt-3 flex flex-wrap gap-3">
        {colors.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-label={c.name}
            aria-pressed={value === c.hex}
            onClick={() => onChange(c)}
            className={`h-8 w-8 rounded-full border ${
              value === c.hex ? "border-accent-bright ring-2 ring-accent/60" : "border-white/20"
            }`}
            style={{ background: c.hex }}
          />
        ))}
      </div>
    </fieldset>
  );
}
