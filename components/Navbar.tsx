
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToBooking = () => {
    const section = document.getElementById('booking-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-6 z-50 mx-auto max-w-5xl px-4">
      <div className="glass flex items-center justify-center px-10 py-4 shadow-2xl border border-white/10 bg-black/40 backdrop-blur-3xl">
        <button
          onClick={scrollToBooking}
          className="bg-white px-10 py-4 text-xs font-black text-black hover:bg-blue-600 hover:text-white transition-all uppercase tracking-[0.2em]"
        >
          Get ROAS
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
