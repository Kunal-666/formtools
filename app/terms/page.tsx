import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | FormTools",
  description:
    "Read the FormTools terms for using browser-based utilities to prepare images, PDFs, passport photos, and signatures.",
};

export default function TermsPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-ink/10 bg-white/90 p-6 shadow-soft sm:p-10">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms
          </h1>
          <p className="text-base leading-7 text-ink/70 sm:text-lg">
            FormTools is provided to help users prepare files for online forms.
            Please verify official instructions before submitting any final
            application document.
          </p>
        </div>
      </section>
    </main>
  );
}
