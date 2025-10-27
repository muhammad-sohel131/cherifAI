"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnalyzerSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const panels = [
    {
      id: 1,
      title: "Smart Valuation",
      desc: "AI predicts property prices using 50+ live data sources, adapting in real-time to market shifts.",
      icon: "🏠",
    },
    {
      id: 2,
      title: "ROI Forecast",
      desc: "Simulate investment outcomes and risk factors with machine-learning-based probability models.",
      icon: "📈",
    },
    {
      id: 3,
      title: "Growth Heatmap",
      desc: "Discover rising neighborhoods through dynamic growth indexing and trend analytics.",
      icon: "🌆",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 bg-[var(--primaryBlackforhover)] text-[var(--primaryWhite)]"
    >
      {/* Background parallax grid */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
      />
      {/* Floating glow layer */}
      <motion.div
        style={{ y: y2 }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[200px] bg-[var(--brandColor)] opacity-10"
      />

      <div className="container mx-auto px-6 relative z-[2]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--brandColor)] mb-4">
            Real-Time Property Intelligence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience Cherif AI’s dynamic analyzer — intelligent, visual, and responsive to your scroll.
          </p>
        </motion.div>

        {/* Animated Panels */}
        <div className="grid md:grid-cols-3 gap-10 perspective-[1000px]">
          {panels.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.05,
                boxShadow: "0 0 40px rgba(4,210,240,0.3)",
              }}
              className="relative group overflow-hidden rounded-2xl border border-[var(--borderColor)] bg-gradient-to-br from-[var(--primaryBlack)]/80 to-[var(--primaryBlackforhover)]/80 p-10 backdrop-blur-lg transform-gpu"
            >
              {/* Glow pulse behind icon */}
              <motion.div
                className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full blur-[40px] bg-[var(--brandColor)] opacity-20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6 text-5xl">
                {p.icon}
              </div>

              <h3 className="text-xl font-semibold text-center text-[var(--brandColor)] mb-3">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {p.desc}
              </p>

              {/* Subtle grid shimmer */}
              <motion.div
                className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(4,210,240,0.05)_1px,transparent_1px),linear-gradient(rgba(4,210,240,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"
                animate={{
                  backgroundPosition: ["0px 0px", "30px 30px", "0px 0px"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
