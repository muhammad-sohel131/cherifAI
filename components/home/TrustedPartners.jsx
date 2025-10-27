"use client";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TrustedPartners() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax and opacity
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  // Animated counters
  const [stats, setStats] = useState({
    properties: 0,
    accuracy: 0,
    agencies: 0,
  });

  useEffect(() => {
    animate(0, 12500, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (v) =>
        setStats((prev) => ({ ...prev, properties: Math.floor(v) })),
    });
    animate(0, 98, {
      duration: 5,
      ease: "easeOut",
      onUpdate: (v) => setStats((prev) => ({ ...prev, accuracy: v.toFixed(1) })),
    });
    animate(0, 35, {
      duration: 5,
      ease: "easeOut",
      onUpdate: (v) =>
        setStats((prev) => ({ ...prev, agencies: Math.floor(v) })),
    });
  }, []);

const logos = [
    "https://cdn.pixabay.com/photo/2017/05/31/16/39/windows-2360920_1280.png",
    "https://cdn.pixabay.com/photo/2016/02/10/20/29/circle-1192509_640.png",
    "https://cdn.pixabay.com/photo/2016/02/10/19/34/wikimedia-community-logo-lgbt-1192365_640.png",
    "https://cdn.pixabay.com/photo/2016/02/10/20/00/symbol-of-infinity-of-autism-1192408_640.png",
];



  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 text-[var(--primaryWhite)]"
    >
      {/* Background Image - Parallax City */}
      <motion.div
        style={{ y: yBg, opacity }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,7,23,0.9)] via-[rgba(4,7,23,0.95)] to-[rgba(4,7,23,1)]" />

      {/* Floating brand aura */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -80, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--brandColor)] blur-[200px] rounded-full opacity-20"
      />

      {/* Container */}
      <div className="container mx-auto px-6 relative z-[2]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--brandColor)] mb-4">
            Trusted by Investors & Homebuyers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built with precision and trust — Cherif AI partners with leading
            agencies and financial institutions to redefine property analysis
            for the new digital age.
          </p>
        </motion.div>

        {/* Animated counters - diagonal grid layout */}
        <div className="relative md:grid md:grid-cols-3 flex flex-col items-center gap-12 md:gap-8 mb-24">
          {[
            {
              value: `${stats.properties.toLocaleString()}+`,
              label: "Properties Analyzed",
            },
            {
              value: `${stats.accuracy}%`,
              label: "Forecast Accuracy",
            },
            {
              value: `${stats.agencies}+`,
              label: "Partner Agencies",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 + i * 0.2 }}
              className={`relative w-full max-w-[320px] text-center p-8 rounded-2xl border border-[var(--borderColor)] bg-[var(--primaryBlack)]/60 backdrop-blur-lg shadow-[0_0_60px_rgba(0,229,255,0.1)] ${
                i === 1 ? "md:mt-16" : ""
              }`}
            >
              {/* Light sweep animation */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"
              />
              <h3 className="text-5xl font-bold text-[var(--secondaryAccent)] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating partner logos - glass wall */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-5 gap-8 justify-center"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.08,
                filter: "drop-shadow(0 0 10px var(--brandColor))",
              }}
              className="flex justify-center items-center p-4 rounded-xl bg-[var(--primaryBlackforhover)]/60 backdrop-blur-md border border-[var(--borderColor)] hover:border-[var(--brandColor)] transition"
            >
              <img
                src={logo}
                alt="Partner logo"
                className="w-[100px] md:w-[120px] opacity-70 hover:opacity-100 transition duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
