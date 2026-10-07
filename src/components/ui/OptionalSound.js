"use client";

import { useRef, useState } from "react";

/** Optional ambience. Muted by default. Never autoplays. */
export function OptionalSound({ src = "/videos/ambience.mp3" }) {
  const audio = useRef(null);
  const [on, setOn] = useState(false);

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (on) {
      el.pause();
      setOn(false);
      return;
    }
    el.volume = 0.25;
    el.play().then(() => setOn(true)).catch(() => setOn(false));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audio} src={src} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        className="border border-white/15 bg-ink/70 px-3 py-2 text-[10px] uppercase tracking-wide2 text-metallic backdrop-blur"
        aria-pressed={on}
      >
        Sound {on ? "on" : "muted"}
      </button>
    </div>
  );
}
