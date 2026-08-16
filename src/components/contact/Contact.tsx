"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    requirement: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", company: "", email: "", requirement: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-black relative">
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen bg-[url('/noise.png')]"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Headline & Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                <span className="block text-white">LET'S BUILD</span>
                <span className="block text-white/50">WHAT FLIES NEXT.</span>
              </h2>
              
              <p className="text-lg text-aerospace-offwhite/70 max-w-md mb-12">
                We're opening our first one to two partner engagements.
              </p>
              
              <div className="tech-border p-6 max-w-sm">
                <div className="w-8 h-[1px] bg-aerospace-cyan mb-4"></div>
                <h4 className="text-white font-bold tracking-wider mb-1">Adarsh Tiwari</h4>
                <p className="font-mono text-xs text-aerospace-cyan mb-4">Founding Engineer & Program Lead</p>
                <a 
                  href="mailto:adarshktiwari3@gmail.com"
                  className="font-mono text-sm text-aerospace-offwhite/70 hover:text-white transition-colors"
                >
                  adarshktiwari3@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {status === "success" ? (
                <div className="tech-border p-12 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 border border-aerospace-cyan rounded-full flex items-center justify-center mb-6 bg-aerospace-cyan/10">
                    <svg className="w-6 h-6 text-aerospace-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">TRANSMISSION RECEIVED</h3>
                  <p className="text-aerospace-offwhite/70 font-mono text-sm">We will be in touch shortly to discuss your programme.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 font-mono text-xs text-aerospace-cyan hover:text-white transition-colors uppercase tracking-widest border border-aerospace-cyan/30 px-6 py-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 tech-border p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-mono text-[10px] text-aerospace-cyan tracking-widest uppercase">Name *</label>
                      <input 
                        suppressHydrationWarning
                        required
                        type="text" 
                        id="name" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-aerospace-black border border-white/10 p-3 text-white focus:border-aerospace-cyan focus:outline-none transition-colors font-mono text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="font-mono text-[10px] text-aerospace-cyan tracking-widest uppercase">Company *</label>
                      <input 
                        suppressHydrationWarning
                        required
                        type="text" 
                        id="company" 
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full bg-aerospace-black border border-white/10 p-3 text-white focus:border-aerospace-cyan focus:outline-none transition-colors font-mono text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-[10px] text-aerospace-cyan tracking-widest uppercase">Email *</label>
                    <input 
                      suppressHydrationWarning
                      required
                      type="email" 
                      id="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-aerospace-black border border-white/10 p-3 text-white focus:border-aerospace-cyan focus:outline-none transition-colors font-mono text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="requirement" className="font-mono text-[10px] text-aerospace-cyan tracking-widest uppercase">Programme Type</label>
                    <select 
                      suppressHydrationWarning
                      id="requirement" 
                      name="requirement"
                      value={formState.requirement}
                      onChange={handleChange}
                      className="w-full bg-aerospace-black border border-white/10 p-3 text-white focus:border-aerospace-cyan focus:outline-none transition-colors font-mono text-sm appearance-none"
                    >
                      <option value="">Select an option...</option>
                      <option value="vtol">VTOL Platform</option>
                      <option value="fixed-wing">Fixed-Wing</option>
                      <option value="multirotor">Multirotor</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-mono text-[10px] text-aerospace-cyan tracking-widest uppercase">Programme Details *</label>
                    <textarea 
                      suppressHydrationWarning
                      required
                      id="message" 
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-aerospace-black border border-white/10 p-3 text-white focus:border-aerospace-cyan focus:outline-none transition-colors font-mono text-sm resize-none"
                      placeholder="Target specs, use case, timeline..."
                    ></textarea>
                  </div>

                  <button 
                    suppressHydrationWarning
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full group relative inline-flex items-center justify-center px-8 py-4 bg-white text-aerospace-black font-bold tracking-wider overflow-hidden transition-all disabled:opacity-70"
                  >
                    <span className="relative z-10 text-sm">
                      {status === "submitting" ? "TRANSMITTING..." : "DISCUSS A PROGRAMME"}
                    </span>
                    <div className="absolute inset-0 h-full w-0 bg-aerospace-cyan transition-all duration-300 ease-out group-hover:w-full"></div>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
