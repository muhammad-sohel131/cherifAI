"use client";

import { ArrowRight, Sparkles } from "lucide-react";

/**
 * ChatCTASection.jsx
 * A sleek, minimal CTA section matching the screenshot style.
 * Dark card with headline, subtext, and centered button.
 * Fully responsive and Tailwind-only.
 */
export default function ChatCTASection({
    heading = "Need Something Specific?",
    subtext =
    "Chat directly with Cherif, your AI real estate expert, for personalized guidance and custom analysis tailored to your unique situation.",
    buttonText = "Start Chatting",
    onClick,
}) {
    return (
        <section className="w-full bg-neutral-950 text-neutral-100 px-4 py-12 sm:py-16">
            <div className="mx-auto max-w-5xl rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 px-6 py-12 text-center shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                    {heading}
                </h2>
                <p className="text-neutral-300 max-w-3xl mx-auto text-sm sm:text-base mb-8">
                    {subtext}
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={onClick}
                        className="inline-flex items-center justify-center gap-2 rounded-full brandBg px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:brandBg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                        <Sparkles className="h-4 w-4" />
                        {buttonText}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}