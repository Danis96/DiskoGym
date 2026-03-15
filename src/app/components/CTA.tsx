import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function CTA() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
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

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="mb-6 text-4xl font-bold leading-none text-white sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Your Transformation
            <br />
            <span className="neon-text">Starts Today</span>
          </h2>

          <p
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 sm:mb-12 sm:text-lg md:text-xl lg:text-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join Disko Gym and become the strongest version of yourself
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="neon-button rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 sm:px-12 sm:py-5 sm:text-xl lg:px-16 lg:py-6 lg:text-2xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Join Disko Gym
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
