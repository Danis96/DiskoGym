import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useInView } from "./hooks/useInView";
import { client, galleryTitles } from "../content/client";

export function Gallery() {
  const { ref, inView } = useInView();

  const images = [
    {
      url: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBzdHJlbmd0aCUyMHRyYWluaW5nfGVufDF8fHx8MTc3MzU5OTIwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: galleryTitles[0],
      aspectRatio: "4 / 5",
    },
    {
      url: "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBtYWNoaW5lcyUyMGd5bXxlbnwxfHx8fDE3NzM1OTkyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: galleryTitles[1],
      aspectRatio: "1 / 1",
    },
    {
      url: "https://images.unsplash.com/photo-1772206605293-3fadeaa944e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3NzM1Mzg5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: galleryTitles[2],
      aspectRatio: "4 / 5",
    },
    {
      url: "https://images.unsplash.com/photo-1758875569866-62f54fdfd281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBhdG1vc3BoZXJlJTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzM1OTkyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: galleryTitles[3],
      aspectRatio: "3 / 4",
    },
    {
      url: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzM1OTkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: galleryTitles[4],
      aspectRatio: "4 / 5",
    },
    {
      url: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMG1hbiUyMHdvcmtvdXR8ZW58MXx8fHwxNzczNTk5MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: galleryTitles[5],
      aspectRatio: "3 / 4",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A840]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A840]/5 rounded-full blur-3xl" />

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
            XXL <span className="neon-text">Gallery</span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience the energy and training atmosphere behind {client.businessName}
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 960: 2, 1180: 3 }}>
          <Masonry gutter="clamp(0.75rem, 2vw, 1rem)">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                style={{ aspectRatio: image.aspectRatio, contentVisibility: "auto" }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="media-zoom h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                    className="text-xl font-bold text-white sm:text-2xl"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {image.title}
                    </h3>
                  </div>
                </div>
                {/* Neon highlight */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A840] rounded-xl transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
