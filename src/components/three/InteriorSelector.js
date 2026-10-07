"use client";

export function InteriorSelector({ interiors = [], value, onChange }) {
  return (
    <fieldset>
      <legend className="text-[11px] uppercase tracking-wide2 text-metallic">Interior</legend>
      <div className="mt-3 flex flex-wrap gap-3">
        {interiors.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.name}
            onClick={() => onChange(item)}
            className={`flex items-center gap-2 border px-3 py-2 text-[11px] uppercase tracking-wide2 ${
              value === item.id ? "border-accent text-ivory" : "border-white/15 text-metallic"
            }`}
          >
            <span className="h-3 w-3 rounded-full" style={{ background: item.tone }} />
            {item.name}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
