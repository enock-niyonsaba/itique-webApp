import React from 'react';

const features = [
  {
    title: 'Passenger Booking & Verification',
    description: 'Book tickets and verify boarding with secure QR code validation. Seamless, fast, and fraud-proof.',
    visual: '[Mobile UI: Ticket Booking & QR]'
  },
  {
    title: 'IoT Integration',
    description: 'mmWave sensors detect passenger flow for real-time, accurate data. Hardware and software in perfect sync.',
    visual: '[mmWave Sensor Visual]'
  },
  {
    title: 'Real-Time Insights',
    description: 'Dashboards for agencies and regulators. Monitor, analyze, and optimize public transport in real time.',
    visual: '[Dashboard Visual]'
  }
];

const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F3A93] mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-white/30 glassmorphism hover:scale-105 transition-transform duration-300">
            <div className="w-28 h-28 bg-gradient-to-br from-[#1F3A93]/80 to-[#20C997]/60 rounded-xl flex items-center justify-center mb-6 border border-white/30">
              <span className="text-white text-lg font-semibold opacity-80 text-center">{feature.visual}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1F3A93] mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-700 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection; 