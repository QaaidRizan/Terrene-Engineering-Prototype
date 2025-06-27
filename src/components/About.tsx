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
        {/* Main content area - Image left, About right */}
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Full image on the left */}
          <div
            ref={imageRef}
            className="relative min-h-[420px] md:min-h-[520px] lg:min-h-[600px] flex items-stretch rounded-l-2xl overflow-hidden shadow-2xl"
            style={{
              opacity: isImageVisible ? 1 : 0,
              transform: isImageVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transition: 'all 1s cubic-bezier(.4,0,.2,1)',
              boxShadow: '0 8px 40px 0 rgba(20,20,20,0.45), 8px 0 32px -8px #0E75A0AA', // Soft dark and blue shadow
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={homepageBuildingImage}
              alt="Terrene Engineering Building"
              className="w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: isHovering ? 'scale(1.07)' : 'scale(1)',
                minHeight: '420px',
                height: '100%',
                boxShadow: '0 4px 32px 0 rgba(20,20,20,0.25)', // Subtle shadow on image itself
              }}
            />
            {/* Dark shadow at the merge edge */}
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#141414]/90 via-[#141414]/60 to-transparent pointer-events-none z-20"></div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 transition-opacity duration-300 pointer-events-none z-20"
              style={{ opacity: isHovering ? 0.9 : 0 }}></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 z-30"
              style={{
                opacity: isHovering ? 1 : 0,
                transform: isHovering ? 'translateY(0)' : 'translateY(10px)'
              }}>
             
            </div>
          </div>
          {/* About text content on the right */}
          <div className="flex flex-col justify-center p-10 lg:p-16 bg-[#0E75A0] rounded-r-2xl shadow-2xl border-2 border-[#0E75A0]"
            style={{
              boxShadow: '0 8px 40px 0 rgba(20,20,20,0.35), -8px 0 32px -8px #0E75A0AA', // Soft dark and blue shadow on text card
            }}
          >
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
            <div className="space-y-4 text-white leading-relaxed">
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
            <Button
              size="lg"
              className="bg-white text-[#0E75A0] hover:bg-gray-100 mt-8 opacity-0 transition-all duration-500 ease-out"
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
