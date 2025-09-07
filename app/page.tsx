"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Compatibility from "@/components/Compatibility";
import QuickStart from "@/components/QuickStart";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Compatibility />
      <QuickStart />
      <Community />
      <Footer />
    </div>
  );
}

