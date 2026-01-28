
import React, { useState, useRef, useEffect } from 'react';

interface AdVideo {
  name: string;
  mp4Url: string;
}

const ADS_DATA: AdVideo[] = [
  {
    name: "Abram Anderson",
    mp4Url: "https://fppmm7b7cy2oyyvq.public.blob.vercel-storage.com/Abram%20Anderson.mp4"
  },
  {
    name: "Chris Martin",
    mp4Url: "https://fppmm7b7cy2oyyvq.public.blob.vercel-storage.com/Chris%20Martin.mp4"
  }
];

const AdCard: React.FC<{ ad: AdVideo }> = ({ ad }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Playback failed:", e));
      setIsPlaying(true);
    }
  };

  // Synchronize background video with foreground video for the ambient blur effect
  useEffect(() => {
    const mainVideo = videoRef.current;
    const bgVideo = bgVideoRef.current;
    if (!mainVideo || !bgVideo) return;

    const syncPlay = () => {
      bgVideo.currentTime = mainVideo.currentTime;
      bgVideo.play().catch(() => {});
    };
    const syncPause = () => bgVideo.pause();
    const syncSeek = () => { bgVideo.currentTime = mainVideo.currentTime; };

    mainVideo.addEventListener('play', syncPlay);
    mainVideo.addEventListener('pause', syncPause);
    mainVideo.addEventListener('seeking', syncSeek);

    return () => {
      mainVideo.removeEventListener('play', syncPlay);
      mainVideo.removeEventListener('pause', syncPause);
      mainVideo.removeEventListener('seeking', syncSeek);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <div className="group relative aspect-[9/16] bg-zinc-950 border border-white/5 overflow-hidden rounded-sm shadow-2xl transition-all duration-500 hover:border-blue-600/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">
        {/* Tactical HUD corners */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/10 group-hover:border-blue-500/40 transition-colors"></div>
        </div>

        {/* Scanline / Grain Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 bg-[length:100%_4px] opacity-20"></div>

        <div className="relative w-full h-full bg-zinc-950 overflow-hidden">
          {/* Background Layer: Blurred same video */}
          <video 
            ref={bgVideoRef}
            src={`${ad.mp4Url}#t=0.1`}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-[28px] opacity-30 saturate-[0.5] brightness-[0.3] pointer-events-none"
          />

          {/* Foreground Layer: Main Video Content */}
          <video 
            ref={videoRef}
            src={`${ad.mp4Url}#t=0.1`}
            controls={isPlaying}
            playsInline
            preload="metadata"
            className="relative z-10 w-full h-full object-contain" 
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {/* Centered Play Button Overlay */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 cursor-pointer transition-all duration-500 hover:bg-black/20"
              onClick={handlePlay}
            >
              <button 
                className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-blue-500/30 bg-blue-600/10 backdrop-blur-md flex items-center justify-center group/play transition-all duration-500 hover:scale-110 hover:border-blue-500 hover:bg-blue-600/20 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                aria-label={`Play ${ad.name} Video`}
              >
                <div className="ml-1 w-0 h-0 border-t-[10px] md:border-t-[16px] border-t-transparent border-l-[16px] md:border-l-[28px] border-l-white border-b-[10px] md:border-b-[16px] border-b-transparent"></div>
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center space-y-1">
        <p className="text-[12px] font-black text-white uppercase tracking-[0.4em] transition-colors">
          {ad.name}
        </p>
        <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
          Creative Intelligence Asset
        </p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto px-4">
        {ADS_DATA.map((ad, idx) => (
          <AdCard key={idx} ad={ad} />
        ))}
      </div>
      
      <div className="flex justify-center">
         <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default AdsSection;
