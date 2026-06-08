import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Watermark from "@/components/Watermark";
import {
  Cpu, Code, GraduationCap, Lightbulb, Cloud, Server,
  ArrowRight, CheckCircle, Shield, BarChart3, Zap,
  Monitor, Layers, Database, Globe,
} from "lucide-react";

const services = [
  { id: "coe", icon: Cpu, title: "Center of Excellence (CoE)", subtitle: "CoE Ecosystem", image: "/images/service-coe.jpg?v=2", desc: "Establish Centers of Excellence that drive innovation, standardization, and best practices across your organization. We help you build specialized teams that become the knowledge hub for emerging technologies.", features: ["Digital Transformation Strategy", "Process Standardization", "Knowledge Management Systems", "Innovation Labs Setup", "Best Practices Framework", "Continuous Improvement Models"] },
  { id: "trainings", icon: GraduationCap, title: "Technical Trainings", subtitle: "Future-Ready Workforce", image: "/images/service-training.jpg?v=2", desc: "Through domain-specific technical training across architecture, multimedia, and manufacturing, we help organizations upskill their workforce. Our programs align with modern industry needs and technology shifts.", features: ["Cloud Architecture Training", "AI/ML Fundamentals", "Cybersecurity Workshops", "Data Analytics Programs", "DevOps & CI/CD Training", "Leadership in Tech"] },
  { id: "development", icon: Code, title: "Application Development", subtitle: "Custom Platforms", image: "/images/service-development.jpg?v=2", desc: "Designing custom platforms—LMS, city apps, dashboards—to drive performance and engagement. We architect and deliver dynamic digital platforms that scale with your institution's growth.", features: ["Learning Management Systems", "Smart City Applications", "Business Intelligence Dashboards", "Mobile App Development", "Enterprise Web Applications", "API & Integration Services"] },
  { id: "consultancy", icon: Lightbulb, title: "Consultancy Services", subtitle: "Strategic Advisory", image: "/images/service-consultancy.jpg?v=2", desc: "Advisory for digital transformation, IT strategy, project management, and process optimization. Our consulting-led approach integrates technology with real-world outcomes.", features: ["Digital Transformation Roadmap", "IT Governance Frameworks", "Process Optimization", "Technology Stack Advisory", "Project Management Office", "Change Management"] },
  { id: "saas", icon: Cloud, title: "Software as a Service", subtitle: "Cloud-Native Solutions", image: "/images/service-saas.jpg?v=2", desc: "On-demand LMS, IoT dashboards, city apps, and integrated tools for operational automation. Cloud-native software delivered as a service—scalable, secure, and always up to date.", features: ["SaaS Platform Architecture", "Multi-Tenant Solutions", "Auto-Scaling Infrastructure", "Zero-Downtime Deployments", "Enterprise Security", "Usage-Based Pricing Models"] },
  { id: "engineering", icon: Server, title: "Solution Engineering", subtitle: "End-to-End Delivery", image: "/images/service-engineering.jpg?v=2", desc: "Design and deploy scalable, tailored IT solutions that address your unique business needs and ensure long-term success. Connected platforms for intelligent monitoring.", features: ["System Architecture Design", "IoT Integration", "Real-Time Analytics", "Data Pipeline Engineering", "Microservices Architecture", "Performance Optimization"] },
];

const highlights = [
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security protocols" },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Live dashboards & insights" },
  { icon: Monitor, title: "Cross-Platform", desc: "Web, mobile & desktop" },
  { icon: Layers, title: "Scalable Architecture", desc: "Grows with your business" },
  { icon: Database, title: "Data Management", desc: "Enterprise data solutions" },
  { icon: Globe, title: "Global Delivery", desc: "Worldwide deployment" },
];

