import React, { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Import local project images
import commercialImage from '../assert/Project/comercial.jpg';
import educationImage from '../assert/Project/education.jpg';
import facultyImage from '../assert/Project/faculty.jpg';
import hospitalImage from '../assert/Project/hospital.jpg';
import infrastructureImage from '../assert/Project/infrastructure.jpg';

const Projects = () => {
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

  // Double the projects for seamless looping
  const loopedProjects = [...projects, ...projects];

  // State to control animation play/pause
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-20 bg-[#141414] w-full">
      {/* Background accents */}
      <div className="absolute top-40 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"></div>

      <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Featured Projects
            </h2>
            <div className="relative h-1.5 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover our expertise through standout projects across multiple industries.
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="group border-primary text-primary hover:bg-primary/10">
              View All Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Auto-scrolling project gallery */}
        <div className="relative mt-12 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 animate-project-scroll"
            style={{
              width: `${loopedProjects.length * 340}px`,
              animation: `project-scroll ${loopedProjects.length * 3.5}s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {loopedProjects.map((project, index) => (
              <Card
                key={index}
                className="flex-none w-[320px] scroll-snap-align-start group hover:shadow-xl shadow-md transition-all duration-300 overflow-hidden bg-background/80 backdrop-blur-md border border-white/10 select-none p-0"
              >
                <div className="relative overflow-hidden h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-0 w-full flex justify-center">
                    <span className="bg-primary/90 backdrop-blur-md text-white px-6 py-1.5 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-black/70">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-12 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-white/70">{project.location}</span>
                      <span className="text-xs font-medium text-primary">{project.year}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* Animation keyframes for auto-scroll */}
          <style>{`
            @keyframes project-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-project-scroll {
              will-change: transform;
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
