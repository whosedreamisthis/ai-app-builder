import React from "react";
import { SectionHeading, SectionLabel } from "@/components/reusables";
import { FEATURES } from "@/lib/data";

const Features = () => {
  return (
    <section className="px-4 pb-32">
      <div className="mx-auto mb-14 max-w-5xl text-center">
        <SectionLabel>Everything you need</SectionLabel>
        <SectionHeading gray="From prompt" blue="to production." />
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="group bg-[#0a0a0a] p-7 hover:bg-[#0f0f0f]"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/4 group-hover:border-white/15 group-hover:bg-white/8">
              <Icon className="h-4 w-4 text-white/60 group-hover:text-blue-400/70" />
            </div>
            <p className="mb-2 text-sm font-semibold">{label}</p>
            <p className="text-sm leading-relaxed text-white/40">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
