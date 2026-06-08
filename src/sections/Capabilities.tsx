import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Brain, GitBranch, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Sparkles,
    title: "AI Generation",
    description:
      "Create images, text, and media with state-of-the-art generative models. From concept to production in seconds.",
  },
  {
    icon: Brain,
    title: "Smart Automation",
    description:
      "Orchestrate complex workflows with intelligent agents that learn, adapt, and execute tasks autonomously.",
  },
  {
    icon: GitBranch,
    title: "Seamless Integration",
    description:
      "Connect with 200+ tools and platforms. APIs, webhooks, and native plugins for every major service.",
  },
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".cap-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 bg-[#F5F0EB]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold tracking-[0.12em] text-[#D4A853] uppercase mb-4">
            CAPABILITIES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A2E] mb-4">
            Built for Every Creative Workflow
          </h2>
          <p className="text-[#5A5A6E] max-w-[560px] mx-auto">
            From solo creators to enterprise teams, Smart AI scales with your
            ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="cap-card bg-white border border-[#E2E2EA] rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:border-[rgba(212,168,83,0.2)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#D4A853] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#D4A853]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">
                  {cap.title}
                </h3>
                <p className="text-[#5A5A6E] mb-4 leading-relaxed">
                  {cap.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#D4A853] font-medium text-sm hover:underline cursor-pointer">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
