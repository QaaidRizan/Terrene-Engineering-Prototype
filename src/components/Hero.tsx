import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
// Import your videos and logo
import heroVideo from '@/assert/videos/hero-background.mp4';
import heroVideo2 from '@/assert/videos/hero-background2.mp4';
import Logo from '@/assert/Logo2.png';

// Import services from your header or define them here
import { services } from './Header'; // Adjust path as needed

const Hero = () => {
  // State for menu and videos
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          style={{ filter: 'brightness(0.7)' }}
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
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src={heroVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Navigation - Now transparent and overlaid on video */}
      <header className="relative z-50 w-full">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - now with white color for visibility */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img 
                  src={Logo} 
                  alt="Terrene Engineering Logo" 
                  className="h-20 w-auto" // Increased from h-14 to h-20
                  style={{ marginTop: '-8px', marginBottom: '-8px' }} // Negative margins to prevent navbar expansion
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-white hover:text-primary-100 transition-colors px-3 py-2">
                    HOME
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="text-white hover:text-primary-100 bg-transparent">
                    COMPANY
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink asChild>
                        <Link to="/about" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          About Us
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/history" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          Our History
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/team" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          Our Team
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/mission" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          Mission & Vision
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Menu Item */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="text-white hover:text-primary-100 bg-transparent">
                    SERVICES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-72 max-h-96 overflow-y-auto p-2 grid grid-cols-1 gap-1">
                      {services.map((service) => (
                        <NavigationMenuLink asChild key={service.to}>
                          <Link to={service.to} className="block px-3 py-2 text-sm hover:bg-accent rounded whitespace-nowrap">
                            {service.label}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Rest of menu items with adjusted colors */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="text-white hover:text-primary-100 bg-transparent">
                    SOFTWARE EXPERTISE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink asChild>
                        <Link to="/autocad" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          AutoCAD
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/revit" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          Revit
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/etabs" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          ETABS
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/staad-pro" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          STAAD Pro
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="text-white hover:text-primary-100 bg-transparent">
                    PORTFOLIO
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink asChild>
                        <Link to="/residential" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          Residential Projects
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/commercial" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          Commercial Projects
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/industrial" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          Industrial Projects
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/inquiry" className="text-white hover:text-primary-100 transition-colors px-3 py-2">
                    INQUIRY
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Get Quote</Button>
              <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-white hover:text-primary-100 transition-colors">HOME</Link>
                <Link to="/about" className="text-white hover:text-primary-100 transition-colors">COMPANY</Link>
                <div>
                  <div className="font-semibold text-white">SERVICES</div>
                  <div className="pl-4 flex flex-col space-y-2">
                    {services.map((service) => (
                      <Link key={service.to} to={service.to} className="block text-sm text-white/80 hover:text-primary-100">
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/autocad" className="text-white hover:text-primary-100 transition-colors">SOFTWARE EXPERTISE</Link>
                <Link to="/residential" className="text-white hover:text-primary-100 transition-colors">PORTFOLIO</Link>
                <Link to="/inquiry" className="text-white hover:text-primary-100 transition-colors">INQUIRY</Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">Get Quote</Button>
                  <Button size="sm">Contact Us</Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-text-fade drop-shadow-lg">
            Engineering Excellence for <span className="text-primary">Tomorrow's World</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-8 animate-text-fade animation-delay-200 drop-shadow-md">
            Innovative engineering solutions for architecture, construction, and infrastructure projects worldwide
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-text-fade animation-delay-400">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Our Services
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
