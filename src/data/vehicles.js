/**
 * Data-driven catalog. Add or remove vehicles here.
 * All prices and specifications are INDICATIVE PLACEHOLDERS — not official figures.
 * 3D: set model3d.src to a licensed GLB path under /public/models when available.
 */

const PLACEHOLDER_NOTE =
  "Placeholder specification — not an official confirmed figure. Replace with licensed product data.";

const sharedColors = [
  { id: "pearl-white", name: "Pearl Ivory", hex: "#f4f1ea" },
  { id: "midnight", name: "Midnight Navy", hex: "#0b1220" },
  { id: "graphite", name: "Graphite Metallic", hex: "#6d737c" },
  { id: "obsidian", name: "Obsidian Black", hex: "#111111" },
  { id: "horizon", name: "Horizon Blue", hex: "#1a73c7" },
];

const sharedWheels = [
  { id: "aero-16", name: "Aero 16", size: "16\"" },
  { id: "touring-17", name: "Touring 17", size: "17\"" },
  { id: "sport-18", name: "Sport 18", size: "18\"" },
];

const sharedInteriors = [
  { id: "ivory-cabin", name: "Ivory Cabin", tone: "#e8e2d6" },
  { id: "navy-cabin", name: "Navy Cabin", tone: "#1a2438" },
  { id: "graphite-cabin", name: "Graphite Cabin", tone: "#3a3f48" },
];

function placeholderSpecs(overrides = {}) {
  return {
    engine: { value: "Placeholder powertrain", note: PLACEHOLDER_NOTE },
    power: { value: "— kW (placeholder)", note: PLACEHOLDER_NOTE },
    torque: { value: "— Nm (placeholder)", note: PLACEHOLDER_NOTE },
    transmission: { value: "Placeholder transmission", note: PLACEHOLDER_NOTE },
    drivetrain: { value: "Placeholder drivetrain", note: PLACEHOLDER_NOTE },
    seats: { value: "Placeholder seating", note: PLACEHOLDER_NOTE },
    length: { value: "— mm (placeholder)", note: PLACEHOLDER_NOTE },
    fuel: { value: "Placeholder efficiency", note: PLACEHOLDER_NOTE },
    ...overrides,
  };
}

function placeholderModel(slug) {
  return {
    src: null,
    placeholder: true,
    label: "3D MODEL PLACEHOLDER",
    swapPath: `/public/models/${slug}.glb`,
    note: "No licensed GLB is bundled. Drop a licensed file at the swap path and set model3d.src to `/models/${slug}.glb`.",
  };
}

function makeVehicle(partial) {
  return {
    colors: sharedColors,
    wheels: sharedWheels,
    interiors: sharedInteriors,
    images: {
      hero: null,
      gallery: [],
      note: "Original CSS/SVG gradient placeholders — not copyrighted vehicle photography.",
    },
    model3d: placeholderModel(partial.slug),
    features: [
      "All-around visibility (placeholder feature set)",
      "Thoughtful cabin storage (placeholder)",
      "Safety assist suite (placeholder)",
      "Connected infotainment (placeholder)",
    ],
    ...partial,
  };
}

