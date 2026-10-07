"use client";
import { z } from "zod";
import type { ReactNode } from "react";
export const phoneRule = z.string().trim().regex(/^(\+62|62|0)8[0-9]{7,12}$/, "Nomor WhatsApp tidak valid");
export const openWa = (url: string) => { window.open(url, "_blank", "noopener,noreferrer"); };
export function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (<div><label htmlFor={id} className="mb-1 block text-sm font-semibold">{label}</label>{children}{error && <p role="alert" className="mt-1 text-xs text-red-600">{error}</p>}</div>);
}
