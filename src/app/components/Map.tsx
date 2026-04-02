import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function Map() {
  const { language } = useLanguage();
  const { client, map } = getSiteContent(language);
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute top-0 left-1/2 h-96 w-96 rounded-full bg-[#FF5A36]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {map.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            {map.subheading}
          </p>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video"
          >
            <iframe
              src={client.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${client.businessName} location`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 sm:space-y-6 md:space-y-8"
          >
            <div className="glass-card interactive-surface rounded-2xl p-5 group sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-[#FF5A36] transition-colors duration-300 group-hover:text-[#FF8A5B]">
                  <MapPin className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {map.addressLabel}
                  </h3>
                  <a href={client.googleMapsUrl} target="_blank" rel="noreferrer" className="text-base text-gray-300 sm:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {client.addressLine1}
                    <br />
                    {client.addressLine2}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card interactive-surface rounded-2xl p-5 group sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-[#FF5A36] transition-colors duration-300 group-hover:text-[#FF8A5B]">
                  <Phone className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {map.contactLabel}
                  </h3>
                  <div className="space-y-1 text-base text-gray-300 sm:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {map.contactBody.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card interactive-surface rounded-2xl p-5 group sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-[#FF5A36] transition-colors duration-300 group-hover:text-[#FF8A5B]">
                  <Clock className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {map.hoursLabel}
                  </h3>
                  <p className="text-base text-gray-300 sm:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {client.hoursDays}
                    <br />
                    {client.hoursTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={client.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-button rounded-lg px-6 py-4 text-center text-sm font-semibold sm:text-base"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {map.mapsCta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
