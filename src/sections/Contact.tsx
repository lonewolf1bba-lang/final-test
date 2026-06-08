import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    setIsPending(true);
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsPending(false);
    }, 800);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll(".contact-anim"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
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
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 bg-[#0B1A3E]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="contact-anim">
            <p className="text-xs font-bold tracking-[0.12em] text-[#D4A853] uppercase mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Whether you have a question about features, pricing, need a demo,
              or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A853]/10 flex items-center justify-center">
                  <Send className="w-4 h-4 text-[#D4A853]" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="text-white">agilesmarttech@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-anim">
            {submitted ? (
              <div className="bg-[#142B5C] rounded-2xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-[#3DAA7E] mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/60 mb-4">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#D4A853] hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#142B5C] rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1A3E] border border-white/10 text-white placeholder-white/30 focus:border-[#D4A853] focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1A3E] border border-white/10 text-white placeholder-white/30 focus:border-[#D4A853] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1A3E] border border-white/10 text-white placeholder-white/30 focus:border-[#D4A853] focus:outline-none transition-colors"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1A3E] border border-white/10 text-white placeholder-white/30 focus:border-[#D4A853] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3.5 rounded-full bg-[#D4A853] text-[#0B1A3E] font-semibold hover:bg-[#E8C46A] transition-all duration-300 disabled:opacity-50"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
