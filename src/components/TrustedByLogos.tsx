import React from "react";

// Example logo imports (replace with your actual logo paths)
import logo1 from "../assert/logos/company1.png";
import logo2 from "../assert/logos/company2.png";
import logo3 from "../assert/logos/company3.png";
import logo4 from "../assert/logos/company4.png";
import logo5 from "../assert/logos/company5.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const TrustedByLogos = () => (
  <div className="w-full py-8 bg-[#181818] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-16 animate-logo-scroll"
            style={{
              width: `${logos.length * 320 * 2}px`,
              animation: `logo-scroll ${logos.length * 3.5}s linear infinite`,
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center h-32 w-56">
                <img
                  src={logo}
                  alt={`Company logo ${idx % logos.length + 1}`}
                  className="h-28 w-auto object-contain transition"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* Animation keyframes */}
    <style>{`
      @keyframes logo-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-logo-scroll {
        will-change: transform;
      }
    `}</style>
  </div>
);

export default TrustedByLogos;