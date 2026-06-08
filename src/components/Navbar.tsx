import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" }
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-terracotta/95 backdrop-blur-md border-b border-cream/15 py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo in Clean Minimalism style */}
          <a
            id="nav-logo"
            href="#home"
            className="font-serif text-xl md:text-2xl font-bold text-cream tracking-tight hover:opacity-90 transition duration-300 flex items-center"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
          >
            HAFIZ.<span className="text-peach underline decoration-1">HASNAIN</span>
          </a>

          {/* Desktop Navigation Links */}
          <div id="desktop-nav-links" className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                id={`lnk-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="group relative py-1 text-sm font-mono tracking-wider text-cream/80 hover:text-peach transition duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-peach transition-all duration-300 origin-center -translate-x-1/2 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Hamburger Icon */}
          <button
            id="hamburger-btn"
            onClick={() => setIsOpen(true)}
            className="md:hidden text-cream hover:text-peach focus:outline-none p-1.5 transition duration-300"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Full screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-terracotta z-50 flex flex-col justify-between p-8 md:hidden"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-2xl font-bold text-cream">
                HAFIZ.<span className="text-peach underline decoration-1">HASNAIN</span>
              </span>
              <button
                id="mobile-close-btn"
                onClick={() => setIsOpen(false)}
                className="text-cream hover:text-peach focus:outline-none p-1.5 transition duration-300"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links on mobile */}
            <div className="flex flex-col space-y-8 my-auto items-start pl-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  id={`mobile-lnk-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-serif text-4xl font-semibold text-cream hover:text-peach tracking-wide transition duration-300 relative pl-4 border-l-2 border-transparent hover:border-peach"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Social / Contact short details below on mobile menu */}
            <div className="pt-6 border-t border-cream/10 flex flex-col space-y-4">
              <span className="font-mono text-xs text-sage tracking-widest uppercase">
                Got a project? Let's connect
              </span>
              <a
                id="mobile-email-footer"
                href="mailto:hafizhasnain.edu@gmail.com"
                className="font-sans text-cream/90 hover:text-peach transition duration-300"
              >
                hafizhasnain.edu@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
