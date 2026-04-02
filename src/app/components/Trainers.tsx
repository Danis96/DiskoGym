import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function Trainers() {
  const { language } = useLanguage();
  const { spotlight } = getSiteContent(language);
  const { ref, inView } = useInView();

  const trainers = [
    { ...spotlight.cards[0], image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { ...spotlight.cards[1], image: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { ...spotlight.cards[2], image: "https://images.unsplash.com/photo-1758875569414-120ebc62ada3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-[#FF5A36]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {spotlight.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            {spotlight.subheading}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`group ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
            >
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-2xl sm:mb-6 md:aspect-[3/4]">
                <img src={trainer.image} alt={trainer.name} className="media-zoom h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center bg-black/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-center text-xl italic text-white sm:text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    "{trainer.quote}"
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#FF5A36]" />
              </div>

              <div className="text-center">
                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {trainer.name}
                </h3>
                <p className="font-medium text-[#FF5A36]" style={{ fontFamily: "'Inter', sans-serif" }}>
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
