/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Light Blue brand colors
        "neon-blue": {
          DEFAULT: "#5B9FFF",
          brand: "#5B9FFF",
          50: "#EDF4FF",
          100: "#D6E8FF",
          200: "#A8D0FF",
          300: "#7AB8FF",
          400: "#5B9FFF",
          500: "#5B9FFF",
          600: "#3A7BD5",
          700: "#2A5FA8",
        },
        "electric-blue": {
          DEFAULT: "#8EC5FF",
          brand: "#8EC5FF",
          50: "#F0F7FF",
          100: "#D6EBFF",
          200: "#B8DAFF",
          300: "#8EC5FF",
          400: "#6AB0FF",
          500: "#8EC5FF",
          600: "#5B9FFF",
          700: "#3A7BD5",
          800: "#2A5FA8",
        },
        // Legacy aliases for backward compatibility in components
        red: {
          brand: "#5B9FFF",
          50: "#EDF4FF",
          100: "#D6E8FF",
          500: "#5B9FFF",
          600: "#3A7BD5",
          700: "#2A5FA8",
          900: "#1A3D6B",
        },
        orange: {
          brand: "#8EC5FF",
          50: "#F0F7FF",
          100: "#D6EBFF",
          400: "#8EC5FF",
          500: "#8EC5FF",
          600: "#5B9FFF",
        },
        yellow: {
          brand: "#6AB0FF",
          50: "#F0F7FF",
          100: "#D6EBFF",
          400: "#8EC5FF",
          500: "#8EC5FF",
        },
        cream: "#FFF7ED",
        dark: "#0B1120",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        glow: "0 0 20px rgba(91, 159, 255, 0.4)",
        "glow-red": "0 0 20px rgba(91, 159, 255, 0.4)",
        "glow-yellow": "0 0 20px rgba(142, 197, 255, 0.4)",
        premium: "0 10px 40px -10px rgba(0, 0, 0, 0.15)",
        "premium-lg": "0 20px 60px -15px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #5B9FFF 0%, #8EC5FF 50%, #A8D0FF 100%)",
        "red-orange": "linear-gradient(135deg, #5B9FFF 0%, #8EC5FF 100%)",
        "orange-yellow": "linear-gradient(135deg, #8EC5FF 0%, #A8D0FF 100%)",
        "red-yellow": "linear-gradient(135deg, #5B9FFF 0%, #A8D0FF 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
