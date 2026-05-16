export function Header() {
  return (
    <header className="flex flex-col gap-6 rounded-3xl bg-slate-950 px-8 py-10 text-white shadow-xl md:flex-row md:items-center md:justify-between">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
          Legal-Tech Showcase
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          LexPortugal AI
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          AI-powered platform concept for Portuguese citizenship workflow
          management, document organization, and responsive digital process
          experiences.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
        <p className="text-sm text-slate-300">Portfolio version</p>
        <p className="mt-2 text-2xl font-bold">Public Showcase</p>
      </div>
    </header>
  );
}
