import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://formtools.site"),
  title: "FormTools | Image, PDF, Passport Photo & Signature Tools",
  description:
    "FormTools helps students and applicants resize images, compress PDFs, prepare passport photos, and format signatures for government forms and job applications.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "FormTools | Govt Form Toolkit",
    description:
      "Resize images, compress PDFs, prepare passport photos, and format signatures for SSC, Railway, and other government forms.",
    url: "https://formtools.site",
    siteName: "FormTools",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} font-sans`}>
        <div className="min-h-screen">
          <Navbar />
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
