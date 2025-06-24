import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Target } from 'lucide-react';
import homepageBuildingImage from '@/assert/homepagebuilding1.jpg';

const About = () => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, value: 3, label: "Years Experience" },
    { icon: <Users className="w-6 h-6" />, value: 50, label: "Projects Completed" },
    { icon: <Clock className="w-6 h-6" />, value: 24, label: "Support Available", suffix: "/7" },
    { icon: <Target className="w-6 h-6" />, value: 100, label: "Client Satisfaction", suffix: "%" }
  ];
  
  // Initialize with zeros 
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const statsRowRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRefs = useRef([]);
  const animationStarted = useRef(false);
  
  // Create refs for each paragraph
  paragraphRefs.current = [];
  const addParagraphRef = (el) => {
    if (el && !paragraphRefs.current.includes(el)) {
      paragraphRefs.current.push(el);
    }
  };

  // Animation for paragraphs when section comes into view
  useEffect(() => {
    console.log("Setting up section observer");
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Separate observer for stats row
  useEffect(() => {
    console.log("Setting up stats observer");
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when stats are 20% visible
    );
    
    if (statsRowRef.current) {
      observer.observe(statsRowRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // New observer for image visibility
  useEffect(() => {
    console.log("Setting up image observer");
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Trigger when image is 30% visible
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Animate paragraphs when section is visible
  useEffect(() => {
    if (isVisible) {
      // Add fade-in class to paragraphs with staggered delay
      paragraphRefs.current.forEach((paragraph, index) => {
        setTimeout(() => {
          if (paragraph) {
            paragraph.classList.add('animate-fade-in');
          }
        }, 300 * index);
      });
    }
  }, [isVisible]);

  // Animate stats counter only when stats row is visible
  useEffect(() => {
    if (isStatsVisible && !animationStarted.current) {
      console.log("Starting stats animation");
      animationStarted.current = true;
      
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const countUp = () => {
        const progress = Math.min(frame / totalFrames, 1);
        const updatedStats = stats.map((stat) => {
          return Math.floor(easeOutQuad(progress) * stat.value);
        });
        
        setAnimatedStats(updatedStats);
        
        frame++;
        if (frame <= totalFrames) {
          requestAnimationFrame(countUp);
        } else {
          // Ensure final value is set
          setAnimatedStats(stats.map(stat => stat.value));
        }
      };
      
      // Start the animation
      requestAnimationFrame(countUp);
    }
  }, [isStatsVisible, stats]);
  
  // Easing function for smoother animation
  const easeOutQuad = (t) => t * (2 - t);

  return (
    <section id="about" className="py-20 bg-[#141414]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Main content area */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Terrene Engineering</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p 
                  ref={addParagraphRef} 
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  Established with a vision to transform the engineering landscape, Terrene Engineering 
                  (Private) Limited has been at the forefront of innovative engineering solutions for over two decades.
                </p>
                <p 
                  ref={addParagraphRef} 
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  Our team of licensed professional engineers specializes in structural design, civil engineering, 
                  and architectural consulting. We pride ourselves on delivering projects that not only meet but 
                  exceed industry standards while maintaining the highest levels of safety and sustainability.
                </p>
                <p 
                  ref={addParagraphRef} 
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  From residential developments to large-scale commercial projects, we bring technical expertise, 
                  creative problem-solving, and unwavering commitment to every challenge we undertake.
                </p>
              </div>
            </div>

            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>

          {/* Enhanced image section with hover effects */}
          <div className="relative" ref={imageRef}>
            <div 
              className="overflow-hidden rounded-lg shadow-lg border border-gray-800 transform transition-all duration-1000"
              style={{ 
                opacity: isImageVisible ? 1 : 0,
                transform: isImageVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transitionDelay: '150ms' 
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img 
                src={homepageBuildingImage} 
                alt="Terrene Engineering Building" 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-700"
                style={{
                  transform: isHovering ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              
              {/* Overlay effect that appears on hover */}
              <div 
                className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: isHovering ? 0.7 : 0 }}
              ></div>
              
              {/* Text that appears on hover */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
                style={{ opacity: isHovering ? 1 : 0 }}
              >
                <div className="bg-black/70 px-6 py-4 rounded-md">
                  <p className="text-white font-medium">View Project Gallery</p>
                </div>
              </div>
            </div>
            
            {/* Light beam effect on hover */}
            {isHovering && (
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle 200px at 50% 50%, rgba(255,255,255,0.2), transparent)`,
                  zIndex: 1
                }}
              ></div>
            )}
          </div>
        </div>

        {/* Stats row at the bottom - with ref */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-800"
          ref={statsRowRef}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-4 bg-[#1a1a1a] rounded-lg border border-gray-800 transform transition-all duration-500"
              style={{ 
                opacity: isStatsVisible ? 1 : 0,
                transform: isStatsVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 150}ms` 
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">
                {animatedStats[index]}{stat.suffix || ''}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add CSS for animations */}
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
