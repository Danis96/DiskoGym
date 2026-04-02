import { MapPin, Phone, Clock, Map } from "lucide-react";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function Footer() {
  const { language } = useLanguage();
  const { client, footer } = getSiteContent(language);

  return (
    <footer className="border-t border-[#FF5A36]/20 bg-zinc-950 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:mb-12 lg:grid-cols-4 lg:gap-12">
          <div>
            <h3 className="mb-4 text-3xl font-bold sm:text-4xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="neon-text">{client.brandPrimary}</span>
              <span className="text-white"> {client.brandSecondary}</span>
            </h3>
            <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              {client.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {footer.contactHeading}
            </h4>
            <div className="space-y-3">
              <a
                href={client.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF5A36]" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>{client.addressLine2}</span>
              </a>
              {client.phoneDisplay ? (
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-5 w-5 text-[#FF5A36]" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>{client.phoneDisplay}</span>
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {footer.hoursHeading}
            </h4>
            <div className="flex items-start gap-2 text-gray-400">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF5A36]" />
              <div style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>{client.hoursDays}</p>
                <p className="font-semibold text-white">{client.hoursTime}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {footer.socialHeading}
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href={client.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${client.businessName} on Google Maps`}
                className="interactive-surface glass-card flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:text-[#FF5A36] sm:h-12 sm:w-12"
              >
                <Map className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 {client.businessName}. {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
