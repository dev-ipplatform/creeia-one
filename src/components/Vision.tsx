import { motion } from 'motion/react';
import { Layers, CheckCircle2, ShieldCheck } from 'lucide-react';

export function Vision() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-[#080808] text-[#E5E7EB] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.01] -skew-x-[20deg] transform origin-top-right backdrop-blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-light italic mb-6 tracking-tight leading-[1.1]">
                Scalable expert judgment. <br className="hidden md:block"/><span className="text-white/40">Not raw AI.</span>
              </h2>
              <p className="text-[#A1A1AA] text-sm md:text-base font-light text-balance mb-12">
                Clients don't buy "AI experiments." They buy faster outputs, less noise, and zero embarrassment. Our architecture merges a high-throughput platform with a world-class underwriting team.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="flex gap-6">
                <div className="mt-1">
                  <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center glass">
                    <Layers className="w-5 h-5 text-white/80" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display italic tracking-wide mb-2">Platform Intelligence (Layer A)</h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed font-light mb-4">
                    The platform rapidly normalizes patent families, maps targets, gathers evidence-of-use, and flags risks in seconds—compressing the first-pass workflow and capturing 80% of the repeatable work.
                  </p>
                  <ul className="text-xs font-medium space-y-2 text-[#A1A1AA]">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white/40" /> Orders-of-magnitude faster triage</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white/40" /> Higher-quality initial rejection</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1">
                  <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center glass">
                    <ShieldCheck className="w-5 h-5 text-white/80" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display italic tracking-wide mb-2">Expert Execution (Layer B)</h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed font-light mb-4">
                    Specialists validate AI outputs, correct edge cases, apply strategic judgment, and translate findings into execution-ready funding, licensing, or divestiture plans.
                  </p>
                   <ul className="text-xs font-medium space-y-2 text-[#A1A1AA]">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white/40" /> Zero hallucinated memos</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white/40" /> Transaction-aware structuring</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] glass thin-border rounded-sm overflow-hidden relative p-8 flex flex-col justify-end group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent group-hover:opacity-20 transition-opacity duration-1000" />
               
               <div className="relative z-20 space-y-4">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-sm border border-white/10 text-[9px] uppercase font-semibold tracking-[0.3em] text-[#E5E7EB]">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> The Advantage
                 </div>
                 <blockquote className="text-2xl md:text-3xl font-display font-light italic leading-[1.3] tracking-tight">
                   "Every portfolio goes through the same structured triage framework. Every recommendation has source support and human sign-off."
                 </blockquote>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
