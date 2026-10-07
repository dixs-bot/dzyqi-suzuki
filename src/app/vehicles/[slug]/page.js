import Link from "next/link";
import { notFound } from "next/navigation";
import { getVehicleBySlug, getVehicleSlugs } from "@/lib/vehicles";
import { VehiclePlaceholder } from "@/components/ui/VehiclePlaceholder";
import { Section } from "@/components/ui/Section";
import { CarViewerDynamic } from "@/components/three/CarViewerDynamic";

export function generateStaticParams() {
  return getVehicleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) return { title: "Vehicle" };
  return {
    title: vehicle.name,
    description: vehicle.description,
  };
}

export default function VehicleDetailPage({ params }) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) notFound();

  const specs = Object.entries(vehicle.specifications);

  return (
    <>
      <section className="pt-28">
        <div className="mx-auto grid max-w-cinema items-end gap-8 px-5 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-metallic">{vehicle.category}</p>
            <h1 className="mt-3 text-5xl font-light md:text-6xl">{vehicle.name}</h1>
            <p className="mt-4 text-lg text-ivory/70">{vehicle.tagline}</p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/60">{vehicle.description}</p>
            <p className="mt-6 text-[11px] uppercase tracking-wide2 text-metallic">
              {vehicle.price.display} · {vehicle.price.note}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/configurator/${vehicle.slug}`}
                className="border border-accent bg-accent px-5 py-3 text-[11px] uppercase tracking-wide2"
              >
                Configurator
              </Link>
              <Link
                href={`/test-drive?vehicle=${vehicle.slug}`}
                className="border border-ivory/30 px-5 py-3 text-[11px] uppercase tracking-wide2 hover:border-accent"
              >
                Test drive
              </Link>
            </div>
          </div>
          <VehiclePlaceholder name={vehicle.name} accent={vehicle.heroAccent} className="h-72" />
        </div>
      </section>

      <Section eyebrow="3D" title="Presence in space">
        <div className="h-[60vh] min-h-[420px] border border-white/10">
          <CarViewerDynamic
            src={vehicle.model3d?.src || null}
            color={vehicle.colors[0].hex}
            autoRotate
            galleryHref={`/vehicles/${vehicle.slug}`}
          />
        </div>
      </Section>

      <Section eyebrow="Design" title="Line, stance, silence.">
        <p className="max-w-2xl text-ivory/70">{vehicle.description}</p>
      </Section>
      <Section eyebrow="Performance" title="Measured, never shouted.">
        <p className="max-w-2xl text-ivory/70">
          Performance figures are withheld as placeholders. Replace specification objects in the catalog when licensed
          data is available.
        </p>
      </Section>
      <Section eyebrow="Technology" title="Assist, connect, recede.">
        <ul className="grid gap-3 md:grid-cols-2">
          {vehicle.features.map((f) => (
            <li key={f} className="border border-white/10 px-4 py-3 text-sm text-ivory/70">
              {f}
            </li>
          ))}
        </ul>
      </Section>
      <Section eyebrow="Interior" title="Cabin tones.">
        <div className="flex flex-wrap gap-4">
          {vehicle.interiors.map((i) => (
            <div key={i.id} className="flex items-center gap-3 border border-white/10 px-4 py-3">
              <span className="h-6 w-6 rounded-full" style={{ background: i.tone }} />
              <span className="text-sm">{i.name}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Safety" title="A quiet perimeter.">
        <p className="max-w-2xl text-ivory/70">
          Safety narratives here are original experience copy. Do not treat them as certified equipment lists.
        </p>
      </Section>
      <Section eyebrow="Specifications" title="Placeholder data">
        <table className="w-full max-w-2xl text-left text-sm">
          <tbody>
            {specs.map(([key, spec]) => (
              <tr key={key} className="border-b border-white/10">
                <th className="py-3 pr-6 font-normal uppercase tracking-wide2 text-metallic">{key}</th>
                <td className="py-3">
                  {spec.value}
                  <span className="ml-2 text-[10px] uppercase text-metallic">placeholder</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      {vehicle.variants && (
        <Section eyebrow="Variants" title="Configured in data">
          <div className="flex flex-wrap gap-3">
            {vehicle.variants.map((v) => (
              <span key={v.id} className="border border-white/15 px-4 py-2 text-[11px] uppercase tracking-wide2">
                {v.name}
              </span>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
