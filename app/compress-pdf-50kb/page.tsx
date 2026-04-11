import { PDFSEOPage, getPDFSEOMetadata } from "@/components/seo/pdf-seo-page";
import { pdfSeoPages } from "@/lib/pdf-seo-pages";

export const dynamic = "force-static";
export const metadata = getPDFSEOMetadata("compress-pdf-50kb");

export default function CompressPdf50KbPage() {
  return <PDFSEOPage page={pdfSeoPages["compress-pdf-50kb"]} />;
}
