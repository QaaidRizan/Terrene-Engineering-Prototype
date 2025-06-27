import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      info: "+94 11 234 5678",
      subtitle: "Mon-Fri 8am-6pm"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      info: "info@terreneeng.com",
      subtitle: "24/7 Support"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      info: "123 Engineering Lane, Colombo 03",
      subtitle: "Sri Lanka"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      info: "Mon-Fri: 8:00 AM - 6:00 PM",
      subtitle: "Sat: 9:00 AM - 2:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#141414] w-full">
      <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="!bg-[#1a1a1a] !border-gray-700">
              <CardHeader>
                <CardTitle className="!text-white">Send us a Message</CardTitle>
                <p className="text-xl text-gray-300 max-w-3xl mt-2">
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">First Name</label>
                    <Input placeholder="John" className="!bg-[#2a2a2a] !text-white !border-gray-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                    <Input placeholder="Doe" className="!bg-[#2a2a2a] !text-white !border-gray-700" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" className="!bg-[#2a2a2a] !text-white !border-gray-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Phone</label>
                    <Input placeholder="+94 71 234 5678" className="!bg-[#2a2a2a] !text-white !border-gray-700" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Project Type</label>
                  <select className="w-full p-3 border border-gray-700 rounded-md bg-[#2a2a2a] text-white">
                    <option>Select a service</option>
                    <option>Structural Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Architectural Drafting</option>
                    <option>Project Management</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[120px] bg-[#2a2a2a] text-white border-gray-700"
                  />
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-foreground font-medium">{item.info}</p>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
