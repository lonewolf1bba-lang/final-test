import { Link } from "react-router";
import { Linkedin, Mail, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Center of Excellence (CoE)", href: "/services" },
  { label: "Technical Trainings", href: "/services" },
  { label: "Application Development", href: "/services" },
  { label: "Consultancy Services", href: "/services" },
  { label: "Software as a Service", href: "/services" },
  { label: "Solution Engineering", href: "/services" },
];

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue-brand/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue-brand/10 rounded-full blur-[128px]" />

      <div className="relative container-main pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src="/images/smartai-logo-new.png" alt="Smart AI" className="h-8 w-auto brightness-200 contrast-125 saturate-150" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Smart AI is a forward-thinking technology and consulting company, offering customized digital solutions, advisory services, and technical training programs. Our core strength lies in solving complex challenges through a combination of deep domain expertise, agile development methodologies, and data-driven strategies.
            </p>
            <div className="space-y-3 mb-6">
              <a href="tel:+919811131136" className="flex items-center gap-3 text-gray-400 hover:text-electric-blue-brand transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +91 981113136
              </a>
              <a href="mailto:agilesmarttech@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-electric-blue-brand transition-colors text-sm">
                <Mail className="w-4 h-4" />
                agilesmarttech@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/smart-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-electric-blue-brand hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* All IT Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              All IT Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-electric-blue-brand transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-electric-blue-brand transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Latest News
            </h4>
            <div className="space-y-4">
              <Link to="/blog" className="group flex gap-3">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-700">
                  <img src="/images/blog-cover-1.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-snug group-hover:text-electric-blue-brand transition-colors">
                    Digital Transformation Trends in 2025: What Businesses Should Expect
                  </p>
                  <p className="text-gray-500 text-xs mt-1">June 17, 2025</p>
                </div>
              </Link>
              <Link to="/blog" className="group flex gap-3">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-700">
                  <img src="/images/blog-cover-2.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-snug group-hover:text-electric-blue-brand transition-colors">
                    How Smart AI Optimizes IT Infrastructure for Performance and Cost
                  </p>
                  <p className="text-gray-500 text-xs mt-1">June 17, 2025</p>
                </div>
              </Link>
              <Link to="/blog" className="group flex gap-3">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-700">
                  <img src="/images/blog-cover-3.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-snug group-hover:text-electric-blue-brand transition-colors">
                    The Benefits of Managed IT Services for Growing Businesses
                  </p>
                  <p className="text-gray-500 text-xs mt-1">June 17, 2025</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Copyright &copy; 2025 Smart AI. Designed &amp; Developed by Smart AI Team. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
