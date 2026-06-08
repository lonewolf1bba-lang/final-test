import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll(".cta-content"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
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
      className="py-20 sm:py-24 bg-[#0B1A3E] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1A3E] to-[#142B5C]" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="cta-content text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="cta-content text-white/70 text-lg max-w-[520px] mx-auto mb-8">
            Join 50,000+ creators and teams already using Smart AI.
          </p>
          <div className="cta-content flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              to="/login"
              className="px-10 py-4 rounded-full bg-[#D4A853] text-[#0B1A3E] font-semibold hover:bg-[#E8C46A] hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Free
            </Link>
            <Link
              to="/ai-chat"
              className="px-10 py-4 rounded-full border border-white/30 text-white font-semibold hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="cta-content text-white/40 text-sm">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
