import { NextResponse } from "next/server";

const ALLOWED_SUBDOMAINS = [
  "www",
  "scale-ready-store",
  "stop-ad-loss",
  "growth-ready-store",
  "checkout-ready",
  "ready-to-sell-store",
  "lean-shopify-store",
  "track-to-scale",
  "conversion-fix",
  "business-ready-store",
];

export function middleware(request) {
  const host = request.headers.get("host");

  if (!host) return NextResponse.next();

  // Handle localhost separately
  if (host.includes("localhost")) {
    return NextResponse.next();
  }

  // Extract subdomain
  const subdomain = host.replace(".frenchfryfeatures.com", "");

  // Allow main site + allowed creatives
  if (ALLOWED_SUBDOMAINS.includes(subdomain)) {
    return NextResponse.next();
  }

  // 🚨 Redirect EVERYTHING else to www
  return NextResponse.redirect(
    "https://www.frenchfryfeatures.com",
    308
  );
}
