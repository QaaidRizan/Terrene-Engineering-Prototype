
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Building, Database, Share2 } from 'lucide-react';

const Revit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Revit BIM Services</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Advanced Building Information Modeling (BIM) solutions using Autodesk Revit
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">BIM Modeling</h3>
                <p className="text-muted-foreground">
                  Comprehensive 3D building information models.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Management</h3>
                <p className="text-muted-foreground">
                  Intelligent data integration and project coordination.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Share2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Enhanced team collaboration and project coordination.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Modern BIM Solutions</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Leverage the power of Revit for intelligent building design, clash detection, 
                and seamless project coordination across all disciplines.
              </p>
              <Button size="lg">Explore BIM Services</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Revit;
