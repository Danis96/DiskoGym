import { MapPin, Phone, Clock, Instagram, Facebook, Mail, Map, BadgeCheck } from "lucide-react";

const googleMapsUrl =
  "https://www.google.com/maps/place/Fitness+Centar+Disko+Gym/@43.8508723,18.3604341,806m/data=!3m1!1e3!4m6!3m5!1s0x4758c9a8c9da963d:0x684a6c97e78b5b6e!8m2!3d43.8508723!4d18.363009!16s%2Fg%2F11fhvn3ttk?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";
const instagramUrl = "https://www.instagram.com/diskogym/";
const facebookUrl = "https://www.facebook.com/FitnessDiskoGym/";
const fitpassUrl = "https://fitpass.ba/en/objects/fitness-centar-diskogym";

export function Footer() {
  return (
    <footer className="border-t border-[#D4A840]/20 bg-zinc-950 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:mb-12 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <h3
              className="mb-4 text-3xl font-bold sm:text-4xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="neon-text">Disko</span>
              <span className="text-white"> Gym</span>
            </h3>
            <p
              className="text-gray-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Transform your body, transform your life.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <MapPin className="w-5 h-5 text-[#D4A840] flex-shrink-0 mt-0.5" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  Džemala Bijedića 138, Sarajevo
                </span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-[#D4A840]" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  +387 33 123 456
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-[#D4A840]" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  info@diskogym.ba
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Opening Hours
            </h4>
            <div className="flex items-start gap-2 text-gray-400">
              <Clock className="w-5 h-5 text-[#D4A840] flex-shrink-0 mt-0.5" />
              <div style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>Monday - Sunday</p>
                <p className="font-semibold text-white">09:00 - 24:00</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Disko Gym Instagram"
                className="interactive-surface glass-card flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:text-[#D4A840] sm:h-12 sm:w-12"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Disko Gym Facebook"
                className="interactive-surface glass-card flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:text-[#D4A840] sm:h-12 sm:w-12"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Disko Gym on Google Maps"
                className="interactive-surface glass-card flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:text-[#D4A840] sm:h-12 sm:w-12"
              >
                <Map className="w-6 h-6" />
              </a>
              <a
                href={fitpassUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Disko Gym on FitPass"
                className="interactive-surface glass-card flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:text-[#D4A840] sm:h-12 sm:w-12"
              >
                <BadgeCheck className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p
            className="text-gray-500"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 Disko Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
