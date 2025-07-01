'use client';
import React, { useState, useEffect } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'App Benefits', href: '#app-benefits' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Who Benefits', href: '#who-benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = [
  'hero',
  'features',
  'app-benefits',
  'how-it-works',
  'who-benefits',
  'testimonials',
  'contact',
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-2xl font-bold text-[#1F3A93]">ITIQUE</span>
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[#1F3A93] hover:text-[#20C997] font-medium transition-colors duration-200 cursor-pointer ${active === link.href.replace('#', '') ? 'text-[#20C997] underline underline-offset-4' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="w-7 h-7 text-[#1F3A93]" /> : <Bars3Icon className="w-7 h-7 text-[#1F3A93]" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white/90">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[#1F3A93] hover:text-[#20C997] font-medium transition-colors duration-200 cursor-pointer ${active === link.href.replace('#', '') ? 'text-[#20C997] underline underline-offset-4' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 