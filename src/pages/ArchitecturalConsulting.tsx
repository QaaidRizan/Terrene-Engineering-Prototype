
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Palette, Ruler, Lightbulb } from 'lucide-react';

const ArchitecturalConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Architectural Consulting</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Creative architectural solutions that blend functionality, aesthetics, and sustainability
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Design Development</h3>
                <p className="text-muted-foreground">
                  Creative architectural design from concept to detailed drawings.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Ruler className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Space Planning</h3>
                <p className="text-muted-foreground">
                  Optimal space utilization and functional layout design.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Cutting-edge design solutions and sustainable practices.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Transform Your Vision</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let our architectural consultants help bring your vision to life with 
                innovative design solutions that exceed expectations.
              </p>
              <Button size="lg">Start Your Project</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArchitecturalConsulting;
