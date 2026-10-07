export function sanitizeText(value, max = 500) {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

export function isPhone(value) {
  return /^[+]?[\d\s()-]{7,20}$/.test(String(value || "").trim());
}
