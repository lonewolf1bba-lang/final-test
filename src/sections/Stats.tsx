import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "10M+", label: "Assets Generated", numeric: 10, suffix: "M+" },
  { value: "50K+", label: "Active Creators", numeric: 50, suffix: "K+" },
  { value: "200+", label: "Integrations", numeric: 200, suffix: "+" },
  { value: "99.9%", label: "Uptime", numeric: 99.9, suffix: "%" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * target;
      setCount(Number(start.toFixed(target < 1 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, inView]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll(".stat-item"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
          onEnter: () => setInView(true),
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-[#0B1A3E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4A853] mb-2"
              >
                <AnimatedCounter
                  target={stat.numeric}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-[0.08em] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
