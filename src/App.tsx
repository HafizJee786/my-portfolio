import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutExpertise from "./components/AboutExpertise";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="portfolio-app-root" className="min-h-screen bg-terracotta text-cream font-sans selection:bg-peach/30 selection:text-cream">
      {/* Fixed Sticky Header Navbar */}
      <Navbar />

      {/* Hero Unit & Technology Ribbon */}
      <Hero />

      {/* About & Competencies Timeline Axis */}
      <AboutExpertise />

      {/* Asymmetric Project Showcase Mockups */}
      <ProjectsShowcase />

      {/* Interactive Peach-Bordered Form */}
      <ContactForm />

      {/* Typographic Footer */}
      <Footer />
    </div>
  );
}
