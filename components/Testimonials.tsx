
import React, { useState, useRef } from 'react';
import { CASE_STUDIES } from '../constants';

const Testimonials: React.FC = () => {
  const [activeVideos, setActiveVideos] = useState<number[]>([]);
  const [localVideos, setLocalVideos] = useState<Record<number, string>>({});
  const fileInputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const toggleVideo = (index: number) => {
    if (!activeVideos.includes(index)) {
      setActiveVideos([...activeVideos, index]);
    }
  };

  const handleLocalVideoUpload = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalVideos({ ...localVideos, [index]: url });
      toggleVideo(index);
    }
  };

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
          <div 
            key={idx}
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 md:gap-20 px-4 max-w-7xl mx-auto`}
          >
            <div className="flex-1 space-y-8 md:space-y-12 text-left">
              <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] md:leading-[0.85] tracking-tighter uppercase">
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
              {activeVideos.includes(idx) ? (
                <div className="w-full h-full">
                  {localVideos[idx] ? (
                    <video src={localVideos[idx]} controls autoPlay className="w-full h-full object-cover" />
                  ) : study.embedCode ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${study.embedCode}?autoplay=1`}
                      title="Case Study Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src={study.videoUrl}
                      title="Case Study Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              ) : (
                <div 
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950 cursor-pointer group/thumbnail transition-all"
                  onClick={() => {
                    if (study.videoUrl || study.embedCode || localVideos[idx]) {
                      toggleVideo(idx);
                    } else {
                      fileInputRefs.current[idx]?.click();
                    }
                  }}
                >
                  <input 
                    type="file" 
                    ref={el => { fileInputRefs.current[idx] = el; }}
                    onChange={handleLocalVideoUpload(idx)}
                    accept="video/*"
                    className="hidden"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50"></div>
                  <div className="relative z-10 px-6 md:px-8 text-center space-y-4 md:space-y-6 transform transition-transform duration-500 group-hover/thumbnail:scale-105">
                    <div className="inline-block px-2 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1 md:mb-2">
                      CASE STUDY HIGHLIGHT
                    </div>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight max-w-lg mx-auto">
                      "{study.fixHighlight}"
                    </h3>
                  </div>
                  <div className="relative z-10 mt-6 md:mt-10 w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover/thumbnail:border-blue-500 group-hover/thumbnail:bg-blue-600 group-hover/thumbnail:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover/thumbnail:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white/50 group-hover/thumbnail:text-white transition-colors ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
