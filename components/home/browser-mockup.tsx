import React from "react";
import { ArrowRight, Zap } from "lucide-react";

const BrowserMockup = () => {
  return (
    <section className="px-4 pb-32">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3">
          <div className="flex gap-1.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-3 w-3 rounded-full bg-white/10" />
            ))}
          </div>

          <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md bg-white/5 px-3">
            <span className="text-xs text-white/25">forge.app/workspace</span>
          </div>
        </div>

        <div className="flex h-105">
          {/* Chat panel */}
          <div className="flex w-80 flex-col border-r border-white/6 bg-[#0d0d0d]">
            <div className="border-b border-white/6 px-4 py-3">
              <p className="text-xs uppercase tracking-wider text-white/30">
                Chat
              </p>
            </div>

            <div className="flex-1 space-y-4 px-4 py-4">
              <div className="flex justify-end">
                <div className="max-w-55 rounded-2xl rounded-br-sm bg-white/10 px-3.5 py-2.5">
                  <p className="text-xs text-white/80">
                    Build a kanban board with 3 columns and drag-and-drop
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white">
                  <Zap className="h-3 w-3 fill-black text-black" />
                </div>

                <div className="rounded-2xl rounded-tl-sm bg-white/5 px-3.5 py-2.5">
                  <p className="text-xs text-white/60">
                    I&apos;ll build a Kanban board with Todo, In Progress, and
                    Done columns. I&apos;ll use{" "}
                    <code className="text-blue-400/80">@dnd-kit/core</code> for
                    smooth drag-and-drop…
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white">
                  <Zap className="h-3 w-3 fill-black text-black" />
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white/5 px-3.5 py-3">
                  {[0, 0.15, 0.3].map((delay) => (
                    <span
                      key={delay}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40"
                      style={{ animationDelay: `${delay}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/6 px-3 py-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <span className="flex-1 text-xs text-white/20">
                  Ask AI to modify…
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-white/20" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex items-center gap-1 border-b border-white/6 px-4">
              <button className="border-b-2 border-blue-400 px-3 py-2.5 text-xs text-white">
                Preview
              </button>
              <button className="px-3 py-2.5 text-xs text-white/30">
                Code
              </button>
            </div>

            <div className="flex flex-1 gap-3 overflow-hidden bg-[#141414] p-5">
              {["Todo", "In Progress", "Done"].map((col, ci) => (
                <div key={col} className="flex w-1/3 flex-col gap-2">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-white/40">
                      {col}
                    </span>

                    <span className="rounded-full bg-white/8 px-1.5 py-0.5 text-xs text-white/30">
                      {[3, 2, 1][ci]}
                    </span>
                  </div>

                  {Array.from({ length: [3, 2, 1][ci] }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-white/8 bg-[#1a1a1a] p-2.5"
                    >
                      <div
                        className="mb-1.5 h-2 rounded-full bg-white/15"
                        style={{ width: `${60 + i * 15}%` }}
                      />
                      <div className="h-1.5 w-3/4 rounded-full bg-white/8" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowserMockup;
