import React, { useState } from 'react';

const AdVideoCard: React.FC<{ youtubeUrl: string }> = ({ youtubeUrl }) => {
  const [imgError, setImgError] = useState(false);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const ytId = getYouTubeId(youtubeUrl);

  const handleClick = () => {
    window.open(youtubeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-xl mx-auto">
      <div 
        onClick={handleClick}
        className="group relative aspect-video bg-zinc-950 border border-white/5 overflow-hidden rounded-sm shadow-2xl transition-all duration-500 hover:border-blue-600/30 cursor-pointer"
      >
        {/* Tactical HUD corners */}
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
        </div>

        {/* Thumbnail Content with Fallback logic */}
        <div className="w-full h-full relative z-0">
          {ytId && !imgError ? (
            <img 
              src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
              alt="Creative Deployment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgError(true)}
              onLoad={(e) => {
                // Typical check for YouTube's 120x90 "no thumbnail" placeholder
                const img = e.target as HTMLImageElement;
                if (img.naturalWidth === 120 && img.naturalHeight === 90) {
                  setImgError(true);
                }
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#05070c] to-[#0b1220] relative transition-transform duration-1000 group-hover:scale-105">
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full translate-y-4"></div>
              {/* Subtle Scanline noise for the fallback */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </div>
          )}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/20 border border-blue-500/50 backdrop-blur-md flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-600/80 group-hover:shadow-[0_0_60px_rgba(37,99,235,0.7)] pointer-events-auto">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity">
          <div className="scanning-line"></div>
        </div>

        {/* Decorative HUD Tag */}
        <div className="absolute bottom-3 left-4 z-30 text-[7px] font-mono text-white/20 uppercase tracking-widest group-hover:text-blue-500/40 transition-colors pointer-events-none">
          Protocol: Creative_Intelligence_Stream
        </div>
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
          youtubeUrl="https://youtu.be/EKETes0P96A" 
        />
        <AdVideoCard 
          youtubeUrl="https://youtu.be/YF6O3O3sQJg" 
        />
      </div>
      
      <div className="flex justify-center">
         <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default AdsSection;