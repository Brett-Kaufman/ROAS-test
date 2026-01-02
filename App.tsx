
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VslSection from './components/VslSection';
import BookingSection from './components/BookingSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white font-inter">
      {/* Muted Background Orbs - Reduced intensity for eye comfort */}
      <div className="fixed top-[-5%] left-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[180px] opacity-40"></div>
      <div className="fixed bottom-[10%] right-[10%] -z-10 h-[500px] w-[500px] rounded-full bg-blue-900/5 blur-[150px] opacity-30"></div>

      <div className="pt-6 md:pt-12">
        <Navbar />
      </div>

      <main className="relative z-10 px-4 pt-10 md:pt-20 max-w-7xl mx-auto space-y-24 md:space-y-48 pb-32">
        <Hero />
        
        <div className="flex flex-col gap-16 md:gap-24 items-center w-full max-w-5xl mx-auto">
          <VslSection />
        </div>

        <BookingSection />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default App;
