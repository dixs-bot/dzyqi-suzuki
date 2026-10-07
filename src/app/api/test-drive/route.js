import { NextResponse } from "next/server";
import { isEmail, isPhone, sanitizeText } from "@/lib/sanitize";

/**
 * In-memory rate limit architecture.
 * Suitable for a single Node instance / preview. Swap the Map for Redis later.
 * No secrets are stored.
 */
const hits = new Map();
const WINDOW_MS = 60_000;
const MAX = 5;

function limited(ip) {
  const now = Date.now();
  const rec = hits.get(ip) || { count: 0, start: now };
  if (now - rec.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  rec.count += 1;
  hits.set(ip, rec);
  return rec.count > MAX;
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please wait." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const payload = {
    name: sanitizeText(body.name, 80),
    phone: sanitizeText(body.phone, 24),
    email: sanitizeText(body.email, 120),
    vehicle: sanitizeText(body.vehicle, 40),
    dealer: sanitizeText(body.dealer, 40),
    date: sanitizeText(body.date, 20),
    time: sanitizeText(body.time, 20),
    notes: sanitizeText(body.notes, 400),
  };

  if (payload.name.length < 2 || !isPhone(payload.phone) || !isEmail(payload.email)) {
    return NextResponse.json({ error: "Validation failed." }, { status: 400 });
  }
  if (!payload.vehicle || !payload.dealer || !payload.date || !payload.time) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  return NextResponse.json({ ok: true, received: payload.vehicle });
}
