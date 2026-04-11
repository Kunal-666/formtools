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
  intro: string[];
  targetKB: number;
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
  intro,
  targetKB,
  faqs,
  links = defaultLinks,
}: SEOContentProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {h1}
        </h1>
        <div className="space-y-4 text-sm leading-7 text-ink/75 sm:text-base">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <ResizeImageToolClient defaultTargetKB={targetKB} />

      <section className="rounded-[24px] border border-ink/10 bg-muted/35 p-5">
        <h2 className="text-xl font-semibold">Popular Image Resize Tools</h2>
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
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
