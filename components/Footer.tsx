
import React from 'react';

const Footer: React.FC = () => {
  const scrollToBooking = () => {
    const section = document.getElementById('booking-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* High-Impact CTA Section - Now Dark Tactical */}
      <div className="py-24 md:py-48 bg-[#08080a] text-white -mx-4 px-4 overflow-hidden relative border-t border-white/5">
        
        {/* Deep Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

        {/* Refined Tactical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}></div>
        
        <div className="space-y-12 md:space-y-16 max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block px-4 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-2 md:mb-4">
              FINAL MISSION OBJECTIVE
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-4">
              DEPLOY VIRAL ADS. <br/>
              <span className="text-blue-600 filter drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">MASTER EMAIL.</span> <br/>
              CLOSE MILLIONS.
            </h2>
          </div>

          <div className="mx-auto max-w-3xl px-2 sm:px-4">
            <button 
              onClick={scrollToBooking}
              className="group relative w-full overflow-hidden"
            >
              {/* Tactical Button Frame */}
              <div className="relative z-10 bg-black py-8 md:py-14 px-6 md:px-8 border-[2px] md:border-[3px] border-blue-600/30 transition-all duration-500 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-[0_0_80px_rgba(37,99,235,0.4)]">
                
                {/* Animated Inner Scanning Line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-white animate-[scan-down_3s_linear_infinite]"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
                  <span className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter transition-transform group-hover:scale-105">
                    BOOK YOUR CALL
                  </span>
                  
                  {/* Tactical Pulse Icon */}
                  <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 text-white transition-transform group-hover:translate-x-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* HUD-style data corner marks */}
                <div className="absolute top-2 left-4 text-[7px] md:text-[8px] font-mono text-white/20 uppercase tracking-widest hidden sm:block">
                  Auth: Level 7 // Ready to Scale
                </div>
                <div className="absolute bottom-2 right-4 text-[7px] md:text-[8px] font-mono text-white/20 uppercase tracking-widest hidden sm:block">
                  Latency: 0.00ms // Signal: Strong
                </div>
              </div>

              {/* Decorative Background Shadow/Glow */}
              <div className="absolute -inset-2 bg-blue-600/10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Status Bar - Refined visibility */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black to-transparent pt-20 pb-4 md:pb-8 pointer-events-none">
        <div className="mx-auto max-w-2xl px-4 pointer-events-auto">
          <div className="glass flex items-center justify-between py-2 md:py-3 px-6 md:px-8 shadow-2xl border border-white/5 bg-black/60 backdrop-blur-xl rounded-full">
             <div className="flex items-center gap-2 md:gap-3">
                <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)] animate-pulse"></div>
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/40">Systems Optimal</span>
             </div>
             <div className="flex gap-2 md:gap-4 items-center">
                <div className="h-1 w-4 md:w-6 bg-blue-600/10 rounded-full overflow-hidden hidden xs:block">
                  <div className="h-full bg-blue-500/30 w-1/2 animate-[loading_2s_infinite]"></div>
                </div>
                <span className="text-[7px] md:text-[9px] font-mono text-blue-500/30 uppercase">v2.4.9</span>
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-down {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}} />
    </footer>
  );
};

export default Footer;
