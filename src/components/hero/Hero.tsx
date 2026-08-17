"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import UavModel from "../three/UavModel";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-aerospace-black flex items-center justify-center py-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        {mounted && (
          <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
            <UavModel />
            <Environment preset="city" />
          </Canvas>
        )}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Technical Labels */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-[30%] left-[15%] text-[10px] font-mono text-aerospace-cyan flex items-center gap-2"
        >
          <span className="w-8 h-[1px] bg-aerospace-cyan"></span>
          AERODYNAMICS
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-[45%] right-[15%] text-[10px] font-mono text-aerospace-cyan flex items-center gap-2"
        >
          PROPULSION
          <span className="w-8 h-[1px] bg-aerospace-cyan"></span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-[20%] left-[45%] text-[10px] font-mono text-aerospace-cyan flex flex-col items-center gap-2"
        >
          <span className="w-[1px] h-8 bg-aerospace-cyan"></span>
          AVIONICS
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 mt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
              <span className="block text-white">WE DESIGN</span>
              <span className="block text-gradient">WHAT FLIES NEXT.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-aerospace-cyan"></div>
            <p className="font-mono text-sm tracking-[0.2em] text-aerospace-cyan">
              UAV DESIGN · BUILD · TEST
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-aerospace-offwhite/70 max-w-2xl mb-12 font-light"
          >
            We are an execution partner capable of taking UAV programmes from engineering concept through flight-tested hardware.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-aerospace-black font-bold tracking-wider overflow-hidden transition-all hover:bg-gray-200"
            >
              <span className="relative z-10 text-sm">START A PROGRAMME</span>
              <div className="absolute inset-0 h-full w-0 bg-aerospace-cyan transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            
            <a 
              href="#capabilities" 
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold tracking-wider hover:bg-white/5 transition-all"
            >
              <span className="text-sm">EXPLORE CAPABILITIES</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Telemetry metadata */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/30 hidden md:block">
        SYS.STATE: ONLINE <br/>
        LAT: 28.5355° N <br/>
        LON: 77.3910° E
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] font-mono tracking-widest text-white/50">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
