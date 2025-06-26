import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker 
} from "react-simple-maps";

// Define countries where company has presence
const presenceCountries = [
  { id: "usa", name: "United States", coordinates: [-97, 38], clients: 240 },
  { id: "uk", name: "United Kingdom", coordinates: [-2, 54], clients: 185 },
  { id: "uae", name: "United Arab Emirates", coordinates: [54, 24], clients: 320 },
  { id: "india", name: "India", coordinates: [78, 22], clients: 550 },
  { id: "australia", name: "Australia", coordinates: [133, -25], clients: 125 },
  { id: "singapore", name: "Singapore", coordinates: [103.8, 1.3], clients: 98 },
  { id: "canada", name: "Canada", coordinates: [-95, 60], clients: 76 },
  { id: "germany", name: "Germany", coordinates: [10, 51], clients: 112 },
];

// More reliable hosted GeoJSON URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const GlobalPresence = () => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-black/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Global Presence
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            With 17+ years of experience serving clients across 30+ countries, our engineering excellence knows no boundaries.
          </p>
        </motion.div>

        {/* World Map with Markers */}
        <div className="relative w-full h-[500px] max-w-5xl mx-auto bg-black/40 rounded-xl p-4 border border-white/10 overflow-hidden">
          {/* Blue light accent effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
          
          {/* Map components */}
          <ComposableMap
            projectionConfig={{
              scale: 170,
              rotation: [-11, 0, 0],
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 10
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(30, 30, 30, 0.3)"
                    stroke="rgba(100, 180, 255, 0.3)" // Blue stroke for countries
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: "rgba(40, 40, 40, 0.6)",
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            
            {presenceCountries.map(({ id, name, coordinates, clients }) => (
              <Marker 
                key={id} 
                coordinates={coordinates}
                onMouseEnter={() => setActiveCountry(id)}
                onMouseLeave={() => setActiveCountry(null)}
              >
                <g>
                  {/* Blue glow effect for markers */}
                  <circle
                    r={activeCountry === id ? 12 : 10}
                    fill="rgba(56, 182, 255, 0.2)"
                    className="transition-all duration-300"
                  />
                  
                  {/* Base circle marker */}
                  <circle
                    r={activeCountry === id ? 8 : 5}
                    fill={activeCountry === id ? "#10b981" : "rgba(16, 185, 129, 0.7)"}
                    className="transition-all duration-300"
                    stroke="rgba(56, 182, 255, 0.7)"
                    strokeWidth="1.5"
                  />
                  
                  {/* Always visible country label with counter - ENHANCED SIZE */}
                  <g transform="translate(15, 0)">
                    <rect
                      x={0}
                      y={-18}
                      width={name.length > 10 ? 170 : 150} // Slightly larger
                      height={45} // Slightly larger
                      rx={8}
                      fill="rgba(0, 0, 0, 0.85)"
                      stroke={activeCountry === id ? "#10b981" : "rgba(56, 182, 255, 0.6)"} // Blue border
                      strokeWidth={2}
                      className="transition-all duration-300"
                    />
                    {/* Country name - LARGER */}
                    <text
                      x={12}
                      y={0}
                      fontSize={14} // Increased font size
                      fontWeight="bold"
                      fill="#ffffff"
                      textAnchor="start"
                    >
                      {name}
                    </text>
                    {/* Project count - LARGER */}
                    <text
                      x={12}
                      y={22} // Adjusted position
                      fontSize={15} // Increased font size
                      fontWeight="bold"
                      fill="#38B6FF" // Changed to blue
                      textAnchor="start"
                    >
                      {clients}+ Projects
                    </text>
                  </g>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
        
        {/* Stats summary */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
          <div className="bg-black/40 border border-white/10 px-8 py-6 rounded-lg">
            <p className="text-4xl font-bold text-primary mb-2">30+</p>
            <p className="text-white text-sm uppercase tracking-wider">Countries</p>
          </div>
          <div className="bg-black/40 border border-white/10 px-8 py-6 rounded-lg">
            <p className="text-4xl font-bold text-primary mb-2">1500+</p>
            <p className="text-white text-sm uppercase tracking-wider">Global Projects</p>
          </div>
          <div className="bg-black/40 border border-white/10 px-8 py-6 rounded-lg">
            <p className="text-4xl font-bold text-primary mb-2">42M+</p>
            <p className="text-white text-sm uppercase tracking-wider">Sq. Ft. Designed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;