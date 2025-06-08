
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-16">Mission & Vision</h1>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, sustainable, and cost-effective engineering solutions 
                  that exceed client expectations while contributing to the development of 
                  safe and resilient infrastructure. We are committed to delivering excellence 
                  through professional expertise, cutting-edge technology, and collaborative partnerships.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <Eye className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading engineering consultancy firm recognized globally for 
                  innovation, sustainability, and engineering excellence. We envision a 
                  future where our engineering solutions contribute to building smarter, 
                  safer, and more sustainable communities worldwide.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-center mb-12">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                    <p className="text-muted-foreground">
                      We conduct our business with the highest ethical standards, 
                      transparency, and honesty in all our professional relationships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      We embrace new technologies and creative approaches to solve 
                      complex engineering challenges and improve project outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      We strive for the highest quality in everything we do, 
                      continuously improving our processes and delivering superior results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                    <p className="text-muted-foreground">
                      We are committed to environmental responsibility and developing 
                      solutions that minimize environmental impact for future generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to You</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every project we undertake is guided by our mission, vision, and values. 
                We are dedicated to building lasting relationships with our clients through 
                trust, reliability, and exceptional service delivery. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mission;
