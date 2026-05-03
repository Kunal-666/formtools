import type { Metadata } from "next";
import Link from "next/link";
import SignatureResizeToolClient from "@/components/client/signature-resize-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Signature Resize | Govt Form Toolkit",
  description:
    "Crop and resize a handwritten signature image with preview and download support for government application uploads.",
  keywords: [
    "signature resize",
    "signature crop tool",
    "signature size for ssc",
  ],
  openGraph: {
    title: "Signature Resize | FormTools",
    description:
      "Crop and resize a handwritten signature image with preview and download support for government-form uploads.",
    url: "https://formtools.site/signature-resize",
    type: "website",
  },
};

export default function SignatureResizePage() {
  return (
    <ToolShell
      title="Signature Resize"
      description="Trim unused space around a signature and export a compact resized image ready for upload fields."
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Signature Crop and Resize for Govt Forms
          </h1>
          <div className="space-y-4 text-sm leading-7 text-ink/75 sm:text-base">
            <p>
              Many SSC, Railway, banking, and government application portals
              require a separate signature file with a strict KB limit. The most
              common issue is that signatures are scanned with too much empty
              space, which makes the file bigger and causes upload errors.
            </p>
            <p>
              This signature resize tool helps you crop extra whitespace and
              export a neat signature image for upload fields. After cropping,
              if the portal demands a strict KB limit, use{" "}
              <Link
                href="/signature-under-20kb"
                className="font-medium text-accent"
              >
                signature under 20KB
              </Link>{" "}
              for the final size rule.
            </p>
            <p>
              For clean results, sign with a dark pen on white paper, capture in
              good light, and avoid shadows. Crop close to the strokes and
              download the output. If the portal still rejects the upload,
              double-check whether it expects JPG, PNG, or a specific dimension.
            </p>
            <p className="text-sm font-medium text-ink/60 sm:text-base">
              Free | No Signup | Instant Download | Works for Govt Forms
            </p>
          </div>
        </section>

        <SignatureResizeToolClient />

        <section className="rounded-[24px] border border-ink/10 bg-muted/35 p-5">
          <h2 className="text-xl font-semibold">Related Tools</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/signature-under-20kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Signature under 20KB
            </Link>
            <Link
              href="/image-resizer"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Custom image resizer
            </Link>
            <Link
              href="/resize-image-20kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Resize image to 20KB
            </Link>
            <Link
              href="/photo-under-50kb-ssc"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              SSC photo under 50KB
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                How do I make my signature file smaller for SSC?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Crop whitespace using this page first, then use{" "}
                <Link
                  href="/signature-under-20kb"
                  className="font-medium text-accent"
                >
                  signature under 20KB
                </Link>{" "}
                to match strict SSC size limits.
              </p>
            </article>
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                Why does my signature look faint after resizing?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Faint signatures usually come from low-contrast photos. Re-capture
                the signature with better lighting and a darker pen, then crop
                again. If the portal allows it, use a slightly higher KB target via{" "}
                <Link href="/image-resizer" className="font-medium text-accent">
                  custom image resizer
                </Link>
                .
              </p>
            </article>
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                Do I need PNG or JPG for signature uploads?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Many portals accept JPG, but some accept PNG. If the portal is
                strict about KB, JPG is usually easier to reduce. When in doubt,
                resize using{" "}
                <Link href="/resize-image-20kb" className="font-medium text-accent">
                  resize image to 20KB
                </Link>{" "}
                and test the upload early.
              </p>
            </article>
          </div>
        </section>
      </div>
    </ToolShell>
  );
}
