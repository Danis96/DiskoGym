import { motion } from "motion/react";
import { Dumbbell, Activity, Users, Wind, UserCheck, Heart } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function Facilities() {
  const { ref, inView } = useInView();

  const facilities = [
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: "Strength Training Zone",
      image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBzdHJlbmd0aCUyMHRyYWluaW5nfGVufDF8fHx8MTc3MzU5OTIwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Cardio Machines",
      image: "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBtYWNoaW5lcyUyMGd5bXxlbnwxfHx8fDE3NzM1OTkyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Group Fitness Classes",
      image: "https://images.unsplash.com/photo-1772206605293-3fadeaa944e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3NzM1Mzg5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: "Aerobic Studio",
      image: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzM1OTkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "Personal Training",
      image: "https://images.unsplash.com/photo-1758875569414-120ebc62ada3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjbGllbnR8ZW58MXx8fHwxNzczNTgzNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Recovery Area",
      image: "https://images.unsplash.com/photo-1758875569866-62f54fdfd281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBhdG1vc3BoZXJlJTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzM1OTkyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A840]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-6xl md:text-7xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Our <span className="neon-text">Facilities</span>
          </h2>
          <p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Everything you need for the perfect workout experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="media-zoom w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/70 transition-colors duration-500" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="text-[#D4A840] mb-4 transition-transform duration-300 group-hover:scale-[1.03] group-hover:text-[#E6C054]">
                  {facility.icon}
                </div>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {facility.title}
                </h3>
              </div>

              {/* Neon border effect on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A840] rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
