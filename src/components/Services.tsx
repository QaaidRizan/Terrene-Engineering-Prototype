
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Cog, MapPin, Ruler, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Structural Engineering",
      description: "Complete structural design and analysis for residential, commercial, and industrial projects.",
      features: ["Seismic Design", "Foundation Analysis", "Steel & Concrete Design"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Civil Engineering",
      description: "Comprehensive civil engineering solutions including site development and infrastructure.",
      features: ["Site Planning", "Drainage Design", "Road Design"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Architectural Drafting",
      description: "Professional 2D and 3D architectural drafting services with attention to detail.",
      features: ["CAD Drafting", "3D Modeling", "Technical Drawings"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Code Compliance",
      description: "Ensuring all projects meet local building codes and regulatory requirements.",
      features: ["Building Permits", "Code Review", "Compliance Audits"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Project Management",
      description: "End-to-end project management services from conception to completion.",
      features: ["Timeline Management", "Quality Control", "Cost Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "MEP Engineering",
      description: "Mechanical, Electrical, and Plumbing engineering design and consultation.",
      features: ["HVAC Design", "Electrical Systems", "Plumbing Design"]
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
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
