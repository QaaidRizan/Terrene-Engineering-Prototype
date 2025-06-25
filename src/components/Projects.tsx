import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
  // State for featured project index
  const [featuredIndex, setFeaturedIndex] = useState(0);
  
  // Projects data
  const projects = [
    {
      title: "Commercial Complex Design",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      description: "Multi-story commercial complex with advanced structural systems.",
      location: "Downtown Metro City",
      year: "2023",
      services: ["Structural Engineering", "MEP Design", "Project Management"]
    },
    {
      title: "Residential Development",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      description: "Modern residential complex with sustainable design principles.",
      location: "Coastal Heights",
      year: "2022",
      services: ["Architectural Design", "Structural Engineering", "Interior Design"]
    },
    {
      title: "Infrastructure Project",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      description: "Large-scale infrastructure development with innovative solutions.",
      location: "Regional Highway 101",
      year: "2023",
      services: ["Civil Engineering", "Geotechnical Analysis", "Environmental Assessment"]
    },
    {
      title: "Industrial Facility",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      description: "State-of-the-art industrial facility with specialized requirements.",
      location: "Tech Industrial Park",
      year: "2021",
      services: ["Industrial Engineering", "HVAC Systems", "Structural Design"]
    },
    {
      title: "Educational Building",
      category: "Institutional",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      description: "Modern educational facility designed for optimal learning environment.",
      location: "University Campus",
      year: "2022",
      services: ["Educational Facility Design", "Acoustic Engineering", "Landscape Design"]
    },
    {
      title: "Healthcare Facility",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description: "Advanced healthcare facility with specialized engineering requirements.",
      location: "Central Medical District",
      year: "2021",
      services: ["Healthcare Design", "MEP Engineering", "Clean Room Technology"]
    }
  ];
  
  // No more filtering - all projects are shown
  const filteredProjects = projects;
  
  // Refs for carousel
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  // Auto-rotate featured project
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % filteredProjects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [filteredProjects.length]);
  
  // Handle scroll for carousel
  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = 'grabbing';
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };
  
  const handleMouseUp = () => {
    isDragging.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };
  
  // Update the scroll functions to handle different screen sizes
  const scrollNext = () => {
    if (carouselRef.current) {
      // Get the width of the visible viewport
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
    }
  };
  
  const scrollPrev = () => {
    if (carouselRef.current) {
      // Get the width of the visible viewport
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-background relative">
      {/* Background accents */}
      <div className="absolute top-40 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header with highlight - enhanced version */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            {/* Enhanced Our PROJECT label */}
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-lg blur-lg"></div>
              <div className="relative px-4 py-2 bg-background/90 backdrop-blur-sm border border-primary/30 rounded-lg">
                <h5 className="text-primary font-bold text-sm tracking-widest">OUR PROJECTS</h5>
              </div>
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-primary/30 rounded-full blur-lg"></div>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Featured Projects <br/>
              <span className="text-primary">Across Industries</span>
            </h2>
            
            {/* Animated divider */}
            <div className="relative h-1.5 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our diverse portfolio of successful engineering projects across various sectors, 
              showcasing our expertise and commitment to excellence.
            </p>
          </div>
          
          {/* View all projects button for larger screens */}
          <div className="hidden md:block">
            <Button variant="outline" className="group border-primary text-primary hover:bg-primary/10">
              View All Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Featured Project Showcase */}
        {filteredProjects.length > 0 && (
          <div className="mb-16">
            <div className="bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="h-[400px] overflow-hidden">
                  <img 
                    src={filteredProjects[featuredIndex].image.replace('w=400&h=300', 'w=800&h=600')} 
                    alt={filteredProjects[featuredIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content side */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">
                        {filteredProjects[featuredIndex].category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {filteredProjects[featuredIndex].year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{filteredProjects[featuredIndex].title}</h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {filteredProjects[featuredIndex].description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm font-medium">Location:</span>
                        <span className="text-sm ml-2 text-muted-foreground">{filteredProjects[featuredIndex].location}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {filteredProjects[featuredIndex].services.map((service, index) => (
                          <span 
                            key={index} 
                            className="inline-block px-3 py-1 bg-black/5 rounded-full text-xs"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="self-start">View Project Details</Button>
                </div>
              </div>
              
              {/* Navigation dots for featured project */}
              <div className="bg-black/5 flex justify-center py-3 space-x-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setFeaturedIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      featuredIndex === index ? 'bg-primary scale-150' : 'bg-primary/20'
                    }`}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Horizontal scrollable project gallery */}
        <div className="relative mt-12">
          {/* Scroll buttons */}
          <button 
            onClick={scrollPrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={scrollNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto pb-8 gap-6 cursor-grab hide-scrollbar"
            style={{ 
              scrollBehavior: 'smooth', 
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="flex-none w-[280px] scroll-snap-align-start group hover:shadow-xl transition-all duration-300 overflow-hidden bg-background/80 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm mb-2 line-clamp-2">{project.description}</p>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="w-full"
                      >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-1">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{project.location}</span>
                    <span className="text-xs font-medium">{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Hide scrollbar styles */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
        
        {/* Mobile view all button */}
        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
