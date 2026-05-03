import Link from "next/link";
import { imageToolLinks, pdfToolLinks } from "@/lib/site-links";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          FormTools
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <div className="relative">
            <details className="group">
              <summary className="list-none cursor-pointer text-sm font-medium text-ink/70 transition hover:text-accent">
                Tools
              </summary>
              <div className="absolute left-0 mt-3 w-[340px] rounded-[24px] border border-ink/10 bg-white p-4 shadow-soft">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">
                      Image Tools
                    </p>
                    <ul className="space-y-1">
                      {imageToolLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-2xl px-3 py-2 text-sm text-ink/75 transition hover:bg-muted hover:text-accent"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">
                      PDF Tools
                    </p>
                    <ul className="space-y-1">
                      {pdfToolLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-2xl px-3 py-2 text-sm text-ink/75 transition hover:bg-muted hover:text-accent"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="md:hidden">
          <summary
            aria-label="Open menu"
            className="inline-flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-ink/10 bg-white text-ink"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </summary>
          <nav className="border-t border-ink/10 bg-white/95 px-4 py-3">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              <Link
                href="/"
                className="rounded-2xl px-3 py-3 text-sm font-medium text-ink/75 transition hover:bg-muted hover:text-accent"
              >
                Home
              </Link>

              <div className="mt-1 rounded-[22px] border border-ink/10 bg-white p-2">
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">
                  Tools
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <p className="px-3 py-1 text-xs font-semibold text-ink/55">
                      Image Tools
                    </p>
                    {imageToolLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-2xl px-3 py-2 text-sm text-ink/75 transition hover:bg-muted hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="px-3 py-1 text-xs font-semibold text-ink/55">
                      PDF Tools
                    </p>
                    {pdfToolLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-2xl px-3 py-2 text-sm text-ink/75 transition hover:bg-muted hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="rounded-2xl px-3 py-3 text-sm font-medium text-ink/75 transition hover:bg-muted hover:text-accent"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl px-3 py-3 text-sm font-medium text-ink/75 transition hover:bg-muted hover:text-accent"
              >
                Contact
              </Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
