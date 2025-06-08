
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const STAADPro = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">STAAD Pro Analysis</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive structural analysis and design using STAAD Pro for various structural systems
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default STAADPro;
