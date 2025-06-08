
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">About Terrene Engineering</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                <p className="text-muted-foreground mb-6">
                  Terrene Engineering (Private) Limited is a leading engineering consultancy firm 
                  established with a vision to provide innovative and sustainable engineering solutions. 
                  With over two decades of experience in the industry, we have built a reputation 
                  for excellence in structural design, civil engineering, and architectural consulting.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Professional Engineers License</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Member of Engineering Council</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop" 
                  alt="Engineering team at work" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering the highest quality engineering solutions 
                  that exceed client expectations.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Working closely with clients, architects, and contractors to 
                  ensure seamless project execution.
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Embracing cutting-edge technology and sustainable practices 
                  in all our engineering solutions.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                At Terrene Engineering, we are committed to shaping the future of infrastructure 
                through innovative engineering solutions that are safe, sustainable, and cost-effective. 
                Our team of experienced professionals brings together expertise from various 
                engineering disciplines to deliver comprehensive solutions.
              </p>
              <Button size="lg">Learn More About Our Services</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
