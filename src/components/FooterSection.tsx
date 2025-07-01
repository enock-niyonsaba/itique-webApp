import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-white/60 backdrop-blur-lg border-t border-white/30 py-12 px-4 mt-16 rounded-t-3xl shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Contact Form */}
        <form className="flex flex-col gap-4 w-full md:w-1/2 bg-white/70 rounded-2xl p-6 shadow-lg border border-white/30 glassmorphism">
          <h3 className="text-2xl font-bold text-[#1F3A93] mb-2">Get in Touch</h3>
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#20C997]" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#20C997]" />
          <textarea placeholder="Your Message" rows={3} className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#20C997]" />
          <button type="submit" className="px-6 py-2 bg-[#20C997]/80 hover:bg-[#20C997] text-white font-semibold rounded-full shadow-lg transition-all duration-300 glassmorphism border border-white/30 backdrop-blur-md">Send</button>
        </form>
        {/* Social & Docs Links */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
          <h4 className="text-lg font-semibold text-[#1F3A93]">Connect & Learn More</h4>
          <div className="flex gap-4">
            <a href="#" className="text-[#1F3A93] hover:text-[#20C997] transition-colors font-medium">Twitter</a>
            <a href="#" className="text-[#1F3A93] hover:text-[#20C997] transition-colors font-medium">LinkedIn</a>
            <a href="#" className="text-[#1F3A93] hover:text-[#20C997] transition-colors font-medium">GitHub</a>
            <a href="#" className="text-[#1F3A93] hover:text-[#20C997] transition-colors font-medium">Docs</a>
          </div>
          <p className="text-gray-500 text-sm mt-4">&copy; {new Date().getFullYear()} ITIQUE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 