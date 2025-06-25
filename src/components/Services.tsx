import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Cog, MapPin, Ruler, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import the image (you'll need to add more imports for each service)
import StructuralEngineering from '@/assert/StructuralEngineering.jpg';

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Structural Engineering",
      description: "Complete structural design and analysis for residential, commercial, and industrial projects.",
      features: ["Seismic Design", "Foundation Analysis", "Steel & Concrete Design"],
      image: StructuralEngineering
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Civil Engineering",
      description: "Comprehensive civil engineering solutions including site development and infrastructure.",
      features: ["Site Planning", "Drainage Design", "Road Design"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Architectural Drafting",
      description: "Professional 2D and 3D architectural drafting services with attention to detail.",
      features: ["CAD Drafting", "3D Modeling", "Technical Drawings"],
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Code Compliance",
      description: "Ensuring all projects meet local building codes and regulatory requirements.",
      features: ["Building Permits", "Code Review", "Compliance Audits"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Project Management",
      description: "End-to-end project management services from conception to completion.",
      features: ["Timeline Management", "Quality Control", "Cost Optimization"],
      image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "MEP Engineering",
      description: "Mechanical, Electrical, and Plumbing engineering design and consultation.",
      features: ["HVAC Design", "Electrical Systems", "Plumbing Design"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const [itemsToShow, setItemsToShow] = useState(3); // Responsive: 3 desktop, 1 mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = services.length - itemsToShow;
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  // Replace the existing animation states with this simpler version
  const [animated, setAnimated] = useState({
    header: false,
    image: false,
    servicesSection: false // This will control all services at once
  });
  
  // Update animation refs to remove individual service refs
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  
  // Update the intersection observer effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const animateElement = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        // Determine which element was observed and animate it
        if (entry.target === headerRef.current) {
          setAnimated(prev => ({ ...prev, header: true }));
        } else if (entry.target === imageRef.current) {
          setAnimated(prev => ({ ...prev, image: true }));
        } else if (entry.target === servicesSectionRef.current) {
          setAnimated(prev => ({ ...prev, servicesSection: true }));
        }
        
        // Unobserve after animation
        observer.unobserve(entry.target);
      });
    };
    
    const observer = new IntersectionObserver(animateElement, observerOptions);
    
    // Observe elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (servicesSectionRef.current) observer.observe(servicesSectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Move to next slide
  const next = () => {
    const newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  // Move to previous slide
  const prev = () => {
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  // Auto scroll effect
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth / itemsToShow;
      carouselRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });
    }
    startAutoScroll();
    return () => stopAutoScroll();
  }, [currentIndex, itemsToShow]);
  
  const startAutoScroll = () => {
    // Clear any existing interval first
    stopAutoScroll();
    
    // Set new interval
    autoScrollRef.current = setInterval(() => {
      next();
    }, 4000); // Scroll every 4 seconds
  };
  
  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };
  
  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = 'grabbing';
  };
  
  // Handle dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };
  
  // Handle drag end
  const handleMouseUp = () => {
    isDragging.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      const itemWidth = carouselRef.current.offsetWidth / itemsToShow;
      const scrollPosition = carouselRef.current.scrollLeft;
      const index = Math.round(scrollPosition / itemWidth);
      setCurrentIndex(Math.max(0, Math.min(maxIndex, index)));
      carouselRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle mouse leave
  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
  };
  
  return (
    <section id="services" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Asymmetric header with background element */}
        <div className="relative mb-20">
          {/* DELETE THESE LINES
          <div className="absolute -top-10 -left-5 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute top-10 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          */}
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={headerRef} 
              className={`transform transition-all duration-700 ${
                animated.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* WHAT WE OFFER section - no changes to this content */}
              <div className="relative mb-6">
                <div className="relative inline-block py-3 px-6 bg-black/20 border-l-4 border-white/50 rounded-r-lg">
                  <h5 className="text-white font-extrabold text-lg tracking-widest">WHAT WE OFFER</h5>
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Engineering Excellence <br/>
                <span className="text-white">for Every Project</span>
              </h2>
              
              {/* Your existing animated divider... */}
              
              <p className="text-lg text-white mb-8 relative">
                <span className="relative">
                  Our multidisciplinary approach combines technical expertise with innovative solutions 
                  to overcome complex engineering challenges. We work across industries to deliver 
                  projects that exceed expectations and stand the test of time.
                </span>
              </p>
              
              <Button variant="outline" className="group border-white text-white hover:bg-white/10">
                Explore all services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div 
              ref={imageRef}
              className={`relative h-96 md:h-[26rem] overflow-hidden rounded-lg shadow-xl transform transition-all duration-700 delay-300 ${
                animated.image ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                alt="Engineering services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Draggable services carousel section */}
        <div className="mt-16">
          <div 
            ref={servicesSectionRef}
            className={`transform transition-all duration-700 ${
              animated.servicesSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 pl-4 border-l-4 border-white/50 text-white">Featured Services</h3>
            <p className="text-white mb-8 max-w-3xl">
              Drag to explore our comprehensive range of engineering and architectural services designed to meet the needs of any project scope or complexity.
            </p>
          </div>
          
          <div className="relative">
            {/* Arrow buttons remain the same */}
            <button onClick={prev} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <ArrowRight className="w-5 h-5 transform rotate-180" />
            </button>
            
            <button onClick={next} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
            
            {/* Carousel with animated cards */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto pb-8 cursor-grab"
              style={{ 
                scrollBehavior: 'smooth', 
                scrollSnapType: 'x mandatory',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex-none mx-2 scroll-snap-align-start first:ml-4 last:mr-4 transform transition-all duration-700 ${
                    animated.servicesSection 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-16'
                  }`}
                  style={{ 
                    width: itemsToShow === 1 ? '100%' : 'calc(33.333% - 16px)',
                    minWidth: itemsToShow === 1 ? '100%' : 'calc(33.333% - 16px)',
                    scrollSnapAlign: 'start',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full bg-background/80 backdrop-blur-sm border-gray-800">
                    {/* Card content remains the same */}
                    <div className="h-64 w-full overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-background transition-all duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white">
                            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicator dots remain the same */}
        </div>
        
        {/* CSS for hiding scrollbar remains the same */}
        <style>
          {`
            .flex.overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Services;
