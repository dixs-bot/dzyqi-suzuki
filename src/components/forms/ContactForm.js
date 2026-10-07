"use client";

import { useState } from "react";
import { isEmail, sanitizeText } from "@/lib/sanitize";
import { buildWhatsAppUrl } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (sanitizeText(form.name, 80).length < 2) next.name = "Please enter your name.";
    if (!isEmail(form.email)) next.email = "Enter a valid email.";
    if (sanitizeText(form.message, 600).length < 8) next.message = "Please add a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("success");
  };

  const wa = buildWhatsAppUrl(`Hello from ${form.name || "a visitor"} — ${form.message || "I have a question."}`);

  if (status === "success") {
    return (
      <div className="border border-white/10 p-8">
        <p className="text-[11px] uppercase tracking-luxury text-metallic">Received</p>
        <p className="mt-3 text-ivory/80">Thank you. An advisor will reply shortly.</p>
        {wa && (
          <a href={wa} className="mt-6 inline-block text-[11px] uppercase tracking-wide2 text-accent-bright" target="_blank" rel="noreferrer">
            Or continue on WhatsApp
          </a>
        )}
      </div>
    );
  }

  const field = "mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm";

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <label>
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Name</span>
        <input className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        {errors.name && <span className="text-xs text-accent-bright">{errors.name}</span>}
      </label>
      <label>
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Email</span>
        <input className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        {errors.email && <span className="text-xs text-accent-bright">{errors.email}</span>}
      </label>
      <label>
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Message</span>
        <textarea className={`${field} min-h-32`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        {errors.message && <span className="text-xs text-accent-bright">{errors.message}</span>}
      </label>
      <button type="submit" className="justify-self-start border border-accent bg-accent px-8 py-3 text-[11px] uppercase tracking-wide2">
        Send
      </button>
    </form>
  );
}
