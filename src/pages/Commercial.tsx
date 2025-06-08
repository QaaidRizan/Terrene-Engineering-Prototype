
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const Commercial = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">Commercial Projects</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Modern commercial spaces designed for business success and functionality
            </p>
            <Button size="lg">View Commercial Portfolio</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Commercial;
