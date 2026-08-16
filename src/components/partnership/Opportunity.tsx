"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Opportunity() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-aerospace-black relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-white">A FUNDED EXECUTION PARTNERSHIP.</span>
              <span className="block text-aerospace-offwhite/50">NOT AN EQUITY ASK.</span>
            </h2>
            <p className="text-lg text-aerospace-offwhite/70 max-w-2xl mx-auto">
              We provide the engineering and manufacturing execution capability. You provide the capital and product vision. You retain 100% of the resulting IP and brand.
            </p>
          </motion.div>
        </div>

        {/* Visualizer */}
        <div className="relative max-w-2xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/10">
            <motion.div 
              className="w-full bg-aerospace-cyan origin-top"
              style={{ height: "100%", scaleY: pathLength }}
            />
          </div>

          {/* Node 1: Partner */}
          <motion.div 
            style={{ opacity: opacity1 }}
            className="relative z-10 flex flex-col items-center mb-20"
          >
            <div className="w-4 h-4 rounded-full bg-aerospace-cyan mb-6 shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>
            <div className="bg-aerospace-charcoal/50 border border-white/10 backdrop-blur-sm p-6 w-full max-w-md text-center rounded-sm">
              <h3 className="text-xl font-bold text-white mb-4 tracking-widest">PARTNER</h3>
              <div className="flex flex-col gap-2 font-mono text-xs text-aerospace-cyan">
                <span>+ CAPITAL</span>
                <span>+ PRODUCT VISION</span>
                <span>+ IP / BRAND OWNERSHIP</span>
              </div>
            </div>
          </motion.div>

          {/* Node 2: Engineering Partner */}
          <motion.div 
            style={{ opacity: opacity2 }}
            className="relative z-10 flex flex-col items-center mb-20"
          >
            <div className="w-4 h-4 rounded-full border-2 border-aerospace-cyan bg-aerospace-black mb-6"></div>
            <div className="bg-aerospace-charcoal/50 border border-white/10 backdrop-blur-sm p-6 w-full max-w-md text-center rounded-sm">
              <h3 className="text-xl font-bold text-white mb-4 tracking-widest">ENGINEERING PARTNER</h3>
              <div className="flex flex-col gap-2 font-mono text-xs text-aerospace-offwhite/70">
                <span>+ AERODYNAMIC DESIGN</span>
                <span>+ MECHANICAL BUILD</span>
                <span>+ FLIGHT TEST</span>
              </div>
            </div>
          </motion.div>

          {/* Node 3: Result */}
          <motion.div 
            style={{ opacity: opacity3 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-6 h-6 rounded-none rotate-45 bg-white mb-6 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center">
              <div className="w-2 h-2 bg-aerospace-black rotate-45"></div>
            </div>
            <div className="bg-white text-aerospace-black p-6 w-full max-w-md text-center rounded-sm">
              <h3 className="text-lg font-bold mb-2 tracking-wider">FLIGHT-TESTED, PRODUCTION-READY UAV</h3>
              <p className="font-mono text-xs font-bold mt-4 tracking-widest opacity-70">100% PARTNER IP OWNERSHIP</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
