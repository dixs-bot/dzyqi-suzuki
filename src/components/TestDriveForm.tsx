"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { visibleVehicles } from "@/data/vehicles";
import { waTestDrive } from "@/lib/whatsapp";
import { Field, phoneRule, openWa } from "./FormBits";

const schema = z.object({
  nama: z.string().trim().min(2, "Nama minimal 2 karakter").max(60),
  telepon: phoneRule, mobil: z.string().min(1, "Pilih kendaraan"),
  kota: z.string().trim().min(2, "Isi kota").max(60),
  tanggal: z.string().min(1, "Pilih tanggal"), waktu: z.string().min(1, "Pilih waktu"),
});
type V = z.infer<typeof schema>;
export default function TestDriveForm({ defaultCar }: { defaultCar?: string }) {
  const { register, handleSubmit, formState: { errors } } = useForm<V>({ resolver: zodResolver(schema), defaultValues: { mobil: defaultCar ?? "XL7", waktu: "Pagi (09.00-12.00)" } });
  return (
    <form onSubmit={handleSubmit((d) => openWa(waTestDrive(d)))} noValidate className="glass grid gap-4 rounded-3xl p-6 md:grid-cols-2 md:p-8">
      <Field id="td-nama" label="Nama" error={errors.nama?.message}><input id="td-nama" className="field" autoComplete="name" {...register("nama")} /></Field>
      <Field id="td-hp" label="WhatsApp" error={errors.telepon?.message}><input id="td-hp" inputMode="tel" className="field" autoComplete="tel" {...register("telepon")} /></Field>
      <Field id="td-mobil" label="Kendaraan" error={errors.mobil?.message}><select id="td-mobil" className="field" {...register("mobil")}>{visibleVehicles().filter((v) => v.status === "available").map((v) => <option key={v.slug}>{v.name}</option>)}</select></Field>
      <Field id="td-kota" label="Kota" error={errors.kota?.message}><input id="td-kota" className="field" {...register("kota")} /></Field>
      <Field id="td-tgl" label="Tanggal" error={errors.tanggal?.message}><input id="td-tgl" type="date" className="field" {...register("tanggal")} /></Field>
      <Field id="td-waktu" label="Waktu" error={errors.waktu?.message}><select id="td-waktu" className="field" {...register("waktu")}><option>Pagi (09.00-12.00)</option><option>Siang (12.00-15.00)</option><option>Sore (15.00-17.00)</option></select></Field>
      <button type="submit" className="btn btn-primary md:col-span-2">Jadwalkan via WhatsApp Diki</button>
      <p className="text-xs text-slate-500 md:col-span-2">Data hanya dikirim lewat tautan WhatsApp; tidak disimpan di server situs ini.</p>
    </form>
  );
}
