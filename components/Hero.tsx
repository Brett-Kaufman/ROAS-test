
import React from 'react';
import { BRANDS_ROW_1, BRANDS_ROW_2 } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-32">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white">
          SCALE YOUR <span className="gradient-text">ROAS</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-[0.15em] md:tracking-[0.25em] leading-tight text-gray-400">
          Precision Intelligence. <span className="text-blue-500 font-bold">Absolute</span> Scaling.
        </p>
      </div>

      <div className="py-8 md:py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="mx-auto max-w-6xl space-y-6 md:space-y-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-6 px-4">
            {BRANDS_ROW_1.map((brand, idx) => (
              <div key={idx} className="text-[10px] sm:text-sm md:text-lg font-black text-white/20 hover:text-white transition-all cursor-default uppercase tracking-widest whitespace-nowrap">
                {brand}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-6 px-4">
            {BRANDS_ROW_2.map((brand, idx) => (
              <div key={idx} className="text-[10px] sm:text-sm md:text-lg font-black text-white/20 hover:text-white transition-all cursor-default uppercase tracking-widest whitespace-nowrap">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
