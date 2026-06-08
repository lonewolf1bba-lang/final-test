import { Link } from "react-router";
import { Sparkles, Twitter, Linkedin, Github, Youtube } from "lucide-react";

const productLinks = [
  "AI Studio",
  "Automation",
  "Integrations",
  "API",
  "Pricing",
];

const resourceLinks = [
  "Documentation",
  "Blog",
  "Tutorials",
  "Community",
  "Changelog",
];

const companyLinks = ["About", "Careers", "Contact", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-[#0B1A3E] border-t border-[rgba(212,168,83,0.15)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#D4A853]" />
              <span className="text-lg font-bold text-white">Smart AI</span>
            </Link>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Intelligent automation for creative minds.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/50 hover:text-[#D4A853] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-white/30 text-sm text-center">
            &copy; 2025 Smart AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
