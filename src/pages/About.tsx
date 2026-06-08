import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Watermark from "@/components/Watermark";
import {
  ArrowRight, CheckCircle, Trophy,
  MonitorCog, MessageSquareText, CloudCog, Code2, GraduationCap, UsersRound, CalendarCheck, Wrench,
} from "lucide-react";

/* ───────── data ───────── */

const missionVision = [
  {
    title: "Our Mission",
    text: "To design and deliver smart, automated solutions that adapt to our clients needs, foster agility in their operations and ensure technology is accessible for business of all sizes.",
  },
  {
    title: "Our Vision",
    text: "We aim to simplify complexity through intelligent automation that enhance decision making and accelerate digital transformation.",
  },
];

const whyPoints = [
  "Deep domain expertise in e-platform development",
  "End-to-end service: strategy, development, deployment",
  "Agile delivery for faster, reliable implementation",
  "Trusted by institutions and service-focused enterprises",
];

interface ServiceCard {
  title: string;
  desc: string;
  img: string;
  icon: React.ElementType;
  href: string;
}

const servicesRow1: ServiceCard[] = [
  { title: "Smart Systems Development", desc: "Designing custom platforms—LMS, city apps, dashboards—to drive performance and engagement.", img: "/images/about/asset_4.jpg?v=2", icon: MonitorCog, href: "/services" },
  { title: "Tech & Management Consulting", desc: "Advisory for digital transformation, IT strategy, project management, and process optimisation.", img: "/images/about/asset_5.jpg?v=2", icon: MessageSquareText, href: "/services" },
  { title: "SaaS Solutions", desc: "On-demand LMS, IoT dashboards, city apps, and integrated tools for operational automation.", img: "/images/about/asset_6.jpg?v=2", icon: CloudCog, href: "/services" },
  { title: "Application Development", desc: "Tailored app development and infrastructure setup with a focus on scalability and security.", img: "/images/about/asset_7.jpg?v=2", icon: Code2, href: "/services" },
];

const servicesRow2: ServiceCard[] = [
  { title: "Technical Trainings", desc: "Shaping the future of education by fostering innovation, inclusivity, and lifelong learning for all.", img: "/images/about/asset_8.jpg?v=2", icon: GraduationCap, href: "/services" },
  { title: "Consultancy Services", desc: "Gain expert insights and strategic guidance to overcome IT challenges and streamline operations.", img: "/images/about/asset_9.jpg?v=2", icon: UsersRound, href: "/services" },
  { title: "Project Management", desc: "Project management is the disciplined approach to planning, organizing, and executing tasks to achieve specific goals within defined timelines and resources.", img: "/images/about/asset_10.jpg?v=2", icon: CalendarCheck, href: "/services" },
  { title: "Solution Engineering", desc: "Design and deploy scalable, tailored IT solutions that address your unique business needs and ensure long-term success.", img: "/images/about/asset_11.jpg?v=2", icon: Wrench, href: "/services" },
];

/* ───────── animation helpers ───────── */

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
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, type: "spring" }}
      className="inline-block"
    >
      {isInView ? value : 0}{suffix}
    </motion.span>
  );
}

/* ───────── service card component ───────── */

function ServiceCardComponent({ service }: { service: ServiceCard }) {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-premium transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Icon circle */}
      <div className="relative flex justify-center -mt-8 mb-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center shadow-glow border-4 border-white"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 text-center">
        <h3 className="text-base font-bold text-dark mb-3 leading-snug">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
        <Link
          to={service.href}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-200 text-gray-400 hover:border-neon-blue-brand hover:text-neon-blue-brand hover:bg-electric-blue-50 transition-all duration-300"
        >
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}

