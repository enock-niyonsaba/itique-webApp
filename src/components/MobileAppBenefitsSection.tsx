import React from 'react';

const benefits = [
  {
    title: 'Book Tickets Anywhere',
    description: 'Reserve your seat from your phone, anytime, anywhere.',
    visual: '[Mobile UI: Booking Screen]'
  },
  {
    title: 'Scan QR to Board',
    description: 'Board buses quickly and securely with QR code validation.',
    visual: '[Mobile UI: QR Scan]'
  },
  {
    title: 'Live Bus Arrival Times',
    description: 'See real-time bus arrivals powered by BLE beacons.',
    visual: '[Mobile UI: Live Arrival]'
  }
];

const MobileAppBenefitsSection = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F3A93] mb-12">Mobile App Benefits</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center border border-white/30 glassmorphism w-72 hover:scale-105 transition-transform duration-300">
            <div className="w-24 h-44 bg-gradient-to-br from-[#1F3A93]/80 to-[#20C997]/60 rounded-xl flex items-center justify-center mb-4 border border-white/30">
              <span className="text-white text-base font-semibold opacity-80 text-center">{benefit.visual}</span>
            </div>
            <h3 className="text-lg font-semibold text-[#1F3A93] mb-1 text-center">{benefit.title}</h3>
            <p className="text-gray-700 text-center text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileAppBenefitsSection; 