import React, { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate premium submission lifecycle
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitStatus("idle");
  };

  return (
    <section id="contacts" className="py-24 relative overflow-hidden">
      {/* Accent vector shapes mimicking mockup styling details */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-peach/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 left-10 text-peach/15 font-mono text-xs tracking-widest uppercase select-none pointer-events-none">
  
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column Heading & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-sage tracking-widest uppercase block">
                Let's Collaborate
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream tracking-tight leading-tight">
                Have a project?<br />
                Let's talk!
              </h2>
            </div>

            <p className="font-sans text-base text-cream/70 leading-relaxed font-light">
              I'm passionate about helping businesses transform ideas into high-quality software solutions. Whether it's a full-stack web application, an AI-powered product, or a custom automation workflow, I focus on building scalable, efficient, and user-friendly systems that create real business impact.
            </p>

            {/* Structured contact info indicators */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-center">
                <span className="p-2.5 rounded-sm bg-clay border border-cream/15 text-peach">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-sage/70 uppercase tracking-widest">Email Address</p>
                  <a
                    id="info-email"
                    href="mailto:hafizhasnain.edu@gmail.com"
                    className="font-sans text-base text-cream/90 hover:text-peach transition duration-200"
                  >
                    hafizhasnain.edu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <span className="p-2.5 rounded-sm bg-clay border border-cream/15 text-peach">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-sage/70 uppercase tracking-widest">HQ Location</p>
                  <p className="font-sans text-base text-cream/90">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <span className="p-2.5 rounded-sm bg-clay border border-cream/15 text-peach">
                  <Calendar className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-sage/70 uppercase tracking-widest">Technology Focus</p>
                  <p className="font-sans text-base text-cream/90">Software Engineering, Artificial Intelligence & Scalable Systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Form with Custom Focused Peach Borders */}
          <div className="lg:col-span-7">
            <div className="bg-clay/20 p-8 md:p-10 rounded-sm border border-cream/15 backdrop-blur-sm relative">
              
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    id="contact-success-state"
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-sm bg-peach/10 text-peach flex items-center justify-center border border-peach/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-cream">
                        Message Received!
                      </h3>
                      <p className="font-sans text-base text-cream/70 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="text-peach font-semibold">{formData.name}</span>! Your message has been routed successfully to Hasnain's desk.
                      </p>
                      <p className="font-mono text-xs text-sage/80 mt-2">
                        Hasnain will get back to you at <span className="underline">{formData.email}</span> within 24 hours.
                      </p>
                    </div>
                    <button
                      id="btn-contact-reset"
                      onClick={handleReset}
                      className="mt-4 px-6 py-3 border border-cream/15 hover:border-peach text-cream/80 hover:text-cream text-xs font-bold font-mono uppercase tracking-widest rounded-sm transition-all duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    id="contact-form-element"
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <p className="font-mono text-xs text-sage tracking-wider">
                      [ INCOMING TRANSMISSION ROUTED VIA PERSISTENT API WORKSPACE ]
                    </p>

                    {/* Name input */}
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="name" className="font-mono text-[10px] text-sage/80 uppercase tracking-widest">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Hafiz Ali Hasnain"
                        className="bg-transparent border-b border-cream/20 focus:border-peach outline-none py-3 text-cream text-base placeholder:text-cream/25 transition-colors duration-305 w-full font-sans"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="email" className="font-mono text-[10px] text-sage/80 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., aliraza@gmail.com"
                        className="bg-transparent border-b border-cream/20 focus:border-peach outline-none py-3 text-cream text-base placeholder:text-cream/25 transition-colors duration-305 w-full font-sans"
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="message" className="font-mono text-[10px] text-sage/80 uppercase tracking-widest">
                        Project Details / Inquiry
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your goals, timeline, and tech stack details..."
                        className="bg-transparent border-b border-cream/20 focus:border-peach outline-none py-3 text-cream text-base placeholder:text-cream/25 transition-colors duration-305 w-full resize-none font-sans"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-peach hover:bg-transparent text-terracotta hover:text-peach border border-peach font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,158,125,0.05)]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-terracotta border-t-transparent animate-spin" />
                          Sending Transmission...
                        </>
                      ) : (
                        <>
                          Submit Message
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
