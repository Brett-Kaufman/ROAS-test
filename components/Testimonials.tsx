import React, { useState, useRef, useEffect } from 'react';
import { CASE_STUDIES } from '../constants';
import { Testimonial } from '../types';

const TestimonialItem: React.FC<{ study: Testimonial, idx: number }> = ({ study, idx }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
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
      </div>

      <div className="w-full lg:w-[45%] aspect-video relative border border-white/10 bg-black shadow-2xl overflow-hidden group rounded-sm shrink-0">
        <div className="relative w-full h-full bg-zinc-950 overflow-hidden">
          {/* Background Layer: Blurred same video to fill horizontal frame elegantly */}
          <video 
            ref={bgVideoRef}
            src={`${study.videoUrl}#t=0.1`}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-[28px] opacity-30 saturate-[0.5] brightness-[0.3] pointer-events-none"
          />

          {/* Foreground Layer: Main Video Content */}
          <video 
            ref={videoRef}
            src={`${study.videoUrl}#t=0.1`}
            controls={isPlaying}
            playsInline
            preload="auto"
            controlsList="nodownload noplaybackrate"
            aria-labelledby={`testimonial-heading-${idx}`}
            className="relative z-10 w-full h-full object-contain" 
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {!isPlaying && (
            <button 
              type="button"
              aria-label={`Play testimonial video for ${study.brand}`}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer transition-all w-full h-full text-center group/btn"
              onClick={handlePlay}
            >
              <div className="absolute inset-0 bg-black/40 group-hover/btn:bg-black/20 transition-colors"></div>
              
              <div className="relative z-10 px-6 md:px-8 text-center space-y-4 md:space-y-6 transform transition-transform duration-500 group-hover/btn:scale-105">
                <div className="inline-block px-2 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1 md:mb-2">
                  CASE STUDY HIGHLIGHT
                </div>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight max-w-lg mx-auto drop-shadow-lg">
                  "{study.fixHighlight}"
                </h3>
              </div>
              
              <div className="relative z-10 mt-6 md:mt-10 w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover/btn:border-blue-500 group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover/btn:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white/50 group-hover/btn:text-white transition-colors ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
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