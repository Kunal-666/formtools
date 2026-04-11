import { SEOPage, getSEOMetadata } from "@/components/seo/seo-page";
import { seoPages } from "@/lib/seo-pages";

export const dynamic = "force-static";
export const metadata = getSEOMetadata("resize-image-30kb");

export default function ResizeImage30KbPage() {
  return <SEOPage page={seoPages["resize-image-30kb"]} />;
}
