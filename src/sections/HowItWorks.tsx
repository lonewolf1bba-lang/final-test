// @ts-nocheck
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Sliders, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Describe Your Vision",
    description:
      "Tell Smart AI what you want using natural language. Be as specific or as open-ended as you like.",
  },
  {
    num: "02",
    icon: Sliders,
    title: "Customize & Refine",
    description:
      "Adjust parameters, select styles, and fine-tune outputs with intuitive controls and real-time previews.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Deploy at Scale",
    description:
      "Export in any format, publish directly to your platforms, or automate the entire pipeline with workflows.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll(".step-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
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
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 bg-[#F5F0EB]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold tracking-[0.12em] text-[#D4A853] uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A2E]">
            From Concept to Creation in Three Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="step-card relative bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                <span className="absolute top-6 right-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-[#D4A853]/20">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-[#D4A853] flex items-center justify-center mb-6 relative z-10">
                  <Icon className="w-5 h-5 text-[#D4A853]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-[#5A5A6E] leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
