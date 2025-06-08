
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const Residential = () => {
  const projects = [
    {
      title: "Luxury Villa Complex",
      location: "Colombo 7",
      description: "15-unit luxury villa development with modern amenities",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
    },
    {
      title: "Apartment Tower",
      location: "Kandy",
      description: "25-story residential tower with 200 apartments",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
    },
    {
      title: "Housing Development",
      location: "Galle",
      description: "50-unit affordable housing project",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Residential Projects</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Creating comfortable and sustainable living spaces for families and communities
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-primary font-medium mb-2">{project.location}</p>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Your Dream Home Awaits</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From single-family homes to large residential complexes, we create living 
                spaces that combine comfort, functionality, and aesthetic appeal.
              </p>
              <Button size="lg">Start Your Residential Project</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Residential;
