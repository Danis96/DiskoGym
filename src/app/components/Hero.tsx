import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1734630341082-0fec0e10126c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3lmJTIwd29ya291dCUyMGludGVuc2V8ZW58MXx8fHwxNzczNDc5NzE0fDA&ixlib=rb-4.1.0&q=80&w=1600"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

        <div className="ambient-glow absolute left-[12%] top-[10%] h-72 w-72 rounded-full bg-[#D4A840]/16" />
        <div className="ambient-glow absolute bottom-[8%] right-[12%] h-80 w-80 rounded-full bg-[#D4A840]/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="mx-auto max-w-5xl pt-24 pb-16 text-center sm:pt-28 sm:pb-20 lg:pt-24 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="mb-4 text-5xl font-bold tracking-tight sm:mb-6 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-white">Train Hard.</span>
              <br />
              <span className="text-white">Stay Strong.</span>
              <br />
              <span className="neon-text">Welcome to Disko Gym.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-10 max-w-3xl px-2 text-base leading-relaxed text-gray-300 sm:mb-12 sm:text-lg md:text-xl lg:text-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Start with a free training session and experience a modern fitness center in Sarajevo with professional equipment and expert trainers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 flex flex-col justify-center gap-4 sm:mb-14 sm:flex-row sm:gap-5 md:mb-16"
          >
            <a
              href="#membership"
              className="neon-button rounded-lg px-8 py-4 text-base font-semibold transition-all duration-300 sm:px-10 sm:py-5 sm:text-lg"
            >
              Start Free Training
            </a>
            <a
              href="#membership"
              className="glass-button rounded-lg px-8 py-4 text-base font-semibold transition-all duration-300 sm:px-10 sm:py-5 sm:text-lg"
            >
              View Membership
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 text-sm text-gray-300 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-base md:gap-8"
          >
            <div className="rounded-full border border-[#D4A840]/35 bg-[#D4A840]/10 px-4 py-2 text-center text-[#F4D06B]">
              <span style={{ fontFamily: "'Oswald', sans-serif" }}>
                Free first training for new members
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-center sm:text-left">
              <MapPin className="h-5 w-5 flex-shrink-0 text-[#D4A840]" />
              <span className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Džemala Bijedića 138, Sarajevo
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-center sm:text-left">
              <Clock className="h-5 w-5 flex-shrink-0 text-[#D4A840]" />
              <span className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Open daily 09:00 – 24:00
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-[#D4A840] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
