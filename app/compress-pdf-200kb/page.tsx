import type { Metadata } from "next";
import Link from "next/link";
import CompressPdfToolClient from "@/components/client/compress-pdf-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Compress PDF to 200 KB | Govt Form Toolkit",
  description:
    "Compress PDF to 200KB online for document uploads, scanned forms, and broader government-portal file limits.",
  keywords: ["compress pdf 200kb", "pdf under 200kb", "compress scanned pdf"],
  openGraph: {
    title: "Compress PDF to 200KB | FormTools",
    description:
      "Compress PDF to 200KB online for scanned documents and government-form uploads with broader size limits.",
    url: "https://formtools.site/compress-pdf-200kb",
    type: "website",
  },
};

export default function CompressPdf200KbPage() {
  return (
    <ToolShell
      title="Compress PDF to 200 KB"
      description="Reduce scanned PDFs near 200KB when the portal allows a larger but still limited upload size."
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Compress PDF to 200KB Online Free
          </h1>
          <div className="space-y-4 text-sm leading-7 text-ink/75 sm:text-base">
            <p>
              Use this page when a government portal allows a larger PDF upload,
              but still enforces a limit like 200KB. This is common for scanned
              documents such as certificates, ID proof, or application
              attachments where readability matters more than extreme size
              reduction.
            </p>
            <p>
              If you are preparing SSC or Railway uploads, 200KB can be a safer
              target for multi-page scans. When the portal requires smaller
              sizes, switch to{" "}
              <Link href="/compress-pdf-100kb" className="font-medium text-accent">
                compress PDF to 100KB
              </Link>{" "}
              or{" "}
              <Link href="/compress-pdf-50kb" className="font-medium text-accent">
                compress PDF to 50KB
              </Link>{" "}
              and re-check the rules.
            </p>
            <p>
              Common issues include scans with heavy background noise and PDFs
              that do not shrink much because they are already optimized. For
              best results, scanned PDFs with clear text compress more reliably.
            </p>
            <p className="text-sm font-medium text-ink/60 sm:text-base">
              Free | No Signup | Instant Download | Works for Govt Forms
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Best for scanned PDFs
            </p>
          </div>
        </section>

        <CompressPdfToolClient defaultTarget="200kb" />

        <section className="rounded-[24px] border border-ink/10 bg-muted/35 p-5">
          <h2 className="text-xl font-semibold">Related Tools</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/compress-pdf-100kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF to 100KB
            </Link>
            <Link
              href="/compress-pdf-50kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF to 50KB
            </Link>
            <Link
              href="/compress-pdf-for-ssc-form"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF for SSC form
            </Link>
            <Link
              href="/compress-pdf-for-railway-form"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Compress PDF for Railway form
            </Link>
            <Link
              href="/pdf-size-for-ssc-railway-forms"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              PDF size rules guide
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                How do I reduce a scanned PDF to 200KB?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Upload the scan, keep the 200KB target, compress, and download.
                If the portal requires smaller sizes, use{" "}
                <Link
                  href="/compress-pdf-100kb"
                  className="font-medium text-accent"
                >
                  compress PDF to 100KB
                </Link>{" "}
                next.
              </p>
            </article>
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                Which target is best for SSC uploads?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Many SSC flows work well with 100KB. Use{" "}
                <Link
                  href="/compress-pdf-for-ssc-form"
                  className="font-medium text-accent"
                >
                  compress PDF for SSC form
                </Link>{" "}
                and check the official portal instruction for the exact limit.
              </p>
            </article>
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                Why does my PDF not compress much?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Digitally generated PDFs are often already optimized. Scanned
                PDFs compress better. If you need a strict limit, try{" "}
                <Link href="/compress-pdf-50kb" className="font-medium text-accent">
                  compress PDF to 50KB
                </Link>{" "}
                and confirm readability.
              </p>
            </article>
          </div>
        </section>
      </div>
    </ToolShell>
  );
}
