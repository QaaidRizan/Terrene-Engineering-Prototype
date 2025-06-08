
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

const Career = () => {
  const positions = [
    {
      title: "Senior Structural Engineer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 150,000 - 200,000",
      description: "Lead structural design projects and mentor junior engineers in our growing team."
    },
    {
      title: "Civil Engineering Graduate",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 80,000 - 120,000",
      description: "Join our team as a fresh graduate and grow your career in civil engineering."
    },
    {
      title: "Project Manager",
      department: "Project Management",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 180,000 - 250,000",
      description: "Manage multiple engineering projects and coordinate with clients and teams."
    },
    {
      title: "CAD Technician",
      department: "Design",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 60,000 - 90,000",
      description: "Create detailed technical drawings and support our engineering team."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Build your career with Terrene Engineering and be part of shaping the future of infrastructure
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">50+ Employees</h3>
                <p className="text-muted-foreground text-sm">Growing team of professionals</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground text-sm">Work-life balance priority</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Competitive Pay</h3>
                <p className="text-muted-foreground text-sm">Market-leading salaries</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Great Location</h3>
                <p className="text-muted-foreground text-sm">Modern office in Colombo</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-center mb-12">Open Positions</h2>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {position.salary}
                          </span>
                        </div>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                    <p className="text-muted-foreground">{position.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Don't See Your Role?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button size="lg">Send Your Resume</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
