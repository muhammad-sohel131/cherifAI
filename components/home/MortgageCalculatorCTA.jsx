"use client";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function MortgageCalculatorCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Animated calculator numbers
  const [loan, setLoan] = useState(200000);
  const [interest, setInterest] = useState(3.2);
  const [term, setTerm] = useState(25);

  useEffect(() => {
    animate(180000, 220000, {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      onUpdate: (v) => setLoan(Math.floor(v)),
    });
    animate(2.8, 3.6, {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      onUpdate: (v) => setInterest(v.toFixed(2)),
    });
    animate(15, 30, {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      onUpdate: (v) => setTerm(Math.floor(v)),
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 bg-[var(--primaryBlackforhover)] text-[var(--primaryWhite)]"
    >
      {/* Background aura */}
      <motion.div
        style={{ y: yBg }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-[var(--brandColor)] blur-[220px] rounded-full opacity-20"
      />

      <div className="container mx-auto px-6 relative z-[2] grid md:grid-cols-2 gap-12 items-center">
        {/* --- Left side: Animated Calculator UI --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--primaryBlack)]/80 to-[var(--primaryBlackforhover)]/90 border border-[var(--borderColor)] shadow-[0_0_50px_rgba(0,229,255,0.1)] backdrop-blur-lg"
        >
          <h3 className="text-2xl font-semibold text-[var(--brandColor)] mb-6">
            AI Mortgage Estimator
          </h3>

          {/* Input values with animated numbers */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">Loan Amount</p>
              <motion.div
                className="text-3xl font-semibold text-[var(--secondaryAccent)]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                ${loan.toLocaleString()}
              </motion.div>
              <div className="w-full h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                <motion.div
                  animate={{ width: ["60%", "80%", "60%"] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="h-full bg-[var(--brandColor)] rounded-full"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">Interest Rate</p>
              <motion.div
                className="text-3xl font-semibold text-[var(--secondaryAccent)]"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                {interest}%
              </motion.div>
              <div className="w-full h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                <motion.div
                  animate={{ width: ["30%", "40%", "30%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="h-full bg-[var(--brandColor)] rounded-full"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">Loan Term</p>
              <motion.div
                className="text-3xl font-semibold text-[var(--secondaryAccent)]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                {term} Years
              </motion.div>
              <div className="w-full h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                <motion.div
                  animate={{ width: ["40%", "60%", "40%"] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="h-full bg-[var(--brandColor)] rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Calculated Result */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 pt-6 border-t border-[var(--borderColor)] text-center"
          >
            <p className="text-gray-400 text-sm mb-2">Estimated Monthly Payment</p>
            <motion.h4
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="text-4xl font-bold text-[var(--brandColor)]"
            >
              ${(loan / term / 12).toFixed(0)}
            </motion.h4>
          </motion.div>
        </motion.div>

        {/* --- Right side: CTA Text --- */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start justify-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--brandColor)]">
            Predict Your Future Payments
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Cherif AI’s mortgage calculator isn’t just about numbers — it learns
            from live rates, inflation indexes, and property values to give you
            adaptive, real-time projections.
          </p>
          <Link
            href="/calculator"
            className="bg-[var(--secondaryAccent)] text-[var(--primaryBlack)] px-10 py-3 rounded-full font-semibold hover:opacity-90 transition mt-4"
          >
            Try the Full Calculator
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