function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Services() {
  const introRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(introRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: introRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="IT Services"
        subtitle="Smart AI IT Services"
        breadcrumb="What We Do"
      />

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative" ref={introRef}>
                <motion.div style={{ y: imgY }} className="relative">
                  <motion.div initial={{ rotate: -2 }} animate={isInView ? { rotate: 0 } : {}} transition={{ duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-premium-lg">
                    <img src="/images/blog-2.jpg" alt="IT Services" className="w-full h-[400px] object-cover" />
                  </motion.div>
                </motion.div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-premium p-6 border border-electric-blue-100 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div><p className="text-2xl font-bold text-dark">65+</p><p className="text-xs text-gray-500">Years Experience</p></div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6 leading-tight">Smart AI <span className="text-gradient-red-orange">IT Services</span></h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">At Smart AI, we bridge strategy, design, and development to build secure, scalable, and intelligent platforms that empower organizations to digitize, optimize, and lead with impact.</p>
              <p className="text-gray-500 leading-relaxed mb-8">With 65+ years of combined industry experience, Smart AI is a digital solution and consulting firm delivering customised platforms, intelligent dashboards, and transformation strategies to institutions and public service providers.</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 gradient-btn px-6 py-3 rounded-xl text-sm">Start a Project <ArrowRight className="w-4 h-4" /></Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid — No Numbers */}
      <section className="section-padding bg-electric-blue-50">
        <Watermark />
        <div className="container-main">
          <ScrollReveal className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-electric-blue-50 text-neon-blue-brand text-sm font-semibold mb-4 border border-electric-blue-100">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">Managed IT Services<br /><span className="text-gradient-red-orange">for Your Industry</span></h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <Link to={`#${service.id}`} className="group block bg-white rounded-3xl overflow-hidden border border-electric-blue-100/50 hover:border-electric-blue-300 hover:shadow-premium transition-all duration-500 h-full">
                    {/* Image */}
                      <div className="px-6 pt-6 pb-2">
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden">
                          <img src={service.image} alt={service.title} className="w-full h-[180px] sm:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                      </div>
                      {/* Title */}
                      <div className="px-6 pb-4">
                        <h3 className="text-lg font-bold text-dark group-hover:text-neon-blue-brand transition-colors duration-300">{service.title}</h3>
                      </div>
                      {/* Arrow */}
                      <div className="px-6 pb-6">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full bg-electric-blue-50 border border-electric-blue-200 flex items-center justify-center text-blue-500 group-hover:bg-neon-blue-brand group-hover:text-white group-hover:border-neon-blue-brand transition-all duration-300">
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

      {/* Detailed Service Cards — No Numbers */}
      <section className="section-padding bg-white">
        <Watermark />
        <div className="container-main">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Service <span className="text-gradient-red-orange">Details</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">Deep dive into each of our service offerings and how they can help your organization.</p>
          </ScrollReveal>

          <div className="space-y-24">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={service.id} id={service.id}>
                  <ScrollReveal>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring" }} className="relative group">
                          <div className="rounded-3xl overflow-hidden shadow-premium">
                            <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} src={service.image} alt={service.title} className="w-full h-[320px] lg:h-[380px] object-cover" />
                          </div>
                        </motion.div>
                      </div>
                      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }} className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center shadow-glow">
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-dark">{service.title}</h3>
                            <p className="text-electric-blue-brand text-sm font-medium">{service.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((f, i) => (
                            <motion.div key={f} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-2.5">
                              <CheckCircle className="w-4.5 h-4.5 text-electric-blue-brand flex-shrink-0" />
                              <span className="text-dark text-sm">{f}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-electric-blue-50">
        <div className="container-main">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Why Choose Our <span className="text-gradient-red-orange">Services</span></h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <motion.div whileHover={{ y: -6, scale: 1.02, borderColor: "rgba(249,115,22,0.3)" }} className="bg-white rounded-2xl p-7 border border-electric-blue-100/50 hover:shadow-premium transition-all">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}><Icon className="w-8 h-8 text-electric-blue-brand mb-4" /></motion.div>
                    <h4 className="text-lg font-bold text-dark mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-neon-blue-brand via-neon-blue-700 to-electric-blue-600 relative overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} className="absolute w-20 h-20 rounded-full bg-white/5" style={{ left: `${10 + i * 25}%`, top: `${20 + (i % 2) * 30}%` }} animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, delay: i * 0.6 }} />
        ))}
        <div className="container-main relative text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Let's discuss how we can help you achieve your digital transformation goals.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-neon-blue-brand font-semibold hover:shadow-premium-lg transition-all">Contact Us Now <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
