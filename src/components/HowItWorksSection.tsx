import React from 'react';

const steps = [
  {
    title: 'mmWave Sensors',
    description: 'Detect human movement at bus entrances and exits for accurate passenger flow.',
    visual: '[mmWave Sensor Infographic]'
  },
  {
    title: 'BLE Beacons',
    description: 'Trigger notifications for bus arrivals at stops, enhancing passenger experience.',
    visual: '[BLE Beacon Visual]'
  },
  {
    title: 'People Counting System',
    description: 'Monitor passenger count and send real-time data to the central server.',
    visual: '[People Counting Visual]'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F3A93] mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-white/30 glassmorphism hover:scale-105 transition-transform duration-300">
            <div className="w-28 h-28 bg-gradient-to-br from-[#1F3A93]/80 to-[#20C997]/60 rounded-xl flex items-center justify-center mb-6 border border-white/30">
              <span className="text-white text-lg font-semibold opacity-80 text-center">{step.visual}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1F3A93] mb-2 text-center">{step.title}</h3>
            <p className="text-gray-700 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection; 