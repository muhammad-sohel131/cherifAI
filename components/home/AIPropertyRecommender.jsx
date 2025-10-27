"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const properties = [
  {
    id: 1,
    name: "Oceanview Villa",
    location: "Malibu, California",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    aiScore: "96%",
    roi: "+12.4%",
    growth: "High",
  },
  {
    id: 2,
    name: "Skyline Penthouse",
    location: "New York City, NY",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    aiScore: "91%",
    roi: "+9.7%",
    growth: "Medium",
  },
  {
    id: 3,
    name: "Lakeside Smart Home",
    location: "Austin, Texas",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
    aiScore: "88%",
    roi: "+10.2%",
    growth: "High",
  },
];

export default function AIPropertyRecommender() {
  return (
    <section className="relative py-28 bg-[var(--primaryBlackforhover)] text-[var(--primaryWhite)] overflow-hidden">
      {/* Glow background */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[220px] bg-[var(--brandColor)] opacity-20"
      />

      {/* Title */}
      <div className="container mx-auto px-6 text-center mb-16 relative z-[2]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--brandColor)]"
        >
          AI Property Recommender
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Powered by Cherif AI — discover high-performing investments curated
          through real-time market intelligence.
        </p>
      </div>

      {/* Property Cards */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 relative z-[2]">
        {properties.map((prop, index) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group relative rounded-2xl overflow-hidden border border-[var(--borderColor)] bg-[var(--primaryBlack)]/60 backdrop-blur-xl shadow-[0_0_50px_rgba(4,210,240,0.1)] cursor-pointer hover:shadow-[0_0_70px_rgba(4,210,240,0.25)] transition"
          >
            {/* Image */}
            <div className="relative w-full h-[320px] overflow-hidden">
              <Image
                src={prop.image}
                alt={prop.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* AI overlay glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[rgba(4,210,240,0.15)] via-transparent to-transparent opacity-70"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 6 }}
              />

              {/* Scanning line */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-[var(--brandColor)]"
                animate={{ y: ["0%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + index,
                  ease: "linear",
                }}
              />
            </div>

            {/* Text + AI Metrics */}
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold">{prop.name}</h3>
              <p className="text-gray-400 text-sm">{prop.location}</p>

              {/* Animated AI stats */}
              <div className="flex justify-between text-sm pt-3 border-t border-[var(--borderColor)]">
                <div>
                  <p className="text-gray-400">AI Confidence</p>
                  <motion.p
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-[var(--brandColor)] font-semibold"
                  >
                    {prop.aiScore}
                  </motion.p>
                </div>
                <div>
                  <p className="text-gray-400">ROI</p>
                  <p className="text-green-400 font-semibold">{prop.roi}</p>
                </div>
                <div>
                  <p className="text-gray-400">Growth</p>
                  <p className="text-yellow-400 font-semibold">{prop.growth}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
