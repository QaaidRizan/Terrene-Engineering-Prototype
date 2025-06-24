import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, MessageCircle } from 'lucide-react';
// Import logo from assets folder
import Logo2 from '../assert/Logo2.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {/* Replace the T logo with the actual logo image */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src={Logo2} alt="Terrene Engineering Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Terrene Engineering</h3>
                <p className="text-sm text-gray-400">(Private) Limited</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional engineering solutions with over 20 years of experience 
              in structural design, civil engineering, and architectural consulting.
            </p>
            {/* Expanded social media links with WhatsApp and YouTube */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              {/* Added WhatsApp icon */}
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              {/* Added YouTube icon */}
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Structural Engineering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Civil Engineering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Architectural Drafting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Project Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Code Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">123 Engineering Lane, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@terreneeng.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Terrene Engineering (Private) Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
