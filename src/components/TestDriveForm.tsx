"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { visibleVehicles } from "@/data/vehicles";
import { waTestDrive } from "@/lib/whatsapp";

const schema = z.object({
  nama: z.string().trim().min(2, "Nama minimal 2 karakter").max(60),
  telepon: z.string().trim().regex(/^(\+62|62|0)8[0-9]{7,12}$/, "Nomor HP tidak valid (contoh 0812xxxxxxx)"),
  mobil: z.string().min(1, "Pilih mobil"),
  tanggal: z.string().min(1, "Pilih tanggal"),
  waktu: z.string().min(1, "Pilih waktu"),
  kota: z.string().trim().min(2, "Isi kota").max(60),
});
type FormValues = z.infer<typeof schema>;

export default function TestDriveForm({ defaultCar }: { defaultCar?: string }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { mobil: defaultCar ?? "XL7", waktu: "Pagi (09.00-12.00)" } });
  const onSubmit = (d: FormValues) => { window.open(waTestDrive({ nama: d.nama, mobil: d.mobil, tanggal: d.tanggal, waktu: d.waktu, kota: d.kota }), "_blank", "noopener,noreferrer"); };
  const err = (m?: string) => (m ? <p role="alert" className="mt-1 text-xs text-red-600">{m}</p> : null);
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass grid gap-4 rounded-3xl p-6 md:grid-cols-2 md:p-8">
      <div><label htmlFor="nama" className="mb-1 block text-sm font-semibold">Nama</label><input id="nama" className="field" autoComplete="name" {...register("nama")} />{err(errors.nama?.message)}</div>
      <div><label htmlFor="telepon" className="mb-1 block text-sm font-semibold">No. HP / WhatsApp</label><input id="telepon" inputMode="tel" className="field" autoComplete="tel" {...register("telepon")} />{err(errors.telepon?.message)}</div>
      <div><label htmlFor="mobil" className="mb-1 block text-sm font-semibold">Mobil</label>
        <select id="mobil" className="field" {...register("mobil")}>{visibleVehicles().filter((v) => v.status === "available").map((v) => (<option key={v.slug} value={v.name}>{v.name}</option>))}</select>{err(errors.mobil?.message)}</div>
      <div><label htmlFor="kota" className="mb-1 block text-sm font-semibold">Kota</label><input id="kota" className="field" {...register("kota")} />{err(errors.kota?.message)}</div>
      <div><label htmlFor="tanggal" className="mb-1 block text-sm font-semibold">Tanggal</label><input id="tanggal" type="date" className="field" {...register("tanggal")} />{err(errors.tanggal?.message)}</div>
      <div><label htmlFor="waktu" className="mb-1 block text-sm font-semibold">Waktu</label>
        <select id="waktu" className="field" {...register("waktu")}><option>Pagi (09.00-12.00)</option><option>Siang (12.00-15.00)</option><option>Sore (15.00-17.00)</option></select>{err(errors.waktu?.message)}</div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary md:col-span-2">Booking via WhatsApp Diki</button>
      <p className="text-xs text-slate-500 md:col-span-2">Data hanya dikirim ke WhatsApp Diki melalui tautan; tidak disimpan di server situs ini.</p>
    </form>
  );
}
