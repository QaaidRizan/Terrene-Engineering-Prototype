
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const History = () => {
  const milestones = [
    {
      year: "2000",
      title: "Company Founded",
      description: "Terrene Engineering was established with a vision to provide innovative engineering solutions."
    },
    {
      year: "2005",
      title: "First Major Project",
      description: "Completed our first major commercial project, a 20-story office complex in the city center."
    },
    {
      year: "2010",
      title: "International Expansion",
      description: "Extended our services internationally, working on projects across South Asia."
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Implemented advanced BIM technology and 3D modeling in all our design processes."
    },
    {
      year: "2020",
      title: "Sustainability Focus",
      description: "Launched our green engineering initiative, focusing on sustainable and eco-friendly designs."
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Fully integrated AI and machine learning tools in our engineering analysis and design workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our History</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Over two decades of engineering excellence, innovation, and growth
            </p>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Looking Forward</h2>
              <p className="text-muted-foreground">
                As we continue to grow and evolve, Terrene Engineering remains committed to pushing 
                the boundaries of engineering excellence. We look forward to the next chapter of 
                innovation, sustainability, and technological advancement in the engineering industry.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default History;
