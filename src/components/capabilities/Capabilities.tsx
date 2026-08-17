"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    id: "aero",
    title: "AERODYNAMIC DESIGN",
    description: "Performance optimisation, CFD analysis, and airframe design for maximum endurance and payload efficiency.",
    position: { top: "10%", left: "5%" }
  },
  {
    id: "mech",
    title: "MECHANICAL",
    description: "Structural design, 3D modelling, and rapid prototyping using advanced composite materials.",
    position: { top: "35%", left: "0%" }
  },
  {
    id: "mfg",
    title: "MANUFACTURING",
    description: "Production engineering from prototype to volume, including in-house composite fabrication.",
    position: { top: "65%", left: "5%" }
  },
  {
    id: "power",
    title: "POWER & PROPULSION",
    description: "Battery/BMS design, thermal management, motor efficiency, and complete propulsion system integration.",
    position: { top: "85%", left: "20%" }
  },
  {
    id: "flight",
    title: "FLIGHT TEST",
    description: "Rigorous flight testing, validation, and documentation for certification compliance.",
    position: { top: "85%", right: "20%" }
  },
  {
    id: "gcs",
    title: "GCS & DATA",
    description: "Ground control systems, data links, and long-range antenna tracking integration.",
    position: { top: "65%", right: "5%" }
  },
  {
    id: "avionics",
    title: "AVIONICS",
    description: "Modular, autonomy-agnostic avionics bays ready to integrate your software stack without airframe redesign.",
    position: { top: "35%", right: "0%" }
  },
  {
    id: "cert",
    title: "COMPLIANCE",
    description: "Systems engineering gates including FMECA, EMI/EMC strategy, and DGCA/NABL certification readiness.",
    position: { top: "10%", right: "5%" }
  }
];

export default function Capabilities() {
  const [activeCap, setActiveCap] = useState<string | null>(null);

  return (
    <section id="capabilities" className="py-32 bg-aerospace-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="block text-white">FROM FIRST SKETCH</span>
              <span className="block text-aerospace-offwhite/50">TO FLIGHT-TESTED HARDWARE.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto h-[600px] md:h-[700px] hidden md:flex items-center justify-center">
          {/* Central Platform Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-48 md:h-48 border border-white/20 rounded-full flex items-center justify-center bg-aerospace-black shadow-[0_0_50px_rgba(0,229,255,0.1)]">
              <div className="absolute inset-2 border border-aerospace-cyan/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-6 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <span className="font-mono font-bold tracking-widest text-white text-sm">UAV<br/>PLATFORM</span>
            </div>
          </div>

          {/* Capability Nodes (Desktop) */}
          {capabilities.map((cap) => (
            <div 
              key={cap.id}
              className="absolute z-30 transition-all duration-300"
              style={cap.position}
              onMouseEnter={() => setActiveCap(cap.id)}
              onMouseLeave={() => setActiveCap(null)}
            >
              <div className="relative group cursor-pointer">
                {/* Connector Line (simplified CSS approach) */}
                <div 
                  className={cn(
                    "absolute hidden md:block top-1/2 bg-aerospace-cyan/40 transition-all duration-500",
                    cap.position.left !== undefined ? "left-full h-[1px] w-[50px] lg:w-[100px]" : "right-full h-[1px] w-[50px] lg:w-[100px]",
                    activeCap === cap.id ? "bg-aerospace-cyan w-[150px]" : ""
                  )}
                />

                <div 
                  className={cn(
                    "relative p-4 md:p-6 border transition-all duration-300 bg-aerospace-black/80 backdrop-blur-sm max-w-[200px] md:max-w-[250px]",
                    activeCap === cap.id ? "border-aerospace-cyan scale-105 z-40" : "border-white/10 hover:border-white/30"
                  )}
                >
                  <h3 className={cn(
                    "font-mono text-xs md:text-sm font-bold tracking-widest mb-2 transition-colors",
                    activeCap === cap.id ? "text-aerospace-cyan" : "text-white"
                  )}>
                    {cap.title}
                  </h3>
                  
                  <AnimatePresence>
                    {(activeCap === cap.id || typeof window !== 'undefined' && window.innerWidth < 768) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-aerospace-offwhite/70 leading-relaxed pt-2">
                          {cap.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 border border-white/10 bg-aerospace-black/50"
            >
              <h3 className="font-mono text-sm font-bold tracking-widest mb-2 text-aerospace-cyan">
                {cap.title}
              </h3>
              <p className="text-sm text-aerospace-offwhite/70 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
