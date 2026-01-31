import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-6 z-50 mx-auto max-w-5xl px-4">
      <div className="glass flex items-center justify-center px-10 py-4 shadow-2xl border border-white/10 bg-black/40 backdrop-blur-3xl">
        {/* Placeholder for Logo or Brand Name */}
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">
          Precision Intelligence Agency
        </span>
      </div>
    </nav>
  );
};

export default Navbar;