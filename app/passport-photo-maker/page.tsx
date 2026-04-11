import type { Metadata } from "next";
import PassportPhotoToolClient from "@/components/client/passport-photo-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Passport Photo Maker | Govt Form Toolkit",
  description:
    "Create a printable A4 grid of passport photos with presets, background color, enhancement controls, orientation options, and basic background removal.",
};

export default function PassportPhotoMakerPage() {
  return (
    <ToolShell
      title="Passport Photo Maker"
      description="Arrange a passport-style image into a neat A4 photo sheet with size presets, portrait or landscape layouts, enhancement controls, and simple background cleanup."
    >
      <PassportPhotoToolClient />
    </ToolShell>
  );
}
