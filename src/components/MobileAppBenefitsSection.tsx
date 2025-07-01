'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowLeftIcon, ArrowRightIcon, DevicePhoneMobileIcon, QrCodeIcon, ClockIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Book Tickets Anywhere',
    description: 'Reserve your seat from your phone, anytime, anywhere.',
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-[#20C997]" />,
  },
  {
    title: 'Scan QR to Board',
    description: 'Board buses quickly and securely with QR code validation.',
    icon: <QrCodeIcon className="w-12 h-12 text-[#20C997]" />,
  },
  {
    title: 'Live Bus Arrival Times',
    description: 'See real-time bus arrivals powered by BLE beacons.',
    icon: <ClockIcon className="w-12 h-12 text-[#20C997]" />,
  },
];

const MobileAppBenefitsSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="max-w-5xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F3A93] mb-12">Mobile App Benefits</h2>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="keen-slider__slide flex flex-col items-center bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/30 glassmorphism w-72 mx-auto">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-[#1F3A93] mb-1 text-center">{benefit.title}</h3>
              <p className="text-gray-700 text-center text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-[#20C997] hover:text-white transition-colors"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Previous"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-[#20C997] hover:text-white transition-colors"
          onClick={() => instanceRef.current?.next()}
          aria-label="Next"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </motion.section>
  );
};

export default MobileAppBenefitsSection; 