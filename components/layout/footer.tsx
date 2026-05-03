import Link from "next/link";
import { imageToolLinks, pdfToolLinks } from "@/lib/site-links";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/85">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">FormTools</h2>
          <p className="max-w-md text-sm leading-6 text-ink/70">
            Simple browser tools to help students and applicants prepare image,
            PDF, passport photo, and signature files for online government forms.
          </p>
          <p className="text-xs leading-5 text-ink/55">
            This tool is not affiliated with any government organization.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
            Quick Links
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink/70 transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
            Image Tools
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {imageToolLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink/70 transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
            PDF Tools
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {pdfToolLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink/70 transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pdf-size-for-ssc-railway-forms"
              className="text-sm text-ink/70 transition hover:text-accent"
            >
              PDF size for SSC and Railway forms
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 px-4 py-4 text-center text-xs text-ink/55 sm:px-6 lg:px-8">
        Copyright {new Date().getFullYear()} FormTools. All rights reserved.
      </div>
    </footer>
  );
}
