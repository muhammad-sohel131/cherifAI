"use client";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function MarketInsight() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const lineGlow = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  // Dynamic numeric values (AI updating simulation)
  const [roi, setRoi] = useState(7.2);
  const [demand, setDemand] = useState(86);
  const [price, setPrice] = useState(328000);

  useEffect(() => {
    animate(6.8, 7.8, {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      onUpdate: (v) => setRoi(v.toFixed(1)),
    });
    animate(82, 90, {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      onUpdate: (v) => setDemand(Math.floor(v)),
    });
    animate(315000, 340000, {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      onUpdate: (v) => setPrice(Math.floor(v)),
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 bg-[var(--primaryBlackforhover)] text-[var(--primaryWhite)]"
    >
      {/* Background parallax city image */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"
      />

      {/* Cyan aura */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1], x: [0, 100, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[var(--brandColor)] blur-[200px] rounded-full opacity-20"
      />

      {/* Container content */}
      <div className="container mx-auto px-6 relative z-[2] grid md:grid-cols-2 items-center gap-12">
        {/* Left: Text and dynamic AI metrics */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--brandColor)]">
            AI Market Insights
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Cherif AI analyzes real-estate trends by observing live demand,
            pricing, and investment patterns across thousands of data points —
            transforming raw market noise into actionable intelligence.
          </p>

          {/* Live AI metric cards */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div
              className="p-4 rounded-xl border border-[var(--borderColor)] bg-[var(--primaryBlack)]/60 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <p className="text-sm text-gray-400">Avg. Property Price</p>
              <p className="text-xl font-semibold text-[var(--secondaryAccent)]">
                ${price.toLocaleString()}
              </p>
            </motion.div>

            <motion.div
              className="p-4 rounded-xl border border-[var(--borderColor)] bg-[var(--primaryBlack)]/60 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <p className="text-sm text-gray-400">Demand Index</p>
              <p className="text-xl font-semibold text-[var(--secondaryAccent)]">
                {demand}%
              </p>
            </motion.div>

            <motion.div
              className="p-4 rounded-xl border border-[var(--borderColor)] bg-[var(--primaryBlack)]/60 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <p className="text-sm text-gray-400">ROI Forecast</p>
              <p className="text-xl font-semibold text-[var(--secondaryAccent)]">
                {roi}%
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Dynamic Chart Visual */}
        <motion.div
          style={{ y: yImg }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[90%] max-w-[500px] h-[300px] border border-[var(--borderColor)] rounded-2xl bg-[var(--primaryBlack)]/70 backdrop-blur-lg shadow-[0_0_60px_rgba(0,229,255,0.15)] overflow-hidden">
            {/* Glow layer */}
            <motion.div
              className="absolute inset-0 bg-[var(--brandColor)] opacity-5 blur-[120px]"
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />

            {/* Animated line chart */}
            <motion.svg
              viewBox="0 0 400 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
            >
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="400" y2="0">
                  <stop offset="0%" stopColor="var(--brandColor)" />
                  <stop offset="100%" stopColor="var(--secondaryAccent)" />
                </linearGradient>
              </defs>

              {/* Main data line */}
              <motion.path
                d="M0 100 C50 80, 100 120, 150 90 C200 60, 250 130, 300 100 C350 70, 400 120, 400 120"
                stroke="url(#grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />

              {/* Moving data orb along the path */}
              <motion.circle
                r="6"
                fill="var(--secondaryAccent)"
                animate={{
                  cx: [0, 400],
                  cy: [100, 120],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 8px var(--secondaryAccent))" }}
              />
            </motion.svg>

            {/* Overlay text */}
            <div className="absolute bottom-4 left-4 text-gray-400 text-xs">
              <p>Forecast Quarter</p>
              <p className="text-[var(--brandColor)] font-semibold">
                ROI {roi}%
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        style={{ opacity: lineGlow }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--secondaryAccent)] to-transparent opacity-30"
      />
    </section>
  );
}
