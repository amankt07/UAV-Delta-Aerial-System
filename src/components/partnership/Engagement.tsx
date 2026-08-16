"use client";

import { motion } from "framer-motion";

const structure = [
  {
    element: "TEAM SALARIES & RESOURCES",
    desc: "Monthly retainer, fixed for the program duration."
  },
  {
    element: "COMPONENT & MATERIAL PROCUREMENT",
    desc: "Milestone-based payments, tied to design / build / test gates."
  },
  {
    element: "IP & BRAND",
    desc: "100% transferred to the partner, full ownership, your name."
  },
  {
    element: "ONGOING UPSIDE",
    desc: "Royalty on unit sales, negotiated per program."
  },
  {
    element: "TIMELINE",
    desc: "Mutually agreed at program kickoff."
  }
];

export default function Engagement() {
  return (
    <section id="partnership" className="py-32 bg-[#020202] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block text-white">YOUR PRODUCT.</span>
              <span className="block text-aerospace-offwhite/80">YOUR IP.</span>
              <span className="block text-aerospace-offwhite/50">YOUR BRAND.</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tech-border p-1"
        >
          <div className="bg-aerospace-black w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
              <div className="p-6 md:p-8 font-mono text-sm tracking-widest text-aerospace-cyan">ELEMENT</div>
              <div className="p-6 md:p-8 font-mono text-sm tracking-widest text-aerospace-cyan md:col-span-2 hidden md:block">STRUCTURE</div>
            </div>
            
            {structure.map((item, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-1 md:grid-cols-3 hover:bg-white/5 transition-colors ${idx !== structure.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <div className="p-6 md:p-8 flex items-center">
                  <h4 className="font-bold tracking-wider text-white text-sm md:text-base">{item.element}</h4>
                </div>
                <div className="p-6 md:p-8 md:col-span-2 flex items-center pt-0 md:pt-6 border-t border-white/5 md:border-none">
                  <p className="text-aerospace-offwhite/70 font-mono text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center font-mono text-xs text-white/40 mt-8"
        >
          Every term above is a starting framework, scoped and finalised per programme with each partner.
        </motion.p>
      </div>
    </section>
  );
}