/* ───────── main page ───────── */

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section className="relative h-[400px] sm:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about/about-hero.jpg?v=2" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/75" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">About Us</h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue-brand to-electric-blue-brand mx-auto rounded-full"
          />
        </motion.div>
      </section>

      {/* ═══════ EXPERIENCE SECTION ═══════ */}
      <section className="py-20 lg:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* ── Left: Text ── */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                  We have over <span className="text-gradient-red-orange">65+ years</span>{" "}
                  experience.
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  With 65+ years of combined industry experience, Smart AI is a digital solution and
                  consulting firm delivering customised platforms, intelligent dashboards, and transformation
                  strategies to institutions and public service providers.
                </p>

                {/* Mission / Vision */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {missionVision.map((mv) => (
                    <div key={mv.title}>
                      <h3 className="text-xl font-bold text-dark mb-3">{mv.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{mv.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* ── Right: Image Grid ── */}
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {/* Top large image spanning full width */}
                <motion.div
                  className="col-span-2 rounded-2xl overflow-hidden shadow-premium"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src="/images/about/experience-1.jpg?v=2" alt="Team collaboration" className="w-full h-52 sm:h-60 object-cover" />
                </motion.div>
                {/* Bottom two smaller images */}
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-premium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src="/images/about/experience-2.jpg?v=2" alt="Professional at work" className="w-full h-48 sm:h-56 object-cover" />
                </motion.div>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-premium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src="/images/about/experience-3.jpg?v=2" alt="Team meeting" className="w-full h-48 sm:h-56 object-cover" />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-20 lg:py-28 bg-electric-blue-50 relative overflow-hidden">
        <Watermark />
        {/* Decorative blurred blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue-brand/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-electric-blue-brand/10 rounded-full blur-[120px]" />

        <div className="container-main relative">
          {/* Header */}
          <ScrollReveal className="text-center mb-8">
            <span className="inline-block text-neon-blue-brand text-sm font-semibold tracking-wider uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Why Partner with <span className="text-gradient-red-orange">Smart AI</span>?
            </h2>
          </ScrollReveal>

          {/* Checkmark points - horizontal row */}
          <StaggerContainer className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-16">
            {whyPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-center gap-2 text-gray-600 italic text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Two column: Image + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image with floating trophy */}
            <ScrollReveal direction="left">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl overflow-hidden shadow-premium"
                >
                  <img src="/images/about/why-choose.jpg?v=2" alt="Team collaboration" className="w-full h-[420px] sm:h-[500px] object-cover" />
                </motion.div>
                {/* Floating trophy badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-4 sm:right-8 w-20 h-20 rounded-full bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center shadow-glow-lg"
                >
                  <Trophy className="w-9 h-9 text-white" />
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Right: Text + Big stat */}
            <ScrollReveal direction="right">
              <div>
                <p className="text-gray-500 leading-relaxed mb-6 italic">
                  With over 65 years of collective team experience, our solutions span e-governance, smart platforms, education systems, IoT integration, and industry-specific dashboards. We partner with institutions, development bodies, and enterprises to enable their digital evolution with measurable outcomes.
                </p>

                {/* Big stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="flex items-baseline gap-3 mb-6"
                >
                  <span className="text-2xl font-bold text-dark">Over</span>
                  <span className="text-7xl sm:text-8xl font-bold text-gradient-red-orange leading-none">
                    <AnimatedCounter value={65} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-2xl font-bold text-dark">Years</p>
                    <p className="text-2xl font-bold text-dark">Experience</p>
                  </div>
                </motion.div>

                <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                  Smart AI is a forward-thinking technology and consulting company, offering customized digital solutions, advisory services, and technical training programs. Our core strength lies in solving complex challenges through a combination of deep domain expertise, agile development methodologies, and data-driven strategies.
                </p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Whether it's designing a learning management platform or implementing an integrated project dashboard, we approach every project with one goal: to deliver functional, user-centric, and scalable solutions that create long-term value.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES SECTION ═══════ */}
      <section className="py-20 lg:py-28">
        <div className="container-main">
          {/* Header */}
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-neon-blue-brand text-sm font-semibold tracking-wider uppercase mb-3">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark max-w-2xl mx-auto">
              Managed IT services<br />for your industry
            </h2>
          </ScrollReveal>

          {/* Row 1 */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {servicesRow1.map((s) => (
              <StaggerItem key={s.title}>
                <ServiceCardComponent service={s} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Row 2 */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesRow2.map((s) => (
              <StaggerItem key={s.title}>
                <ServiceCardComponent service={s} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-20 bg-gradient-to-br from-neon-blue-brand via-neon-blue-700 to-electric-blue-600 relative overflow-hidden">
        {/* Animated floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-white/5"
            style={{ left: `${20 + i * 30}%`, top: `${30 + (i % 2) * 20}%` }}
            animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}
        <div className="container-main relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-xl mx-auto mb-8"
          >
            Partner with us to accelerate your digital transformation journey with cutting-edge solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-neon-blue-brand font-semibold hover:shadow-premium-lg transition-all"
            >
              Let's get started <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
