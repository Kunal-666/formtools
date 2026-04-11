import { PDFSEOPage, getPDFSEOMetadata } from "@/components/seo/pdf-seo-page";
import { pdfSeoPages } from "@/lib/pdf-seo-pages";

export const dynamic = "force-static";
export const metadata = getPDFSEOMetadata("compress-pdf-for-railway-form");

export default function CompressPdfForRailwayFormPage() {
  return <PDFSEOPage page={pdfSeoPages["compress-pdf-for-railway-form"]} />;
}
