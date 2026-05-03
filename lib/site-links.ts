export type NavLink = { href: string; label: string };

export const imageToolLinks: NavLink[] = [
  { href: "/resize-image-20kb", label: "Resize image to 20KB" },
  { href: "/resize-image-30kb", label: "Resize image to 30KB" },
  { href: "/resize-image-50kb", label: "Resize image to 50KB" },
  { href: "/resize-image-100kb", label: "Resize image to 100KB" },
  { href: "/image-resizer", label: "Custom image resizer" },
  { href: "/photo-under-50kb-ssc", label: "SSC photo under 50KB" },
  { href: "/signature-under-20kb", label: "Signature under 20KB" },
  { href: "/signature-resize", label: "Signature crop + resize" },
  { href: "/passport-photo-size-maker", label: "Passport photo size maker" },
  { href: "/passport-photo-maker", label: "Passport photo sheet generator" },
];

export const pdfToolLinks: NavLink[] = [
  { href: "/compress-pdf-20kb", label: "Compress PDF to 20KB" },
  { href: "/compress-pdf-50kb", label: "Compress PDF to 50KB" },
  { href: "/compress-pdf-100kb", label: "Compress PDF to 100KB" },
  { href: "/compress-pdf-200kb", label: "Compress PDF to 200KB" },
  { href: "/compress-pdf-for-ssc-form", label: "Compress PDF for SSC form" },
  { href: "/compress-pdf-for-railway-form", label: "Compress PDF for Railway form" },
  { href: "/compress-percent", label: "Compress PDF by percent" },
];

export const indexableRoutes: string[] = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/pdf-size-for-ssc-railway-forms",
  ...imageToolLinks.map((link) => link.href),
  ...pdfToolLinks.map((link) => link.href),
];
