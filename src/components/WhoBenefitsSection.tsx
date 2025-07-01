'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { BanknotesIcon, BuildingOffice2Icon, UserIcon } from '@heroicons/react/24/outline';

const beneficiaries = [
  {
    title: 'Government (B2G)',
    description: 'Improved tax collection and route optimization for smarter cities.',
    icon: <BanknotesIcon className="w-12 h-12 text-[#20C997]" />,
  },
  {
    title: 'Agencies (B2B)',
    description: 'Fraud prevention and real-time seat utilization data for operators.',
    icon: <BuildingOffice2Icon className="w-12 h-12 text-[#20C997]" />,
  },
  {
    title: 'Passengers (B2C)',
    description: 'Seamless booking and no unnecessary trips for ticket checks.',
    icon: <UserIcon className="w-12 h-12 text-[#20C997]" />,
  }
];

const WhoBenefitsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="max-w-6xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F3A93] mb-12">Who Benefits?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beneficiaries.map((b, idx) => (
          <div key={idx} className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-white/30 glassmorphism hover:scale-105 transition-transform duration-300">
            <div className="w-28 h-28 bg-gradient-to-br from-[#1F3A93]/80 to-[#20C997]/60 rounded-xl flex items-center justify-center mb-6 border border-white/30">
              {b.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1F3A93] mb-2 text-center">{b.title}</h3>
            <p className="text-gray-700 text-center">{b.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhoBenefitsSection; 