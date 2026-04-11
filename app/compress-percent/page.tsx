import { PDFSEOPage, getPDFSEOMetadata } from "@/components/seo/pdf-seo-page";
import { pdfSeoPages } from "@/lib/pdf-seo-pages";

export const dynamic = "force-static";
export const metadata = getPDFSEOMetadata("compress-percent");

export default function CompressPercentPage() {
  return <PDFSEOPage page={pdfSeoPages["compress-percent"]} />;
}
