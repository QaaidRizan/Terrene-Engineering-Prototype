import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import your videos and logo
import heroVideo from '@/assert/videos/hero-background.mp4';
import heroVideo2 from '@/assert/videos/hero-background2.mp4';

// Import Header component
import Header from './Header';

const Hero = () => {
  // State for videos
  const [activeVideo, setActiveVideo] = useState(1);
  
  // Create refs for both video elements
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  
  // Use effect to set up playback rates and event listeners
  useEffect(() => {
    // Set playback rate for both videos
    if (video1Ref.current) {
      video1Ref.current.playbackRate = 0.6;
    }
    
    if (video2Ref.current) {
      video2Ref.current.playbackRate = 0.6;
    }
    
    // Function to handle video 1 ending
    const handleVideo1End = () => {
      if (video2Ref.current) {
        // Start playing video 2
        video2Ref.current.play()
          .then(() => {
            // Switch to video 2 with smooth transition
            setActiveVideo(2);
          })
          .catch(error => console.error("Error playing second video:", error));
      }
    };
    
    // Function to handle video 2 ending
    const handleVideo2End = () => {
      if (video1Ref.current) {
        // Start playing video 1 again
        video1Ref.current.currentTime = 0; // Reset to beginning
        video1Ref.current.play()
          .then(() => {
            // Switch to video 1 with smooth transition
            setActiveVideo(1);
          })
          .catch(error => console.error("Error playing first video:", error));
      }
    };
    
    // Add event listeners
    if (video1Ref.current) {
      video1Ref.current.addEventListener('ended', handleVideo1End);
    }
    
    if (video2Ref.current) {
      video2Ref.current.addEventListener('ended', handleVideo2End);
    }
    
    // Clean up event listeners when component unmounts
    return () => {
      if (video1Ref.current) {
        video1Ref.current.removeEventListener('ended', handleVideo1End);
      }
      if (video2Ref.current) {
        video2Ref.current.removeEventListener('ended', handleVideo2End);
      }
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col">
      {/* Videos */}
      <div className="absolute inset-0 w-full h-full">
        {/* First Video */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            activeVideo === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'brightness(0.85)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Second Video */}
        <video
          ref={video2Ref}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            activeVideo === 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'brightness(0.85)' }}
        >
          <source src={heroVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
      </div>
      
      {/* Use the Header component from import */}
      <div className="relative z-50">
        <Header mode="transparent" />
      </div>
      
      {/* Hero Content - Updated to match reference design */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col items-start justify-center text-left">
          <h1 className="text-white font-bold mb-6 leading-tight">
            <span className="inline-block text-5xl md:text-7xl" style={{ animation: 'popUp 0.7s ease-out 0.2s both' }}>Shaping</span>{' '}
            <span className="inline-block text-5xl md:text-7xl" style={{ animation: 'popUp 0.7s ease-out 0.4s both' }}>tomorrow with</span>
            <br/>
            <span className="inline-block text-5xl md:text-7xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200" style={{ 
              animation: 'popUp 0.7s ease-out 0.6s both',
            }}>Visionary</span>{' '}
            <span className="inline-block text-5xl md:text-7xl overflow-visible whitespace-nowrap" style={{ 
              animation: 'popUp 0.7s ease-out 0.8s both'
            }}>Engineering</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-8 animate-text-fade animation-delay-200 opacity-90 leading-relaxed">
            Delivering exceptional structural solutions that blend technical precision with creative vision. Our engineering expertise transforms complex challenges into enduring foundations for a sustainable future.
          </p>

          {/* Small gap/spacer */}
          <div className="h-4"></div>

          {/* Enhanced philosophy statements with subtle styling */}
          <div className="flex flex-wrap gap-8 mb-12 animate-text-fade animation-delay-400">
            <div className="relative group">
              <span className="text-white text-3xl md:text-4xl font-bold">LEAD<span className="text-primary">.</span></span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="relative group">
              <span className="text-white text-3xl md:text-4xl font-bold">CREATE<span className="text-primary">.</span></span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="relative group">
              <span className="text-white text-3xl md:text-4xl font-bold">DELIVER<span className="text-primary">.</span></span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="relative group">
              <span className="text-white text-3xl md:text-4xl font-bold">SUSTAIN<span className="text-primary">.</span></span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>  
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
