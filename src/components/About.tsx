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
            {/* Decorative outer frame */}
            <div 
              className="absolute inset-0 -m-3 rounded-lg border border-primary/30 transform transition-all duration-1000"
              style={{ 
                opacity: isImageVisible ? 0.7 : 0,
                transform: isImageVisible ? 'translateY(0) scale(1.03)' : 'translateY(40px) scale(1)',
                transitionDelay: '50ms'
              }}
            ></div>
            
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 transition-opacity duration-1000" 
                 style={{ opacity: isImageVisible ? 0.8 : 0 }}></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 transition-opacity duration-1000" 
                 style={{ opacity: isImageVisible ? 0.8 : 0, transitionDelay: '200ms' }}></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 transition-opacity duration-1000" 
                 style={{ opacity: isImageVisible ? 0.8 : 0, transitionDelay: '400ms' }}></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-1000" 
                 style={{ opacity: isImageVisible ? 0.8 : 0, transitionDelay: '600ms' }}></div>
            
            {/* Main image container */}
            <div 
              className="overflow-hidden rounded-lg shadow-lg border-2 border-gray-800 transform transition-all duration-1000 relative z-10"
              style={{ 
                opacity: isImageVisible ? 1 : 0,
                transform: isImageVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transitionDelay: '150ms',
                boxShadow: '0 0 30px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Additional inner frame */}
              <div className="absolute inset-0 border-4 border-black/20 z-10 pointer-events-none rounded-md"></div>
              
              {/* Image with existing hover effect */}
              <img 
                src={homepageBuildingImage} 
                alt="Terrene Engineering Building" 
                className="w-full h-auto object-cover rounded-md transition-transform duration-700"
                style={{
                  transform: isHovering ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              
              {/* Keep existing overlay and hover effects */}
              <div 
                className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 pointer-events-none z-20"
                style={{ opacity: isHovering ? 0.7 : 0 }}
              ></div>
              
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 z-30"
                style={{ opacity: isHovering ? 1 : 0 }}
              >
                <div className="bg-black/70 px-6 py-4 rounded-md">
                  <p className="text-white font-medium">View Project Gallery</p>
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
