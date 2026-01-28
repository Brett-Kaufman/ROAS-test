
import React, { useState, useEffect } from 'react';
import { CAPABILITIES } from '../constants';

const Capabilities: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-24 relative flex items-center justify-center border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="w-full max-w-6xl px-4 space-y-12">
        <div className="flex flex-col items-center gap-3">
          <div className="h-[1px] w-24 bg-blue-600 shadow-[0_0_15px_rgba(0,102,255,0.4)]" />
          <p className="text-xs font-black uppercase tracking-[1em] text-white/40">CORE CAPABILITIES</p>
        </div>

        <div className="relative h-[100px] md:h-[140px] lg:h-[180px] flex items-center justify-center w-full text-center">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                index === i 
                  ? "opacity-100 translate-x-0 blur-0 scale-100" 
                  : index > i 
                    ? "opacity-0 -translate-x-full blur-2xl scale-75 pointer-events-none" 
                    : "opacity-0 translate-x-full blur-2xl scale-75 pointer-events-none"
              }`}
            >
              <h3 className="text-2xl md:text-5xl lg:text-7xl font-black tracking-tight text-white leading-none uppercase px-4 max-w-6xl">
                {cap}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {CAPABILITIES.map((_, i) => (
            <div 
              key={i}
              className={`h-[3px] transition-all duration-500 ${
                index === i ? "w-20 bg-blue-600 shadow-[0_0_15px_rgba(0,102,255,0.7)]" : "w-6 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
