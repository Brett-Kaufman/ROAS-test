import React, { useState, useRef } from 'react';
import { TITAN_BRANDS } from '../constants';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Playback failed:", e));
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Headline Section */}
      <div className="w-full space-y-6 text-center mb-12 md:mb-20 px-4">
        <h1 className="text-[clamp(1.75rem,7vw,7.5rem)] font-black tracking-tighter leading-[1.05] md:leading-[0.92] text-white uppercase max-w-[15ch] sm:max-w-[20ch] md:max-w-[18ch] mx-auto [text-wrap:balance]">
          Scale your <span className="gradient-text">ROAS</span> and <span className="gradient-text">LTV</span> from leads already on your email list
        </h1>
        <p className="mx-auto max-w-3xl text-base sm:text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-[0.15em] md:tracking-[0.25em] leading-tight text-gray-400">
          Precision Intelligence. <span className="text-blue-500 font-bold">Absolute</span> Scaling.
        </p>
      </div>

      {/* Hero Video Block */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-24 md:mb-32">
        <div className="relative aspect-video border border-white/10 bg-black shadow-[0_0_80px_rgba(0,102,255,0.15)] group rounded-sm overflow-hidden">
          {/* Tactical Corner Accents */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-600/40 group-hover:border-blue-500 transition-colors duration-500"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-600/40 group-hover:border-blue-500 transition-colors duration-500"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-blue-600/40 group-hover:border-blue-500 transition-colors duration-500"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-600/40 group-hover:border-blue-500 transition-colors duration-500"></div>
            
            <div className="absolute top-3 left-12 text-[7px] md:text-[9px] font-mono text-white/20 uppercase tracking-widest hidden sm:block">Protocol: Growth_Visualizer</div>
            <div className="absolute bottom-3 right-12 text-[7px] md:text-[9px] font-mono text-white/20 uppercase tracking-widest hidden sm:block">Source: Primary_Intel</div>
          </div>

          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 bg-[length:100%_4px] opacity-20"></div>

          <video
            ref={videoRef}
            src="https://fppmm7b7cy2oyyvq.public.blob.vercel-storage.com/5-Minute%20Breakdown%20.mp4#t=0.1"
            className="w-full h-full object-cover"
            controls={isPlaying}
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {!isPlaying && (
            <div 
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 cursor-pointer transition-all duration-500 hover:bg-black/20"
              onClick={handlePlay}
            >
              <button 
                className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-blue-500/30 bg-blue-600/10 backdrop-blur-md flex items-center justify-center group/play transition-all duration-500 hover:scale-110 hover:border-blue-500 hover:bg-blue-600/20 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                aria-label="Play Video"
              >
                <div className="ml-2 w-0 h-0 border-t-[12px] md:border-t-[20px] border-t-transparent border-l-[20px] md:border-l-[32px] border-l-white border-b-[12px] md:border-b-[20px] border-b-transparent transition-transform group-hover/play:scale-110"></div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Endorsed By Section - Enlarged for Desktop */}
      <div className="w-full pt-20 pb-20 md:pt-32 md:pb-32 border-t border-white/5 overflow-hidden">
        <div className="flex flex-col items-center space-y-12 md:space-y-24">
          {/* Section Heading */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-[2px] bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.6)]"></div>
            <h2 className="text-[clamp(18px,3.5vw,32px)] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-white/90 text-center px-4 leading-none">
              ENDORSED BY INDUSTRY TITANS
            </h2>
          </div>

          {/* Premium Static Trust Plaque - Enhanced Distinction */}
          <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
            {/* Soft Outer Glow */}
            <div className="absolute -inset-4 md:-inset-12 bg-blue-600/[0.08] blur-[80px] md:blur-[140px] opacity-50 md:opacity-60 pointer-events-none"></div>
            
            <div className="relative p-10 md:p-24 lg:p-32 border border-blue-500/20 bg-[#0c0d11] shadow-[0_0_120px_rgba(0,0,0,0.8),inset_0_0_80px_rgba(255,255,255,0.02)] rounded-sm overflow-hidden">
              
              {/* Subtle Inner Highlight/Gradient for Panel Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-white/[0.02] pointer-events-none"></div>

              {/* Tactical Corner Accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-blue-500/10"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-blue-500/10"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-blue-500/10"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-blue-500/10"></div>

              {/* Internal Framing Lines */}
              <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
              <div className="absolute inset-x-12 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

              {/* Brands Grid - Larger Gaps and Enhanced Text Presence */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-16 md:gap-x-24 md:gap-y-28 items-center justify-items-center">
                {TITAN_BRANDS.map((brand, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center justify-center text-center w-full space-y-4 md:space-y-6"
                  >
                    {/* Tactical Top Accent Dot */}
                    <div className="w-1 h-1 rounded-full bg-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>

                    <span className="text-[12px] md:text-[clamp(15px,1.8vw,26px)] font-black uppercase tracking-[0.35em] md:tracking-[0.55em] text-white/95 [text-shadow:0_0_15px_rgba(255,255,255,0.12)] cursor-default leading-tight">
                      {brand}
                    </span>
                    
                    {/* Redesigned Static Tactical Divider */}
                    <div className="w-10 md:w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-600/40 to-transparent shadow-[0_0_8px_rgba(37,99,235,0.1)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Detail */}
          <div className="flex flex-col items-center gap-4 pt-8">
             <div className="h-[1px] w-24 bg-white/10"></div>
             <p className="text-[9px] md:text-[11px] font-mono text-white/20 uppercase tracking-[0.5em]">
               Operational Network Integrity // <span className="text-blue-500/50">Verified_System</span>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;