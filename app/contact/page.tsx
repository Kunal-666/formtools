import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FormTools",
  description:
    "Contact FormTools for feedback, suggestions, or support related to image resizing, PDF compression, and passport photo preparation tools.",
};

export default function ContactPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-ink/10 bg-white/90 p-6 shadow-soft sm:p-10">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="text-base leading-7 text-ink/70 sm:text-lg">
            Share feedback, report an issue, or suggest a tool that would make
            government form preparation easier.
          </p>
        </div>
      </section>

      <section className="rounded-[28px] border border-ink/10 bg-white/85 p-6 shadow-soft">
        <form className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-ink/75">Name</span>
            <input
              type="text"
              className="min-h-11 w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-accent"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-ink/75">Email</span>
            <input
              type="email"
              className="min-h-11 w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-accent"
            />
          </label>
          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-ink/75">Message</span>
            <textarea
              rows={6}
              className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
