
import React, { useState, useRef } from 'react';

const VslSection: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState("https://drive.google.com/file/d/1m_duvJnqtyxx3HVFLIRuqcqWnXQVuTDT/preview");
  const [isLocalVideo, setIsLocalVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoUrl(URL.createObjectURL(file));
      setIsLocalVideo(true);
      setIsPlaying(true);
    }
  };

  const videoSrcWithAutoplay = videoUrl.includes('?') 
    ? `${videoUrl}&autoplay=1` 
    : `${videoUrl}?autoplay=1`;

  return (
    <div className="w-full space-y-10 md:space-y-12">
      <div className="text-center space-y-6 md:space-y-8">
        <div className="inline-block px-4 py-1 border border-blue-600/30 bg-blue-600/5 text-blue-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-2">
          STRATEGIC DEPLOYMENT
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-tight md:leading-[0.95] max-w-4xl mx-auto px-2">
          3 Ways We Can Make You More Money—Starting Now
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4">
          <p className="text-white/90 text-[11px] md:text-base font-bold uppercase tracking-[0.2em] md:tracking-[0.35em] flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,1)]"></span>
            Viral AI Ads
          </p>
          <p className="text-white/90 text-[11px] md:text-base font-bold uppercase tracking-[0.2em] md:tracking-[0.35em] flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,1)]"></span>
            Emails that actually land
          </p>
          <p className="text-white/90 text-[11px] md:text-base font-bold uppercase tracking-[0.2em] md:tracking-[0.35em] flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,1)]"></span>
            Events that close millions
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-video overflow-hidden border border-white/10 bg-black shadow-[0_0_40px_rgba(0,102,255,0.2)] md:shadow-[0_0_120px_rgba(0,102,255,0.4)] group rounded-sm">
        {isPlaying ? (
          <>
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_2px,3px_100%] opacity-30"></div>
            {isLocalVideo ? (
              <video
                src={videoUrl}
                autoPlay
                muted={false}
                playsInline
                loop
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={videoSrcWithAutoplay}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            )}
          </>
        ) : (
          <div 
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#020202] cursor-pointer group/vsl-thumb overflow-hidden"
            onClick={() => setIsPlaying(true)}
          >
            {/* Ultra-Striking Background Layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,50,200,0.3)_0%,_transparent_70%)] opacity-80"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            
            {/* Corner Tactical HUD elements */}
            <div className="absolute top-4 left-4 md:top-10 md:left-10 flex flex-col gap-1 z-40">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                <span className="text-[10px] md:text-[12px] font-black text-blue-400 uppercase tracking-widest">SIGNAL: READY FOR DEPLOYMENT</span>
              </div>
              <div className="text-[7px] md:text-[9px] font-mono text-white/40 uppercase">AWAITING USER COMMAND...</div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes intense-ripple {
                0% { transform: scale(1); opacity: 0.8; }
                100% { transform: scale(3); opacity: 0; }
              }
              @keyframes bounce-down {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(10px); }
              }
              @keyframes shimmer-text {
                0% { background-position: -200% center; }
                100% { background-position: 200% center; }
              }
            `}} />

            <div className="relative z-40 text-center space-y-8 md:space-y-12">
              {/* Central Energy Core / Play Trigger */}
              <div className="relative flex items-center justify-center">
                {/* Visual "Target" Effect */}
                <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-[0.5px] border-blue-500/20 rounded-full animate-pulse"></div>
                
                {/* Ripple Layers */}
                <div className="absolute w-24 h-24 md:w-36 md:h-36 bg-blue-600/30 rounded-full animate-[intense-ripple_2s_infinite]"></div>
                <div className="absolute w-24 h-24 md:w-36 md:h-36 bg-blue-400/20 rounded-full animate-[intense-ripple_2s_infinite_0.5s]"></div>

                {/* The Play Button - Massive & High Contrast */}
                <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-white/50 bg-blue-600 flex items-center justify-center group-hover/vsl-thumb:scale-110 group-hover/vsl-thumb:bg-blue-500 group-hover/vsl-thumb:border-white transition-all duration-300 z-50 shadow-[0_0_60px_rgba(37,99,235,0.8)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-20 md:w-20 ml-2 text-white filter drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Instructional Arrow */}
                <div className="absolute -top-16 md:-top-24 animate-[bounce-down_1.5s_infinite_ease-in-out] hidden sm:block">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60">
                    <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[8px] md:text-[10px] font-black text-white/60 uppercase tracking-widest text-center mt-2">CLICK</p>
                </div>
              </div>

              {/* Action Label - High Impact */}
              <div className="space-y-6">
                <div className="relative inline-block group/btn">
                  <div className="absolute -inset-4 bg-white/20 blur-xl opacity-20 group-hover/vsl-thumb:opacity-40 transition-opacity"></div>
                  
                  <div className="relative px-8 py-4 md:px-14 md:py-7 border-4 border-blue-600 bg-white text-black font-[900] tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover/vsl-thumb:scale-110 group-hover/vsl-thumb:bg-blue-600 group-hover/vsl-thumb:text-white transition-all duration-300 transform-gpu">
                    <span className="relative z-10">CLICK TO UNLOCK THE BLUEPRINT</span>
                    
                    {/* Interior Shimmer */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer-text_3s_linear_infinite]"></div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                   <p className="text-[10px] md:text-sm font-black text-blue-400 uppercase tracking-[0.6em] md:tracking-[1em] drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                     DO NOT CLOSE THIS WINDOW
                   </p>
                   <div className="h-[2px] w-32 md:w-64 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Cinematic Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-40"></div>
          </div>
        )}
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
