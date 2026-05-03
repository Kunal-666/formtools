import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/ui/tool-shell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "PDF Size for SSC & Railway Forms (Rules + Tools) | FormTools",
  description:
    "Learn common PDF upload size rules for SSC and Railway forms and reduce scanned documents using free online PDF compressors (20KB, 50KB, 100KB, 200KB).",
  keywords: [
    "pdf size for ssc form",
    "pdf size for railway form",
    "compress pdf for govt form",
    "compress pdf 100kb",
  ],
  openGraph: {
    title: "PDF Size for SSC & Railway Forms | FormTools",
    description:
      "Common PDF upload size rules for SSC and Railway forms, plus links to the best compression targets for scanned documents.",
    url: "https://formtools.site/pdf-size-for-ssc-railway-forms",
    type: "article",
  },
};

export default function PdfSizeGuidePage() {
  return (
    <ToolShell
      title="PDF Size for SSC & Railway Forms"
      description="A practical guide to common upload size limits and the fastest way to prepare scanned PDFs for government portals."
    >
      <main className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            PDF Size Rules for SSC and Railway Forms
          </h1>
          <div className="space-y-4 text-sm leading-7 text-ink/75 sm:text-base">
            <p>
              SSC and Railway portals often enforce strict upload limits for
              scanned documents. The limits can vary by notification, but the
              most common targets applicants search for are 100KB, 50KB, 20KB,
              and sometimes 200KB for broader uploads. If your PDF is rejected,
              the cause is usually file size, unreadable scans, or uploading the
              document in the wrong field.
            </p>
            <p>
              Start with a practical target that keeps text readable. For many
              scanned documents,{" "}
              <Link href="/compress-pdf-100kb" className="font-medium text-accent">
                compress PDF to 100KB
              </Link>{" "}
              is the safest first attempt. If the portal explicitly requires a
              smaller file, move down to{" "}
              <Link href="/compress-pdf-50kb" className="font-medium text-accent">
                compress PDF to 50KB
              </Link>{" "}
              or{" "}
              <Link href="/compress-pdf-20kb" className="font-medium text-accent">
                compress PDF to 20KB
              </Link>{" "}
              and confirm that names, dates, and stamps are still legible.
            </p>
            <p>
              If the portal allows more room (for example, multiple pages or a
              clearer scan is needed), use{" "}
              <Link href="/compress-pdf-200kb" className="font-medium text-accent">
                compress PDF to 200KB
              </Link>{" "}
              to preserve readability while staying within a typical cap.
            </p>
            <p className="text-sm font-medium text-ink/60 sm:text-base">
              Free | No Signup | Instant Download | Works for Govt Forms
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Best for scanned PDFs
            </p>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[24px] border border-ink/10 bg-white/90 p-5">
            <h2 className="text-xl font-semibold">How to Avoid Upload Rejection</h2>
            <ol className="mt-3 space-y-2 text-sm leading-7 text-ink/70 sm:text-base">
              <li>
                1. Scan cleanly: use good lighting, avoid shadows, and keep the
                page flat.
              </li>
              <li>
                2. Prefer grayscale scans for documents with mostly text to
                reduce size.
              </li>
              <li>
                3. Compress to a practical target like 100KB, then go smaller
                only if required.
              </li>
              <li>
                4. Zoom in and verify readability before final upload.
              </li>
            </ol>
          </article>

          <article className="rounded-[24px] border border-ink/10 bg-white/90 p-5">
            <h2 className="text-xl font-semibold">Tools For SSC & Railway</h2>
            <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
              If you want a portal-specific starting point, use{" "}
              <Link
                href="/compress-pdf-for-ssc-form"
                className="font-medium text-accent"
              >
                compress PDF for SSC form
              </Link>{" "}
              or{" "}
              <Link
                href="/compress-pdf-for-railway-form"
                className="font-medium text-accent"
              >
                compress PDF for Railway form
              </Link>
              .
            </p>
            <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
              If you are aiming for a “percent” style reduction, start with{" "}
              <Link href="/compress-percent" className="font-medium text-accent">
                compress PDF by percent
              </Link>{" "}
              and pick a target based on your upload rule.
            </p>
          </article>
        </section>

        <section className="rounded-[24px] border border-ink/10 bg-muted/35 p-5">
          <h2 className="text-xl font-semibold">All PDF Compression Pages</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/compress-pdf-20kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF to 20KB
            </Link>
            <Link
              href="/compress-pdf-50kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF to 50KB
            </Link>
            <Link
              href="/compress-pdf-100kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF to 100KB
            </Link>
            <Link
              href="/compress-pdf-200kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF to 200KB
            </Link>
            <Link
              href="/compress-pdf-for-ssc-form"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF for SSC Form
            </Link>
            <Link
              href="/compress-pdf-for-railway-form"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF for Railway Form
            </Link>
            <Link
              href="/compress-percent"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF by Percent
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="space-y-3">
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                How to compress PDF to 20KB for SSC form?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Use{" "}
                <Link
                  href="/compress-pdf-20kb"
                  className="font-medium text-accent"
                >
                  compress PDF to 20KB
                </Link>{" "}
                for strict limits, then confirm readability. If the scan becomes
                unclear, move up to{" "}
                <Link
                  href="/compress-pdf-50kb"
                  className="font-medium text-accent"
                >
                  compress PDF to 50KB
                </Link>{" "}
                and re-check the portal instruction.
              </p>
            </article>
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                What PDF size is best for Railway form uploads?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Start with{" "}
                <Link
                  href="/compress-pdf-for-railway-form"
                  className="font-medium text-accent"
                >
                  compress PDF for Railway form
                </Link>{" "}
                and aim for 100KB when possible. Only go lower if the portal
                demands it.
              </p>
            </article>
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                Why does my PDF not compress below a limit?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Some PDFs are already optimized, or the scan has too much noise.
                Try a cleaner scan, then use{" "}
                <Link
                  href="/compress-pdf-100kb"
                  className="font-medium text-accent"
                >
                  compress PDF to 100KB
                </Link>{" "}
                before targeting extreme limits like 20KB.
              </p>
            </article>
          </div>
        </section>
      </main>
    </ToolShell>
  );
}

