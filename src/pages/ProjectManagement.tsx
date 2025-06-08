
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Users, Target } from 'lucide-react';

const ProjectManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Project Management Services</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Expert project management ensuring on-time, on-budget delivery of engineering projects
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Timeline Management</h3>
                <p className="text-muted-foreground">
                  Efficient scheduling and milestone tracking for project success.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Coordination</h3>
                <p className="text-muted-foreground">
                  Seamless coordination between all project stakeholders.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control and project delivery standards.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Efficient Project Delivery</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our experienced project managers ensure your engineering projects are completed 
                efficiently, safely, and within budget constraints.
              </p>
              <Button size="lg">Discuss Your Project</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectManagement;
