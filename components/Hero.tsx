import React from 'react';
import { TITAN_BRANDS } from '../constants';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const section = document.getElementById('booking-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const openVideo = () => {
    window.open("https://youtu.be/wFCOJiukljk", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Headline Section */}
      <div className="w-full space-y-6 text-center mb-12 md:mb-20 px-4">
        <h1 className="text-[clamp(1.75rem,7vw,7.5rem)] font-black tracking-tighter leading-[1.05] md:leading-[0.92] text-white uppercase max-w-[15ch] sm:max-w-[20ch] md:max-w-[18ch] mx-auto [text-wrap:balance]">
          Scale your <span className="gradient-text">ROAS</span> and <span className="gradient-text">LTV</span> from leads already on your email list
        </h1>
        <h2 className="mx-auto max-w-3xl text-base sm:text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-[0.15em] md:tracking-[0.25em] leading-tight text-gray-400">
          Precision Intelligence. <span className="text-blue-500 font-bold">Absolute</span> Scaling.
        </h2>
      </div>

      {/* Hero Video Block - Clickable Tactical Card */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-12 md:mb-16">
        <div 
          onClick={openVideo}
          className="relative aspect-video border border-white/10 bg-black shadow-[0_0_80px_rgba(0,102,255,0.15)] group rounded-sm overflow-hidden cursor-pointer"
        >
          {/* Thumbnail Image with scale effect */}
          <img 
            src="https://i.ytimg.com/vi/wFCOJiukljk/maxresdefault.jpg" 
            alt="ROAS Accelerator Overview"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://i.ytimg.com/vi/wFCOJiukljk/hqdefault.jpg";
            }}
          />

          {/* Scanning Line Effect */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity">
            <div className="scanning-line"></div>
          </div>

          {/* Ambient Overlays */}
          <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-20 bg-[length:100%_4px] opacity-20"></div>

          {/* Tactical HUD Overlays */}
          <div className="absolute inset-0 pointer-events-none z-30 p-4 md:p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="w-8 h-[2px] bg-blue-500 group-hover:w-12 transition-all"></div>
                <div className="text-[7px] md:text-[9px] font-mono text-white/60 uppercase tracking-widest">Protocol: Growth_Visualizer</div>
              </div>
              <div className="text-right">
                <div className="text-[7px] md:text-[9px] font-mono text-blue-500/80 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                  FEED_LIVE
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="text-[7px] md:text-[9px] font-mono text-white/40 uppercase tracking-widest">
                Lat: 40.7128° N | Lon: 74.0060° W
              </div>
              <div className="text-[7px] md:text-[9px] font-mono text-white/60 uppercase tracking-widest">Source: Primary_Intel</div>
            </div>

            {/* Tactical Corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-600/40 group-hover:border-blue-500 transition-colors duration-500"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-600/40 group-hover:border-blue-500 transition-colors duration-500"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-blue-600/40 group-hover:border-blue-500 transition-colors duration-500"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-600/40 group-hover:border-blue-500 transition-colors duration-500"></div>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 z-40 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-600/20 border border-blue-500/50 backdrop-blur-md flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-600/80 group-hover:shadow-[0_0_100px_rgba(37,99,235,0.8)] group-hover:border-white">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-white ml-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Primary CTA Button */}
      <div className="w-full max-w-5xl px-4 flex justify-center mb-16 md:mb-24">
        <button
          onClick={scrollToBooking}
          className="group relative w-full md:w-auto px-12 py-6 md:px-24 md:py-10 bg-white text-black font-black text-lg md:text-3xl uppercase tracking-[0.3em] transition-all duration-500 hover:bg-blue-600 hover:text-white hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(37,99,235,0.6)] overflow-hidden border-b-4 border-blue-500/20 hover:border-blue-400"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)] pointer-events-none"></div>
          
          <span className="relative z-10 flex items-center justify-center gap-4">
            BOOK YOUR CALL
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>

      {/* Endorsed By Section - Aggressively compressed for mobile */}
      <div className="w-full pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-20 border-t border-white/5 overflow-hidden">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-12">
          {/* Section Heading */}
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <div className="w-10 sm:w-12 h-[2px] bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.6)]"></div>
            <h3 className="text-[clamp(14px,3vw,24px)] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-white/90 text-center px-4 leading-none">
              ENDORSED BY INDUSTRY TITANS
            </h3>
          </div>

          {/* Premium Static Trust Plaque */}
          <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="absolute -inset-4 md:-inset-12 bg-blue-600/[0.08] blur-[80px] md:blur-[140px] opacity-50 md:opacity-60 pointer-events-none"></div>
            
            <div className="relative p-3 sm:p-6 md:p-12 lg:p-14 border border-blue-500/20 bg-[#0c0d11] shadow-[0_0_120px_rgba(0,0,0,0.8),inset_0_0_80px_rgba(255,255,255,0.02)] rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-white/[0.02] pointer-events-none"></div>

              {/* Tactical Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-blue-500/10"></div>
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-blue-500/10"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-blue-500/10"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-blue-500/10"></div>

              {/* Brands Grid - 3 columns on mobile, centered flex for tablet/desktop */}
              <div className="relative z-10 grid grid-cols-3 gap-x-2 gap-y-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-10 items-center justify-items-center max-w-full">
                {TITAN_BRANDS.map((brand, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center justify-center text-center w-full sm:w-[28%] lg:w-[18%] space-y-2 sm:space-y-3 md:space-y-4"
                  >
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    <span className="text-[clamp(8px,2.5vw,9px)] sm:text-[clamp(13px,1.4vw,18px)] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-white/95 [text-shadow:0_0_12px_rgba(255,255,255,0.1)] cursor-default leading-tight break-words">
                      {brand}
                    </span>
                    <div className="w-6 sm:w-8 md:w-12 h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-blue-600/40 to-transparent shadow-[0_0_8px_rgba(37,99,235,0.1)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;