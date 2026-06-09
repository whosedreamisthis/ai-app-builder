import { Badge } from "@/components/ui/badge";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { BlueTitle, GrayTitle } from "@/components/reusables";

import PromptBox from "@/components/prompt-box";

export default function Home() {
  return (
    <main className="font-sans min-h-screen bg-[#0a0a0a] selection:bg-white/20">
      <section className="relative font-sans flex flex-col items-center overflow-hidden px-4 pb-24 pt-40 text-center">
        <HoleBackground
          strokeColor="rgba(255,255,255,0.05)"
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          }}
        />
        <Badge variant="outline" className="gap-2 p-4 backdrop-blue-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Powered by Gemini 3.5 Flash
        </Badge>
        <h1 className="mx-auto max-w-3xl text-balance font-serif text-5xl leading-tight tracking-tight sm:text-5xl lg:text-7xl z-10">
          <GrayTitle>Forge your dream</GrayTitle>
          <br />
          <BlueTitle>from a single prompt</BlueTitle>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-white/40 z-10">
          Describe what you want to build. AI writes the code, picks the
          packages, and renders a live preview all inside your browser.
        </p>

        <PromptBox />

        <p className="mt-10 text-xs text-white/40">
          No credit card required . 10 free generations on sign up
        </p>
      </section>
    </main>
  );
}
