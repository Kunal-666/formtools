import { SEOPage, getSEOMetadata } from "@/components/seo/seo-page";
import { seoPages } from "@/lib/seo-pages";

export const dynamic = "force-static";
export const metadata = getSEOMetadata("signature-under-20kb");

export default function SignatureUnder20KbPage() {
  return <SEOPage page={seoPages["signature-under-20kb"]} />;
}
