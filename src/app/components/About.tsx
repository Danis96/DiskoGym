import { motion } from "motion/react";
import { Dumbbell, Users, Sparkles } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { aboutHighlights, client } from "../content/client";

export function About() {
  const { ref, inView } = useInView();

  const highlights = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      ...aboutHighlights[0],
    },
    {
      icon: <Users className="w-8 h-8" />,
      ...aboutHighlights[1],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      ...aboutHighlights[2],
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4A840]/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] neon-border">
              <img
                src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBzdHJlbmd0aCUyMHRyYWluaW5nfGVufDF8fHx8MTc3MzU5OTIwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt={`Training at ${client.businessName}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="mb-5 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              About <span className="neon-text">{client.businessName}</span>
            </h2>
            
            <p
              className="mb-8 text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8 md:mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {client.businessName} combines a premium equipment setup, a spacious training environment,
              and member-friendly extras in one location. It is built for people who want serious workouts,
              daily flexibility, and a stronger routine in Sarajevo.
            </p>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card interactive-surface flex items-start gap-4 rounded-xl p-5 group sm:p-6"
                >
                  <div className="text-[#D4A840] group-hover:text-[#B8922E] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold text-white mb-1"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
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
