import type { Metadata } from "next";
import { SEOContent } from "@/components/seo/seo-content";
import { JsonLd } from "@/components/seo/json-ld";
import { ToolShell } from "@/components/ui/tool-shell";
import { seoPages, type SEOPageConfig } from "@/lib/seo-pages";

export function getSEOMetadata(slug: keyof typeof seoPages): Metadata {
  const page = seoPages[slug];
  const url = `https://formtools.site/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
    },
  };
}

export function SEOPage({ page }: { page: SEOPageConfig }) {
  const url = `https://formtools.site/${page.slug}`;
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url,
  };

  const faqSchema =
    page.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <ToolShell title={page.shellTitle} description={page.shellDescription}>
      <JsonLd data={webPageSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <SEOContent
        h1={page.h1}
        description={page.pageDescription}
        intro={page.intro}
        targetKB={page.targetKB}
        content={page.content}
        steps={page.steps}
        worksFor={page.worksFor}
        faqs={page.faqs}
      />
    </ToolShell>
  );
}
