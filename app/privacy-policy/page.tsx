import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FormTools",
  description:
    "Read the FormTools privacy policy covering browser-based file handling, limited data storage, and how cookies may be used on the site.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-ink/10 bg-white/90 p-6 shadow-soft sm:p-10">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-base leading-7 text-ink/70 sm:text-lg">
            FormTools is designed to keep file processing simple and
            privacy-friendly for users preparing documents for online forms.
          </p>
        </div>
      </section>

      <section className="grid gap-4">
        <article className="rounded-[28px] border border-ink/10 bg-white/85 p-6 shadow-soft">
          <h2 className="text-xl font-semibold">File handling</h2>
          <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
            The tools are designed to process files in the browser wherever
            possible. We do not intentionally store uploaded images, signatures,
            or PDFs on a server through these UI flows.
          </p>
        </article>
        <article className="rounded-[28px] border border-ink/10 bg-white/85 p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Cookies and analytics</h2>
          <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
            If cookies or analytics are used in the future, they should only be
            used to improve site performance, usability, and reliability, not to
            collect unnecessary personal file data.
          </p>
        </article>
      </section>
    </main>
  );
}
