import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 text-center bg-white/60 backdrop-blur-md rounded-3xl shadow-xl mx-auto max-w-5xl mt-8 mb-12 border border-white/40">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F3A93] mb-4 drop-shadow-lg">Revolutionizing Public Transport with Smart Technology.</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">Optimize journeys, prevent fraud, and enhance travel experiences for passengers, agencies, and governments.</p>
      <button className="px-8 py-3 bg-[#20C997]/80 hover:bg-[#20C997] text-white font-semibold rounded-full shadow-lg transition-all duration-300 glassmorphism border border-white/30 backdrop-blur-md text-lg mb-8">Learn More</button>
      <div className="w-full flex justify-center">
        {/* Placeholder for hero image */}
        <div className="w-[340px] h-[220px] md:w-[480px] md:h-[300px] bg-gradient-to-br from-[#1F3A93]/80 to-[#20C997]/60 rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
          <span className="text-white text-xl md:text-2xl font-medium opacity-80">[Bus with QR Boarding Visual]</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 