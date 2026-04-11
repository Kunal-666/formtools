import { PDFSEOPage, getPDFSEOMetadata } from "@/components/seo/pdf-seo-page";
import { pdfSeoPages } from "@/lib/pdf-seo-pages";

export const dynamic = "force-static";
export const metadata = getPDFSEOMetadata("compress-pdf-100kb");

export default function CompressPdf100KbPage() {
  return <PDFSEOPage page={pdfSeoPages["compress-pdf-100kb"]} />;
}
