"use client";

export function LoadingProgress({ progress = 0 }) {
  const pct = Math.min(100, Math.max(0, Math.round(progress)));
  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-ink"
      role="status"
      aria-live="polite"
    >
      <p className="tracking-luxury text-[11px] uppercase">Suzuki</p>
      <p className="mt-3 text-[11px] uppercase tracking-wide2 text-metallic">
        Preparing your experience
      </p>
      <div className="mt-8 h-px w-48 bg-white/10">
        <div className="h-px bg-accent" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-3 text-[11px] text-metallic">{pct}%</p>
    </div>
  );
}
