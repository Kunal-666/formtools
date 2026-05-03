import type { Metadata } from "next";
import Link from "next/link";
import PassportPhotoToolClient from "@/components/client/passport-photo-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Passport Photo Maker | Govt Form Toolkit",
  description:
    "Create a printable A4 grid of passport photos with presets, background color, enhancement controls, orientation options, and basic background removal.",
  keywords: [
    "passport photo maker",
    "passport photo sheet a4",
    "passport photo for govt form",
  ],
  openGraph: {
    title: "Passport Photo Maker | FormTools",
    description:
      "Create a printable A4 passport photo sheet with presets, background color, enhancements, orientation, and optional background removal.",
    url: "https://formtools.site/passport-photo-maker",
    type: "website",
  },
};

export default function PassportPhotoMakerPage() {
  return (
    <ToolShell
      title="Passport Photo Maker"
      description="Arrange a passport-style image into a neat A4 photo sheet with size presets, portrait or landscape layouts, enhancement controls, and simple background cleanup."
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Passport Photo Maker (A4 Sheet) Online
          </h1>
          <div className="space-y-4 text-sm leading-7 text-ink/75 sm:text-base">
            <p>
              This passport photo maker helps you turn a single portrait into a
              clean A4 photo sheet that you can print. It is useful for SSC,
              Railway, banking, and other government forms where you need
              passport-style photos ready for submission or physical copies.
            </p>
            <p>
              Many applicants face two common issues: the background is not
              uniform, or the final file is too large for online upload. This
              tool focuses on a print-ready sheet first, and you can also use{" "}
              <Link
                href="/passport-photo-size-maker"
                className="font-medium text-accent"
              >
                passport photo size maker
              </Link>{" "}
              or{" "}
              <Link href="/resize-image-50kb" className="font-medium text-accent">
                resize image to 50KB
              </Link>{" "}
              if your portal needs a small file size.
            </p>
            <p>
              For best results, start with a clear front-facing photo, good
              lighting, and a plain background. Use presets for Indian passport
              photo sizes, choose portrait or landscape A4, apply mild
              enhancement for clarity, and optionally try background removal if
              your photo has a messy backdrop.
            </p>
            <p className="text-sm font-medium text-ink/60 sm:text-base">
              Free | No Signup | Instant Download | Works for Govt Forms
            </p>
          </div>
        </section>

        <PassportPhotoToolClient />

        <section className="rounded-[24px] border border-ink/10 bg-muted/35 p-5">
          <h2 className="text-xl font-semibold">Related Tools</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/passport-photo-size-maker"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Passport photo size maker
            </Link>
            <Link
              href="/photo-under-50kb-ssc"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              SSC photo under 50KB
            </Link>
            <Link
              href="/resize-image-100kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Resize image to 100KB
            </Link>
            <Link
              href="/signature-under-20kb"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              Signature under 20KB
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                What passport photo size is used in India?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Common requirements include 35×45mm or 2×2 inch depending on the
                portal. If you only need an upload-ready file size, use{" "}
                <Link
                  href="/passport-photo-size-maker"
                  className="font-medium text-accent"
                >
                  passport photo size maker
                </Link>{" "}
                and then resize for the KB rule if required.
              </p>
            </article>
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                How do I make a passport photo under 50KB?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Create your photo sheet or portrait first, then use{" "}
                <Link href="/resize-image-50kb" className="font-medium text-accent">
                  resize image to 50KB
                </Link>{" "}
                for portal upload limits. For SSC flows, see{" "}
                <Link
                  href="/photo-under-50kb-ssc"
                  className="font-medium text-accent"
                >
                  photo under 50KB for SSC form
                </Link>
                .
              </p>
            </article>
            <article className="rounded-[22px] border border-ink/10 bg-white p-5">
              <h3 className="text-base font-semibold">
                Does background removal affect printing?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                Background removal is optional. If your photo already has a
                clean background, you can keep it and only adjust brightness or
                contrast. For exact KB upload rules, use the{" "}
                <Link href="/image-resizer" className="font-medium text-accent">
                  custom image resizer
                </Link>{" "}
                after generating the final portrait.
              </p>
            </article>
          </div>
        </section>
      </div>
    </ToolShell>
  );
}
