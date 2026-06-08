import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function TextScramble({
  text,
  className = "",
  delay = 0,
  duration = 1500,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(
    text.split("").map(() => (" ")).join("")
  );
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const timeout = setTimeout(() => {
      const textChars = text.split("");
      const totalFrames = 30;
      let frame = 0;

      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const revealed = Math.floor(progress * text.length);

        const result = textChars
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealed) return textChars[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplay(result);

        if (frame >= totalFrames) {
          setDisplay(text);
          clearInterval(interval);
        }
      }, duration / totalFrames);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
