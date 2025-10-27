"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AIChatPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax motion
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yBubbles = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 bg-[var(--primaryBlack)] text-[var(--primaryWhite)]"
    >
      {/* Background parallax gradient */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-gradient-to-b from-[var(--primaryBlackforhover)] via-[#0d1b2a] to-[var(--primaryBlack)] opacity-80"
      />

      {/* Floating animated aura */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute left-0 top-20 w-[600px] h-[600px] bg-[var(--brandColor)] blur-[200px] rounded-full opacity-20"
      />

      <div className="container mx-auto px-6 relative z-[2] text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--brandColor)] mb-4">
            Meet <span className="text-[var(--secondaryAccent)]">Cherif AI</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Your intelligent real-estate assistant — ready to answer, analyze, and guide you with real-time market insights.
          </p>
        </motion.div>

        {/* AI Orb */}
        <motion.div
          style={{ scale: orbScale }}
          animate={{ opacity: [0.8, 1, 0.8], boxShadow: ["0 0 30px rgba(0,229,255,0.3)", "0 0 60px rgba(0,229,255,0.6)", "0 0 30px rgba(0,229,255,0.3)"] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="mx-auto mb-20 w-[150px] h-[150px] rounded-full bg-[var(--brandColor)] shadow-[0_0_60px_rgba(0,229,255,0.4)] flex items-center justify-center text-6xl"
        >
          🤖
        </motion.div>

        {/* Floating Chat Bubbles */}
        <div className="relative flex flex-col items-center space-y-6 md:space-y-10">
          <motion.div
            style={{ y: yBubbles }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative bg-[var(--primaryBlackforhover)] border border-[var(--borderColor)] rounded-2xl p-6 max-w-md text-left shadow-[0_0_25px_rgba(0,229,255,0.15)]"
          >
            <p className="text-gray-200">
              💬 <span className="text-[var(--brandColor)] font-semibold">Cherif AI:</span> Hello! Which area would you like me to analyze for property investment?
            </p>
          </motion.div>

          <motion.div
            style={{ y: yBubbles }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative bg-[var(--primaryBlackforhover)] border border-[var(--borderColor)] rounded-2xl p-6 max-w-md text-left md:self-end shadow-[0_0_25px_rgba(0,229,255,0.15)]"
          >
            <p className="text-gray-200">
              🧑‍💼 I’m considering Downtown — can you predict next quarter’s ROI?
            </p>
          </motion.div>

          <motion.div
            style={{ y: yBubbles }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="relative bg-[var(--primaryBlackforhover)] border border-[var(--borderColor)] rounded-2xl p-6 max-w-md text-left shadow-[0_0_25px_rgba(0,229,255,0.15)]"
          >
            <p className="text-gray-200">
              💬 <span className="text-[var(--brandColor)] font-semibold">Cherif AI:</span> Based on recent data, Downtown’s ROI trend is <span className="text-[var(--secondaryAccent)] font-semibold">+7.2%</span> — projected to rise next quarter 📈.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-16"
        >
          <Link
            href="/chat"
            className="inline-block bg-[var(--secondaryAccent)] text-[var(--primaryBlack)] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Start Chat with Cherif AI
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
