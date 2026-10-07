"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { visibleVehicles } from "@/data/vehicles";
import { waLead } from "@/lib/whatsapp";
import { Field, phoneRule, openWa } from "./FormBits";
const schema = z.object({ nama: z.string().trim().min(2, "Isi nama").max(60), telepon: phoneRule, mobil: z.string().min(1), kebutuhan: z.string().trim().min(3, "Ceritakan kebutuhan Anda").max(300) });
type V = z.infer<typeof schema>;
export default function LeadForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<V>({ resolver: zodResolver(schema), defaultValues: { mobil: "XL7" } });
  return (
    <form onSubmit={handleSubmit((d) => openWa(waLead(d)))} noValidate className="glass grid gap-4 rounded-3xl p-6 md:p-8">
      <Field id="ld-nama" label="Nama" error={errors.nama?.message}><input id="ld-nama" className="field" {...register("nama")} /></Field>
      <Field id="ld-hp" label="WhatsApp" error={errors.telepon?.message}><input id="ld-hp" inputMode="tel" className="field" {...register("telepon")} /></Field>
      <Field id="ld-mobil" label="Kendaraan" error={errors.mobil?.message}><select id="ld-mobil" className="field" {...register("mobil")}>{visibleVehicles().map((v) => <option key={v.slug}>{v.name}</option>)}</select></Field>
      <Field id="ld-keb" label="Kebutuhan" error={errors.kebutuhan?.message}><textarea id="ld-keb" rows={3} className="field" {...register("kebutuhan")} /></Field>
      <button className="btn btn-primary" type="submit">Konsultasi via WhatsApp</button>
    </form>
  );
}
