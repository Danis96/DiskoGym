import { motion } from "motion/react";
import { Flame, Music4, TimerReset, Trophy, Users } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { getSiteContent } from "../content/client";
import { useLanguage } from "../LanguageProvider";

export function GroupTraining() {
  const { language } = useLanguage();
  const { client, training, membership } = getSiteContent(language);
  const { ref, inView } = useInView();

  const trainingFormats = [
    { icon: <Flame className="h-7 w-7" />, ...training.formats[0] },
    { icon: <Users className="h-7 w-7" />, ...training.formats[1] },
    { icon: <Music4 className="h-7 w-7" />, ...training.formats[2] },
  ];

  const classMoments = membership.plans.map((plan) => ({
    title: plan.name,
    accent: plan.price,
    time: plan.suffix,
  }));

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FF5A36]/10 to-transparent" />
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#FF5A36]/10 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-[#FF5A36]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF5A36]/30 bg-[#FF5A36]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#FF8A5B] sm:text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
            <Trophy className="h-4 w-4" />
            {training.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {training.heading}
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            {training.description}
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#FF5A36]/20 bg-[#0f0f0f] p-5 shadow-[0_0_40px_rgba(255,90,54,0.08)] sm:p-7 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,90,54,0.22),transparent_42%),linear-gradient(135deg,rgba(255,90,54,0.08),transparent_50%)]" />

            <div className="relative space-y-6 lg:space-y-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#FF5A36]/20 bg-[#FF5A36]/10 px-4 py-2 text-[#FF8A5B]">
                    <TimerReset className="h-5 w-5" />
                    <span className="text-[0.7rem] uppercase tracking-[0.25em] sm:text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {training.highlightLabel}
                    </span>
                  </div>

                  <h3 className="mb-4 max-w-[14ch] text-3xl font-bold leading-none text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {training.highlightTitle}
                  </h3>

                  <p className="max-w-xl text-base leading-7 text-gray-300 sm:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {training.highlightDescription}
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt={`${client.businessName} training atmosphere`}
                    className="h-full min-h-[18rem] w-full object-cover sm:min-h-[22rem] lg:min-h-[25rem]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-[#FF8A5B] backdrop-blur-sm sm:text-xs">
                      <Flame className="h-4 w-4" />
                      {client.tagline}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {trainingFormats.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                    className="glass-card rounded-2xl p-5 sm:p-6"
                  >
                    <div className="mb-4 text-[#FF5A36]">{item.icon}</div>
                    <h4 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="max-w-[28ch] text-sm leading-6 text-gray-400 sm:text-[0.95rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card rounded-[1.75rem] p-6 sm:p-8">
              <h3 className="mb-6 text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {training.memberHighlightsHeading}
              </h3>

              <div className="space-y-4">
                {classMoments.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#FF5A36]/40 hover:bg-[#FF5A36]/[0.06] sm:p-5"
                  >
                    <div className="mb-1 text-lg font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {item.title}
                    </div>
                    <div className="text-sm uppercase tracking-[0.2em] text-[#FF8A5B]">{item.accent}</div>
                    <div className="mt-2 text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.time}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#FF5A36]/30 bg-gradient-to-br from-[#FF5A36]/20 via-[#FF5A36]/10 to-transparent p-6 sm:p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#FF8A5B]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {training.visitEyebrow}
              </p>
              <h3 className="mb-3 text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {training.visitTitle}
              </h3>
              <p className="mb-6 text-base leading-7 text-gray-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                {training.visitDescription}
              </p>
              <a href="#contact" className="neon-button inline-flex w-full items-center justify-center rounded-lg px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] sm:w-auto sm:text-base" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {training.visitCta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
