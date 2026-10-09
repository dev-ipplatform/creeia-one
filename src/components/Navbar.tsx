import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 glass thin-border border-l-0 border-r-0 border-t-0"
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 flex items-center justify-center font-bold text-lg font-display italic shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/20 rounded-full">C</div>
        <span className="font-display font-light text-xl tracking-tight">Creeia One</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-widest text-[#A1A1AA]">
        <a href="#platform" className="hover:text-white cursor-pointer transition-colors">Platform</a>
        <a href="#process" className="hover:text-white cursor-pointer transition-colors">Expert Review</a>
        <a href="#solutions" className="hover:text-white cursor-pointer transition-colors">Solutions</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:inline-flex px-6 py-2.5 text-[10px] uppercase tracking-widest font-semibold border border-white/10 hover:bg-white border-transparent hover:text-black transition-all duration-300">
          Request Underwriting
        </button>
        <button className="md:hidden">
          <Menu className="w-5 h-5 text-white/70" />
        </button>
      </div>
    </motion.nav>
  );
}
