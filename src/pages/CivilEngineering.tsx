
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin, Building, Droplets } from 'lucide-react';

const CivilEngineering = () => {
  const services = [
    "Road and Highway Design",
    "Water Supply Systems",
    "Drainage and Sewerage",
    "Site Development",
    "Earthwork Design",
    "Traffic Engineering",
    "Environmental Impact Assessment",
    "Municipal Infrastructure"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Civil Engineering Services</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Comprehensive civil engineering solutions for infrastructure development and urban planning
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Infrastructure Excellence</h2>
                <p className="text-muted-foreground mb-6">
                  Our civil engineering team specializes in designing and managing infrastructure 
                  projects that form the backbone of modern communities. From roads and utilities 
                  to comprehensive site development, we deliver solutions that last.
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
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop" 
                  alt="Civil engineering project" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                <p className="text-muted-foreground">
                  Road design, traffic management, and transportation planning solutions.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Water Systems</h3>
                <p className="text-muted-foreground">
                  Water supply, drainage, and sewerage system design and implementation.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
                <p className="text-muted-foreground">
                  Bridges, culverts, and major infrastructure development projects.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Need Civil Engineering Services?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our experienced civil engineers are ready to help with your infrastructure 
                development needs. Contact us for a consultation and project assessment.
              </p>
              <Button size="lg">Request Consultation</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CivilEngineering;
