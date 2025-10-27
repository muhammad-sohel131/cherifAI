"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VisionCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--primaryBlack)] text-[var(--primaryWhite)] py-24">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[var(--primaryBlackforhover)] via-[var(--brandColor)]/10 to-transparent"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="container relative z-[2] mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Join the{" "}
          <span className="bg-gradient-to-r from-[var(--brandColor)] to-cyan-400 bg-clip-text text-transparent">
            AI Revolution
          </span>{" "}
          in Real Estate
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10"
        >
          Cherif AI is more than a platform — it’s your intelligent partner for
          analyzing markets, forecasting opportunities, and personalizing
          property insights. The future of smarter investment starts here.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/signup"
            className="px-8 py-3 rounded-full font-semibold text-[var(--primaryBlack)] bg-[var(--brandColor)] hover:opacity-90 transition shadow-[0_0_35px_rgba(4,210,240,0.4)]"
          >
            Get Started
          </Link>
          <Link
            href="/demo"
            className="px-8 py-3 rounded-full font-semibold border border-[var(--brandColor)] text-[var(--brandColor)] hover:bg-[var(--brandColor)] hover:text-[var(--primaryBlack)] transition"
          >
            Watch Demo
          </Link>
        </motion.div>

        {/* Animated AI glow orbs */}
        <motion.div
          className="absolute -top-20 left-1/2 w-[400px] h-[400px] bg-[var(--brandColor)] rounded-full blur-[150px] opacity-20"
          animate={{ y: [0, 50, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-10 w-[350px] h-[350px] bg-cyan-400 rounded-full blur-[160px] opacity-20"
          animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
      </div>
    </section>
  );
}
