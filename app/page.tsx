"use client";
import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { BlueTitle, GrayTitle } from "@/components/reusables";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { PLACEHOLDERS, SUGGESTIONS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isFocused || prompt.trim()) return;

    const t = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 3000);
    return () => clearInterval(t);
  }, [isFocused, prompt]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 200) + "px";
  }, [prompt]);

  const handleSuggestion = (suggestion: string) => {
    setPrompt(suggestion);
    textareaRef.current?.focus();
  };

  const handleSubmit = async () => {
    if (!prompt.trim() || !isSignedIn) return;
    router.push(`/workspace?prompt=${encodeURIComponent(prompt.trim())}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
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

        {/*Prompt Box*/}
        <div className="relative mx-auto mt-12 w-full max-w-2xl">
          <div
            className={cn(
              "rounded-2xl border bg-[#111111] duration-200",
              isFocused
                ? "border-white/20 ring-1 ring-white/8"
                : "border-white/8",
            )}
          >
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              rows={1}
              className="w-full resize-none px-5 pb-4 pt-5 bg-transparent text-sm placeholder:text-white/40 focus:outline-none sm:text-base"
              style={{ minHeight: 56, maxHeight: 200 }}
              placeholder={PLACEHOLDERS[placeholderIndex]}
            />
            <div className="flex items-center justify-between border-t border-white/6 px-4 py-2.5">
              <span className="text-xs text-white/40">
                Press Enter to generate. Shift + Enter for new line.
              </span>
              {isSignedIn ? (
                <Button
                  className="h-8 rounded-full px-5 font-semibold"
                  variant={prompt.trim() ? "default" : "secondary"}
                  onClick={handleSubmit}
                  disabled={!prompt.trim()}
                >
                  Generate
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white border border-white/50 hover:border-white/40 hover:text-white/80 rounded-xl"
                  >
                    Sign In
                    <ArrowRight />
                  </Button>
                </SignInButton>
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-white/40 hover:border-white/6 hover:bg-white/15 hover:bg-white/8 hover:text-white/70"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-10 text-xs text-white/40">
          No credit card required . 10 free generations on sign up
        </p>
      </section>
    </main>
  );
}
