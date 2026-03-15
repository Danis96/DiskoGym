import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function CTA() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1734630341082-0fec0e10126c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3lmJTIwd29ya291dCUyMGludGVuc2V8ZW58MXx8fHwxNzczNDc5NzE0fDA&ixlib=rb-4.1.0&q=80&w=1600"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="ambient-glow absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A840]/14" />
      <div className="ambient-glow absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A840]/8" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Your Transformation
            <br />
            <span className="neon-text">Starts Today</span>
          </h2>

          <p
            className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join Disko Gym and become the strongest version of yourself
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="neon-button px-16 py-6 text-2xl font-bold rounded-lg transition-all duration-300"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Join Disko Gym
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
