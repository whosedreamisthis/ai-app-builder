import React from "react";
import { useAuth, SignInButton } from "@clerk/nextjs";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { SectionHeading } from "@/components/reusables";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative mx-auto mb-32 max-w-5xl overflow-hidden rounded-2xl border border-white/8 px-10 py-24 text-center">
      <HoleBackground
        strokeColor="rgba(255,255,255,0.05)" // blur
        numberOfLines={36}
        numberOfDiscs={36}
        particleRGBColor={[147, 197, 253]}
        className="absolute inset-0 h-full w-full"
        style={{
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
        }}
      />

      <SectionHeading gray="Start building," blue="for free." />

      <p className="mb-8 text-sm leading-relaxed text-white/40">
        Get 10 free generations on sign up. No credit card required.
        <br />
        Upgrade when you&apos;re ready.
      </p>

      <SignInButton mode="modal">
        <Button size="lg" className="relative h-11 rounded-full bg-white px-8">
          Get started free
          <ChevronRight className="h-4 w-4" />
        </Button>
      </SignInButton>
    </section>
  );
};

export default CallToAction;
