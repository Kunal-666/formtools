import Link from "next/link";

const imageTools = [
  {
    href: "/resize-image-20kb",
    title: "Resize Image to 20 KB",
    description: "Prepare very small image uploads for strict application portals.",
  },
  {
    href: "/resize-image-30kb",
    title: "Resize Image to 30 KB",
    description: "Compress photos near 30KB for online exams and job application forms.",
  },
  {
    href: "/resize-image-50kb",
    title: "Resize Image to 50 KB",
    description: "Target exact image size limits for government upload portals.",
  },
  {
    href: "/resize-image-100kb",
    title: "Resize Image to 100 KB",
    description: "Generate lighter photos that still preserve more detail.",
  },
  {
    href: "/image-resizer",
    title: "Custom Image Resizer",
    description: "Enter a target KB size and export a resized image to match it.",
  },
  {
    href: "/signature-under-20kb",
    title: "Signature Under 20KB",
    description:
      "Resize signature images for SSC and other government application portals.",
  },
  {
    href: "/passport-photo-size-maker",
    title: "Passport Photo Size Maker",
    description: "Prepare passport-style photos for govt forms and exam applications.",
  },
  {
    href: "/passport-photo-maker",
    title: "Passport Photo Maker",
    description: "Arrange passport photos into an A4 print-ready sheet.",
  },
];

const pdfTools = [
  {
    href: "/compress-pdf-20kb",
    title: "Compress PDF to 20KB",
    description: "Best for strict scanned document upload limits.",
  },
  {
    href: "/compress-pdf-50kb",
    title: "Compress PDF to 50KB",
    description: "Balance file size reduction with readability for form uploads.",
  },
  {
    href: "/compress-pdf-100kb",
    title: "Compress PDF to 100KB",
    description: "Reduce document size for SSC, Railway, and govt portals.",
  },
  {
    href: "/compress-pdf-200kb",
    title: "Compress PDF to 200KB",
    description: "Useful when a portal allows a larger but still limited PDF upload.",
  },
  {
    href: "/compress-pdf-for-ssc-form",
    title: "Compress PDF for SSC Form",
    description: "Use a practical PDF target for SSC-related scanned documents.",
  },
  {
    href: "/compress-pdf-for-railway-form",
    title: "Compress PDF for Railway Form",
    description: "Prepare lighter PDFs for railway recruitment and application uploads.",
  },
  {
    href: "/compress-percent",
    title: "Compress PDF by Percent",
    description: "Use preset PDF targets when you need a smaller scanned file quickly.",
  },
];

const popularUseCases = [
  {
    href: "/photo-under-50kb-ssc",
    title: "SSC Photo Under 50KB",
    description: "Useful for SSC forms and exam registration uploads.",
  },
  {
    href: "/signature-resize",
    title: "Signature Resize",
    description: "Crop and resize signatures for online application fields.",
  },
  {
    href: "/compress-pdf-200kb",
    title: "Compress PDF to 200KB",
    description: "A quick option for broader document upload limits.",
  },
];

