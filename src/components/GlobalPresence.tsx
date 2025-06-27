import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mapImage from '../assert/map.png'; // Add this import at the top

const GlobalPresence = () => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-black/20 relative overflow-hidden w-full">
      <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Title above the image, centered and overlayed */}
        <div className="relative w-full max-w-5xl mx-auto mb-10">
          {/* Simple heading above the image, no padding or background */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8">
            Global Presence
          </h2>
          {/* World Map Image */}
          <div className="relative w-full h-[500px] bg-black/40 rounded-xl p-4 border border-white/10 overflow-hidden flex items-center justify-center">
            {/* White glowing shade around the image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-[inherit] blur-2xl opacity-80 z-0"></div>
            {/* Blue light accent effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
            <img
              src={mapImage}
              alt="Global Presence Map"
              className="w-full h-full object-contain relative z-10"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;