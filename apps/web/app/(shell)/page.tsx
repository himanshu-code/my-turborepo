"use client";

import { Sparkles } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
        <div className="relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium animate-float backdrop-blur-md shadow-lg shadow-indigo-500/10">
            <Sparkles size={16} className="text-indigo-400" />
            <span className="tracking-wide">Welcome to the Future</span>
          </div>
        </div>

        {/* Animated Background Orbs */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-[80px] opacity-30 -top-[150px] -right-[150px] animate-float-slow" />
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-[80px] opacity-30 -bottom-[100px] -left-[100px] animate-float-slow [animation-delay:2s]" />
        <div className="absolute w-[450px] h-[450px] bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full blur-[80px] opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow [animation-delay:4s]" />
      </section>
    </div>
  );
}
