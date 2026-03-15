import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-[#D4A840]/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-4xl font-bold mb-4"
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
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-[#D4A840] flex-shrink-0 mt-0.5" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  Džemala Bijedića 138, Sarajevo
                </span>
              </div>
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
            <div className="flex gap-4">
              <a
                href="#"
                className="interactive-surface w-12 h-12 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-[#D4A840] transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="interactive-surface w-12 h-12 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-[#D4A840] transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">
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
