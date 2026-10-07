import { dealers } from "@/data/dealers";

export function getDealers() {
  return dealers;
}

export function searchDealers(query = "") {
  const q = String(query).trim().toLowerCase();
  if (!q) return dealers;
  return dealers.filter((d) =>
    [d.name, d.city, d.region, d.address].some((field) =>
      field.toLowerCase().includes(q)
    )
  );
}

export function getDealerById(id) {
  return dealers.find((d) => d.id === id) ?? null;
}
