import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Cog, MapPin, Ruler, Shield, Zap } from 'lucide-react';

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

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Engineering Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive engineering solutions 
            that meet the highest standards of quality and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Image Section */}
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
