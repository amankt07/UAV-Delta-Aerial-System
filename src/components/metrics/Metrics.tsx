"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "DGCA", label: "TYPE-CERTIFIED UAV" },
  { value: "24 HRS", label: "CONTINUOUS SURVEILLANCE" },
  { value: "1 CM", label: "LiDAR POINT-CLOUD ACCURACY" },
  { value: "60 MIN", label: "FLIGHT ENDURANCE" },
  { value: "5 KM", label: "OPERATIONAL RANGE" },
  { value: "50+", label: "AERIAL SURVEY PROJECTS" },
  { value: "5,000+", label: "ACRES SURVEYED" }
];

export default function Metrics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-aerospace-black border-y border-white/10 py-16 overflow-hidden relative">
      {/* Background technical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-aerospace-cyan to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-aerospace-cyan to-transparent"></div>
      </div>

      <div 
        ref={containerRef}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-wrap md:flex-nowrap gap-x-12 gap-y-10 justify-start md:justify-between items-center overflow-x-auto pb-4 hide-scrollbar">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col flex-shrink-0 min-w-[140px]"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-xs font-mono text-aerospace-cyan tracking-widest uppercase">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
