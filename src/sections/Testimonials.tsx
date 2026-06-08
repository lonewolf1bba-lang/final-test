import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Creative Director, Lumina Studios",
    quote:
      "Smart AI transformed our creative workflow. What used to take days now happens in minutes, and the quality is consistently exceptional.",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    name: "Marcus Rivera",
    role: "Founder, NexGen Media",
    quote:
      "The automation capabilities alone saved us 40 hours per week. Our team can finally focus on strategy instead of repetitive tasks.",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    name: "Aisha Patel",
    role: "Product Designer, FlowState",
    quote:
      "I was skeptical about AI-generated visuals, but Smart AI changed my mind. The outputs are genuinely stunning and unique every time.",
    avatar: "/images/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll(".testimonial-card"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-32 bg-[#0B1A3E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.12em] text-[#D4A853] uppercase mb-4">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
              Loved by Creators Worldwide
            </h2>
            <p className="text-white/60 text-lg max-w-[480px]">
              See what our community is building with Smart AI.
            </p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card bg-[#142B5C] border rounded-2xl p-8 transition-all duration-300 ${
                i === activeIndex
                  ? "border-[#D4A853]/30"
                  : "border-[rgba(212,168,83,0.15)] hover:border-[#D4A853]/30"
              }`}
            >
              <p className="text-white italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#D4A853] fill-[#D4A853]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
