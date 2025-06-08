
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, Home, Factory } from 'lucide-react';

const StructuralDesign = () => {
  const services = [
    "Structural Analysis and Design",
    "Foundation Design",
    "Steel Structure Design",
    "Concrete Structure Design",
    "Seismic Design",
    "Wind Load Analysis",
    "Structural Health Monitoring",
    "Retrofitting and Rehabilitation"
  ];

  const projects = [
    {
      title: "Metropolitan Tower",
      type: "High-rise Building",
      description: "50-story mixed-use tower with complex structural requirements",
      icon: Building
    },
    {
      title: "Residential Complex",
      type: "Housing Development",
      description: "300-unit residential complex with innovative foundation design",
      icon: Home
    },
    {
      title: "Industrial Facility",
      type: "Manufacturing Plant",
      description: "Large-span industrial structure with heavy machinery loads",
      icon: Factory
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Structural Design Services</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Comprehensive structural engineering solutions for safe, efficient, and innovative building designs
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Our Expertise</h2>
                <p className="text-muted-foreground mb-6">
                  Our structural design team combines advanced engineering principles with 
                  cutting-edge technology to deliver safe, cost-effective, and innovative 
                  structural solutions for buildings of all types and sizes.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" 
                  alt="Structural design blueprints" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <IconComponent className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-primary font-medium mb-2">{project.type}</p>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact our structural engineering team to discuss your project requirements 
                and learn how we can help bring your vision to life with safe and innovative design solutions.
              </p>
              <Button size="lg">Get a Free Consultation</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StructuralDesign;
