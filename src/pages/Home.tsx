import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Watermark from "@/components/Watermark";
import AnimatedCounter from "@/components/AnimatedCounter";
import TextScramble from "@/components/TextScramble";
import ParticleField from "@/components/ParticleField";
import {
  ArrowRight, TrendingUp, Users, Award, Globe,
  CheckCircle, Play,
  Sparkles,
  Calendar, Tag, BookOpen,
} from "lucide-react";

/* ─── Stagger Container ─── */
function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating Element ─── */
function FloatingElement({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-dark">
      {/* Video Background */}
      <motion.div style={{ opacity: videoOpacity }} className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero-bg-blue.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />
      </motion.div>

      {/* Particle Field */}
      <ParticleField />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] z-[3]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

      {/* Floating orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ width: 150 + i * 60, height: 150 + i * 60, left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 20}%`, background: i % 2 === 0 ? "radial-gradient(circle, rgba(220,38,38,0.15), transparent 70%)" : "radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%)" }}
            animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.95, 1] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y: contentY, scale: textScale }} className="relative z-10 container-main text-center">
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-electric-blue-brand/30 backdrop-blur-md mb-8">
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
            <Sparkles className="w-4 h-4 text-electric-blue-brand" />
          </motion.div>
          <TextScramble text="Smart AI" className="text-sm text-white/90 font-medium" delay={500} />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-5xl sm:text-6xl lg:text-7xl xl:text-[90px] font-extrabold text-white leading-[0.95] mb-6 tracking-tight">
          <span className="block">Smart Tech for</span>
          <motion.span className="block mt-2" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
            <span className="bg-gradient-to-r from-neon-blue-500 via-electric-blue-500 to-yellow-400 bg-clip-text text-transparent">Smart Minds</span>
          </motion.span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }} className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
          We design future-ready platforms—LMS, city apps, dashboards, and consulting—that streamline operations, enhance transparency, and deliver real-world impact.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.1 }} className="flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link to="/services" className="gradient-btn px-8 py-4 rounded-2xl text-base inline-flex items-center gap-2 shadow-glow">Discover Our Services<ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-electric-blue-brand/50 transition-all inline-flex items-center gap-2 backdrop-blur-sm">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}><Play className="w-4 h-4" /></motion.div>
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="mt-16">
          <FloatingElement delay={0}>
            <div className="inline-flex items-center gap-8 sm:gap-12 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              {[{ v: "63+", l: "Years Exp" }, { v: "97K+", l: "Platform Users" }, { v: "24+", l: "Projects" }, { v: "14+", l: "Industries" }].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-white">{s.v}</p>
                  <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </FloatingElement>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-electric-blue-brand" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SERVICES — No Numbers
   ═══════════════════════════════════════════════════ */
function ServicesSection() {
  const services = [
    { num: "01", title: "Center of Excellence (CoE)", image: "/images/service-coe.jpg?v=2", href: "/services#coe" },
    { num: "02", title: "Technical Trainings", image: "/images/service-training.jpg?v=2", href: "/services#trainings" },
    { num: "03", title: "Application Development", image: "/images/service-development.jpg?v=2", href: "/services#development" },
    { num: "04", title: "Consultancy Services", image: "/images/service-consultancy.jpg?v=2", href: "/services#consultancy" },
    { num: "05", title: "Software as a Service", image: "/images/service-saas.jpg?v=2", href: "/services#saas" },
    { num: "06", title: "Solution Engineering", image: "/images/service-engineering.jpg?v=2", href: "/services#engineering" },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue-brand/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-blue-brand/5 rounded-full blur-[100px]" />
      <Watermark />
      <div className="container-main relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-electric-blue-50 text-neon-blue-brand text-sm font-semibold mb-4 border border-electric-blue-100"
          >
            Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Managed IT Services<br />
            <span className="text-gradient-red-orange">for your Industry</span>
          </h2>
        </ScrollReveal>

        {/* Grid — Numbered Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to={service.href}
                  className="group block bg-electric-blue-50 rounded-3xl overflow-hidden border border-electric-blue-100/50 hover:border-electric-blue-300 hover:shadow-premium transition-all duration-500 h-full"
                >
                  {/* Number + Image */}
                  <div className="relative px-6 pt-6 pb-2">
                    <span className="absolute top-8 left-8 z-10 text-2xl font-bold text-neon-blue-brand/60 group-hover:text-neon-blue-brand transition-colors">
                      {service.num}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl overflow-hidden"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[180px] sm:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div className="px-6 pb-4">
                    <h3 className="text-lg font-bold text-dark group-hover:text-neon-blue-brand transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow Button */}
                  <div className="px-6 pb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-white border border-electric-blue-200 flex items-center justify-center text-neon-blue-brand group-hover:bg-neon-blue-brand group-hover:text-white group-hover:border-neon-blue-brand transition-all duration-300 shadow-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   STATS — Smart AI Accurate Data
   ═══════════════════════════════════════════════════ */
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const stats = [
    { icon: Users, value: 97, suffix: "K+", label: "Platform Users Served" },
    { icon: TrendingUp, value: 24, suffix: "+", label: "Projects Delivered" },
    { icon: Award, value: 63, suffix: "+", label: "Years Team Experience" },
    { icon: Globe, value: 14, suffix: "+", label: "Industry Domains" },
  ];

  return (
    <section ref={ref} className="section-padding bg-dark relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue-brand/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-electric-blue-brand/15 rounded-full blur-[130px]" />
      </motion.div>
      <Watermark />
      <div className="container-main relative">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our <span className="text-gradient-orange-yellow">Impact</span></h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Numbers that reflect our commitment to delivering excellence.</p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <motion.div whileHover={{ y: -6, scale: 1.03 }} className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-electric-blue-brand/40 transition-all duration-500 group">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center mx-auto mb-5 shadow-glow group-hover:shadow-glow transition-shadow">
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <p className="text-4xl sm:text-5xl font-bold text-white mb-2"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></p>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   ABOUT SNIPPET
   ═══════════════════════════════════════════════════ */
function AboutSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(parallaxRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const highlights = [
    "Custom platform development & deployment",
    "Intelligent dashboards & analytics",
    "Digital transformation strategies",
    "Domain-specific technical training programs",
  ];

  return (
    <section className="section-padding bg-electric-blue-50 relative overflow-hidden">
      <Watermark />
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative" ref={parallaxRef}>
              <motion.div style={{ y: imageY }} className="relative rounded-3xl overflow-hidden shadow-premium-lg">
                <motion.div initial={{ rotate: -3, scale: 0.95 }} animate={isInView ? { rotate: 0, scale: 1 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
                  <img src="/images/blog-1.jpg?v=2" alt="Our team" className="w-full h-[400px] lg:h-[500px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }} className="absolute bottom-6 left-6 right-6">
                  <div className="bg-dark/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                    <p className="text-white font-semibold text-lg mb-1">65+ Years Combined Expertise</p>
                    <p className="text-white/60 text-sm">Driving digital transformation across industries</p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 w-28 h-28 rounded-2xl bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center shadow-glow z-10">
                <div className="text-center text-white"><p className="text-3xl font-extrabold">65+</p><p className="text-[10px] uppercase tracking-wider font-medium">Years</p></div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-electric-blue-50 text-neon-blue-brand text-sm font-semibold mb-4 border border-electric-blue-100">About Smart AI</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">We Have Over <span className="text-gradient-red-orange">65+ Years</span> of Combined Experience</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">With 65+ years of combined industry experience, Smart AI is a digital solution and consulting firm delivering customised platforms, intelligent dashboards, and transformation strategies to institutions and public service providers.</p>
            <div className="space-y-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring" }}><CheckCircle className="w-5 h-5 text-electric-blue-brand flex-shrink-0" /></motion.div>
                  <span className="text-dark font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/about" className="inline-flex items-center gap-2 gradient-btn px-6 py-3.5 rounded-xl text-sm shadow-glow">Learn More About Us<ArrowRight className="w-4 h-4" /></Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CTA BANNER
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-neon-blue-brand via-neon-blue-700 to-electric-blue-600">
      <Watermark />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      {[...Array(4)].map((_, i) => (
        <motion.div key={i} className="absolute w-20 h-20 rounded-full bg-white/5" style={{ left: `${15 + i * 25}%`, top: `${20 + (i % 2) * 40}%` }} animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }} transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }} />
      ))}
      <div className="container-main relative text-center">
        <ScrollReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Got a Tech Challenge?</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">We've Got the Solution – Let's Talk!</p></ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}><Link to="/contact" className="px-8 py-4 rounded-2xl bg-white text-neon-blue-brand font-semibold hover:shadow-premium-lg transition-all inline-flex items-center gap-2">Contact Now <ArrowRight className="w-5 h-5" /></Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}><Link to="/services" className="px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all">Explore Services</Link></motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   BLOG PREVIEW — Smart AI Actual Blog Titles
   ═══════════════════════════════════════════════════ */
function BlogPreviewSection() {
  const posts = [
    { slug: "digital-transformation-trends-2025", title: "Digital Transformation Trends in 2025: What Businesses Should Expect", excerpt: "Explore the key digital transformation trends that will shape businesses in 2025 and beyond.", coverImage: "/images/blog-cover-1.jpg?v=2", category: "Digital Transformation", date: "June 17, 2025" },
    { slug: "optimizes-it-infrastructure", title: "How Smart AI Optimizes IT Infrastructure for Performance and Cost", excerpt: "Learn how we help organizations optimize their IT infrastructure for maximum performance.", coverImage: "/images/blog-cover-2.jpg?v=2", category: "IT Infrastructure", date: "June 17, 2025" },
    { slug: "managed-it-services-growing-businesses", title: "The Benefits of Managed IT Services for Growing Businesses", excerpt: "Discover why managed IT services are essential for growing businesses in today's digital landscape.", coverImage: "/images/blog-cover-3.jpg?v=2", category: "Managed IT", date: "June 17, 2025" },
  ];

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue-brand/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue-brand/10 rounded-full blur-[130px]" />
      <div className="container-main relative">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-electric-blue-brand text-sm font-semibold border border-white/10 mb-4">
            <BookOpen className="w-3.5 h-3.5 inline mr-1" />
            Our Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest <span className="text-gradient-orange-yellow">Insights</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            More articles from our resource library.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to={`/blog/${post.slug}`} className="group block rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-electric-blue-brand/40 transition-all duration-500 overflow-hidden h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-electric-blue-brand bg-electric-blue-brand/10 px-3 py-1 rounded-full mb-3">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue-brand transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center mt-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-electric-blue-brand/50 transition-all">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <CTASection />
      <BlogPreviewSection />
      <Footer />
    </div>
  );
}
