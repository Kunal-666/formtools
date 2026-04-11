import { SEOPage, getSEOMetadata } from "@/components/seo/seo-page";
import { seoPages } from "@/lib/seo-pages";

export const dynamic = "force-static";
export const metadata = getSEOMetadata("resize-image-50kb");

export default function ResizeImage50KbPage() {
  return <SEOPage page={seoPages["resize-image-50kb"]} />;
}
