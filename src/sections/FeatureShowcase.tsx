import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Text-to-image with 50+ style presets",
  "Inpainting and background removal",
  "Batch generation for rapid prototyping",
  "Commercial license included on all plans",
];

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const left = section.querySelector(".feature-left");
    const right = section.querySelector(".feature-right");

    gsap.fromTo(
      left,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      }
    );
    gsap.fromTo(
      right,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
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
      className="py-20 sm:py-28 lg:py-32 bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="feature-left">
            <p className="text-xs font-bold tracking-[0.12em] text-[#D4A853] uppercase mb-4">
              AI CREATIVE STUDIO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A2E] mb-6 leading-tight">
              Generate Stunning Visuals in Seconds
            </h2>
            <p className="text-[#5A5A6E] text-lg leading-relaxed mb-8">
              Describe what you envision, and Smart AI transforms your words
              into high-fidelity images, illustrations, and designs. Fine-tune
              styles, adjust composition, and iterate until perfection — no
              design skills required.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3DAA7E]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#3DAA7E]" />
                  </div>
                  <span className="text-[#1A1A2E]">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="/ai-generate"
              className="inline-block px-8 py-3.5 rounded-full bg-[#D4A853] text-[#0B1A3E] font-semibold text-sm hover:bg-[#E8C46A] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Creative Studio
            </a>
          </div>

          {/* Right - Visual */}
          <div className="feature-right">
            <div className="rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <div className="grid grid-cols-2 gap-2 p-2 bg-[#0B1A3E]">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden"
                  >
                    <img
                      src={`/images/feature-${i}.jpg`}
                      alt={`AI generated art ${i}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
