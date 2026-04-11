import { SEOPage, getSEOMetadata } from "@/components/seo/seo-page";
import { seoPages } from "@/lib/seo-pages";

export const dynamic = "force-static";
export const metadata = getSEOMetadata("photo-under-50kb-ssc");

export default function PhotoUnder50KbSSCPage() {
  return <SEOPage page={seoPages["photo-under-50kb-ssc"]} />;
}
