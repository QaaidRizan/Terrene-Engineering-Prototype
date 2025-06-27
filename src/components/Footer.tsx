import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, MessageCircle } from 'lucide-react';
// Import logo from assets folder
import Logo2 from '../assert/Logo2.png';

const Footer = () => {
  return (
    <section className="... w-full">
      <footer className="bg-slate-900 text-white py-12">
        <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {/* Architectural */}
                <div>
                  <h5 className="font-semibold text-primary mb-2 text-sm">Architectural</h5>
                  <ul className="space-y-1 text-sm">
                    <li><a href="/architectural-consulting" className="text-gray-300 hover:text-white transition-colors">Architectural Consultancy</a></li>
                    <li><a href="/interior-design" className="text-gray-300 hover:text-white transition-colors">Interior Design Services</a></li>
                    <li><a href="/furniture-design" className="text-gray-300 hover:text-white transition-colors">Furniture Design & Supply</a></li>
                    <li><a href="/acoustic-lighting" className="text-gray-300 hover:text-white transition-colors">Acoustic & Lighting Design</a></li>
                    <li><a href="/master-planning" className="text-gray-300 hover:text-white transition-colors">Master Planning & Urban Design</a></li>
                  </ul>
                </div>
                {/* Engineering */}
                <div>
                  <h5 className="font-semibold text-primary mb-2 text-sm">Engineering</h5>
                  <ul className="space-y-1 text-sm">
                    <li><a href="/structural-consultancy" className="text-gray-300 hover:text-white transition-colors">Structural Consultancy</a></li>
                    <li><a href="/mep-engineering" className="text-gray-300 hover:text-white transition-colors">MEP Engineering</a></li>
                    <li><a href="/hvac-solutions" className="text-gray-300 hover:text-white transition-colors">HVAC Solutions</a></li>
                    <li><a href="/elv-services" className="text-gray-300 hover:text-white transition-colors">ELV Services</a></li>
                    <li><a href="/material-consultancy" className="text-gray-300 hover:text-white transition-colors">Material Consultancy</a></li>
                  </ul>
                </div>
                {/* Technical */}
                <div>
                  <h5 className="font-semibold text-primary mb-2 text-sm">Technical</h5>
                  <ul className="space-y-1 text-sm">
                    <li><a href="/laboratory-testing" className="text-gray-300 hover:text-white transition-colors">Laboratory Testing</a></li>
                    <li><a href="/land-surveying" className="text-gray-300 hover:text-white transition-colors">Land Surveying & GIS Mapping</a></li>
                    <li><a href="/bim-services" className="text-gray-300 hover:text-white transition-colors">BIM Services</a></li>
                    <li><a href="/software-training" className="text-gray-300 hover:text-white transition-colors">Software Training</a></li>
                    <li><a href="/import-export" className="text-gray-300 hover:text-white transition-colors">Import & Export Materials</a></li>
                  </ul>
                </div>
                {/* Project Management */}
                <div>
                  <h5 className="font-semibold text-primary mb-2 text-sm">Project Management</h5>
                  <ul className="space-y-1 text-sm">
                    <li><a href="/construction-services" className="text-gray-300 hover:text-white transition-colors">Construction Services</a></li>
                    <li><a href="/project-management" className="text-gray-300 hover:text-white transition-colors">Project Management</a></li>
                    <li><a href="/quantity-surveying" className="text-gray-300 hover:text-white transition-colors">Quantity Surveying</a></li>
                    <li><a href="/construction-claims" className="text-gray-300 hover:text-white transition-colors">Construction Claims</a></li>
                    <li><a href="/tendering-procurement" className="text-gray-300 hover:text-white transition-colors">Tendering & Procurement</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/why-terrene" className="text-gray-300 hover:text-white transition-colors">Why Terrene</a></li>
                <li><a href="/sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="/testimonial" className="text-gray-300 hover:text-white transition-colors">Testimonial</a></li>
                <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="/career" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/inquiry" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">Client Questions</a></li>
                <li><a href="/team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                <li><a href="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</a></li>
                <li><a href="/qualitypolicy" className="text-gray-300 hover:text-white transition-colors">Quality Policy</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">All Services</a></li>
                <li><a href="/packages" className="text-gray-300 hover:text-white transition-colors">Packages</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Software Expertise</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/autocad" className="text-gray-300 hover:text-white transition-colors">AutoCAD</a></li>
                <li><a href="/revit" className="text-gray-300 hover:text-white transition-colors">Revit</a></li>
                <li><a href="/etabs" className="text-gray-300 hover:text-white transition-colors">ETABS</a></li>
                <li><a href="/staad-pro" className="text-gray-300 hover:text-white transition-colors">STAAD Pro</a></li>
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
    </section>
  );
};

export default Footer;
