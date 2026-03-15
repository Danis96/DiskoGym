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
    <section ref={ref} className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A840]/10 rounded-full blur-3xl" />

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
            Membership <span className="neon-text">Plans</span>
          </h2>
          <p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Choose the perfect plan for your fitness journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative glass-card rounded-2xl p-8 ${
                plan.popular ? "md:-translate-y-2 neon-border" : ""
              } interactive-surface`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#D4A840] to-[#B8922E] text-black px-6 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className="text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    className={`text-6xl font-bold ${
                      plan.popular ? "neon-text" : "text-white"
                    }`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-xl">KM/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4A840]`}
                    />
                    <span
                      className="text-gray-300"
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
