import { motion } from "motion/react";
import { Dumbbell, Activity, Users, Wind, UserCheck, Heart } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function Facilities() {
  const { language } = useLanguage();
  const { facilities: facilitiesContent } = getSiteContent(language);
  const { ref, inView } = useInView();

  const facilityCards = [
    { icon: <Dumbbell className="w-10 h-10" />, title: facilitiesContent.items[0], image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { icon: <Activity className="w-10 h-10" />, title: facilitiesContent.items[1], image: "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { icon: <Users className="w-10 h-10" />, title: facilitiesContent.items[2], image: "https://images.unsplash.com/photo-1772206605293-3fadeaa944e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { icon: <Wind className="w-10 h-10" />, title: facilitiesContent.items[3], image: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { icon: <UserCheck className="w-10 h-10" />, title: facilitiesContent.items[4], image: "https://images.unsplash.com/photo-1758875569414-120ebc62ada3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { icon: <Heart className="w-10 h-10" />, title: facilitiesContent.items[5], image: "https://images.unsplash.com/photo-1758875569866-62f54fdfd281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#FF5A36]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {facilitiesContent.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            {facilitiesContent.subheading}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {facilityCards.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[5/4] cursor-pointer overflow-hidden rounded-2xl sm:aspect-[4/3]"
            >
              <div className="absolute inset-0">
                <img src={facility.image} alt={facility.title} className="media-zoom h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-colors duration-500 group-hover:from-black/70" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center sm:p-6">
                <div className="mb-3 text-[#FF5A36] transition-transform duration-300 group-hover:scale-[1.03] group-hover:text-[#FF8A5B] sm:mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {facility.title}
                </h3>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#FF5A36]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
