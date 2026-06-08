import { Code, Smartphone, Server } from "lucide-react";
import { motion } from "motion/react";
import { DEVELOPER_PROFILE, PORTFOLIO_STATS, PORTFOLIO_SERVICES } from "../data";

// Resolves icons dynamically
const getIcon = (name: string) => {
  switch (name) {
    case "Monitor":
      return <Code className="w-5 h-5 text-peach" />;
    case "Smartphone":
      return <Smartphone className="w-5 h-5 text-peach" />;
    case "Server":
      return <Server className="w-5 h-5 text-peach" />;
    default:
      return <Code className="w-5 h-5 text-peach" />;
  }
};

export default function AboutExpertise() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative vertical separator trace line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-cream/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Services Stack (Take 5 columns) */}
          <div id="services-pane" className="lg:col-span-5 flex flex-col gap-10">
            <div className="space-y-3">
              <span className="font-mono text-xs text-sage tracking-widest uppercase block">
                Expertise &amp; Capabilities
              </span>
              <h3 className="font-serif text-3xl font-bold text-cream">
                Core Competencies
              </h3>
            </div>

            {/* Custom stylized vertical axis timeline-like Services */}
            <div className="relative pl-8 border-l border-cream/10 space-y-12">
              {PORTFOLIO_SERVICES.map((service, idx) => (
                <div
                  id={`service-${service.id}`}
                  key={service.id}
                  className="relative group pr-4 transition-all duration-300"
                >
                  {/* Decorative timeline node */}
                  <span className="absolute -left-[37px] top-1 w-[10px] h-[10px] rounded-full bg-clay border-2 border-peach transition-all duration-300 group-hover:bg-peach" />
                  
                  <div className="flex gap-4 items-start mb-2">
                    <span className="p-2.5 rounded-lg bg-clay/70 border border-cream/5 flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </span>
                    <div>
                      <h4 className="font-serif text-xl font-medium text-cream group-hover:text-peach transition duration-300">
                        {service.title}
                      </h4>
                      <p className="font-mono text-[10px] text-sage/70 mt-0.5">
                        [ {service.technologies.join(" // ")} ]
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-cream/65 leading-relaxed pl-14">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - About Story & Metrics Grid (Take 7 columns) */}
          <div id="about-pane" className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-xs text-sage tracking-widest uppercase block">
                The Journey
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream tracking-tight">
                About me
              </h2>
              <p className="font-sans text-base md:text-lg text-cream/75 leading-relaxed font-light">
                {DEVELOPER_PROFILE.story}
              </p>
            </div>

            {/* Micro-line divider */}
            <hr className="border-cream/10 w-full" />

            {/* Stats grid using massive high-end serif metrics numbers, matched to Clean Minimalism theme */}
            <div id="stats-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-cream/15 mt-12">
              {PORTFOLIO_STATS.map((stat) => (
                <div
                  id={`stat-${stat.id}`}
                  key={stat.id}
                  className="space-y-1.5"
                >
                  <p className="font-serif text-4xl md:text-5xl font-bold text-peach leading-none flex items-baseline">
                    {stat.value}
                    <span className="text-xl text-sage font-sans ml-0.5 font-semibold">{stat.suffix}</span>
                  </p>
                  <p className="font-mono text-[10px] text-sage/80 tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Extra artistic touch to enhance visual balance with thin border styling */}
            <div className="p-6 rounded-sm bg-clay/30 border-l border-peach text-sage font-sans text-sm italic leading-relaxed">
              "Great software architecture requires the same focus, framing, and light adjustment as clean photography. Every element must serve a singular purpose."
            </div>
          </div>

        </div>
      </div>

      {/* Thin Section Divider at footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        <hr className="border-cream/15" />
      </div>
    </section>
  );
}
