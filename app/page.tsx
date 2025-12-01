import Link from "next/link";
import { program, getAllModules, type Module } from "./lib/exchangeLife";

export default function HomePage() {
  const modules: Module[] = getAllModules();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">
            {program.displayName ?? "Exchange Life"}
          </h1>
          <p className="text-slate-300">{program.description}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Modules</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {modules.map((m) => (
              <Link
                key={m.slug}
                href={`/modules/${m.slug}`}
                className="block rounded-2xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-300 transition"
              >
                <div className="text-xs text-slate-400 mb-1">
                  Step {m.order}
                </div>
                <div className="font-semibold mb-1">{m.title}</div>
                <p className="text-sm text-slate-300 line-clamp-3">
                  {m.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
