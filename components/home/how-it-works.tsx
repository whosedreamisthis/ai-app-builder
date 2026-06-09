import React from "react";
import { STEPS } from "@/lib/data";
import { SectionHeading, SectionLabel } from "@/components/reusables";

const HowItWorks = () => {
  return (
    <section className="px-4 pb-32">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <SectionLabel>How it works</SectionLabel>
        <SectionHeading gray="Four steps" blue="to a working app." />
      </div>

      <div className="mx-auto max-w-3xl flex flex-col gap-10">
        {STEPS.map((step, i) => (
          <div key={step.number} className="relative flex gap-6">
            {i < STEPS.length - 1 && (
              <div className="absolute left-5 top-10 h-full w-px bg-white/20" />
            )}
            <div className="flex items-start` justify-center gap-5">
              <div className="flex h-7 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4">
                <span className="font-mono text-xs font-semibold text-white/50">
                  {step.number}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold sm:text-base">{step.label}</p>

              <p className="text-sm leading-relaxed text-white/40">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
