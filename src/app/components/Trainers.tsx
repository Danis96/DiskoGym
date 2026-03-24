import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { spotlightCards } from "../content/client";

export function Trainers() {
  const { ref, inView } = useInView();

  const trainers = [
    {
      ...spotlightCards[0],
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMG1hbiUyMHdvcmtvdXR8ZW58MXx8fHwxNzczNTk5MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      ...spotlightCards[1],
      image: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzM1OTkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      ...spotlightCards[2],
      image: "https://images.unsplash.com/photo-1758875569414-120ebc62ada3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjbGllbnR8ZW58MXx8fHwxNzczNTgzNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4A840]/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2
            className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Why Members Choose <span className="neon-text">XXL</span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The essentials that make this sports center easier to return to consistently
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`group ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
            >
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-2xl sm:mb-6 md:aspect-[3/4]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="media-zoom w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Quote overlay on hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p
                    className="text-xl text-center italic text-white sm:text-2xl"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    "{trainer.quote}"
                  </p>
                </div>

                {/* Neon border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A840] rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>

              <div className="text-center">
                <h3
                  className="mb-2 text-xl font-bold text-white sm:text-2xl"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {trainer.name}
                </h3>
                <p
                  className="text-[#D4A840] font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {trainer.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
