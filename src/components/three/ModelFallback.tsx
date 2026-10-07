import Image from "next/image";
export default function ModelFallback({ image, name, reason }: { image: string; name: string; reason: string }) {
  return (
    <div className="relative grid h-full min-h-[320px] w-full place-items-center bg-gradient-to-br from-pearl to-white p-6">
      <Image src={image} alt={`Suzuki ${name}`} width={900} height={560} className="max-h-full w-full max-w-3xl object-contain" priority />
      <p className="absolute bottom-3 left-1/2 w-[90%] -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-center text-xs text-slate-600 backdrop-blur">{reason}</p>
    </div>
  );
}
