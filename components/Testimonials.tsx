import React, { useRef, useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { Testimonial } from '../types';

const TestimonialItem: React.FC<{ study: Testimonial, idx: number }> = ({ study, idx }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imgError, setImgError] = useState(false);

  const isYouTube = study.videoUrl?.includes('youtu.be') || study.videoUrl?.includes('youtube.com');
  
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const ytId = isYouTube ? getYouTubeId(study.videoUrl || '') : null;
  const watchUrl = study.videoUrl || '';

  const openYouTube = () => {
    if (watchUrl) {
      window.open(watchUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Determine if video should be contained (vertical) or covered (horizontal)
  const isVertical = ["PETER SAGE", "JAMES SWANWICK", "EFX ALGO", "ABRAM ANDERSON", "CHRIS MARTIN"].includes(study.brand);

  return (
    <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 md:gap-20 px-4 max-w-7xl mx-auto`}>
      <div className="flex-1 space-y-8 md:space-y-12 text-left">
        <h4 id={`testimonial-heading-${idx}`} className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] md:leading-[0.85] tracking-tighter uppercase">
          {study.headline}
        </h4>
        <div className="space-y-2 md:space-y-3 border-l-4 border-blue-600 pl-6 md:pl-10">
          <h5 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">
            {study.brand}
          </h5>
          <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-blue-500">
            {study.category}
          </p>
        </div>
        <p className="text-base md:text-2xl text-gray-400 leading-relaxed font-light">
          {study.description}
        </p>
        <div className="pt-4">
          <div className="inline-block px-4 py-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
            FIXED: {study.fixHighlight}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[45%] aspect-video relative border border-white/10 bg-black shadow-2xl overflow-hidden group rounded-sm shrink-0">
        <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
          {isYouTube && ytId ? (
            <div 
              onClick={openYouTube}
              className="relative w-full h-full cursor-pointer group/yt overflow-hidden bg-black"
            >
              {/* Tactical YouTube Thumbnail Card */}
              {study.brand === "PETER SAGE" && imgError ? (
                <div className="w-full h-full bg-gradient-to-br from-[#05070c] to-[#0b1220] relative transition-transform duration-1000 group-hover/yt:scale-105">
                  <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full translate-y-4"></div>
                </div>
              ) : (
                <img 
                  src={study.brand === "PETER SAGE" 
                    ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg` 
                    : `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg`
                  } 
                  alt={study.brand}
                  className={`w-full h-full ${isVertical ? "object-contain" : "object-cover"} transition-transform duration-1000 group-hover/yt:scale-105`}
                  onError={(e) => {
                    if (study.brand === "PETER SAGE") {
                      setImgError(true);
                    } else {
                      (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
                    }
                  }}
                />
              )}
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/20 border border-blue-500/50 backdrop-blur-md flex items-center justify-center transition-all duration-700 group-hover/yt:scale-110 group-hover/yt:bg-blue-600/80 group-hover/yt:shadow-[0_0_60px_rgba(37,99,235,0.7)] pointer-events-auto">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Scanning Line Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-20 group-hover/yt:opacity-40 transition-opacity">
                <div className="scanning-line"></div>
              </div>

              {/* Tactical HUD Overlays */}
              <div className="absolute inset-0 pointer-events-none z-30">
                <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-blue-600/40 group-hover/yt:border-blue-500 transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-blue-600/40 group-hover/yt:border-blue-500 transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-blue-600/40 group-hover/yt:border-blue-500 transition-colors duration-500"></div>
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-blue-600/40 group-hover/yt:border-blue-500 transition-colors duration-500"></div>
                
                <div className="absolute top-2 left-10 text-[7px] font-mono text-white/20 uppercase tracking-widest opacity-0 group-hover/yt:opacity-100 transition-opacity">
                  Channel: YouTube_Direct
                </div>
              </div>
            </div>
          ) : (
            <video 
              ref={videoRef}
              className="relative z-10 w-full h-full object-contain bg-black"
              style={{ background: '#000', visibility: 'visible', opacity: 1 }}
              controls
              playsInline
              preload="metadata"
              muted={false}
              autoPlay={false}
              controlsList="nodownload noplaybackrate"
              aria-labelledby={`testimonial-heading-${idx}`}
            >
              {study.videoUrl && <source src={study.videoUrl} type="video/mp4" />}
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="pt-16 md:pt-24 space-y-20 md:space-y-32">
      <div className="space-y-6 md:space-y-8 text-center overflow-hidden">
        <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.8em] md:tracking-[1.2em] text-blue-600">what we have done</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white uppercase leading-tight md:leading-none max-w-full mx-auto px-4 md:whitespace-nowrap">
          SEE WHAT OTHERS <span className="text-blue-600">HAD TO SAY</span>
        </h2>
      </div>

      <div className="space-y-24 md:space-y-48">
        {CASE_STUDIES.map((study, idx) => (
          <TestimonialItem key={idx} study={study} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;