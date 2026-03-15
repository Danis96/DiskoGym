import { motion, useReducedMotion } from "motion/react";
import { MapPin, Clock, Dumbbell, Users, Zap } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const headlineLines = ["Train Hard.", "Stay Strong.", "Welcome to Disko Gym."];

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/95" />
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="hero-beam hero-beam-left absolute -left-[10%] top-[12%] h-72 w-56 rounded-full" />
        <div className="hero-beam hero-beam-right absolute right-[-8%] top-[18%] h-80 w-64 rounded-full" />
        <div className="hero-power-ring absolute left-[8%] top-[16%] h-44 w-44 rounded-full border border-[#D4A840]/20 sm:h-56 sm:w-56" />
        <div className="hero-power-ring hero-power-ring-delayed absolute bottom-[16%] right-[10%] h-52 w-52 rounded-full border border-[#D4A840]/15 sm:h-72 sm:w-72" />
        <div className="hero-strike absolute left-0 right-0 top-[48%] h-px" />

        <div className="ambient-glow absolute left-[12%] top-[10%] h-72 w-72 rounded-full bg-[#D4A840]/16" />
        <div className="ambient-glow absolute bottom-[8%] right-[12%] h-80 w-80 rounded-full bg-[#D4A840]/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="mx-auto max-w-6xl pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-24 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,22rem)] lg:gap-12">
            <div className="text-center lg:text-left">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D4A840]/25 bg-black/30 px-4 py-2 text-[#F4D06B] backdrop-blur-md"
              >
                <Zap className="h-4 w-4" />
                <span
                  className="text-[0.7rem] uppercase tracking-[0.28em] sm:text-xs"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Free first training for new members
                </span>
              </motion.div>

              <h1
                className="mb-5 text-5xl font-bold tracking-tight sm:mb-6 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {headlineLines.map((line, index) => (
                  <motion.span
                    key={line}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 46, skewY: 6 }}
                    animate={{ opacity: 1, y: 0, skewY: 0 }}
                    transition={{ duration: 0.7, delay: 0.12 * index, ease: [0.22, 1, 0.36, 1] }}
                    className={`block ${index === 2 ? "neon-text" : "text-white"}`}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className="mx-auto mb-10 max-w-3xl px-2 text-base leading-relaxed text-gray-300 sm:mb-12 sm:text-lg md:text-xl lg:mx-0 lg:px-0 lg:text-2xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Start with a free training session and experience a modern fitness center in Sarajevo with professional equipment, serious energy, and coaches who push results.
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-10 flex flex-col justify-center gap-4 sm:mb-12 sm:flex-row sm:gap-5 lg:justify-start"
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
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="flex flex-col items-center justify-center gap-4 text-sm text-gray-300 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-base md:gap-8 lg:justify-start"
              >
                <div className="flex items-center justify-center gap-2 text-center sm:text-left">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-[#D4A840]" />
                  <span className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Dzemala Bijedica 138, Sarajevo
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-center sm:text-left">
                  <Clock className="h-5 w-5 flex-shrink-0 text-[#D4A840]" />
                  <span className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Open daily 09:00 - 24:00
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.34 }}
              className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-none"
            >
              <div className="hero-stat-stack relative w-full max-w-[22rem] rounded-[2rem] border border-white/10 bg-black/30 p-4 backdrop-blur-md sm:p-5">
                <div className="mb-4 grid gap-3 sm:mb-5 sm:grid-cols-2 lg:mb-0 lg:block">
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18, x: -12 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.48 }}
                    className="hero-stat-chip hero-stat-chip-top flex items-center gap-3 rounded-2xl border border-[#D4A840]/25 bg-black/80 px-4 py-3 shadow-[0_0_30px_rgba(212,168,64,0.14)] lg:absolute lg:right-[-4%] lg:top-[-5%]"
                  >
                    <Dumbbell className="h-5 w-5 text-[#D4A840]" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-[#F4D06B]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Strength Zone
                      </div>
                      <div className="text-sm text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Full power equipment
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18, x: 12 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.58 }}
                    className="hero-stat-chip hero-stat-chip-bottom flex items-center gap-3 rounded-2xl border border-[#D4A840]/25 bg-black/80 px-4 py-3 shadow-[0_0_30px_rgba(212,168,64,0.14)] lg:absolute lg:left-[-4%] lg:top-[54%]"
                  >
                    <Users className="h-5 w-5 text-[#D4A840]" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-[#F4D06B]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Group Energy
                      </div>
                      <div className="text-sm text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Classes that hit hard
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D4A840]/20 bg-[#111]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,168,64,0.24),transparent_38%)]" />
                  <div className="hero-lift-track absolute left-1/2 top-6 z-10 h-[72%] w-px -translate-x-1/2" />
                  <div className="hero-barbell absolute left-1/2 top-14 z-20 flex -translate-x-1/2 items-center justify-center">
                    <div className="hero-plate hero-plate-outer" />
                    <div className="hero-plate hero-plate-inner" />
                    <div className="hero-bar" />
                    <div className="hero-plate hero-plate-inner" />
                    <div className="hero-plate hero-plate-outer" />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Athlete training at Disko Gym"
                    className="h-[28rem] w-full object-cover sm:h-[32rem]"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                      <div className="mb-2 text-xs uppercase tracking-[0.28em] text-[#F4D06B]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Disko Gym Energy
                      </div>
                      <div className="text-2xl text-white sm:text-3xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        Built for strength, rhythm, and momentum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
