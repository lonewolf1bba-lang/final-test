import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Starter",
    badge: "FREE",
    badgeColor: "bg-[rgba(61,170,126,0.1)] text-[#3DAA7E]",
    price: "$0",
    period: "/month",
    description: "Perfect for exploring and personal projects",
    features: [
      "100 generations/month",
      "Standard resolution",
      "Community support",
      "Basic templates",
    ],
    cta: "Get Started",
    ctaStyle: "border border-[#0B1A3E] text-[#0B1A3E] hover:bg-[#0B1A3E] hover:text-white",
    highlighted: false,
  },
  {
    name: "Pro",
    badge: "MOST POPULAR",
    badgeColor: "bg-[#D4A853] text-[#0B1A3E]",
    price: "$29",
    period: "/month",
    priceYearly: "$23",
    description: "For professional creators and small teams",
    features: [
      "Unlimited generations",
      "4K resolution",
      "Priority support",
      "Advanced templates",
      "API access",
      "Commercial license",
    ],
    cta: "Start Pro Trial",
    ctaStyle: "bg-[#D4A853] text-[#0B1A3E] hover:bg-[#E8C46A]",
    highlighted: true,
  },
  {
    name: "Enterprise",
    badge: "CUSTOM",
    badgeColor: "bg-[#0B1A3E] text-white",
    price: "Contact Us",
    period: "",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Team management",
      "Advanced analytics",
    ],
    cta: "Contact Sales",
    ctaStyle: "border border-[#0B1A3E] text-[#0B1A3E] hover:bg-[#0B1A3E] hover:text-white",
    highlighted: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll(".pricing-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 bg-[#F5F0EB]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.12em] text-[#D4A853] uppercase mb-4">
            PRICING
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A2E] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#5A5A6E] mb-8">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-1 border border-[#E2E2EA]">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !yearly
                  ? "bg-[#D4A853] text-[#0B1A3E]"
                  : "text-[#5A5A6E] hover:text-[#1A1A2E]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                yearly
                  ? "bg-[#D4A853] text-[#0B1A3E]"
                  : "text-[#5A5A6E] hover:text-[#1A1A2E]"
              }`}
            >
              Yearly
              <span className="text-xs bg-[#3DAA7E] text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card bg-white rounded-3xl p-8 lg:p-12 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-2 border-[#D4A853] shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
                  : "border border-[#E2E2EA] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
              }`}
            >
              <span
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-6 ${plan.badgeColor}`}
              >
                {plan.badge}
              </span>

              <div className="mb-4">
                {plan.price === "Contact Us" ? (
                  <span className="text-3xl font-bold text-[#1A1A2E]">
                    {plan.price}
                  </span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]">
                      {yearly && plan.priceYearly
                        ? `$${plan.priceYearly}`
                        : plan.price}
                    </span>
                    <span className="text-[#5A5A6E]">{plan.period}</span>
                  </div>
                )}
              </div>

              <p className="text-[#5A5A6E] mb-8">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#3DAA7E] flex-shrink-0" />
                    <span className="text-[#1A1A2E]">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-full font-semibold transition-all duration-300 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
