import type { Metadata } from "next";
import { PDFSEOContent } from "@/components/seo/pdf-seo-content";
import { ToolShell } from "@/components/ui/tool-shell";
import { pdfSeoPages, type PDFSEOPageConfig } from "@/lib/pdf-seo-pages";

export function getPDFSEOMetadata(slug: keyof typeof pdfSeoPages): Metadata {
  const page = pdfSeoPages[slug];

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  };
}

export function PDFSEOPage({ page }: { page: PDFSEOPageConfig }) {
  return (
    <ToolShell title={page.shellTitle} description={page.shellDescription}>
      <PDFSEOContent
        h1={page.h1}
        description={page.pageDescription}
        defaultTarget={page.defaultTarget}
        steps={page.steps}
        worksFor={page.worksFor}
        faqs={page.faqs}
      />
    </ToolShell>
  );
}
