import React from 'react';

const AdVideoCard: React.FC<{ videoUrl: string; label: string; posterUrl?: string }> = ({ videoUrl, label, posterUrl }) => {
  return (
    <div className="flex flex-col space-y-4 w-full max-w-xl mx-auto">
      <div className="group relative aspect-video bg-zinc-950 border border-white/5 overflow-hidden rounded-sm shadow-2xl transition-all duration-500 hover:border-blue-600/30">
        {/* Tactical HUD corners */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
        </div>

        {/* Video Content */}
        <video
          src={posterUrl ? videoUrl : `${videoUrl}#t=0.1`}
          poster={posterUrl}
          controls
          playsInline
          preload="metadata"
          style={{ background: 'transparent' }}
          className="w-full h-full object-cover relative z-0"
        />

        {/* Scanline / Grain Overlay - purely decorative, non-blocking */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 bg-[length:100%_4px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
      </div>
      
      <div className="text-center opacity-40">
        <p className="text-[12px] font-black text-white uppercase tracking-[0.4em]">{label}</p>
        <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Active Creative Deployment</p>
      </div>
    </div>
  );
};

const AdsSection: React.FC = () => {
  return (
    <div className="w-full py-24 space-y-16">
      <div className="space-y-6 text-center">
        <div className="flex justify-center items-center gap-4">
          <div className="h-[1px] w-12 bg-blue-600/30"></div>
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.8em] text-blue-500">Creative intelligence</p>
          <div className="h-[1px] w-12 bg-blue-600/30"></div>
        </div>
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase">
          WATCH SOME OF <span className="text-blue-600">THE ADS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto px-4 justify-items-center">
        <AdVideoCard 
          videoUrl="https://fppmm7b7cy2oyyvq.public.blob.vercel-storage.com/ADS%201.mp4" 
          label="Creative Variant 01"
          posterUrl="https://fppmm7b7cy2oyyvq.public.blob.vercel-storage.com/thumnail%20ADS%201.png"
        />
        <AdVideoCard 
          videoUrl="https://fppmm7b7cy2oyyvq.public.blob.vercel-storage.com/ADS%202.mp4" 
          label="Creative Variant 02"
        />
      </div>
      
      <div className="flex justify-center">
         <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default AdsSection;