import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import homepageBuildingImage from '@/assert/homepagebuilding1.jpg';

const About = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [startTextAnimation, setStartTextAnimation] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRefs = useRef([]);
  
  // Create refs for each paragraph
  paragraphRefs.current = [];
  const addParagraphRef = (el) => {
    if (el && !paragraphRefs.current.includes(el)) {
      paragraphRefs.current.push(el);
    }
  };

  // Observer for image visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          observer.disconnect();
          
          // Start text animation after image animation (1.2s delay)
          setTimeout(() => {
            setStartTextAnimation(true);
          }, 1200);
        }
      },
      { threshold: 0.3 } // Trigger when image is 30% visible
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Animate paragraphs only after image animation completes
  useEffect(() => {
    if (startTextAnimation) {
      // Add fade-in class to paragraphs with staggered delay
      paragraphRefs.current.forEach((paragraph, index) => {
        setTimeout(() => {
          if (paragraph) {
            paragraph.classList.add('animate-fade-in');
          }
        }, 300 * index);
      });
    }
  }, [startTextAnimation]);

  return (
    <section id="about" className="py-20 bg-[#141414] w-full" ref={sectionRef}>
      <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Main content area - order swapped */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image section now first */}
          <div className="relative lg:order-1 order-2" ref={imageRef}>
            {/* Main image container with enhanced premium white glow */}
            <div 
              className="overflow-visible relative z-10 transform transition-all duration-1000"
              style={{ 
                opacity: isImageVisible ? 1 : 0,
                transform: isImageVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transitionDelay: '150ms',
                borderRadius: '24px 4px 24px 4px',
                boxShadow: isImageVisible ? 
                  '0 25px 50px -12px rgba(0,0,0,0.5), 0 15px 25px -7px rgba(22,138,255,0.25), 0 0 0 1px rgba(255,255,255,0.2) inset, 0 0 50px rgba(255,255,255,0.2) inset, 0 0 30px rgba(255,255,255,0.1)' : 
                  'none',
                padding: '4px'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Outer premium white glow - larger and more intense */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/15 to-white/10 rounded-[inherit] blur-2xl z-0"></div>
              
              {/* Secondary bloom effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-white/10 via-primary/20 to-transparent rounded-[inherit] blur-lg opacity-80 z-0"></div>
              
              {/* Image wrapper with custom curved corners */}
              <div className="relative overflow-hidden rounded-[inherit] h-full">
                {/* Image with existing hover effect */}
                <img 
                  src={homepageBuildingImage} 
                  alt="Terrene Engineering Building" 
                  className="w-full h-auto object-cover transition-transform duration-700"
                  style={{
                    transform: isHovering ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                {/* Enhanced white top edge highlight */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-white/60 blur-[1px]"></div>
                
                {/* Corner highlight - brighter with white */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/60 to-transparent opacity-60 blur-md rounded-tl-[inherit]"></div>
                
                {/* Opposite corner highlight - enhanced */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/30 via-white/40 to-transparent opacity-50 blur-md rounded-br-[inherit]"></div>
                
                {/* Animated white glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 animate-pulse"
                      style={{ animationDuration: '3s' }}></div>
                
                {/* Stronger ambient white glow */}
                <div className="absolute -bottom-40 -left-20 w-[160%] h-60 bg-gradient-to-t from-white/30 to-transparent blur-3xl opacity-40 pointer-events-none"></div>
                
                {/* Hover effects remain unchanged */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 transition-opacity duration-300 pointer-events-none z-20"
                  style={{ opacity: isHovering ? 0.9 : 0 }}></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none z-10"
                  style={{ opacity: isHovering ? 1 : 0 }}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 z-30"
                  style={{ 
                    opacity: isHovering ? 1 : 0,
                    transform: isHovering ? 'translateY(0)' : 'translateY(10px)'
                  }}>
                  <div className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded-md border border-white/30 shadow-lg shadow-white/10">
                    <p className="text-white font-medium">View Project Gallery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content now second - with delayed animation */}
          <div className="space-y-8 lg:order-2 order-1">
            <div>
              <h2 
                className="text-5xl lg:text-6xl font-bold text-white mb-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ 
                  opacity: startTextAnimation ? 1 : 0,
                  transform: startTextAnimation ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '200ms'
                }}
              >
                About Terrene Engineering
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p 
                  ref={addParagraphRef} 
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-lg"
                  style={{ transitionDelay: '400ms' }}
                >
                  Established with a vision to transform the engineering landscape, Terrene Engineering 
                  (Private) Limited has been at the forefront of innovative solutions for over two decades. 
                  Our team of licensed professional engineers specializes in structural design, civil engineering, 
                  and architectural consulting, delivering projects that exceed industry standards while maintaining 
                  the highest levels of safety and sustainability. From residential developments to large-scale 
                  commercial projects, we bring technical expertise, creative problem-solving, and unwavering 
                  commitment to every challenge we undertake.
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 opacity-0 transition-all duration-500 ease-out"
              style={{ 
                opacity: startTextAnimation ? 1 : 0,
                transform: startTextAnimation ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '600ms'
              }}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style>{`
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default About;
