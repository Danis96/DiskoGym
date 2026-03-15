import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
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
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Modern fitness center in Sarajevo with professional equipment and expert trainers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <a
              href="#membership"
              className="neon-button px-10 py-5 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Join Now
            </a>
            <a
              href="#membership"
              className="glass-button px-10 py-5 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              View Membership
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D4A840]" />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>
                Džemala Bijedića 138, Sarajevo
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D4A840]" />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
