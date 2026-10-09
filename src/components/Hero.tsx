import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-[#080808] to-[#080808] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1.5 px-4 thin-border text-[9px] font-medium tracking-[0.5em] uppercase mb-6 bg-white/[0.02] backdrop-blur-sm text-[#A1A1AA]">
              Finance-Grade Patent Intelligence
            </span>
            <h1 className="font-display text-[11vw] sm:text-[9vw] lg:text-7xl leading-[1.05] font-light tracking-tight text-balance text-[#E5E7EB]">
              The decision & execution layer <br />
              <span className="text-white/40 italic">for patent finance.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base md:max-w-xl text-[#A1A1AA] font-light text-balance leading-relaxed"
          >
            We help law firms, patent owners, and capital partners make better monetization decisions faster. We combine AI-native workflow with expert technical, legal, and financial review—delivering execution-ready recommendations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black text-[11px] uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-all duration-300">
              Start a Review <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 thin-border text-white text-[11px] uppercase tracking-widest font-semibold hover:bg-white/5 transition-all duration-300">
              Explore Offerings
            </button>
          </motion.div>
        </div>
        
        <div className="lg:col-span-4 relative h-[400px] lg:h-[500px] w-full mt-12 lg:mt-0 lg:ml-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 glass thin-border rounded-sm overflow-hidden flex flex-col"
          >
            <div className="border-b border-white/5 p-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col gap-6 justify-center">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.3em] font-semibold text-white/40">
                <span>Output Status</span>
                <span>Human-in-the-loop</span>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-400">✓</div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-[#E5E7EB]">AI Intake & Scoring</h3>
                  <p className="text-xs text-[#A1A1AA]">Completed in seconds</p>
                </div>
              </div>
               <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">✓</div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-[#E5E7EB]">Expert Validation</h3>
                  <p className="text-xs text-[#A1A1AA]">Technical reviewer signed off</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full thin-border flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-[#E5E7EB]">Financial Review</h3>
                  <p className="text-xs text-[#A1A1AA]">Awaiting lead underwriter</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-6 md:left-12 flex flex-col gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#A1A1AA]">Trusted By</span>
        <div className="flex gap-8 items-center text-white/40 font-display italic text-lg tracking-wide">
          <span>Monetizers</span>
          <span>Law Firms</span>
          <span>Corporates</span>
        </div>
      </motion.div>
    </section>
  );
}
