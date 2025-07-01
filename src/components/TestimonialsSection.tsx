'use client';
import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    name: 'Agency Placeholder',
    text: '“This system has transformed our operations and improved passenger satisfaction.”',
  },
  {
    name: 'User Placeholder',
    text: '“Booking and boarding are now seamless and secure. Highly recommended!”',
  },
];

const TestimonialsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="max-w-5xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F3A93] mb-12">Testimonials & Investor Appeal</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8 items-center justify-center">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center border border-white/30 glassmorphism w-80">
            <p className="text-gray-700 italic mb-4">{t.text}</p>
            <span className="text-[#20C997] font-semibold">{t.name}</span>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-br from-[#1F3A93]/80 to-[#20C997]/60 rounded-2xl shadow-lg p-8 text-white text-center border border-white/30 glassmorphism">
        <h3 className="text-2xl font-bold mb-2">Market Opportunity</h3>
        <p className="text-lg mb-2">Smart public transport is a multi-billion dollar market with rapid growth potential.</p>
        <p className="text-base opacity-90">Scalable, future-proof, and ready for global expansion. Join us in revolutionizing mobility.</p>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection; 