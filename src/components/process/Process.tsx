"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const stages = [
  "CONCEPT",
  "AERODYNAMICS",
  "STRUCTURES",
  "PROTOTYPING",
  "MANUFACTURING",
  "INTEGRATION",
  "FLIGHT TEST",
  "PRODUCTION"
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-aerospace-black">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-between container mx-auto px-6 py-24 overflow-hidden">
        
        {/* Left: Content */}
        <div className="w-full md:w-1/2 z-20 relative">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-12"
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
            }}
          >
            <span className="block text-white">DESIGN.</span>
            <span className="block text-aerospace-offwhite/80">BUILD.</span>
            <span className="block text-aerospace-offwhite/50">TEST.</span>
          </motion.h2>

          <div className="space-y-4 md:space-y-6">
            {stages.map((stage, index) => {
              const start = index / stages.length;
              const end = (index + 1) / stages.length;
              
              // Highlight only when in current segment
              const opacity = useTransform(scrollYProgress, 
                [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)], 
                [0.3, 1, 1, 0.3]
              );
              
              const x = useTransform(scrollYProgress, 
                [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)], 
                [0, 20, 20, 0]
              );
              
              const color = useTransform(scrollYProgress,
                [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)],
                ["#ffffff40", "#00E5FF", "#00E5FF", "#ffffff40"]
              );

              return (
                <motion.div 
                  key={stage}
                  className="flex items-center gap-6"
                  style={{ opacity, x }}
                >
                  <motion.span 
                    className="font-mono text-sm md:text-base font-bold"
                    style={{ color }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  <span className="h-[1px] w-8 md:w-12 bg-white/20"></span>
                  <motion.span 
                    className="font-mono text-lg md:text-2xl font-bold tracking-widest uppercase"
                    style={{ color }}
                  >
                    {stage}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Visualization */}
        <div className="hidden md:flex w-1/2 h-full items-center justify-center relative">
          <div className="absolute inset-0 border border-white/5 bg-[url('/grid.svg')] opacity-20 bg-center"></div>
          
          {/* Progress Indicator */}
          <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-white/10">
            <motion.div 
              className="w-full bg-aerospace-cyan origin-top"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
          </div>

          <div className="relative w-full h-[60vh] max-h-[600px] border border-white/10 tech-border flex flex-col items-center justify-center p-8 overflow-hidden">
            <motion.div 
              className="absolute top-4 left-4 font-mono text-[10px] text-aerospace-cyan tracking-widest"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1])
              }}
            >
              SYS.ASSEMBLY_PROGRESS
            </motion.div>
            
            {/* Dynamic percentage placeholder */}
            <motion.div 
              className="absolute bottom-4 right-4 font-mono text-xl md:text-3xl font-bold text-white/50"
            >
              SYS.ACTIVE
            </motion.div>

            {/* UAV Process Images Visualization based on scroll */}
            <div className="relative w-full h-full flex items-center justify-center p-2">
               {/* 01 Concept (0 - 0.25) */}
               <motion.div 
                 className="absolute inset-0 m-4 border border-white/10 overflow-hidden"
                 style={{ opacity: useTransform(scrollYProgress, [0, 0.25, 0.28], [1, 1, 0]) }}
               >
                 <Image src="/process/blueprint.jpg" alt="Blueprint Concept" fill className="object-cover opacity-80 mix-blend-screen" />
               </motion.div>
               
               {/* 02 Aerodynamics & Structures (0.25 - 0.5) */}
               <motion.div 
                 className="absolute inset-0 m-4 border border-white/10 overflow-hidden"
                 style={{ opacity: useTransform(scrollYProgress, [0.22, 0.25, 0.5, 0.53], [0, 1, 1, 0]) }}
               >
                 <Image src="/process/aerodynamics.jpg" alt="Aerodynamics Simulation" fill className="object-cover opacity-80 mix-blend-screen" />
               </motion.div>
               
               {/* 03 Manufacturing & Integration (0.5 - 0.75) */}
               <motion.div 
                 className="absolute inset-0 m-4 border border-white/10 overflow-hidden"
                 style={{ opacity: useTransform(scrollYProgress, [0.47, 0.5, 0.75, 0.78], [0, 1, 1, 0]) }}
               >
                 <Image src="/process/manufacturing.jpg" alt="Drone Manufacturing" fill className="object-cover opacity-80 mix-blend-screen" />
               </motion.div>
               
               {/* 04 Flight Test & Production (0.75 - 1.0) */}
               <motion.div 
                 className="absolute inset-0 m-4 border border-white/10 overflow-hidden"
                 style={{ opacity: useTransform(scrollYProgress, [0.72, 0.75, 1], [0, 1, 1]) }}
               >
                 <Image src="/process/flight.jpg" alt="Flight Test" fill className="object-cover opacity-80 mix-blend-screen" />
               </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
