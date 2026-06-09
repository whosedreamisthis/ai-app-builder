"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PLACEHOLDERS, SUGGESTIONS } from "@/lib/data";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const PromptBox = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isSignedIn } = useAuth();
  const router = useRouter();

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
    <div className="relative mx-auto mt-12 w-full max-w-2xl">
      <div
        className={cn(
          "rounded-2xl border bg-[#111111] duration-200",
          isFocused ? "border-white/20 ring-1 ring-white/8" : "border-white/8",
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
            className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-white/40 hover:border-white/6 hover:bg-white/15 hover:text-white/70"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptBox;
