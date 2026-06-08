import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Number((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
