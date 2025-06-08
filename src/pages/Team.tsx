
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Briefcase } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Executive Officer",
      experience: "25+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612e2bb?w=300&h=300&fit=crop",
      email: "sarah.johnson@terrene.com"
    },
    {
      name: "Eng. Michael Chen",
      position: "Principal Structural Engineer",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      email: "michael.chen@terrene.com"
    },
    {
      name: "Eng. Emily Rodriguez",
      position: "Civil Engineering Manager",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      email: "emily.rodriguez@terrene.com"
    },
    {
      name: "Eng. David Kumar",
      position: "Project Management Director",
      experience: "18+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      email: "david.kumar@terrene.com"
    },
    {
      name: "Eng. Lisa Thompson",
      position: "Architectural Consultant",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
      email: "lisa.thompson@terrene.com"
    },
    {
      name: "Eng. James Wilson",
      position: "Senior Design Engineer",
      experience: "14+ Years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      email: "james.wilson@terrene.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Expert Team</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Meet the professional engineers and experts who bring your projects to life
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">{member.position}</p>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{member.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${member.email}`} className="text-sm hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented engineers and professionals to join our growing team. 
                If you're passionate about engineering excellence and innovation, we'd love to hear from you.
              </p>
              <a href="/career" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                View Career Opportunities
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
