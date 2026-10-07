"use client";

import { useState } from "react";
import { getVehicles } from "@/lib/vehicles";
import { getDealers } from "@/lib/dealers";
import { isEmail, isPhone, sanitizeText } from "@/lib/sanitize";
import { buildWhatsAppUrl } from "@/lib/site";

export function TestDriveForm({ defaultVehicle = "" }) {
  const vehicles = getVehicles();
  const dealers = getDealers();
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: defaultVehicle,
    dealer: dealers[0]?.id || "",
    date: "",
    time: "",
    notes: "",
  });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (sanitizeText(form.name, 80).length < 2) next.name = "Please enter your name.";
    if (!isPhone(form.phone)) next.phone = "Enter a valid phone number.";
    if (!isEmail(form.email)) next.email = "Enter a valid email.";
    if (!form.vehicle) next.vehicle = "Select a vehicle.";
    if (!form.dealer) next.dealer = "Select a dealer.";
    if (!form.date) next.date = "Choose a date.";
    if (!form.time) next.time = "Choose a time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/test-drive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizeText(form.name, 80),
          phone: sanitizeText(form.phone, 24),
          email: sanitizeText(form.email, 120),
          vehicle: sanitizeText(form.vehicle, 40),
          dealer: sanitizeText(form.dealer, 40),
          date: sanitizeText(form.date, 20),
          time: sanitizeText(form.time, 20),
          notes: sanitizeText(form.notes, 400),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Unable to submit");
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    const vehicleName = vehicles.find((v) => v.slug === form.vehicle)?.name || form.vehicle;
    const wa = buildWhatsAppUrl(
      `Hello, I requested a test drive of the ${vehicleName} on ${form.date} at ${form.time}.`
    );
    return (
      <div className="border border-white/10 bg-navy p-8" role="status">
        <p className="text-[11px] uppercase tracking-luxury text-metallic">Confirmed</p>
        <h2 className="mt-3 text-3xl font-light">Your request is received.</h2>
        <p className="mt-4 text-ivory/70">
          A studio advisor will be in touch. This confirmation is local to the experience — no secrets are stored.
        </p>
        {wa && (
          <a
            href={wa}
            className="mt-6 inline-block border border-accent px-5 py-2 text-[11px] uppercase tracking-wide2 hover:bg-accent"
            target="_blank"
            rel="noreferrer"
          >
            Continue on WhatsApp
          </a>
        )}
      </div>
    );
  }

  const fieldClass =
    "w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-metallic/50";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2" noValidate>
      {[
        { name: "name", label: "Name", type: "text" },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "email", label: "Email", type: "email", span: true },
      ].map((f) => (
        <label key={f.name} className={f.span ? "md:col-span-2" : ""}>
          <span className="text-[11px] uppercase tracking-wide2 text-metallic">{f.label}</span>
          <input
            className={`${fieldClass} mt-2`}
            name={f.name}
            type={f.type}
            value={form[f.name]}
            onChange={onChange}
            required
          />
          {errors[f.name] && <span className="mt-1 block text-xs text-accent-bright">{errors[f.name]}</span>}
        </label>
      ))}
      <label>
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Vehicle</span>
        <select name="vehicle" value={form.vehicle} onChange={onChange} className={`${fieldClass} mt-2`} required>
          <option value="">Select</option>
          {vehicles.map((v) => (
            <option key={v.slug} value={v.slug} className="bg-navy">
              {v.name}
            </option>
          ))}
        </select>
        {errors.vehicle && <span className="mt-1 block text-xs text-accent-bright">{errors.vehicle}</span>}
      </label>
      <label>
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Dealer</span>
        <select name="dealer" value={form.dealer} onChange={onChange} className={`${fieldClass} mt-2`} required>
          {dealers.map((d) => (
            <option key={d.id} value={d.id} className="bg-navy">
              {d.name} — {d.city}
            </option>
          ))}
        </select>
        {errors.dealer && <span className="mt-1 block text-xs text-accent-bright">{errors.dealer}</span>}
      </label>
      <label>
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Date</span>
        <input className={`${fieldClass} mt-2`} type="date" name="date" value={form.date} onChange={onChange} required />
        {errors.date && <span className="mt-1 block text-xs text-accent-bright">{errors.date}</span>}
      </label>
      <label>
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Time</span>
        <input className={`${fieldClass} mt-2`} type="time" name="time" value={form.time} onChange={onChange} required />
        {errors.time && <span className="mt-1 block text-xs text-accent-bright">{errors.time}</span>}
      </label>
      <label className="md:col-span-2">
        <span className="text-[11px] uppercase tracking-wide2 text-metallic">Notes</span>
        <textarea
          className={`${fieldClass} mt-2 min-h-28`}
          name="notes"
          value={form.notes}
          onChange={onChange}
        />
      </label>
      {status === "error" && (
        <p className="md:col-span-2 text-sm text-accent-bright">Please wait a moment and try again.</p>
      )}
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="border border-accent bg-accent px-8 py-3 text-[11px] uppercase tracking-wide2 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending" : "Request test drive"}
        </button>
      </div>
    </form>
  );
}
