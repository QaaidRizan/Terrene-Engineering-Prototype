
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Monitor, Layers, Zap } from 'lucide-react';

const AutoCAD = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">AutoCAD Expertise</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Professional 2D and 3D drafting services using industry-leading AutoCAD software
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">2D Drafting</h3>
                <p className="text-muted-foreground">
                  Precise technical drawings and architectural plans.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Layers className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">3D Modeling</h3>
                <p className="text-muted-foreground">
                  Detailed 3D models for visualization and analysis.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
                <p className="text-muted-foreground">
                  Quick turnaround times for urgent projects.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Professional CAD Services</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our certified AutoCAD professionals deliver high-quality technical drawings 
                and 3D models for all your engineering and architectural needs.
              </p>
              <Button size="lg">Get CAD Services</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AutoCAD;
