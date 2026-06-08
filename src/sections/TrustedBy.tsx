import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Globe,
  Zap,
  Layers,
  Database,
  Cloud,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "TechFlow", icon: Cpu },
  { name: "GlobalNet", icon: Globe },
  { name: "PowerAI", icon: Zap },
  { name: "LayerStack", icon: Layers },
  { name: "DataCore", icon: Database },
  { name: "CloudVerse", icon: Cloud },
];

export default function TrustedBy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".partner-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 0.5,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
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
      ref={sectionRef}
      className="py-16 bg-[#F5F0EB]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold tracking-[0.12em] text-[#8A8A9E] uppercase mb-8">
          TRUSTED BY INNOVATORS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="partner-item flex items-center gap-2 text-[#8A8A9E] opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-semibold">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
