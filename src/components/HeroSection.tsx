'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 text-center bg-white/60 backdrop-blur-md rounded-3xl shadow-xl mx-auto max-w-5xl mt-8 mb-12 border border-white/40"
    >
      <div className="mb-2 text-xl md:text-2xl font-semibold text-[#20C997]">
        <Typewriter
          options={{
            strings: ['Transforming Travel: Smarter, Faster, and Seamlessly Connected.'],
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 20,
            pauseFor: 2500,
          }}
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F3A93] mb-4 drop-shadow-lg">Revolutionizing Public Transport with Smart Technology.</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">Optimize journeys, prevent fraud, and enhance travel experiences for passengers, agencies, and governments.</p>
      <button className="px-8 py-3 bg-[#20C997]/80 hover:bg-[#20C997] text-white font-semibold rounded-full shadow-lg transition-all duration-300 glassmorphism border border-white/30 backdrop-blur-md text-lg mb-8">Learn More</button>
      <div className="w-full flex justify-center">
        {/* Replace with real image if available */}
        <div className="w-[340px] h-[220px] md:w-[480px] md:h-[300px] bg-gradient-to-br from-[#1F3A93]/80 to-[#20C997]/60 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-white/30 overflow-hidden">
          <Image src="/bus-qr.jpg" alt="Bus with QR Boarding" width={400} height={250} className="rounded-xl object-cover w-full h-full" />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection; 