export const vehicles = [
  makeVehicle({
    slug: "new-carry",
    name: "New Carry",
    category: "Commercial",
    tagline: "Capability, distilled.",
    description:
      "A purpose-built work companion designed for clarity, payload, and everyday reliability. Visuals and figures on this page are original placeholders pending licensed assets.",
    price: { display: "Indicative from —", note: "Placeholder pricing — not an official figure." },
    heroAccent: "#6d737c",
    specifications: placeholderSpecs({ seats: { value: "2 (placeholder)", note: PLACEHOLDER_NOTE } }),
  }),
  makeVehicle({
    slug: "apv",
    name: "APV",
    category: "People Mover",
    tagline: "Space, simply composed.",
    description:
      "An open, practical cabin for families and fleets. Content here is original experience copy with placeholder specifications.",
    price: { display: "Indicative from —", note: "Placeholder pricing — not an official figure." },
    heroAccent: "#b8bec6",
    specifications: placeholderSpecs({ seats: { value: "Up to 8 (placeholder)", note: PLACEHOLDER_NOTE } }),
  }),
  makeVehicle({
    slug: "all-new-ertiga",
    name: "All New Ertiga",
    category: "MPV",
    tagline: "Seven seats. Quiet confidence.",
    description:
      "A composed multi-purpose silhouette for long days and longer journeys. Specifications displayed are placeholders.",
    price: { display: "Indicative from —", note: "Placeholder pricing — not an official figure." },
    heroAccent: "#1a73c7",
    specifications: placeholderSpecs({ seats: { value: "7 (placeholder)", note: PLACEHOLDER_NOTE } }),
  }),
  makeVehicle({
    slug: "xl7",
    name: "XL7",
    category: "SUV",
    tagline: "Crafted for the journey ahead.",
    description:
      "The cinematic face of this experience. Elevated stance, calm interior architecture, and a configurator ready for a licensed GLB.",
    price: { display: "Indicative from —", note: "Placeholder pricing — not an official figure." },
    heroAccent: "#1a73c7",
    featured: true,
    specifications: placeholderSpecs({ seats: { value: "7 (placeholder)", note: PLACEHOLDER_NOTE } }),
  }),
  makeVehicle({
    slug: "fronx",
    name: "Fronx",
    category: "Crossover",
    tagline: "Urban line. Open sky.",
    description:
      "A compact crossover attitude expressed through original gradients and placeholder product data.",
    price: { display: "Indicative from —", note: "Placeholder pricing — not an official figure." },
    heroAccent: "#2b8ef0",
    specifications: placeholderSpecs({ seats: { value: "5 (placeholder)", note: PLACEHOLDER_NOTE } }),
  }),
  makeVehicle({
    slug: "s-presso",
    name: "S-Presso",
    category: "Compact",
    tagline: "City scale. Tall spirit.",
    description:
      "A compact, upright presence for dense streets. All numbers on this page are labelled placeholders.",
    price: { display: "Indicative from —", note: "Placeholder pricing — not an official figure." },
    heroAccent: "#f4f1ea",
    specifications: placeholderSpecs({ seats: { value: "5 (placeholder)", note: PLACEHOLDER_NOTE } }),
  }),
  makeVehicle({
    slug: "grand-vitara",
    name: "Grand Vitara",
    category: "SUV",
    tagline: "Heritage, rewritten in quiet metal.",
    description:
      "A composed SUV posture for open roads. Product photography is not used; forms are original CSS/SVG compositions.",
    price: { display: "Indicative from —", note: "Placeholder pricing — not an official figure." },
    heroAccent: "#0b1220",
    specifications: placeholderSpecs({ seats: { value: "5 (placeholder)", note: PLACEHOLDER_NOTE } }),
  }),
  makeVehicle({
    slug: "jimny",
    name: "Jimny",
    category: "Off-road",
    tagline: "Four corners. One character.",
    description:
      "Iconic proportions interpreted as original placeholders. Variants below are data-driven and easy to extend.",
    price: { display: "Indicative from —", note: "Placeholder pricing — not an official figure." },
    heroAccent: "#6d737c",
    specifications: placeholderSpecs({
      seats: { value: "4 (placeholder)", note: PLACEHOLDER_NOTE },
      drivetrain: { value: "4x4 (placeholder)", note: PLACEHOLDER_NOTE },
    }),
    variants: [
      { id: "3-door", name: "3-Door", note: "Placeholder variant" },
      { id: "5-door", name: "5-Door", note: "Placeholder variant" },
      { id: "2-tone", name: "2-Tone", note: "Placeholder variant" },
      { id: "fleet", name: "Fleet", note: "Placeholder variant" },
    ],
  }),
];

export const categories = [...new Set(vehicles.map((v) => v.category))];
