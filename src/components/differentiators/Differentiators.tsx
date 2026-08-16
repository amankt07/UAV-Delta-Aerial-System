"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const statements = [
  "CERTIFIED, NOT THEORETICAL.",
  "DEFENSE-GRADE EXPERIENCE.",
  "FULL-STACK HARDWARE CAPABILITY.",
  "INDIA-BASED MANUFACTURING.",
  "EXECUTION-FIRST CULTURE."
];

export default function Differentiators() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 bg-aerospace-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col gap-16 md:gap-24">
          {statements.map((statement, idx) => {
            // Calculate when this item should be fully opaque based on scroll
            const start = (idx * 0.15);
            const end = start + 0.3;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 group"
              >
                <div className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight group-hover:text-aerospace-cyan transition-colors duration-500">
                  {statement}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
