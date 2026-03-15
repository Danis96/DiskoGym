import { motion } from "motion/react";
import { Dumbbell, Users, Sparkles } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function About() {
  const { ref, inView } = useInView();

  const highlights = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Modern Equipment",
      description: "State-of-the-art machines and free weights",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Trainers",
      description: "Experienced coaches to guide your journey",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Clean & Comfortable",
      description: "Premium facilities maintained daily",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4A840]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                alt="Training at Disko Gym"
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
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              About <span className="neon-text">Disko Gym</span>
            </h2>
            
            <p
              className="text-lg text-gray-300 mb-10 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Disko Gym offers a modern training environment with professional equipment, 
              group fitness classes and experienced trainers. Whether you are a beginner or 
              professional athlete, the gym provides everything needed for effective training.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card interactive-surface p-6 rounded-xl flex items-start gap-4 group"
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
