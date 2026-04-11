import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FormTools | Tools for Govt Form Preparation",
  description:
    "Learn how FormTools helps students and applicants prepare images, passport photos, signatures, and PDFs for government forms and job applications.",
};

export default function AboutPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-ink/10 bg-white/90 p-6 shadow-soft sm:p-10">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About FormTools
          </h1>
          <p className="text-base leading-7 text-ink/70 sm:text-lg">
            FormTools is built to help students, job seekers, and applicants
            quickly prepare photos, signatures, and PDFs for online government
            forms, recruitment portals, and exam applications.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-[28px] border border-ink/10 bg-white/85 p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Why this site exists</h2>
          <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
            Many application portals reject files because of strict size or format
            rules. FormTools keeps that process simple with minimal browser-based
            utilities that work quickly on both phone and desktop.
          </p>
        </article>
        <article className="rounded-[28px] border border-ink/10 bg-white/85 p-6 shadow-soft">
          <h2 className="text-xl font-semibold">What we focus on</h2>
          <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
            The goal is practical file preparation: resize images, create
            passport photo sheets, compress PDFs, and adjust signatures without
            forcing users to install heavy editing software.
          </p>
        </article>
      </section>
    </main>
  );
}
