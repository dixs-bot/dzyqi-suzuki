"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { waTradeIn } from "@/lib/whatsapp";
import { Field, phoneRule, openWa } from "./FormBits";
const schema = z.object({ merk: z.string().trim().min(2, "Isi merk"), model: z.string().trim().min(1, "Isi model"), tahun: z.string().regex(/^(19|20)\d{2}$/, "Tahun tidak valid"), kondisi: z.string().trim().min(3, "Jelaskan kondisi"), nama: z.string().trim().min(2, "Isi nama"), telepon: phoneRule });
type V = z.infer<typeof schema>;
export default function TradeInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<V>({ resolver: zodResolver(schema) });
  const f = (id: keyof V, label: string, extra?: object) => (<Field id={`ti-${id}`} label={label} error={errors[id]?.message}><input id={`ti-${id}`} className="field" {...extra} {...register(id)} /></Field>);
  return (
    <form onSubmit={handleSubmit((d) => openWa(waTradeIn(d)))} noValidate className="glass grid gap-4 rounded-3xl p-6 md:grid-cols-2 md:p-8">
      {f("merk", "Merk")}{f("model", "Model")}{f("tahun", "Tahun", { inputMode: "numeric" })}{f("kondisi", "Kondisi")}{f("nama", "Nama")}{f("telepon", "WhatsApp", { inputMode: "tel" })}
      <button className="btn btn-primary md:col-span-2" type="submit">Tanya Tukar Tambah via WhatsApp</button>
    </form>
  );
}
