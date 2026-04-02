import { motion } from "motion/react";
import { Dumbbell, Users, Sparkles } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function About() {
  const { language } = useLanguage();
  const { about, client } = getSiteContent(language);
  const { ref, inView } = useInView();

  const highlights = [
    { icon: <Dumbbell className="w-8 h-8" />, ...about.highlights[0] },
    { icon: <Users className="w-8 h-8" />, ...about.highlights[1] },
    { icon: <Sparkles className="w-8 h-8" />, ...about.highlights[2] },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-[#FF5A36]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl neon-border">
              <img
                src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt={`Training at ${client.businessName}`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-5 text-4xl font-bold text-white sm:text-5xl md:text-6xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {about.heading} <span className="neon-text">{client.brandPrimary}</span>
            </h2>

            <p className="mb-8 text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8 md:mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
              {about.description}
            </p>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="glass-card interactive-surface flex items-start gap-4 rounded-xl p-5 group sm:p-6"
                >
                  <div className="text-[#FF5A36] transition-colors duration-300 group-hover:text-[#FF8A5B]">{item.icon}</div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
