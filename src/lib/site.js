export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export function getWhatsAppNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
}

export function getGoogleMapsKey() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "";
}

export function buildWhatsAppUrl(message) {
  const number = getWhatsAppNumber();
  if (!number) return null;
  const text = encodeURIComponent(message || "Hello — I would like to enquire.");
  return `https://wa.me/${number.replace(/[^\d]/g, "")}?text=${text}`;
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl().replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
