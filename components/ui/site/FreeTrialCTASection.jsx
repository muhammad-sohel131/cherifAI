"use client";

import { Sparkles } from "lucide-react";

/**
 * FreeTrialCTASection.jsx
 * A clean dark gradient CTA bar matching your screenshot style.
 * Tailwind-only, JavaScript, fully responsive.
 */
export default function FreeTrialCTASection({
    heading = "Ready to Transform Your Real Estate Business?",
    subtext =
    "Join thousands of professionals who are already using AI to make smarter real estate decisions.",
    buttonText = "Start Your Free Trial",
    onClick,
}) {
    return (
        <section className="w-full bg-neutral-950 text-neutral-100 px-4 py-12 sm:py-16">
            <div className="mx-auto max-w-5xl rounded-2xl border border-cyan-900/40 bg-gradient-to-r from-cyan-950/40 to-neutral-900/50 px-6 py-12 text-center shadow-lg ring-1 ring-inset ring-cyan-900/40">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                    {heading}
                </h2>
                <p className="text-neutral-300 max-w-3xl mx-auto text-sm sm:text-base mb-8">
                    {subtext}
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={onClick}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                        <Sparkles className="h-4 w-4 text-cyan-600" />
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
}