
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Engineering Excellence for 
                <span className="text-primary"> Tomorrow's World</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Terrene Engineering delivers innovative solutions in structural design, 
                civil engineering, and architectural consulting with over two decades of expertise.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-foreground">Licensed Professional Engineers</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-foreground">20+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-foreground">500+ Successful Projects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop" 
                alt="Engineering workspace" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                Premium Consulting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
