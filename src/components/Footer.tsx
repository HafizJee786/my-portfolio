import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    const headerElement = document.querySelector("#home");
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-clay/10 py-16 border-t border-cream/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center space-y-8">
        
        {/* Name Logo in Clean Minimalism style */}
        <div className="space-y-2">
          <h4 className="font-serif text-2xl font-bold tracking-tight text-cream">
            HAFIZ Ali <span className="text-peach underline decoration-1">HASNAIN</span>
          </h4>
          <p className="font-sans text-xs text-cream/40 max-w-sm">
           © 2026 | Hafiz Ali Hasnain
          </p>
        </div>

        {/* Social Line Icons (Mail, Github, Linkedin) using minimalist sharp styles */}
        <div id="footer-social-panel" className="flex items-center gap-6">
          <a
            id="social-mail"
            href="mailto:hafizhasnain.edu@gmail.com"
            className="p-3 rounded-sm bg-clay/50 border border-cream/15 text-cream/70 hover:text-peach hover:border-peach/30 transition-all duration-300"
            aria-label="Direct Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            id="social-github"
            href="https://github.com/HafizJee786"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-sm bg-clay/50 border border-cream/15 text-cream/70 hover:text-peach hover:border-peach/30 transition-all duration-300"
            aria-label="Github Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            id="social-linkedin"
            href="https://linkedin.com/in/hafiz-ali-hasnain"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-sm bg-clay/50 border border-cream/15 text-cream/70 hover:text-peach hover:border-peach/30 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Divider & Up arrow link */}
        <div className="w-full max-w-md border-t border-cream/15 pt-6 flex justify-between items-center text-[10.5px] font-mono text-sage/60">
          <span>&copy; {currentYear} &mdash; LHR // PAK</span>
          <button
            id="btn-footer-top"
            onClick={handleScrollToTop}
            className="px-3 py-1 bg-clay hover:bg-cream/10 rounded-sm text-peach/80 hover:text-peach transition duration-300 flex items-center gap-1 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            TOP
          </button>
        </div>
        
      </div>
    </footer>
  );
}
