import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function Membership() {
  const { language } = useLanguage();
  const { membership } = getSiteContent(language);
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5A36]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {membership.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            {membership.subheading}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-7 xl:grid-cols-3 xl:gap-8">
          {membership.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`interactive-surface relative rounded-2xl p-6 glass-card sm:p-8 ${
                plan.popular ? "neon-border lg:col-span-2 xl:col-span-1 xl:-translate-y-2" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                  <span
                    className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#FF5A36] to-[#FF8A5B] px-5 py-2 text-[0.7rem] font-semibold tracking-[0.24em] text-white sm:px-6 sm:py-2.5 sm:text-xs"
                    style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)" }}
                  >
                    {membership.popularLabel}
                  </span>
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-5xl font-bold sm:text-6xl ${plan.popular ? "neon-text" : "text-white"}`} style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-400 sm:text-xl">{plan.suffix}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3 sm:space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF5A36]" />
                    <span className="text-sm text-gray-300 sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`block w-full rounded-lg py-4 text-center font-semibold transition-all duration-300 ${plan.popular ? "neon-button" : "glass-button hover:border-[#FF5A36]"}`}>
                {membership.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
