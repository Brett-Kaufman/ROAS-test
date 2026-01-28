
import React, { useEffect } from 'react';

const BookingSection: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  /**
   * Calendly URL with optimized "Eye-Comfort" parameters:
   * background_color: 0d0d0d (Deep Charcoal instead of pure black)
   * text_color: d1d5db (Muted Silver instead of pure white)
   * primary_color: 3b82f6 (Signature Blue)
   */
  const calendlyUrl = "https://calendly.com/brett-from-captivating/audit?hide_event_type_details=1&background_color=0d0d0d&text_color=d1d5db&primary_color=3b82f6";

  return (
    <div id="booking-section" className="w-full scroll-mt-24 space-y-12">
      <div className="space-y-4 text-center">
        <div className="flex justify-center">
          <div className="h-[1px] w-16 bg-blue-900/40" />
        </div>
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase">
          BOOK A <span className="text-blue-600/80">CALL</span>
        </h2>
        <p className="text-white/30 uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-bold">
          MISSION DEPLOYMENT WINDOW
        </p>
      </div>

      {/* Solid Matte Container to prevent background light-bleed */}
      <div className="relative border border-white/5 bg-[#050506] overflow-hidden shadow-2xl rounded-sm">
        
        {/* Decorative Header Bar */}
        <div className="flex items-center justify-between px-6 md:px-8 py-3 border-b border-white/5 bg-white/[0.01] relative z-20">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white/5 border border-white/10"></div>
            <div className="w-2 h-2 rounded-full bg-white/5 border border-white/10"></div>
            <div className="w-2 h-2 rounded-full bg-white/5 border border-white/10"></div>
          </div>
          <div className="text-[8px] md:text-[9px] font-mono text-white/20 uppercase tracking-widest leading-none">
            Protocol: Secure_Handshake // Encrypted
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 bg-blue-500/40 rounded-full animate-pulse"></div>
            <span className="text-[8px] font-mono text-blue-500/20">LINK ACTIVE</span>
          </div>
        </div>
        
        <div className="relative h-[700px] md:h-[800px] bg-[#0d0d0d]">
          {/* Subtle Vignette to blend edges of the iframe */}
          <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]"></div>
          
          <div 
            className="calendly-inline-widget w-full h-full relative z-0" 
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: '100%' }}
          />
          
          {/* Tactical Corner Marks - Faded for less strain */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/10 pointer-events-none z-20"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/10 pointer-events-none z-20"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/10 pointer-events-none z-20"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/10 pointer-events-none z-20"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <p className="text-[8px] font-mono text-white/10 uppercase tracking-[0.2em]">
          Targeting Global Markets // Non-Disclosure Agreement Active
        </p>
      </div>
    </div>
  );
};

export default BookingSection;
