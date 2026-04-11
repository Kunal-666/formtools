import Link from "next/link";

type ToolShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function ToolShell({ title, description, children }: ToolShellProps) {
  return (
    <main className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <Link href="/" className="text-sm font-medium text-accent">
            Back to toolkit
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-ink/70 sm:text-base">
            {description}
          </p>
        </div>
      </div>
      <section className="rounded-[28px] border border-ink/10 bg-white/90 p-4 shadow-soft sm:p-6">
        {children}
      </section>
    </main>
  );
}
