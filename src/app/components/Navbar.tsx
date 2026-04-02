import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Dumbbell } from "lucide-react";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { client, nav } = getSiteContent(language);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        const nextIsScrolled = window.scrollY > 24;
        setIsScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled));
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: nav.home, href: "#home" },
    { name: nav.about, href: "#about" },
    { name: nav.facilities, href: "#facilities" },
    { name: nav.training, href: "#group-training" },
    { name: nav.membership, href: "#membership" },
    { name: nav.gallery, href: "#gallery" },
    { name: nav.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card shadow-2xl supports-[backdrop-filter]:bg-black/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <Dumbbell className="h-7 w-7 text-[#FF5A36] transition-transform duration-300 group-hover:rotate-45 sm:h-8 sm:w-8" />
            <span
              className="text-[2rem] font-bold leading-none sm:text-3xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-white">{client.brandPrimary}</span>
              <span className="neon-text"> {client.brandSecondary}</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-300 transition-colors duration-300 hover:text-[#FF5A36] group"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FF5A36] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1">
              {(["bs", "en"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold tracking-[0.2em] transition-colors ${
                    language === option ? "bg-[#FF5A36] text-white" : "text-gray-300"
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                  aria-label={`${nav.languageLabel}: ${option.toUpperCase()}`}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contact" className="neon-button rounded-lg px-6 py-2 text-sm">
              {nav.cta}
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-white transition-colors duration-300 hover:bg-white/5 lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card border-t border-white/10 lg:hidden"
          >
            <div className="px-4 py-5 sm:px-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-xl px-3 py-3 text-lg text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-[#FF5A36]"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {(["bs", "en"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLanguage(option)}
                    className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold tracking-[0.2em] ${
                      language === option ? "bg-[#FF5A36] text-white" : "bg-white/5 text-gray-300"
                    }`}
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="neon-button mt-4 block w-full rounded-lg px-6 py-3 text-center"
              >
                {nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
