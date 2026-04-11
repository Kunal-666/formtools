import type { Metadata } from "next";
import { SEOContent } from "@/components/seo/seo-content";
import { ToolShell } from "@/components/ui/tool-shell";
import { seoPages, type SEOPageConfig } from "@/lib/seo-pages";

export function getSEOMetadata(slug: keyof typeof seoPages): Metadata {
  const page = seoPages[slug];

  return {
    title: page.title,
    description: page.description,
  };
}

export function SEOPage({ page }: { page: SEOPageConfig }) {
  return (
    <ToolShell title={page.shellTitle} description={page.shellDescription}>
      <SEOContent
        h1={page.h1}
        intro={page.intro}
        targetKB={page.targetKB}
        faqs={page.faqs}
      />
    </ToolShell>
  );
}
