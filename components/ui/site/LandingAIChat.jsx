"use client";

import Container from "@/components/layout/sitelayout/Container";
import {
    HomeIcon as AnalyzeIcon,
    FileText as ContractIcon,
    Mic,
    Paperclip,
    Calculator as RoiIcon,
    Send,
    Sparkles,
    LineChart as TrendsIcon,
} from "lucide-react";
import { useState } from "react";

export default function LandingAIChat({
    title = "Start Your Conversation",
    subtitle =
    "Ask me anything about real estate – property analysis, market trends, investment advice, and more.",
    suggestions = [
        "Analyze a property address",
        "What's the current market like?",
        "Calculate ROI for an investment",
        "Find comparable properties",
    ],
    onSubmit,
    onQuickAction, }) {
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);
    const max = 2000;

    const handleSubmit = () => {
        if (!value.trim()) return;
        onSubmit?.(value.trim());
        setValue("");
        setCount(0);
    };

    const actions = [
        { id: "analyze", label: "Analyze Property", Icon: AnalyzeIcon },
        { id: "contract", label: "Generate Contract", Icon: ContractIcon },
        { id: "roi", label: "Calculate ROI", Icon: RoiIcon },
        { id: "trends", label: "Market Trends", Icon: TrendsIcon },
    ];

    return (
        <section className="w-full bg-neutral-950 text-neutral-100 border-b border-gray-800">
            <Container>
                <div className="px-4 py-12 sm:py-16">
                    {/* Title */}
                    <div className="text-center space-y-3">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            {title}
                        </h1>
                        <p className="text-neutral-300 max-w-3xl mx-auto text-sm sm:text-base">
                            {subtitle}
                        </p>
                    </div>

                    {/* Quick actions */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        {actions.map(({ id, label, Icon }) => (
                            <button
                                key={id}
                                aria-label={label}
                                onClick={() => onQuickAction?.(id)}
                                className="group inline-flex items-center gap-2 rounded-xl myborder bg-neutral-800 px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-black/0 transition hover:border-neutral-700 hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
                            >
                                <Icon className="h-4 w-4 opacity-90 group-hover:opacity-100 brandColor" />
                                <span>{label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Input card */}
                    <div className="mt-6 rounded-2xl myborder bg-neutral-800 p-4 shadow-lg">
                        <label htmlFor="conv-input" className="sr-only">
                            Ask anything
                        </label>

                        <div className="flex items-start gap-3">
                            <button
                                type="button"
                                aria-label="Attach file"
                                className="mt-1 rounded-lg myborder bg-neutral-900/70 p-2 transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
                            >
                                <Paperclip className="h-4 w-4" />
                            </button>

                            <div className="flex-1">
                                <div className="relative">
                                    <input
                                        id="conv-input"
                                        value={value}
                                        onChange={(e) => {
                                            const v = e.target.value;
                                            if (v.length <= max) {
                                                setValue(v);
                                                setCount(v.length);
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if ((e.key === "Enter" && !e.shiftKey)) {
                                                e.preventDefault();
                                                handleSubmit();
                                            }
                                        }}
                                        placeholder="Ask me anything about real estate..."
                                        className="w-full resize-none rounded-xl myborder bg-neutral-950 px-4 py-3 pr-24 text-sm shadow-inner outline-none transition placeholder:text-neutral-500 focus:border-neutral-600 focus:ring-0"
                                    />

                                    {/* Right-side controls */}
                                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center gap-2">
                                        <div className="pointer-events-auto flex items-center gap-1 rounded-lg bg-neutral-900/70 px-2 py-1">
                                            <Mic className="h-4 w-4" aria-hidden="true" />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            aria-label="Send prompt"
                                            className="pointer-events-auto inline-flex items-center justify-center rounded-lg brandBg px-3 py-2 text-sm font-semibold text-black transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                        >
                                            <Send className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
                                    <span>
                                        Press <kbd className="rounded border border-neutral-700 bg-neutral-950 px-1">Enter</kbd> to send,
                                        <span className="ml-1">Shift+Enter for new line</span>
                                    </span>
                                    <span>
                                        {count}/{max}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Suggestion chips */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        {suggestions.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setValue(s)}
                                className="inline-flex items-center gap-2 rounded-full myborder bg-neutral-900 px-4 py-2 text-xs sm:text-sm transition hover:border-neutral-700 hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
                            >
                                <Sparkles className="h-4 w-4 brandColor" />
                                <span>{s}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
