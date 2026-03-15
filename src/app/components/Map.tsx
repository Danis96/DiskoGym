import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function Map() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#D4A840]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
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
            Find <span className="neon-text">Us</span>
          </h2>
          <p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Located in the heart of Sarajevo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl overflow-hidden aspect-video"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.4474799999997!2d18.3654!3d43.8564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUxJzIzLjAiTiAxOMKwMjEnNTUuNCJF!5e0!3m2!1sen!2sba!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Disko Gym Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card interactive-surface p-8 rounded-2xl group">
              <div className="flex items-start gap-4">
                <div className="text-[#D4A840] group-hover:text-[#E6C054] transition-colors duration-300">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Address
                  </h3>
                  <p
                    className="text-gray-300 text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Džemala Bijedića 138
                    <br />
                    Sarajevo, Bosnia and Herzegovina
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card interactive-surface p-8 rounded-2xl group">
              <div className="flex items-start gap-4">
                <div className="text-[#D4A840] group-hover:text-[#E6C054] transition-colors duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Contact
                  </h3>
                  <p
                    className="text-gray-300 text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    +387 33 123 456
                    <br />
                    info@diskogym.ba
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card interactive-surface p-8 rounded-2xl group">
              <div className="flex items-start gap-4">
                <div className="text-[#D4A840] group-hover:text-[#E6C054] transition-colors duration-300">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Opening Hours
                  </h3>
                  <p
                    className="text-gray-300 text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Monday - Sunday
                    <br />
                    09:00 - 24:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
