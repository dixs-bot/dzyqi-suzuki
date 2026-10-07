"use client";

export function WheelSelector({ wheels = [], value, onChange }) {
  return (
    <fieldset>
      <legend className="text-[11px] uppercase tracking-wide2 text-metallic">Wheels</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {wheels.map((w) => (
          <button
            key={w.id}
            type="button"
            onClick={() => onChange(w)}
            className={`border px-3 py-2 text-[11px] uppercase tracking-wide2 ${
              value === w.id
                ? "border-accent bg-accent/20 text-ivory"
                : "border-white/15 text-metallic hover:border-accent"
            }`}
          >
            {w.name} · {w.size}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
