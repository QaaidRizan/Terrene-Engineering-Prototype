import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

// Import local project images
import commercialImage from '../assert/Project/comercial.jpg';
import educationImage from '../assert/Project/education.jpg';
import facultyImage from '../assert/Project/faculty.jpg';
import hospitalImage from '../assert/Project/hospital.jpg';
import infrastructureImage from '../assert/Project/infrastructure.jpg';

const Projects = () => {
  // State for featured project index
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  
  // Projects data with local images
  const projects = [
    {
      title: "Commercial Complex Design",
      category: "Commercial",
      image: commercialImage,
      description: "Multi-story commercial complex with advanced structural systems.",
      location: "Downtown Metro City",
      year: "2023",
      services: ["Structural Engineering", "MEP Design", "Project Management"]
    },
    {
      title: "Educational Building",
      category: "Institutional",
      image: educationImage,
      description: "Modern educational facility designed for optimal learning environment.",
      location: "University Campus",
      year: "2022",
      services: ["Educational Facility Design", "Acoustic Engineering", "Landscape Design"]
    },
    {
      title: "Residential Development",
      category: "Residential",
      image: facultyImage,
      description: "Modern residential complex with sustainable design principles.",
      location: "Coastal Heights",
      year: "2022",
      services: ["Architectural Design", "Structural Engineering", "Interior Design"]
    },
    {
      title: "Healthcare Facility",
      category: "Healthcare",
      image: hospitalImage,
      description: "Advanced healthcare facility with specialized engineering requirements.",
      location: "Central Medical District",
      year: "2021",
      services: ["Healthcare Design", "MEP Engineering", "Clean Room Technology"]
    },
    {
      title: "Infrastructure Project",
      category: "Infrastructure",
      image: infrastructureImage,
      description: "Large-scale infrastructure development with innovative solutions.",
      location: "Regional Highway 101",
      year: "2023",
      services: ["Civil Engineering", "Geotechnical Analysis", "Environmental Assessment"]
    },
    {
      title: "Industrial Facility",
      category: "Industrial",
      image: commercialImage, // Using commercial image as fallback for industrial
      description: "State-of-the-art industrial facility with specialized requirements.",
      location: "Tech Industrial Park",
      year: "2021",
      services: ["Industrial Engineering", "HVAC Systems", "Structural Design"]
    }
  ];
  
  // No more filtering - all projects are shown
  const filteredProjects = projects;

  // First, create a doubled array of projects
  const loopedProjects = [...filteredProjects, ...filteredProjects];
  
  // Refs for carousel
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameId = useRef(null);
  
  // Auto-rotate featured project
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % filteredProjects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [filteredProjects.length]);
  
  // Replace the automatic scrolling effect with mouse interaction
  useEffect(() => {
    // No automatic animation - we'll rely on user interaction only
    return () => {
      // Clean up any remaining animation frame
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  
  // Update the handleMouseDown function to prevent text selection
  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    // Prevent text selection during dragging
    e.preventDefault();
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
  
  const handleMouseLeave = () => {
    if (isDragging.current && carouselRef.current) {
      isDragging.current = false;
      carouselRef.current.style.cursor = 'grab';
    }
  };

  // Update the scrollable container to enable mouse interaction
  return (
    <section id="projects" className="py-20 bg-background relative">
      {/* Background accents */}
      <div className="absolute top-40 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      
      {/* Section header with highlight - enhanced version */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 px-4">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Featured Projects <br/>
            <span className="text-white">Across Industries</span>
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

      
      
      {/* Horizontal scrollable project gallery */}
      <div className="relative mt-12">
        {/* Scroll buttons */}
      
        
        {/* Scrollable container - modified to remove user interaction */}
        <div className="relative mt-12">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto pb-8 gap-6 hide-scrollbar cursor-grab select-none" 
            style={{ 
              scrollBehavior: 'smooth', 
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Project cards with increased width */}
            {loopedProjects.map((project, index) => (
              <Card 
                key={index} 
                className="flex-none w-[350px] scroll-snap-align-start group hover:shadow-xl shadow-md transition-all duration-300 overflow-hidden bg-background/80 backdrop-blur-md p-4 border border-white/10 select-none"
              >
                <div className="relative overflow-hidden h-80 rounded-md mb-2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-0 px-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-2 line-clamp-1">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/70">{project.location}</span>
                    <span className="text-xs font-medium text-primary">{project.year}</span>
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
      </div>
      
      {/* Mobile view all button */}
      <div className="mt-10 text-center md:hidden">
        <Button variant="outline" className="w-full">
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;
