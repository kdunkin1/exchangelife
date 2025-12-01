"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getModuleBySlug,
  getNextModuleSlug,
  getPrevModuleSlug,
} from "@/app/lib/exchangeLife";
import type { ArcStep } from "@/app/lib/exchangeLife";

type JournalEntry = {
  id: string;
  createdAt: string;
  content: string;
};

export default function ModulePageClient({ slug }: { slug: string }) {
  const router = useRouter();

  const moduleData = getModuleBySlug(slug);
  const nextSlug = getNextModuleSlug(slug);
  const prevSlug = getPrevModuleSlug(slug);

  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (!slug) return;
    const raw = localStorage.getItem(`exchange-journal:${slug}`);
    if (!raw) return;
    try {
      setEntries(JSON.parse(raw));
    } catch {
      setEntries([]);
    }
  }, [slug]);

  const saveEntries = (next: JournalEntry[]) => {
    setEntries(next);
    localStorage.setItem(`exchange-journal:${slug}`, JSON.stringify(next));
  };

  const addEntry = () => {
    if (!draft.trim()) return;
    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      content: draft.trim(),
    };
    const next = [newEntry, ...entries];
    saveEntries(next);
    setDraft("");
  };

  if (!moduleData) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
        <div className="space-y-3 text-center">
          <p>Module not found.</p>
          <button
            onClick={() => router.push("/")}
            className="px-3 py-1.5 rounded-full bg-slate-800 text-sm"
          >
            Back to modules
          </button>
        </div>
      </main>
    );
  }

  const {
    title,
    summary,
    goals,
    keyConcepts,
    scriptureRefs,
    journalPrompts,
    arcTemplates,
    requiresLeader,
  } = moduleData;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <button
          onClick={() => router.push("/")}
          className="text-sm text-slate-300 hover:text-emerald-300"
        >
          ← Back to modules
        </button>

        <header className="space-y-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-slate-300">{summary}</p>
        </header>

        {/* LEFT: goals / concepts / scripture  —  RIGHT: journaling */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Goals</h2>
            <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
              {goals.map((g: string, i: number) => (
                <li key={i}>{g}</li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold pt-4">Key Concepts</h2>
            <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
              {keyConcepts.map((c: string, i: number) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold pt-4">Scripture</h2>
            <ul className="list-disc list-inside text-sm text-emerald-300 space-y-1">
              {scriptureRefs.map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Journal with Jesus */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Journal with Jesus</h2>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="w-full h-32 rounded-2xl bg-slate-900 border border-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder={
                journalPrompts[0] ??
                "Write your prayer or reflection here..."
              }
            />
            <button
              onClick={addEntry}
              className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-950"
            >
              Save entry
            </button>

            {entries.length > 0 && (
              <div className="pt-4 space-y-3 max-h-64 overflow-y-auto">
                <h3 className="text-sm font-semibold text-slate-200">
                  Your past entries
                </h3>
                {entries.map((e) => (
                  <div
                    key={e.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-xs text-slate-200"
                  >
                    <div className="text-[10px] text-slate-400 mb-1">
                      {new Date(e.createdAt).toLocaleString()}
                    </div>
                    <div className="whitespace-pre-wrap">{e.content}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ARC section */}
        <section className="space-y-4 pt-4 border-t border-slate-800">
          <h2 className="text-lg font-semibold">Admit · Renounce · Confess</h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <ArcColumn label="Admit" steps={arcTemplates.admit} />
            <ArcColumn label="Renounce" steps={arcTemplates.renounce} />
            <ArcColumn label="Confess" steps={arcTemplates.confess} />
          </div>
        </section>

        {/* Navigation between modules */}
        <section className="pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-xs text-slate-400">
            {requiresLeader
              ? "This module is recommended with a leader or counselor present."
              : "This module can be walked through personally or with a friend/leader."}
          </div>
          <div className="flex gap-2 justify-end">
            {prevSlug && (
              <button
                onClick={() => router.push(`/modules/${prevSlug}`)}
                className="px-3 py-1.5 rounded-full border border-slate-700 text-sm text-slate-200 hover:border-emerald-400"
              >
                ← Previous
              </button>
            )}
            {nextSlug && (
              <button
                onClick={() => router.push(`/modules/${nextSlug}`)}
                className="px-3 py-1.5 rounded-full bg-emerald-500 text-sm font-medium text-slate-950 hover:bg-emerald-400"
              >
                Next module →
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function ArcColumn({
  label,
  steps,
}: {
  label: string;
  steps: ArcStep[];
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
      <h3 className="font-semibold text-slate-100">{label}</h3>
      <ol className="list-decimal list-inside text-xs text-slate-200 space-y-1">
        {steps.map((step, i) => (
          <li key={i}>
            <div className="font-semibold">{step.title}</div>
            <div className="text-[11px] text-slate-300 mt-0.5">
              {step.description}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
