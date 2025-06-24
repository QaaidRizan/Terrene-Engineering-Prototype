import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Palette, Ruler, Lightbulb, ArrowRight, FileText, Users, Building } from 'lucide-react';

const ArchitecturalConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative bg-black text-white">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Architectural Consultancy</h1>
          <p className="text-xl max-w-2xl">
            Turning architectural visions into reality through innovation, precision, and sustainable design
          </p>
        </div>
      </div>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Description */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Terrene Engineers provides end-to-end architectural consultancy services tailored to suit a diverse range of projects 
              including residential, commercial, industrial, and institutional developments. Our architectural solutions are driven 
              by a deep understanding of client requirements, site potential, and regulatory guidelines, ensuring innovative, practical, 
              and sustainable designs.
            </p>
            <p className="text-lg text-muted-foreground">
              We emphasize creative vision, functional planning, and technical accuracy, with careful integration of aesthetics 
              and environmental responsiveness in every stage of the design process.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 animate-section-fade"
              style={{ animationDelay: '0.2s' }}
            >
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Design Development</h3>
              <p className="text-muted-foreground">
                Creative architectural design from concept sketches to detailed development drawings that bring your vision to life.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 animate-section-fade"
              style={{ animationDelay: '0.3s' }}
            >
              <Ruler className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Space Planning</h3>
              <p className="text-muted-foreground">
                Optimal utilization of available space with functional layouts designed for efficiency and comfort.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 animate-section-fade"
              style={{ animationDelay: '0.4s' }}
            >
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sustainable Design</h3>
              <p className="text-muted-foreground">
                Environmentally responsible architecture that minimizes ecological footprint while maximizing resource efficiency.
              </p>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="bg-slate-50 rounded-lg p-10 mb-20">
            <h2 className="text-3xl font-bold mb-8">Scope of Work</h2>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p>Conceptual Design & Development</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p>Site Analysis & Space Planning</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p>Preparation of 2D Drawings & 3D Visualizations</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p>Planning Approval Documentation</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p>Detailed Construction Drawings</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p>Coordination with Structural, MEP, and Interior Design Teams</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p>Green Building Concepts & Compliance Support</p>
              </div>
            </div>
          </div>

          {/* Specialized Services Table */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Specialized Services Offered</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border p-4 text-left">Specialization</th>
                    <th className="border p-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50">
                    <td className="border p-4 font-medium">Sustainable Architecture</td>
                    <td className="border p-4">Design incorporating energy-efficient layouts, passive cooling, and eco-materials.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border p-4 font-medium">Theme-Based Design</td>
                    <td className="border p-4">Architecture tailored to modern, classical, tropical, or cultural themes.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border p-4 font-medium">Modular/Prefab Planning</td>
                    <td className="border p-4">Layouts suitable for fast-track or prefabricated building systems.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border p-4 font-medium">Vastu / Feng Shui Integration</td>
                    <td className="border p-4">Space planning based on traditional cultural principles (available upon request).</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border p-4 font-medium">Master Planning & Urban Design</td>
                    <td className="border p-4">Comprehensive site layout, zoning, and large-scale land-use planning.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sample Projects */}
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" 
                alt="Modern Residential Complex" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Azure Heights Residences</h3>
                <p className="text-muted-foreground mb-4">
                  A luxury residential complex featuring sustainable design principles and modern aesthetics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Residential</span>
                  <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Sustainable</span>
                  <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Luxury</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <p><strong>Location:</strong> Dubai Marina</p>
                  <p><strong>Area:</strong> 15,000 sq.m</p>
                  <p><strong>Completion:</strong> 2023</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  View Project <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
                alt="Corporate Office Building" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pinnacle Corporate Tower</h3>
                <p className="text-muted-foreground mb-4">
                  A state-of-the-art commercial building with innovative workspace design and energy-efficient systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Commercial</span>
                  <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Corporate</span>
                  <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">LEED Certified</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <p><strong>Location:</strong> Business Bay</p>
                  <p><strong>Area:</strong> 25,000 sq.m</p>
                  <p><strong>Completion:</strong> 2022</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  View Project <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-slate-50 rounded-lg p-10 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">1</div>
                <h3 className="font-semibold mb-2">Concept Development</h3>
                <p className="text-sm text-muted-foreground">Initial brainstorming and conceptualization based on client requirements</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">2</div>
                <h3 className="font-semibold mb-2">Schematic Design</h3>
                <p className="text-sm text-muted-foreground">Developing preliminary designs and spatial arrangements</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">3</div>
                <h3 className="font-semibold mb-2">Design Development</h3>
                <p className="text-sm text-muted-foreground">Refining designs and integrating technical requirements</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">4</div>
                <h3 className="font-semibold mb-2">Construction Documentation</h3>
                <p className="text-sm text-muted-foreground">Creating detailed drawings and specifications for construction</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Terrene Engineering</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  Over 15 years of experience delivering exceptional architectural solutions across diverse projects.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Collaborative Approach</h3>
                <p className="text-muted-foreground">
                  We work closely with clients and stakeholders to ensure designs meet and exceed expectations.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainable Focus</h3>
                <p className="text-muted-foreground">
                  Commitment to environmentally responsible design principles that stand the test of time.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-lg p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Vision?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our architectural consultants help bring your vision to life with 
              innovative design solutions that exceed expectations.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button size="lg" variant="secondary">Schedule a Consultation</Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArchitecturalConsulting;
