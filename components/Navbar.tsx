import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-6 z-50 mx-auto max-w-5xl px-4">
      <div className="glass flex items-center justify-between px-6 md:px-10 py-4 shadow-2xl border border-white/10 bg-black/40 backdrop-blur-3xl rounded-full">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
            Precision Intelligence Agency
          </span>
        </div>
        
        <div className="hidden sm:flex items-center gap-4">
          <div className="h-px w-8 bg-white/10"></div>
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">
            Status: Active_Node_01
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;