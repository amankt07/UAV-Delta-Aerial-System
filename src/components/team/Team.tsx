"use client";

import { motion } from "framer-motion";

const roles = [
  {
    discipline: "Aerodynamics & Flight Sciences",
    desc: "M.Tech in Aerodynamics (CFD specialisation). Modelling, simulation, and flight performance validation."
  },
  {
    discipline: "Mechanical Design, Structures & Integration",
    desc: "Mechanical design of UAV structures, rapid prototyping, and design-for-manufacture."
  },
  {
    discipline: "Production & Manufacturing",
    desc: "Composite fabrication (carbon fibre, Kevlar) and UAV avionics integration."
  },
  {
    discipline: "Power Electronics",
    desc: "Battery/BMS design, thermal management, and motor/ESC efficiency."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-[#020202] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block text-white">ENGINEERING</span>
              <span className="block text-aerospace-offwhite/50">UNDER ONE ROOF.</span>
            </h2>
            <p className="text-lg text-aerospace-offwhite/60 max-w-2xl mx-auto mt-6">
              Every core hardware discipline needed to take a UAV from concept to flight-tested hardware sits with the founders.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Lead Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="tech-border p-8 md:p-12 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-aerospace-cyan/5 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
              
              <div className="font-mono text-[10px] text-aerospace-cyan tracking-widest mb-12 flex items-center gap-2">
                <span className="w-2 h-2 bg-aerospace-cyan"></span>
                PROGRAM LEAD
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Adarsh Tiwari</h3>
              <p className="font-mono text-sm text-aerospace-cyan mb-8">Founding Engineer & Program Lead</p>
              
              <p className="text-aerospace-offwhite/70 leading-relaxed mb-8">
                Specialises in aircraft design and performance optimisation, product development, and end-to-end prototype-to-product engineering. 
              </p>
              
              <p className="text-aerospace-offwhite/50 text-sm leading-relaxed pb-8 border-b border-white/10">
                Previously Chief Product Officer at a Noida-based, DGCA type-certified UAV manufacturer, leading product development across multiple UAV platforms from concept to certification.
              </p>
            </div>
          </motion.div>

          {/* Disciplines Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-4">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-6 group"
              >
                {/* Connector visual */}
                <div className="flex flex-col items-center mt-2">
                  <div className="w-3 h-3 border border-aerospace-cyan rotate-45 group-hover:bg-aerospace-cyan transition-colors"></div>
                  {idx < roles.length - 1 && (
                    <div className="w-[1px] h-20 bg-white/10 mt-2"></div>
                  )}
                </div>
                
                <div className="pb-8">
                  <h4 className="text-lg font-bold text-white mb-2 tracking-wide group-hover:text-aerospace-cyan transition-colors">
                    {role.discipline}
                  </h4>
                  <p className="text-sm text-aerospace-offwhite/60 leading-relaxed max-w-lg">
                    {role.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
