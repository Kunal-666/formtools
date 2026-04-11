import { SEOPage, getSEOMetadata } from "@/components/seo/seo-page";
import { seoPages } from "@/lib/seo-pages";

export const dynamic = "force-static";
export const metadata = getSEOMetadata("passport-photo-size-maker");

export default function PassportPhotoSizeMakerPage() {
  return <SEOPage page={seoPages["passport-photo-size-maker"]} />;
}
