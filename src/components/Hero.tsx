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
                  className="h-24 w-auto" // Increased from h-14 to h-20
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
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                      <NavigationMenuLink asChild>
                        <Link to="/about" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">
                          About Terrene
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/Faq" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                          FAQ
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
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-[800px] p-6 bg-black/70 backdrop-blur-md rounded-lg border border-white/10 grid grid-cols-3 gap-6">
                      {/* Column 1: Engineering Services */}
                      <div>
                        <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                          Engineering Services
                        </h5>
                        <ul className="space-y-2">
                          {services.slice(0, 5).map((service) => (
                            <li key={service.to}>
                              <NavigationMenuLink asChild>
                                <Link to={service.to} className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                  {service.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Column 2: Design Services */}
                      <div>
                        <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                          Design Services
                        </h5>
                        <ul className="space-y-2">
                          {services.slice(5, 10).map((service) => (
                            <li key={service.to}>
                              <NavigationMenuLink asChild>
                                <Link to={service.to} className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                  {service.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Column 3: Featured Service with Image */}
                      <div className="space-y-3">
                        <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                          Featured Service
                        </h5>
                        <div className="relative rounded-lg overflow-hidden group">
                          <img 
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80" 
                            alt="Featured Service" 
                            className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                            <div className="p-3">
                              <h6 className="text-white font-medium mb-1">Structural Engineering</h6>
                              <Button variant="link" className="text-primary p-0 h-auto text-sm" asChild>
                                <Link to="/structural-engineering">
                                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer with View All Link */}
                      <div className="col-span-3 pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
                        <p className="text-xs text-white/60">Explore our comprehensive range of engineering and architectural services</p>
                        <Button variant="link" className="text-primary p-0 h-auto" asChild>
                          <Link to="/services">
                            View All Services <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Rest of menu items with adjusted colors */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="text-white hover:text-primary-100 bg-transparent">
                    SOFTWARE EXPERTISE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/70 backdrop-blur-md rounded-lg border border-white/10">
                      <NavigationMenuLink asChild>
                        <Link to="/autocad" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">
                          AutoCAD
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/revit" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">
                          Revit
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/etabs" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">
                          ETABS
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/staad-pro" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">
                          STAAD Pro
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="text-white hover:text-primary-100 bg-transparent">
                    PROJECT
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/70 backdrop-blur-md rounded-lg border border-white/10">
                      <NavigationMenuLink asChild>
                        <Link to="/residential" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">
                          Residential Projects
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/commercial" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">
                          Commercial Projects
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/industrial" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">
                          Industrial Projects
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/inquiry">INQUIRY</Link>
              </Button>
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
            <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col animate-fade-in">
              <div className="container mx-auto px-4 py-4 flex justify-end">
                <button 
                  className="text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <nav className="flex flex-col space-y-8 text-center">
                  <Link to="/" className="text-white text-2xl hover:text-primary-100 transition-colors animate-slide-in animation-delay-100">HOME</Link>
                  <Link to="/about" className="text-white text-2xl hover:text-primary-100 transition-colors animate-slide-in animation-delay-200">COMPANY</Link>
                  <Link to="/services" className="text-white text-2xl hover:text-primary-100 transition-colors animate-slide-in animation-delay-300">SERVICES</Link>
                  <Link to="/software" className="text-white text-2xl hover:text-primary-100 transition-colors animate-slide-in animation-delay-400">SOFTWARE</Link>
                  <Link to="/projects" className="text-white text-2xl hover:text-primary-100 transition-colors animate-slide-in animation-delay-500">PROJECTS</Link>
                  <Link to="/inquiry" className="text-white text-2xl hover:text-primary-100 transition-colors animate-slide-in animation-delay-600">INQUIRY</Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-text-fade drop-shadow-lg">
            We are <span className="text-primary">specialist engineering</span> consultants
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mb-8 animate-text-fade animation-delay-200 drop-shadow-md">
            delivering solutions for some of the world's largest and most complex projects. Our approach is guided by our unique engineering philosophies:
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-10 animate-text-fade animation-delay-400">
            <span className="text-white text-xl md:text-3xl font-bold">LEAD.</span>
            <span className="text-primary text-xl md:text-3xl font-bold">CREATE.</span>
            <span className="text-white text-xl md:text-3xl font-bold">DELIVER.</span>
            <span className="text-primary text-xl md:text-3xl font-bold">SUSTAIN.</span>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center animate-text-fade animation-delay-600">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Our Services
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add this at the bottom of your Hero Content section */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
