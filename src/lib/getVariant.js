import { headers } from "next/headers";

export function getVariant() {
  const h = headers();

  // 🔒 Works for BOTH:
  // - Web Headers object
  // - Plain object (Turbopack dev)
  const host =
    typeof h.get === "function"
      ? h.get("x-forwarded-host") || h.get("host")
      : h["x-forwarded-host"] || h.host || "";

  if (
    host === "www.frenchfryfeatures.com" ||
    host === "frenchfryfeatures.com"
  ) {
    return "control";
  }

  return host.replace(".frenchfryfeatures.com", "");
}
