import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useInView } from "./hooks/useInView";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function Gallery() {
  const { language } = useLanguage();
  const { gallery } = getSiteContent(language);
  const { ref, inView } = useInView();

  const images = [
    { url: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", title: gallery.titles[0], aspectRatio: "4 / 5" },
    { url: "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", title: gallery.titles[1], aspectRatio: "1 / 1" },
    { url: "https://images.unsplash.com/photo-1772206605293-3fadeaa944e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", title: gallery.titles[2], aspectRatio: "4 / 5" },
    { url: "https://images.unsplash.com/photo-1758875569866-62f54fdfd281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", title: gallery.titles[3], aspectRatio: "3 / 4" },
    { url: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", title: gallery.titles[4], aspectRatio: "4 / 5" },
    { url: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", title: gallery.titles[5], aspectRatio: "3 / 4" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#FF5A36]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FF5A36]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {gallery.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            {gallery.subheading}
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 960: 2, 1180: 3 }}>
          <Masonry gutter="clamp(0.75rem, 2vw, 1rem)">
            {images.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl"
                style={{ aspectRatio: image.aspectRatio, contentVisibility: "auto" }}
              >
                <img src={image.url} alt={image.title} className="media-zoom h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {image.title}
                    </h3>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#FF5A36]" />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
