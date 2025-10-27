"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [displayText, setDisplayText] = useState("");

  // === Rotating brand lines for typing animation ===
  const aiTexts = [
    "Empowering Real Estate with Intelligence.",
    "Predict • Analyze • Invest — Smarter with AI.",
    "Turning Property Data into Decisions.",
    "Where Machine Learning Meets Market Insight.",
  ];

  useEffect(() => {
    let i = 0; // text index
    let j = 0; // character index
    let currentText = "";
    let deleting = false;

    const type = () => {
      if (!deleting && j < aiTexts[i].length) {
        currentText += aiTexts[i][j];
        j++;
        setDisplayText(currentText);
      } else if (deleting && j > 0) {
        currentText = currentText.slice(0, j - 1);
        j--;
        setDisplayText(currentText);
      } else if (!deleting && j === aiTexts[i].length) {
        deleting = true;
        setTimeout(type, 1500); // pause before delete
        return;
      } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % aiTexts.length;
      }
      setTimeout(type, deleting ? 40 : 70);
    };

    type();
    return () => {};
  }, []);

  // === Parallax tilt ===
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    x.set(e.clientX - innerWidth / 2);
    y.set(e.clientY - innerHeight / 2);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--primaryBlack)] text-[var(--primaryWhite)]"
    >
      {/* Background motion */}
      <motion.img
        src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80"
        alt="City skyline"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        animate={{ scale: [1, 1.05, 1], y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primaryBlack)]/90 via-[var(--primaryBlackforhover)]/85 to-transparent z-[1]" />

      {/* Animated glowing blobs */}
      <motion.div
        className="absolute top-20 left-[-100px] w-[400px] h-[400px] rounded-full blur-[140px] bg-[var(--brandColor)] opacity-30"
        animate={{ x: [0, 120, 0], y: [0, 60, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full blur-[180px] bg-cyan-400 opacity-20"
        animate={{ x: [0, -120, 0], y: [0, -60, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Container */}
      <div className="container mx-auto relative z-[2] flex flex-col md:flex-row items-center justify-between px-6 md:px-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-xl space-y-8 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <motion.div
              animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-2 left-0 w-[180px] h-[3px] bg-gradient-to-r from-[var(--brandColor)] to-transparent rounded-full"
            />
            <span className="bg-gradient-to-r from-[var(--brandColor)] to-[#00eaff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(4,210,240,0.4)]">
              Cherif AI
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white"
            >
              Revolutionizing{" "}
              <span className="relative">
                Real Estate
                <motion.span
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[var(--brandColor)] to-transparent"
                />
              </span>
            </motion.span>
          </motion.h1>

          {/* Multi-line Typing Animation */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed h-[1.5em]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-[var(--brandColor)] ml-1"
            >
              |
            </motion.span>
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/analyze"
              className="bg-[var(--brandColor)] text-[var(--primaryBlack)] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-[0_0_30px_rgba(4,210,240,0.4)]"
            >
              Explore Insights
            </Link>
            <Link
              href="/chat"
              className="border border-[var(--brandColor)] px-8 py-3 rounded-full text-[var(--brandColor)] hover:bg-[var(--brandColor)] hover:text-[var(--primaryBlack)] font-semibold transition"
            >
              Chat with Cherif AI
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="flex-1 flex justify-end mt-14 md:mt-0"
        >
          <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-[320px] h-[400px] md:w-[460px] md:h-[460px] rounded-[22px] overflow-hidden border border-[var(--borderColor)] shadow-[0_0_45px_rgba(4,210,240,0.35)]"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury home"
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ scale: [1, 1.05, 1], y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
