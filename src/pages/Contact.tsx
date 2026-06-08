import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Watermark from "@/components/Watermark";
import {
  Phone, Mail, MapPin, Send, CheckCircle, Clock, Globe,
  ArrowRight, TrendingUp,
} from "lucide-react";

const faqs = [
  { q: "What services does Smart AI offer?", a: "We offer Center of Excellence (CoE), Technical Trainings, Application Development, Consultancy Services, Software as a Service (SaaS), and Solution Engineering." },
  { q: "How can I contact Smart AI?", a: "You can reach us at +91 9811131136 or email us at agilesmarttech@gmail.com. You can also fill out the contact form on this page." },
  { q: "What industries do you serve?", a: "We serve government institutions, educational organizations, healthcare providers, financial services, and enterprise clients across multiple sectors." },
  { q: "Where is Smart AI located?", a: "Smart AI is headquartered in New Delhi, India. We serve clients globally." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject) return;
    setIsPending(true);
    setTimeout(() => {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setIsPending(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="At Smart AI, we bridge strategy, design, and development to build secure, scalable, and intelligent platforms that empower organizations to digitize, optimize, and lead with impact."
        breadcrumb="Get in Touch"
      />

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                Get in touch
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-6">
                <span className="text-gradient-red-orange">We'll help</span> your business
              </h3>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "Call Us", value: "+91 9811131136", href: "tel:+919811131136" },
                  { icon: Mail, label: "Email Us", value: "agilesmarttech@gmail.com", href: "mailto:agilesmarttech@gmail.com" },
                ].map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-5 group cursor-pointer">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center shadow-glow">
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400 mb-0.5">{item.label}</p>
                        <p className="text-dark font-semibold text-lg">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">{inner}</a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="flex items-center gap-6">
                {[
                  { icon: Clock, text: "24/7 Support" },
                  { icon: Globe, text: "Global Delivery" },
                  { icon: TrendingUp, text: "Fast Response" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon className="w-4 h-4 text-electric-blue-brand" />
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              {submitted ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-electric-blue-50 rounded-3xl p-10 text-center border border-electric-blue-100/50">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center mx-auto mb-5 shadow-glow">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-neon-blue-brand font-medium hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSubmit} className="bg-electric-blue-50 rounded-3xl p-8 sm:p-10 border border-electric-blue-100/50 space-y-5">
                  {[
                    { label: "Your Name", type: "text", field: "name" as const, placeholder: "Your name" },
                    { label: "Your Email", type: "email", field: "email" as const, placeholder: "Your email" },
                    { label: "Subject", type: "text", field: "subject" as const, placeholder: "Subject" },
                  ].map((input) => (
                    <div key={input.field}>
                      <label className="block text-dark text-sm font-medium mb-2">{input.label}</label>
                      <input
                        type={input.type}
                        value={form[input.field]}
                        onChange={(e) => setForm({ ...form, [input.field]: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-white border border-electric-blue-200 text-dark placeholder-gray-400 focus:border-electric-blue-brand focus:outline-none focus:ring-2 focus:ring-electric-blue-brand/20 transition-all"
                        placeholder={input.placeholder}
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-dark text-sm font-medium mb-2">Your Message (optional)</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-electric-blue-200 text-dark placeholder-gray-400 focus:border-electric-blue-brand focus:outline-none focus:ring-2 focus:ring-electric-blue-brand/20 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isPending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full gradient-btn py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isPending ? "Sending..." : <><>Submit</><Send className="w-4 h-4" /></>}
                  </motion.button>
                </motion.form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ + Location */}
      <section className="section-padding bg-electric-blue-50">
        <Watermark />
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <h3 className="text-2xl font-bold text-dark mb-6">
                Frequently Asked <span className="text-gradient-red-orange">Questions</span>
              </h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <motion.details
                    key={faq.q}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl border border-electric-blue-100/50 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer text-dark font-medium hover:text-neon-blue-brand transition-colors select-none">
                      {faq.q}
                      <motion.span className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4">
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </summary>
                    <motion.div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</motion.div>
                  </motion.details>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h3 className="text-2xl font-bold text-dark mb-6">Our Location</h3>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-3xl overflow-hidden shadow-premium border border-electric-blue-100/50 h-[400px] flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                    <MapPin className="w-12 h-12 text-electric-blue-brand mx-auto mb-4" />
                  </motion.div>
                  <p className="text-dark font-semibold text-lg mb-2">New Delhi, India</p>
                  <p className="text-gray-500 text-sm mb-6">Serving clients globally from our headquarters</p>
                  <motion.a
                    href="tel:+919811131136"
                    whileHover={{ scale: 1.05 }}
                    className="gradient-btn px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />+91 9811131136
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
