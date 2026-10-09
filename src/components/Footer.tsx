export function Footer() {
  return (
    <footer className="glass thin-border border-b-0 border-l-0 border-r-0 px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
           <div className="flex items-center gap-4 mb-4">
             <div className="w-8 h-8 flex items-center justify-center font-bold text-lg font-display italic shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/20 rounded-full">C</div>
             <span className="font-display font-light text-xl tracking-tight">Creeia One</span>
           </div>
           <p className="text-[#A1A1AA] text-[11px] max-w-sm uppercase tracking-widest font-medium">
             Finance-Grade Patent Intelligence
           </p>
        </div>
        
        <div className="flex gap-16 text-[10px] uppercase tracking-widest font-medium">
          <div className="flex flex-col gap-4 text-[#A1A1AA]">
            <span className="text-white/20 mb-1">Solutions</span>
            <a href="#" className="hover:text-white transition-colors">Aura Studio</a>
            <a href="#" className="hover:text-white transition-colors">Sentinel Desk</a>
            <a href="#" className="hover:text-white transition-colors">Vertex Advisory</a>
          </div>
          <div className="flex flex-col gap-4 text-[#A1A1AA]">
            <span className="text-white/20 mb-1">Company</span>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Trust Center</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-[#A1A1AA] font-light">
        <span>© 2026 Creeia One.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
