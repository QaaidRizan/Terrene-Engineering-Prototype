
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';

const ETABS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">ETABS Structural Analysis</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced structural analysis and design using ETABS software for complex building structures
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ETABS;
