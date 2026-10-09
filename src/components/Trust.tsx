import { motion } from 'motion/react';
import { Shield, BrainCircuit, Activity, BarChart3 } from 'lucide-react';

export function Trust() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:max-w-3xl mx-auto mb-20">
          <span className="text-[9px] uppercase font-semibold tracking-[0.3em] text-[#A1A1AA] mb-4 block">Our Commitment</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light italic tracking-tight mb-6"
          >
            Transaction-aware. <br className="hidden md:block"/><span className="text-white/40">Capital-aware.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-[#A1A1AA] font-light leading-relaxed"
          >
             Our credibility comes from domain specialization. We don't just provide analytics; we deliver execution-ready recommendations. We sit at the intersection of legal, technical, and financial review to help you choose the best structuring pathways.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {[
            { metric: "6x", label: "More Portfolio Capacity", icon: Activity },
            { metric: "70%", label: "Cut In Time To Decision", icon: BarChart3 },
            { metric: "100%", label: "Source-Cited Reviews", icon: Shield },
            { metric: "Zero", label: "Hallucinated Memos", icon: BrainCircuit }
          ].map((stat, i) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
               className="text-center flex flex-col items-center"
             >
               <div className="w-10 h-10 rounded-none border border-white/10 glass flex items-center justify-center text-white/50 mb-6">
                 <stat.icon className="w-4 h-4" strokeWidth={1.5} />
               </div>
               <div className="font-display text-4xl md:text-5xl font-light italic mb-3">{stat.metric}</div>
               <div className="text-[9px] uppercase font-semibold tracking-[0.2em] text-[#A1A1AA]">{stat.label}</div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
