import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Center of Excellence (CoE)", href: "/services" },
      { label: "Technical Trainings", href: "/services" },
      { label: "Application Development", href: "/services" },
      { label: "Consultancy Services", href: "/services" },
      { label: "Software as a Service", href: "/services" },
      { label: "Solution Engineering", href: "/services" },
    ],
  },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <>
      {/* Top bar with contact info */}
      <div className={`hidden lg:block transition-all duration-500 ${isTransparent ? 'bg-transparent' : 'bg-dark'}`}>
        <div className="container-main">
          <div className="flex items-center justify-end gap-6 py-2 text-sm">
            <a href="tel:+919811131136" className="flex items-center gap-2 text-gray-300 hover:text-electric-blue-brand transition-colors">
              <span className="w-4 h-4">📞</span> +91 9811131136
            </a>
            <a href="mailto:agilesmarttech@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-electric-blue-brand transition-colors">
              <span className="w-4 h-4">✉️</span> agilesmarttech@gmail.com
            </a>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent lg:top-10"
            : "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100/50"
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/smartai-logo-new.png"
                alt="Smart AI"
                className={`h-7 w-auto transition-all brightness-150 contrast-125 ${isTransparent ? "brightness-200 drop-shadow-[0_0_6px_rgba(91,159,255,0.5)]" : ""}`}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    link.children && setServicesOpen(false)
                  }
                >
                  {link.children ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isTransparent
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : "text-gray-600 hover:text-neon-blue-brand hover:bg-electric-blue-50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isTransparent
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : location.pathname === link.href
                            ? "text-neon-blue-brand bg-electric-blue-50"
                            : "text-gray-600 hover:text-neon-blue-brand hover:bg-electric-blue-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-premium-lg border border-gray-100 py-2 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-neon-blue-brand hover:bg-electric-blue-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="gradient-btn px-5 py-2.5 rounded-xl text-sm"
              >
                Let's get started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex items-center justify-between h-[72px] px-4 sm:px-6 border-b border-gray-100">
              <Link to="/" className="flex items-center gap-2">
                <img src="/images/smartai-logo-new.png" alt="Smart AI" className="h-7 w-auto brightness-150 contrast-125" />
                <span className="text-xl font-bold text-dark">Smart AI</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-72px)]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-neon-blue-brand hover:bg-electric-blue-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-neon-blue-brand hover:bg-electric-blue-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="block w-full gradient-btn px-4 py-3 rounded-xl text-center text-base"
                >
                  Let's get started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
