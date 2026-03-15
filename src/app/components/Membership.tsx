import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function Membership() {
  const { ref, inView } = useInView();

  const plans = [
    {
      name: "Classic Plan",
      price: "50",
      popular: false,
      features: [
        "Unlimited gym access",
        "All cardio machines",
        "Free weights zone",
        "Locker access",
        "Basic trainer consultation",
      ],
    },
    {
      name: "VIP Plan",
      price: "65",
      popular: true,
      features: [
        "Unlimited gym access",
        "All group classes",
        "Personal trainer consultation",
        "Nutrition guidance",
        "Priority locker",
        "Guest passes (2/month)",
      ],
    },
    {
      name: "Student Plan",
      price: "40",
      popular: false,
      features: [
        "Unlimited gym access",
        "Selected group classes",
        "Student locker access",
        "Basic consultation",
        "Valid student ID required",
      ],
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A840]/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2
            className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Membership <span className="neon-text">Plans</span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Choose the perfect plan for your fitness journey
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative glass-card rounded-2xl p-6 sm:p-8 ${
                plan.popular
                  ? "neon-border md:col-span-2 xl:col-span-1 xl:-translate-y-2"
                  : ""
              } interactive-surface`}
            >
              {plan.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <span className="rounded-full bg-gradient-to-r from-[#D4A840] to-[#B8922E] px-5 py-2 text-xs font-semibold tracking-[0.18em] text-black sm:px-6 sm:text-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className="mb-4 text-2xl font-bold text-white sm:text-3xl"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    className={`text-5xl font-bold sm:text-6xl ${
                      plan.popular ? "neon-text" : "text-white"
                    }`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-400 sm:text-xl">KM/month</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3 sm:space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4A840]`}
                    />
                    <span
                      className="text-sm text-gray-300 sm:text-base"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "neon-button"
                    : "glass-button hover:border-[#D4A840]"
                }`}
              >
                Start Training Today
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
