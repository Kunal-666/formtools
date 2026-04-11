import Link from "next/link";
import CompressPdfToolClient from "@/components/client/compress-pdf-tool-client";

type FAQItem = {
  question: string;
  answer: string;
};

type PDFSEOContentProps = {
  h1: string;
  description: string;
  defaultTarget?: string;
  steps: string[];
  worksFor: string[];
  faqs: FAQItem[];
};

const otherPdfTools = [
  { href: "/compress-pdf-20kb", label: "Compress PDF to 20KB" },
  { href: "/compress-pdf-50kb", label: "Compress PDF to 50KB" },
  { href: "/compress-pdf-100kb", label: "Compress PDF to 100KB" },
  { href: "/compress-pdf-for-ssc-form", label: "Compress PDF for SSC Form" },
  { href: "/compress-pdf-for-railway-form", label: "Compress PDF for Railway Form" },
  { href: "/compress-percent", label: "Compress PDF by Percent" },
];

export function PDFSEOContent({
  h1,
  description,
  defaultTarget,
  steps,
  worksFor,
  faqs,
}: PDFSEOContentProps) {
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
          Best for scanned PDFs
        </p>
      </section>

      <CompressPdfToolClient defaultTarget={defaultTarget} />

      <section className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[24px] border border-ink/10 bg-white/90 p-5">
          <h2 className="text-xl font-semibold">How to Compress</h2>
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
        <h2 className="text-xl font-semibold">Other PDF Tools</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {otherPdfTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent/30 hover:text-accent"
            >
              {tool.label}
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
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
