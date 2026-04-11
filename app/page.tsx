import Link from "next/link";

const tools = [
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
    href: "/photo-under-50kb-ssc",
    title: "Photo Under 50KB for SSC",
    description: "Prepare SSC-ready photo uploads under 50KB with a simple browser tool.",
  },
  {
    href: "/signature-under-20kb",
    title: "Signature Under 20KB",
    description: "Resize signature images for SSC and other government application portals.",
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
  {
    href: "/compress-pdf-200kb",
    title: "Compress PDF to 200 KB",
    description: "Apply light client-side PDF compression for form submissions.",
  },
  {
    href: "/signature-resize",
    title: "Signature Resize",
    description: "Crop and resize signature images for document upload fields.",
  },
];

export default function HomePage() {
  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-[32px] border border-ink/10 bg-white/90 p-6 shadow-soft sm:p-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            Govt Form Toolkit
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Prepare photos, PDFs, and signatures for online government forms.
          </h1>
          <p className="text-base leading-7 text-ink/70 sm:text-lg">
            A minimal mobile-friendly workspace for common upload requirements:
            exact image sizes, passport photo sheets, lighter PDFs, and neatly
            cropped signatures.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-[28px] border border-ink/10 bg-white/85 p-6 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-accent/30"
          >
            <h2 className="text-xl font-semibold">{tool.title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              {tool.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
