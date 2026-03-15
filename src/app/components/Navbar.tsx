import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Dumbbell } from "lucide-react";

export function Navbar() {
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
        setIsScrolled((current) =>
          current === nextIsScrolled ? current : nextIsScrolled
        );
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Group Training", href: "#group-training" },
    { name: "Membership", href: "#membership" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card shadow-2xl supports-[backdrop-filter]:bg-black/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Dumbbell className="h-7 w-7 text-[#D4A840] transition-transform duration-300 group-hover:rotate-45 sm:h-8 sm:w-8" />
            <span
              className="text-[2rem] font-bold leading-none sm:text-3xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-white">Disko</span>
              <span className="neon-text"> Gym</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-[#D4A840] transition-colors duration-300 relative group"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A840] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="#membership" className="neon-button rounded-lg px-6 py-2 text-sm">
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 text-lg text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-[#D4A840]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {link.name}
                </a>
              ))}
              </div>
              <a
                href="#membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="neon-button mt-4 block w-full rounded-lg px-6 py-3 text-center"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
