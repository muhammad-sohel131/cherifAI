"use client";

import { ArrowRight, BarChart3, Calculator, FileText, Sparkles, TrendingUp } from "lucide-react";
import { useMemo } from "react";

/**
 * QuickToolsSection (JavaScript version)
 * Screenshot-style feature grid with large heading, subtitle, and four cards.
 * Tailwind-only. Plug-and-play for Next.js/React.
 *
 * Props (all optional):
 * - heading: string
 * - subheading: string
 * - onLaunch: (id: string) => void  // called when a card's CTA is clicked
 * - items: Array<{ id, title, blurb, bullets: string[], Icon: ReactComponent }>
 */
export default function WhatLikeToDo({
    heading = "WHAT WOULD YOU LIKE TO DO?",
    subheading =
    "Choose from our powerful AI‑powered tools designed to streamline your real estate workflow and provide professional‑grade analysis in seconds.",
    items,
    onLaunch,
}) {
    // Default items if none supplied
    const defaults = useMemo(
        () => [
            {
                id: "property-analysis",
                title: "Property Analysis",
                blurb:
                    "Deep dive into property metrics, ROI calculations, and market comparisons",
                bullets: [
                    "Cash flow analysis",
                    "Market comparables",
                    "Investment projections",
                    "Risk assessment",
                ],
                Icon: BarChart3,
            },
            {
                id: "mortgage-calculator",
                title: "Mortgage Calculator",
                blurb:
                    "Advanced mortgage calculations with multiple scenario planning",
                bullets: [
                    "Payment calculations",
                    "Amortization schedules",
                    "Rate comparisons",
                    "Refinance analysis",
                ],
                Icon: Calculator,
            },
            {
                id: "market-trends",
                title: "Market Trends",
                blurb: "Real‑time market insights and predictive analytics",
                bullets: [
                    "Market forecasts",
                    "Price trends",
                    "Neighborhood analysis",
                    "Investment opportunities",
                ],
                Icon: TrendingUp,
            },
            {
                id: "legal-docs",
                title: "Legal Documents",
                blurb: "AI‑generated contracts, agreements, and legal templates",
                bullets: [
                    "Purchase agreements",
                    "Lease contracts",
                    "Disclosure forms",
                    "Legal templates",
                ],
                Icon: FileText,
            },
        ],
        []
    );

    const data = items?.length ? items : defaults;

    return (
        <section className="w-full bg-neutral-950 text-neutral-100">
            <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
                {/* Badge */}
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-teal-800/50 bg-neutral-900/60 px-3 py-1 text-xs font-medium brandColor shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" /> Quick Actions
                    </span>
                </div>

                {/* Heading */}
                <div className="mt-6 text-center">
                    <h2 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        {heading}
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm text-neutral-300 sm:text-base">
                        {subheading}
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((card) => (
                        <FeatureCard key={card.id} {...card} onLaunch={onLaunch} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ id, title, blurb, bullets, Icon, onLaunch }) {
    return (
        <div className="group relative rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-900/30 p-5 shadow-lg transition hover:shadow-xl hover:shadow-teal-900/20">
            {/* Glow ring */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-800 group-hover:ring-teal-600/60"></div>

            {/* Icon chip */}
            <div className="inline-flex items-center justify-center rounded-xl bg-neutral-900/80 p-3 ring-1 ring-inset ring-neutral-800">
                {Icon ? <Icon className="h-5 w-5 brandColor" /> : null}
            </div>

            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{blurb}</p>

            <ul className="mt-4 space-y-2 text-sm text-neutral-300/90">
                {bullets?.map((b, i) => (
                    <li key={i} className="flex gap-2">
                        <span className="select-none">•</span>
                        <span>{b}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-6">
                <button
                    onClick={() => onLaunch?.(id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900/80 px-4 py-2 text-sm font-semibold brandColor ring-1 ring-inset ring-teal-700/50 transition hover:text-white hover:brandBg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                    Get Started <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
