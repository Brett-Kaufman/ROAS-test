import React, { useState, useRef } from 'react';

const VslSection: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState("https://fppmm7b7cy2oyyvq.public.blob.vercel-storage.com/5-Minute%20Breakdown%20.mp4");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full space-y-8 md:space-y-12">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes chromatic-pulse {
          0%, 100% { text-shadow: 2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,0,255,0.5); }
          50% { text-shadow: 4px 0 0 rgba(255,0,0,0.7), -4px 0 0 rgba(0,0,255,0.7); }
        }
        .chromatic-text {
          text-shadow: 2px 0 0 rgba(255,0,0,0.3), -2px 0 0 rgba(0,0,255,0.3);
          transition: all 0.3s ease;
        }
      `}} />

      <div className="text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-blue-600"></div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,1)]"></div>
              <span className="text-[11px] md:text-sm font-black text-blue-400 uppercase tracking-[0.4em]">
                PROTOCOL ACTIVE
              </span>
            </div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>
          
          <div className="relative max-w-5xl">
            <h2 className="chromatic-text text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight md:leading-[0.95] tracking-tighter transition-all">
              3 Ways We Can Make You <br/> More Money—Starting Now
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-blue-600/40"></div>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-video overflow-hidden border border-white/10 bg-black shadow-[0_0_60px_rgba(0,102,255,0.15)] group rounded-sm">
        <div className="absolute inset-0 pointer-events-none z-20 border-[20px] md:border-[40px] border-transparent">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-600/40 group-hover:border-blue-500 transition-colors"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-600/40 group-hover:border-blue-500 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-600/40 group-hover:border-blue-500 transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-600/40 group-hover:border-blue-500 transition-colors"></div>
          <div className="absolute top-3 left-8 text-[7px] md:text-[9px] font-mono text-white/20 uppercase tracking-widest">Protocol: Direct_Access</div>
          <div className="absolute bottom-3 right-8 text-[7px] md:text-[9px] font-mono text-white/20 uppercase tracking-widest">Target: Exponential_ROI</div>
        </div>

        {/* Scanline Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>

        <div className="w-full h-full bg-zinc-950">
          <video
            key={videoUrl}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            muted={false}
            controlsList="nodownload"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="flex justify-center">
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept="video/*" 
          className="hidden" 
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="text-[9px] md:text-[10px] font-black text-white/20 hover:text-blue-500 transition-all uppercase tracking-[0.5em] border-b border-transparent hover:border-blue-500/30 pb-1"
        >
          Upload Content Override
        </button>
      </div>
    </div>
  );
};

export default VslSection;