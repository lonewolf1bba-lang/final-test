import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pb-28 overflow-hidden bg-dark">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-neon-blue-brand/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-electric-blue-brand/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container-main">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-electric-blue-brand text-sm font-medium mb-4"
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
