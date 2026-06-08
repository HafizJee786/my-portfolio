import { useState, useEffect } from "react";
import { ArrowUpRight, Code, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { DEVELOPER_PROFILE } from "../data";
import HafizAvatar from "./HafizAvatar";

const SPECIALTIES = [
  "scalable web applications",
  "AI-powered systems",
  "intelligent automation solutions",
  "SaaS platforms"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter sequence
  useEffect(() => {
    if (subIndex === SPECIALTIES[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000); // Wait 2s before starting block erase
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % SPECIALTIES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(SPECIALTIES[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const technologies = [
      "Python",
      "FastAPI",
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "Tailwind CSS",
      "MySQL",
      "Flask",
      "Machine Learning",
      "REST APIs",
      "Docker",
      "Git",
      "GitHub"
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient aesthetic lighting elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-peach/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-sage/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center my-auto w-full">
        {/* Left column - Content */}
        <div id="hero-content" className="lg:col-span-7 flex flex-col items-start gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-clay/65 border border-cream/5 backdrop-blur-sm self-start">
            <Sparkles className="w-4 h-4 text-peach" />
            <span className="font-mono text-[11px] tracking-widest text-sage uppercase">
              Available for full-time &amp; contracts
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-cream">
              Hello<span className="text-peach">.</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-cream/70 font-light flex items-center gap-2">
              <span className="w-8 h-[1px] bg-peach/60" />
              I'm <span className="font-semibold text-cream">{DEVELOPER_PROFILE.name}</span>
            </p>
          </div>

          {/* Large Typewriter text */}
          <div className="h-20 md:h-28 flex items-center">
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-cream select-none leading-tight">
              I build <span className="text-peach italic font-medium">{text}</span>
              <span className={`${blink ? "opacity-100" : "opacity-0"} text-peach font-normal ml-1`}>|</span>
            </p>
          </div>

          <p className="font-sans text-base md:text-lg text-sage leading-relaxed max-w-xl">
            Building intelligent software solutions with Full-Stack Development, Artificial Intelligence, and Automation. Focused on creating scalable applications that solve complex problems and deliver measurable business impact.
          </p>

          {/* CTA Group */}
          <div id="hero-ctas" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button
              id="cta-connect"
              onClick={() => handleScroll("#contacts")}
              className="px-8 py-4 bg-peach text-terracotta border border-peach font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-transparent hover:text-peach transition-all duration-300 shadow-[0_0_30px_rgba(255,158,125,0.15)] flex items-center justify-center gap-2 group pointer-events-auto cursor-pointer"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
            <button
              id="cta-work"
              onClick={() => handleScroll("#projects")}
              className="px-8 py-4 border border-peach text-peach hover:bg-peach/5 font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 pointer-events-auto cursor-pointer"
            >
              View Work
            </button>
          </div>
        </div>

        {/* Right column - Graphic Profile Image with organic blob styling */}
        <div id="hero-image-pane" className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative py-6 w-full gap-4">
          
          

          {/* Portrait blob container to get asymmetrical glow */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 p-5 bg-clay rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border border-peach shadow-[0_0_40px_rgba(255,158,125,0.15)] flex justify-center items-center overflow-hidden">
            <HafizAvatar
              externalSrc={DEVELOPER_PROFILE.portraitUrl}
              className="w-[90%] h-[90%] rounded-full transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Ticker tape ribbon at the bottom of the section */}
      <div id="tech-ticker-bar" className="w-full mt-16 py-6 border-y border-cream/15 bg-clay/35 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap gap-y-3 justify-between items-center text-cream/40 font-mono text-xs uppercase tracking-widest">
          {technologies.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="hover:text-peach transition-colors duration-350">{tech}</span>
              {idx !== technologies.length - 1 && (
                <span className="text-peach/25 font-light">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
