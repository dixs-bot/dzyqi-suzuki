export function VehiclePlaceholder({ name, accent = "#1a73c7", className = "" }) {
  return (
    <div
      className={`vehicle-silhouette relative overflow-hidden ${className}`}
      role="img"
      aria-label={`${name} original CSS placeholder — not vehicle photography`}
    >
      <svg viewBox="0 0 800 360" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`g-${name}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
            <stop offset="100%" stopColor="#b8bec6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <ellipse cx="400" cy="280" rx="260" ry="18" fill="#000" opacity="0.45" />
        <path
          d="M140 250 C180 180 240 140 330 130 L470 128 C560 132 640 170 690 230 L700 250 C620 245 180 245 140 250 Z"
          fill={`url(#g-${name})`}
        />
        <circle cx="250" cy="250" r="34" fill="#111" stroke="#b8bec6" strokeWidth="4" />
        <circle cx="560" cy="250" r="34" fill="#111" stroke="#b8bec6" strokeWidth="4" />
        <rect x="310" y="150" width="180" height="48" rx="6" fill="#0b1220" opacity="0.6" />
      </svg>
      <p className="absolute bottom-3 left-4 text-[10px] uppercase tracking-wide2 text-metallic">
        Original placeholder · {name}
      </p>
    </div>
  );
}
