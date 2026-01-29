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
  // ✅ ALWAYS prefer forwarded host on Vercel
  let host =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host");

  if (!host) return NextResponse.next();

  // Remove port (e.g. :443, :3000)
  host = host.split(":")[0];

  // Allow localhost without checks
  if (host.endsWith("localhost")) {
    return NextResponse.next();
  }

  // Main site
  if (
    host === "www.frenchfryfeatures.com" ||
    host === "frenchfryfeatures.com"
  ) {
    return NextResponse.next();
  }

  // Extract subdomain
  const subdomain = host.replace(".frenchfryfeatures.com", "");

  // Allow known creatives
  if (ALLOWED_SUBDOMAINS.includes(subdomain)) {
    return NextResponse.next();
  }

  // 🚨 Redirect unknown subdomains
  return NextResponse.redirect(
    "https://www.frenchfryfeatures.com",
    308
  );
}
