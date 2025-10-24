"use client";

import Container from "@/components/layout/sitelayout/Container";
import { AlertTriangle, BadgeCheck, Home, ShieldCheck, Star } from "lucide-react";

/**
 * TrustMetricsSection.jsx
 * Trust badges row + big metrics row + disclaimer card.
 * Tailwind-only. JavaScript. Plug into any Next.js/React page.
 */
export default function TrustMetricsSection({
    heading = "Trusted by Industry Leaders",
    badges,
    stats,
    disclaimerTitle = "Important Disclaimer",
    disclaimerText =
    "This AI assistant provides educational information and analysis tools. All advice should be verified with licensed professionals. Real estate investments carry inherent risks, and past performance does not guarantee future results. Always consult with qualified legal, financial, and real estate professionals before making investment decisions.",
}) {
    const badgeItems = badges?.length
        ? badges
        : [
            {
                id: "ssl",
                title: "SSL Secured",
                desc: "Bank-level encryption protects your data",
                Icon: ShieldCheck,
            },
            {
                id: "cert",
                title: "Industry Certified",
                desc: "Licensed real estate professional",
                Icon: BadgeCheck,
            },
            {
                id: "users",
                title: "10,000+ Users",
                desc: "Trusted by professionals nationwide",
                Icon: Home,
            },
            {
                id: "rating",
                title: "4.9/5 Rating",
                desc: "Highly rated by our community",
                Icon: Star,
            },
        ];

    const statItems = stats?.length
        ? stats
        : [
            { id: "value", value: "$2.5B+", label: "Properties Analyzed" },
            { id: "deals", value: "50,000+", label: "Successful Deals" },
            { id: "years", value: "25+", label: "Years Experience" },
            { id: "uptime", value: "99.9%", label: "Uptime Guarantee" },
        ];

    return (
        <section className="w-full bg-neutral-950 text-neutral-100 px-4 py-14 sm:py-20">
            <Container>
                <div className="">
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            {heading}
                        </h2>
                    </div>

                    {/* Badges Row */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {badgeItems.map(({ id, title, desc, Icon }) => (
                            <div
                                key={id}
                                className="rounded-2xl myborder bg-neutral-900 p-6 text-center shadow-md ring-1 ring-inset ring-neutral-800"
                            >
                                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-inset ring-neutral-800">
                                    {Icon ? <Icon className="h-6 w-6 brandColor" /> : null}
                                </div>
                                <div className="text-lg font-semibold">{title}</div>
                                <p className="mt-2 text-sm text-neutral-300">{desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {statItems.map(({ id, value, label }) => (
                            <div key={id} className="text-center">
                                <div className="text-4xl sm:text-5xl font-extrabold brandColor">
                                    {value}
                                </div>
                                <div className="mt-2 text-sm text-neutral-300">{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-12 rounded-2xl border border-yellow-900/80 bg-gradient-to-b from-yellow-900/30 to-yellow-900/20 p-5 sm:p-6 ring-1 ring-inset ring-yellow-900/30">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-inset ring-yellow-900/40">
                                <AlertTriangle className="h-4 w-4 text-yellow-300" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-yellow-200">{disclaimerTitle}</div>
                                <p className="mt-1 text-sm text-yellow-100/80">{disclaimerText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
