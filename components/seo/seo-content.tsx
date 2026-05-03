import Link from "next/link";
import ResizeImageToolClient from "@/components/client/resize-image-tool-client";

type FAQItem = {
  question: string;
  answer: string;
};

type LinkItem = {
  href: string;
  label: string;
};

type SEOContentProps = {
  h1: string;
  description: string;
  intro: string[];
  targetKB: number;
  content: string[];
  steps: string[];
  worksFor: string[];
  faqs: FAQItem[];
  links?: LinkItem[];
};

const defaultLinks: LinkItem[] = [
  { href: "/resize-image-20kb", label: "Resize image to 20KB" },
  { href: "/resize-image-50kb", label: "Resize image to 50KB" },
  { href: "/resize-image-100kb", label: "Resize image to 100KB" },
  { href: "/image-resizer", label: "Custom image resizer" },
];

export function SEOContent({
  h1,
  description,
  intro,
  targetKB,
  content,
  steps,
  worksFor,
  faqs,
  links = defaultLinks,
}: SEOContentProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {h1}
        </h1>
        <p className="text-sm leading-7 text-ink/75 sm:text-base">{description}</p>
        <p className="text-sm font-medium text-ink/60 sm:text-base">
          Free | No Signup | Instant Download | Works for Govt Forms
        </p>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Best for photos, signatures, and online form uploads
        </p>
        <p className="text-sm leading-7 text-ink/75 sm:text-base">
          Need a strict limit? Try{" "}
          <Link href="/resize-image-20kb" className="font-medium text-accent">
            resize image to 20KB
          </Link>
          ,{" "}
          <Link href="/resize-image-50kb" className="font-medium text-accent">
            resize image to 50KB
          </Link>
          , or use the{" "}
          <Link href="/image-resizer" className="font-medium text-accent">
            custom image resizer
          </Link>{" "}
          when a portal shows a unique KB limit.
        </p>
        <div className="space-y-4 text-sm leading-7 text-ink/75 sm:text-base">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <ResizeImageToolClient defaultTargetKB={targetKB} />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About This Tool</h2>
        <div className="space-y-4 text-sm leading-7 text-ink/70 sm:text-base">
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[24px] border border-ink/10 bg-white/90 p-5">
          <h2 className="text-xl font-semibold">How to Resize</h2>
          <ol className="mt-3 space-y-2 text-sm leading-7 text-ink/70 sm:text-base">
            {steps.map((step, index) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-[24px] border border-ink/10 bg-white/90 p-5">
          <h2 className="text-xl font-semibold">Works For</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {worksFor.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/10 bg-muted px-3 py-1.5 text-sm text-ink/75"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-[24px] border border-ink/10 bg-muted/35 p-5">
        <h2 className="text-xl font-semibold">Related Tools</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[22px] border border-ink/10 bg-white p-5"
            >
              <h3 className="text-base font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70 sm:text-base">
                {faq.answer}{" "}
                <span className="whitespace-nowrap">
                  Try{" "}
                  <Link href="/image-resizer" className="font-medium text-accent">
                    custom image resizer
                  </Link>{" "}
                  for exact limits.
                </span>
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
