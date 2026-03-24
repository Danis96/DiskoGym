import { MapPin, Phone, Clock, Facebook, Map, BadgeCheck } from "lucide-react";
import { client } from "../content/client";

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
              <span className="neon-text">{client.brandPrimary}</span>
              <span className="text-white">{client.brandSecondary}</span>
            </h3>
            <p
              className="text-gray-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {client.tagline}
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
                href={client.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <MapPin className="w-5 h-5 text-[#D4A840] flex-shrink-0 mt-0.5" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  {client.addressLine1}, {client.city}
                </span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-[#D4A840]" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  {client.phoneDisplay}
                </span>
              </div>
              <a
                href={client.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <Facebook className="w-5 h-5 text-[#D4A840]" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  Facebook Page
                </span>
              </a>
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
                <p>{client.hoursDays}</p>
                <p className="font-semibold text-white">{client.hoursTime}</p>
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
                href={client.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${client.businessName} Facebook`}
                className="interactive-surface glass-card flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:text-[#D4A840] sm:h-12 sm:w-12"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={client.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${client.businessName} on Google Maps`}
                className="interactive-surface glass-card flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:text-[#D4A840] sm:h-12 sm:w-12"
              >
                <Map className="w-6 h-6" />
              </a>
              <a
                href={client.fitpassUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${client.businessName} on FitPass`}
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
            © 2026 {client.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
