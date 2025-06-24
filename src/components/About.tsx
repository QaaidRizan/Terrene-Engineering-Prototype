import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "20+", label: "Years Experience" },
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Projects Completed" },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Support Available" },
    { icon: <Target className="w-6 h-6" />, value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Terrene Engineering</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Established with a vision to transform the engineering landscape, Terrene Engineering 
                  (Private) Limited has been at the forefront of innovative engineering solutions for over two decades.
                </p>
                <p>
                  Our team of licensed professional engineers specializes in structural design, civil engineering, 
                  and architectural consulting. We pride ourselves on delivering projects that not only meet but 
                  exceed industry standards while maintaining the highest levels of safety and sustainability.
                </p>
                <p>
                  From residential developments to large-scale commercial projects, we bring technical expertise, 
                  creative problem-solving, and unwavering commitment to every challenge we undertake.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-[#1a1a1a] rounded-lg border border-gray-800">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop" 
                alt="Engineering team" 
                className="rounded-lg shadow-lg border border-gray-800"
              />
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=250&fit=crop" 
                alt="Technical work" 
                className="rounded-lg shadow-lg mt-8 border border-gray-800"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1a1a1a] p-6 rounded-lg shadow-xl border border-gray-800">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-400">Successful Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