function ToolGrid({
  title,
  description,
  tools,
}: {
  title: string;
  description: string;
  tools: { href: string; title: string; description: string }[];
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-ink/70 sm:text-base">
          {description}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-[28px] border border-ink/10 bg-white/85 p-6 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-accent/30"
          >
            <h3 className="text-xl font-semibold">{tool.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-ink/10 bg-white/90 p-6 shadow-soft sm:p-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            FormTools
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Prepare photos, PDFs, and signatures for online government forms.
          </h1>
          <p className="text-base leading-7 text-ink/70 sm:text-lg">
            A minimal mobile-friendly workspace for common upload requirements:
            exact image sizes, passport photo sheets, lighter PDFs, and neatly
            cropped signatures for exams, recruitment forms, and application portals.
          </p>
          <p className="text-sm font-medium text-ink/60 sm:text-base">
            Free | No Signup | Instant Download | Works for Govt Forms
          </p>
        </div>
      </section>

      <section className="rounded-[28px] border border-ink/10 bg-white/85 p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          How to prepare files for government forms
        </h2>
        <div className="mt-3 space-y-4 text-sm leading-7 text-ink/70 sm:text-base">
          <p>
            Most portals (SSC, Railway, banking, scholarships, and state
            recruitment) reject uploads for two reasons: the file is larger than
            the KB limit or the scan is unreadable after compression. If the
            form asks for a photo under a strict limit, use{" "}
            <Link href="/resize-image-50kb" className="font-medium text-accent">
              resize image to 50KB
            </Link>{" "}
            or{" "}
            <Link href="/resize-image-20kb" className="font-medium text-accent">
              resize image to 20KB
            </Link>{" "}
            and verify the preview before submission.
          </p>
          <p>
            For scanned documents like certificates or ID pages, start with a
            realistic target. If the portal says 100KB, try{" "}
            <Link
              href="/compress-pdf-100kb"
              className="font-medium text-accent"
            >
              compress PDF to 100KB
            </Link>{" "}
            first, and only go smaller if required. For very strict upload
            rules, use{" "}
            <Link href="/compress-pdf-50kb" className="font-medium text-accent">
              compress PDF to 50KB
            </Link>{" "}
            or{" "}
            <Link href="/compress-pdf-20kb" className="font-medium text-accent">
              compress PDF to 20KB
            </Link>{" "}
            and check that text is still readable.
          </p>
          <p>
            If you are preparing a signature file, portals often have a separate
            signature KB limit. Use{" "}
            <Link
              href="/signature-under-20kb"
              className="font-medium text-accent"
            >
              signature under 20KB
            </Link>{" "}
            or the{" "}
            <Link href="/signature-resize" className="font-medium text-accent">
              signature crop + resize tool
            </Link>{" "}
            to clean the edges. For print-ready passport photos, generate an
            A4 sheet using{" "}
            <Link
              href="/passport-photo-maker"
              className="font-medium text-accent"
            >
              passport photo maker
            </Link>
            .
          </p>
          <p className="text-sm font-medium text-ink/60 sm:text-base">
            Tip: Keep one “final upload” folder and test uploads early to avoid
            last-minute errors.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[24px] border border-ink/10 bg-white/85 p-5 shadow-soft">
            <h3 className="text-base font-semibold text-ink">
              How to compress PDF to 20KB for SSC form?
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Use{" "}
              <Link href="/compress-pdf-20kb" className="font-medium text-accent">
                compress PDF to 20KB
              </Link>{" "}
              for strict limits, but confirm readability. If the scan becomes
              unclear, try{" "}
              <Link
                href="/compress-pdf-50kb"
                className="font-medium text-accent"
              >
                compress PDF to 50KB
              </Link>{" "}
              and re-check the portal rule.
            </p>
          </article>
          <article className="rounded-[24px] border border-ink/10 bg-white/85 p-5 shadow-soft">
            <h3 className="text-base font-semibold text-ink">
              What if my photo is rejected even after resizing?
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Check format (JPG works best), then try a different preset like{" "}
              <Link href="/resize-image-30kb" className="font-medium text-accent">
                resize image to 30KB
              </Link>{" "}
              or use the{" "}
              <Link href="/image-resizer" className="font-medium text-accent">
                custom image resizer
              </Link>{" "}
              when the portal shows a unique KB limit.
            </p>
          </article>
          <article className="rounded-[24px] border border-ink/10 bg-white/85 p-5 shadow-soft">
            <h3 className="text-base font-semibold text-ink">
              Which tool should I use for Railway document uploads?
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              For scans, start with{" "}
              <Link
                href="/compress-pdf-for-railway-form"
                className="font-medium text-accent"
              >
                compress PDF for Railway form
              </Link>{" "}
              and use 100KB when possible. For images, use{" "}
              <Link href="/resize-image-100kb" className="font-medium text-accent">
                resize image to 100KB
              </Link>{" "}
              when you need more clarity.
            </p>
          </article>
          <article className="rounded-[24px] border border-ink/10 bg-white/85 p-5 shadow-soft">
            <h3 className="text-base font-semibold text-ink">
              Do you store uploaded files?
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Processing happens in your browser for these tools. See{" "}
              <Link href="/privacy-policy" className="font-medium text-accent">
                privacy policy
              </Link>{" "}
              for details.
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-[24px] border border-ink/10 bg-white/85 p-5 shadow-soft">
          <h2 className="text-lg font-semibold">Fast preparation</h2>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            Resize images, compress PDFs, and prepare signatures without opening heavy editing software.
          </p>
        </article>
        <article className="rounded-[24px] border border-ink/10 bg-white/85 p-5 shadow-soft">
          <h2 className="text-lg font-semibold">Built for uploads</h2>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            Helpful for SSC, Railway, banking, scholarship, and other government-form workflows.
          </p>
        </article>
        <article className="rounded-[24px] border border-ink/10 bg-white/85 p-5 shadow-soft">
          <h2 className="text-lg font-semibold">Browser-based</h2>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            Use it on desktop or mobile and download the processed file right away.
          </p>
        </article>
      </section>

      <ToolGrid
        title="Image Tools"
        description="Use these tools to resize photos, signatures, and passport images for portals that require exact file-size or format rules."
        tools={imageTools}
      />

      <ToolGrid
        title="PDF Tools"
        description="These PDF pages are optimized for scanned uploads and common government-form document requirements, including strict size limits."
        tools={pdfTools}
      />

      <ToolGrid
        title="Popular Use Cases"
        description="Jump into the most common form-preparation flows for SSC, signatures, and practical PDF upload limits."
        tools={popularUseCases}
      />
    </main>
  );
}
