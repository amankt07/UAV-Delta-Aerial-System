"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const cases = [
  {
    id: "01",
    title: "DGCA TYPE-CERTIFIED SURVEILLANCE UAV",
    metric: "24-HOUR CONTINUOUS STATIC-SURVEILLANCE FLIGHT",
    description: "Delivered a DGCA type-certified surveillance UAV platform through to production. This is one of a small number of Indian UAV programmes to reach this certification bar.",
    flow: ["CERTIFICATION", "ENGINEERING", "FLIGHT", "PRODUCTION"]
  },
  {
    id: "02",
    title: "AERIAL LiDAR PLATFORM",
    metric: "1 CM POINT-CLOUD ACCURACY",
    description: "Developed a professional-grade aerial LiDAR survey platform achieving sub-centimeter accuracy with rapid field deployment.",
    specs: ["60 MIN FLIGHT ENDURANCE", "5 KM OPERATIONAL RANGE", "<3 MIN FIELD DEPLOYMENT"]
  },
  {
    id: "03",
    title: "DEFENSE-GRADE VTOL PROGRAMME",
    metric: "15 KM OPERATIONAL RANGE",
    description: "Advanced a defense-grade VTOL loitering munition programme through system design and prototyping into flight guidance trials. Single-crew platform.",
    specs: ["60 MIN ENDURANCE", "20 KG TAKEOFF WEIGHT", "FLIGHT GUIDANCE TRIALS"]
  },
  {
    id: "04",
    title: "LARGE-SCALE UAV MANUFACTURING PROGRAMME",
    metric: "PDR → CDR",
    description: "Progressed a large-scale UAV manufacturing programme, responding to a national-scale defense procurement requirement for thousands of units.",
    specs: ["FMECA", "EMI/EMC STRATEGY", "SAFETY DOCUMENTATION"]
  }
];

export default function TrackRecord() {
  const [activeId, setActiveId] = useState(cases[0].id);
  const activeCase = cases.find(c => c.id === activeId);

  return (
    <section id="track-record" className="py-32 bg-aerospace-black relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            PROVEN IN THE AIR.
          </h2>
          <div className="w-24 h-[2px] bg-aerospace-cyan"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-[600px]">
          {/* Navigation/List (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <div className="space-y-4">
              {cases.map((c) => (
                <button
                  key={c.id}
                  suppressHydrationWarning
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  className="w-full text-left group relative py-4 border-b border-white/10 overflow-hidden"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <span className={cn(
                      "font-mono text-sm transition-colors mt-1",
                      activeId === c.id ? "text-aerospace-cyan" : "text-white/40 group-hover:text-white/70"
                    )}>
                      {c.id}
                    </span>
                    <h3 className={cn(
                      "text-sm md:text-base font-bold tracking-wider transition-colors",
                      activeId === c.id ? "text-white" : "text-white/40 group-hover:text-white/70"
                    )}>
                      {c.title}
                    </h3>
                  </div>
                  
                  {/* Active Indicator Line */}
                  <div className={cn(
                    "absolute bottom-0 left-0 h-[1px] bg-aerospace-cyan transition-all duration-500 ease-out",
                    activeId === c.id ? "w-full" : "w-0"
                  )}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Details/Visual (Right) */}
          <div className="w-full lg:w-2/3 h-full relative">
            <AnimatePresence mode="wait">
              {activeCase && (
                <motion.div
                  key={activeCase.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col bg-aerospace-charcoal/20 border border-white/5 p-8 md:p-12 relative overflow-hidden"
                >
                  {/* Abstract Tech Visual Background */}
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.2)_0,transparent_100%)]"></div>
                    <svg className="w-full h-full stroke-aerospace-cyan" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 100 L100 0 M50 100 L100 50" strokeWidth="0.5" strokeDasharray="2 2" />
                      <circle cx="80" cy="20" r="10" strokeWidth="0.5" />
                      <circle cx="80" cy="20" r="2" fill="#00E5FF" />
                    </svg>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <span className="inline-block px-3 py-1 border border-aerospace-cyan/30 text-aerospace-cyan font-mono text-[10px] tracking-widest mb-6 bg-aerospace-cyan/5">
                      PROJECT {activeCase.id}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                      {activeCase.title}
                    </h3>
                    
                    <div className="font-mono text-lg text-aerospace-cyan mb-8 tracking-wide">
                      {activeCase.metric}
                    </div>
                    
                    <p className="text-aerospace-offwhite/70 leading-relaxed mb-12 max-w-lg">
                      {activeCase.description}
                    </p>

                    {activeCase.specs && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeCase.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                            <span className="font-mono text-xs text-white/70 tracking-wider">{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeCase.flow && (
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                        {activeCase.flow.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <span className="font-mono text-xs font-bold tracking-widest text-white/80">{step}</span>
                            {idx < activeCase.flow!.length - 1 && (
                              <span className="text-aerospace-cyan/50 hidden sm:inline">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
