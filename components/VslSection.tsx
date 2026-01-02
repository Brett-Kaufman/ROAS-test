
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
                muted
                playsInline
                loop
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={videoUrl}
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,50,200,0.2)_0%,_transparent_70%)] opacity-60"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
            
            {/* Corner Tactical HUD elements - Hidden on Mobile */}
            <div className="absolute top-4 left-4 md:top-10 md:left-10 flex flex-col gap-1 opacity-60 group-hover/vsl-thumb:opacity-100 transition-opacity hidden sm:flex">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[8px] md:text-[10px] font-mono text-blue-400 uppercase tracking-widest">Data Stream: Linked</span>
              </div>
              <div className="text-[6px] md:text-[8px] font-mono text-white/40 uppercase">0.02ms Latency // Encryption: AES-256</div>
            </div>

            <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end gap-1 opacity-60 group-hover/vsl-thumb:opacity-100 transition-opacity hidden sm:flex">
              <span className="text-[8px] md:text-[10px] font-mono text-blue-400 uppercase tracking-widest">Protocol: Growth_Node_Active</span>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-blue-600/30 group-hover/vsl-thumb:bg-blue-600/60 transition-colors" style={{animationDelay: `${i * 100}ms`}}></div>
                ))}
              </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes ripple {
                0% { transform: scale(1); opacity: 0.5; }
                100% { transform: scale(2.2); opacity: 0; }
              }
              @keyframes rotate-3d {
                0% { transform: rotateX(45deg) rotateZ(0deg); }
                100% { transform: rotateX(45deg) rotateZ(360deg); }
              }
              @keyframes float-particle {
                0%, 100% { transform: translateY(0); opacity: 0; }
                50% { transform: translateY(-20px); opacity: 1; }
              }
            `}} />

            {/* Particle Stream */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
               {[...Array(15)].map((_, i) => (
                 <div 
                   key={i} 
                   className="absolute w-1 h-1 bg-blue-400 rounded-full"
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animation: `float-particle ${3 + Math.random() * 5}s infinite ease-in-out`,
                     animationDelay: `${Math.random() * 5}s`
                   }}
                 ></div>
               ))}
            </div>

            <div className="relative z-40 text-center space-y-6 md:space-y-10 scale-[0.85] sm:scale-90 md:scale-100">
              {/* Central Energy Core / Play Trigger */}
              <div className="relative flex items-center justify-center">
                {/* Tactical Outer Rings */}
                <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-blue-600/10 rounded-full group-hover/vsl-thumb:border-blue-600/30 transition-all duration-700"></div>
                <div className="absolute w-[150px] h-[150px] md:w-[240px] md:h-[240px] border-2 border-dashed border-blue-500/10 rounded-full animate-[rotate-slow_30s_linear_infinite] group-hover/vsl-thumb:border-blue-500/40 transition-all duration-700"></div>
                
                {/* Interactive Ripples on Hover */}
                <div className="absolute w-20 h-20 md:w-28 md:h-28 bg-blue-600/40 rounded-full animate-[ripple_2s_infinite_ease-out] group-hover/vsl-thumb:animate-[ripple_1s_infinite_ease-out]"></div>
                <div className="absolute w-20 h-20 md:w-28 md:h-28 bg-blue-600/20 rounded-full animate-[ripple_2s_infinite_ease-out] delay-700 group-hover/vsl-thumb:animate-[ripple_1.5s_infinite_ease-out]"></div>

                {/* The Play Button - Glassmorphic / Neon */}
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover/vsl-thumb:scale-110 group-hover/vsl-thumb:bg-blue-600 group-hover/vsl-thumb:border-blue-400 transition-all duration-500 z-50 shadow-[0_0_40px_rgba(0,0,0,1)] group-hover/vsl-thumb:shadow-[0_0_100px_rgba(37,99,235,0.8)] overflow-hidden">
                  {/* Subtle inner light sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/vsl-thumb:translate-x-full transition-transform duration-1000"></div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12 ml-1 text-white filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Action Label */}
              <div className="space-y-4">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-blue-600 blur-sm opacity-0 group-hover/vsl-thumb:opacity-40 transition-opacity"></div>
                  <div className="relative px-4 py-1.5 md:px-6 md:py-2 border border-white/10 bg-black/60 text-white font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-[9px] md:text-xs backdrop-blur-md group-hover/vsl-thumb:border-blue-500/50 transition-all">
                    DECRYPT REVENUE BLUEPRINT
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                   <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-blue-600/40"></div>
                   <p className="text-[8px] md:text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] md:tracking-[0.8em] animate-pulse">Live Feed Incoming</p>
                   <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-blue-600/40"></div>
                </div>
              </div>
            </div>

            {/* Cinematic Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
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
