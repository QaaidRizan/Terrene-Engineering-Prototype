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

// Import services AND serviceCategories from Header component
import { services, serviceCategories } from './Header'; // Add serviceCategories to the import


const Hero = () => {
  // State for menu and videos
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
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

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

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
                    <div className="w-[800px] p-6 bg-black/70 backdrop-blur-md rounded-lg border border-white/10 grid grid-cols-4 gap-6">
                      {/* Column 1: Architectural */}
                      <div>
                        <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                          Architectural
                        </h5>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/architectural-consultancy" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Architectural Consultancy
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/interior-design" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Interior Design Services
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/furniture-design" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Furniture Design & Supply
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/acoustic-lighting" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Acoustic & Lighting Design
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/master-planning" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Master Planning & Urban Design
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Column 2: Engineering */}
                      <div>
                        <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                          Engineering
                        </h5>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/structural-consultancy" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Structural Consultancy
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/mep-engineering" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                MEP Engineering
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/hvac-solutions" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                HVAC Solutions
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/elv-services" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                ELV Services
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/material-consultancy" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Material Consultancy
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Column 3: Technical */}
                      <div>
                        <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                          Technical
                        </h5>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/laboratory-testing" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Laboratory Testing
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/land-surveying" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Land Surveying & GIS Mapping
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/bim-services" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                BIM Services
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/software-training" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Software Training
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/import-export" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Import & Export Materials
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Column 4: Project Management */}
                      <div>
                        <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                          Project Management
                        </h5>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/construction-services" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Construction Services
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/project-management" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Project Management
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/quantity-surveying" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Quantity Surveying
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/construction-claims" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Construction Claims
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/tendering-procurement" className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">
                                Tendering & Procurement
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Footer with View All Link - Keep this from your original code */}
                      <div className="col-span-4 pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
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

          {/* Mobile Navigation - match font sizes with Header.tsx */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex flex-col animate-fade-in">
              <div className="container mx-auto px-4 py-4 flex justify-end">
                <button 
                  className="text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="container mx-auto px-4 flex flex-col space-y-4">
                  <Link to="/" 
                    className="text-white hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </Link>
                  
                  {/* COMPANY Section */}
                  <div>
                    <button 
                      onClick={() => toggleSection('company')}
                      className="flex items-center justify-between w-full text-left text-white hover:text-primary transition-colors"
                    >
                      <span>COMPANY</span>
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${expandedSection === 'company' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {expandedSection === 'company' && (
                      <div className="pl-4 pt-2 flex flex-col space-y-2 bg-black/40 mt-2 rounded-lg p-2 border border-white/10">
                        <Link to="/about" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About Terrene
                        </Link>
                        <Link to="/Faq" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          FAQ
                        </Link>
                        <Link to="/team" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Our Team
                        </Link>
                        <Link to="/mission" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Mission & Vision
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* SERVICES Section */}
                  <div>
                    <button 
                      onClick={() => toggleSection('services')}
                      className="flex items-center justify-between w-full text-left text-white hover:text-primary transition-colors"
                    >
                      <span>SERVICES</span>
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${expandedSection === 'services' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {expandedSection === 'services' && (
                      <div className="pl-4 pt-2 flex flex-col space-y-2 bg-black/40 mt-2 rounded-lg p-2 border border-white/10 max-h-80 overflow-y-auto">
                        {serviceCategories.map((category, idx) => (
                          <div key={idx} className="mb-2">
                            <h5 className="text-primary font-semibold mb-1 text-sm uppercase tracking-wider border-b border-white/10 pb-1">
                              {category.category}
                            </h5>
                            <div className="space-y-2 pl-2">
                              {category.services.map((service, serviceIdx) => (
                                <Link 
                                  key={serviceIdx} 
                                  to={service.to} 
                                  className="block text-sm text-white/80 hover:text-primary"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* SOFTWARE EXPERTISE Section */}
                  <div>
                    <button 
                      onClick={() => toggleSection('software')}
                      className="flex items-center justify-between w-full text-left text-white hover:text-primary transition-colors"
                    >
                      <span>SOFTWARE EXPERTISE</span>
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${expandedSection === 'software' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {expandedSection === 'software' && (
                      <div className="pl-4 pt-2 flex flex-col space-y-2 bg-black/40 mt-2 rounded-lg p-2 border border-white/10">
                        <Link to="/autocad" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          AutoCAD
                        </Link>
                        <Link to="/revit" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Revit
                        </Link>
                        <Link to="/etabs" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          ETABS
                        </Link>
                        <Link to="/staad-pro" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          STAAD Pro
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* PROJECTS Section */}
                  <div>
                    <button 
                      onClick={() => toggleSection('projects')}
                      className="flex items-center justify-between w-full text-left text-white hover:text-primary transition-colors"
                    >
                      <span>PROJECTS</span>
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${expandedSection === 'projects' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {expandedSection === 'projects' && (
                      <div className="pl-4 pt-2 flex flex-col space-y-2 bg-black/40 mt-2 rounded-lg p-2 border border-white/10">
                        <Link to="/residential" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Residential Projects
                        </Link>
                        <Link to="/commercial" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Commercial Projects
                        </Link>
                        <Link to="/industrial" 
                          className="block text-sm text-white/80 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Industrial Projects
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* INQUIRY & Contact Buttons */}
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10" asChild>
                      <Link to="/inquiry" onClick={() => setIsMenuOpen(false)}>INQUIRY</Link>
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                      <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    </Button>
                  </div>
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
