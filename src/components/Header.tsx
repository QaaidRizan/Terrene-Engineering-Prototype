import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
// Import the logo
import Logo from '@/assert/Logo2.png';
import Faq from '@/pages/Faq';

const services = [
  { label: 'Architectural Consultancy', to: '/architectural-consulting' },
  { label: 'Interior Design Services', to: '/interior-design' },
  { label: 'Furniture Design & Supply', to: '/furniture-design' },
  { label: 'Acoustic & Lighting Design Consultancy', to: '/acoustic-lighting' },
  { label: 'Master Planning & Urban Design', to: '/master-planning' },
  { label: 'Structural Consultancy', to: '/structural-consultancy' },
  { label: 'MEP Engineering', to: '/mep-engineering' },
  { label: 'HVAC Solutions', to: '/hvac-solutions' },
  { label: 'ELV (Extra Low Voltage) Services', to: '/elv-services' },
  { label: 'Material Consultancy', to: '/material-consultancy' },
  { label: 'Laboratory Testing & Feasibility Studies', to: '/laboratory-testing' },
  { label: 'Land Surveying & GIS Mapping', to: '/land-surveying' },
  { label: 'Construction & Subcontracting Services', to: '/construction-services' },
  { label: 'Project Management & Supervision', to: '/project-management' },
  { label: 'Quantity Surveying & Cost Consultancy', to: '/quantity-surveying' },
  { label: 'Construction Claims & Contract Advisory', to: '/construction-claims' },
  { label: 'Building Information Modeling (BIM) Services', to: '/bim-services' },
  { label: 'Software Training for Construction Industry', to: '/software-training' },
  { label: 'Import & Export of Construction and Interior Materials', to: '/import-export' },
  { label: 'Tendering & Procurement Consultancy', to: '/tendering-procurement' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Helper function to toggle sections
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <header className="bg-background shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={Logo} 
                alt="Terrene Engineering Logo" 
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Navigation items - update text colors */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-foreground hover:text-primary-100 transition-colors px-3 py-2">
                  HOME
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  COMPANY
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                  <div className="w-48 p-2 bg-black/70 backdrop-blur-md rounded-lg border border-white/10">
                    <NavigationMenuLink asChild>
                      <Link to="/about" className="block px-3 py-2 text-sm text-foreground hover:bg-accent rounded">
                        About Us
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/Faq" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        FAQ
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/team" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Our Team
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/mission" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Mission & Vision
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Mega menu for SERVICES */}
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  SERVICES
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                  <div className="w-[800px] p-6 bg-black/70 backdrop-blur-md rounded-lg border border-white/10">
                    <div className="grid grid-cols-4 gap-x-6 gap-y-3">
                      {/* Column 1 - Architectural Services */}
                      <div className="space-y-3">
                        <h3 className="text-primary font-medium text-sm">Architectural</h3>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/architectural-consulting" className="block text-sm hover:text-primary transition-colors">
                                Architectural Consultancy
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/interior-design" className="block text-sm hover:text-primary transition-colors">
                                Interior Design Services
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/furniture-design" className="block text-sm hover:text-primary transition-colors">
                                Furniture Design & Supply
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/acoustic-lighting" className="block text-sm hover:text-primary transition-colors">
                                Acoustic & Lighting Design
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/master-planning" className="block text-sm hover:text-primary transition-colors">
                                Master Planning & Urban Design
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2 - Engineering Services */}
                      <div className="space-y-3">
                        <h3 className="text-primary font-medium text-sm">Engineering</h3>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/structural-consultancy" className="block text-sm hover:text-primary transition-colors">
                                Structural Consultancy
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/mep-engineering" className="block text-sm hover:text-primary transition-colors">
                                MEP Engineering
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/hvac-solutions" className="block text-sm hover:text-primary transition-colors">
                                HVAC Solutions
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/elv-services" className="block text-sm hover:text-primary transition-colors">
                                ELV Services
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/material-consultancy" className="block text-sm hover:text-primary transition-colors">
                                Material Consultancy
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>

                      {/* Column 3 - Technical Services */}
                      <div className="space-y-3">
                        <h3 className="text-primary font-medium text-sm">Technical</h3>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/laboratory-testing" className="block text-sm hover:text-primary transition-colors">
                                Laboratory Testing
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/land-surveying" className="block text-sm hover:text-primary transition-colors">
                                Land Surveying & GIS Mapping
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/bim-services" className="block text-sm hover:text-primary transition-colors">
                                BIM Services
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/software-training" className="block text-sm hover:text-primary transition-colors">
                                Software Training
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/import-export" className="block text-sm hover:text-primary transition-colors">
                                Import & Export Materials
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>

                      {/* Column 4 - Project Management */}
                      <div className="space-y-3">
                        <h3 className="text-primary font-medium text-sm">Project Management</h3>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/construction-services" className="block text-sm hover:text-primary transition-colors">
                                Construction Services
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/project-management" className="block text-sm hover:text-primary transition-colors">
                                Project Management
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/quantity-surveying" className="block text-sm hover:text-primary transition-colors">
                                Quantity Surveying
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/construction-claims" className="block text-sm hover:text-primary transition-colors">
                                Construction Claims
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link to="/tendering-procurement" className="block text-sm hover:text-primary transition-colors">
                                Tendering & Procurement
                        </Link>
                      </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Footer with all services link */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                      <Link to="/services" className="text-xs text-primary flex items-center gap-1">
                        View All Services <ChevronDown className="h-3 w-3 rotate-270" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  SOFTWARE EXPERTISE
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                  <div className="w-48 p-2 bg-black/70 backdrop-blur-md rounded-lg border border-white/10">
                    <NavigationMenuLink asChild>
                      <Link to="/autocad" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        AutoCAD
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/revit" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Revit
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/etabs" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        ETABS
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/staad-pro" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        STAAD Pro
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  PROJECTS
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                  <div className="w-48 p-2">
                    <NavigationMenuLink asChild>
                      <Link to="/residential" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Residential Projects
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/commercial" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Commercial Projects
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/industrial" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Industrial Projects
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/inquiry">INQUIRY</Link>
            </Button>
            <Button>Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">HOME</Link>
              
              {/* Company Section */}
              <div>
                <button 
                  onClick={() => toggleSection('company')}
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  <span>COMPANY</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${expandedSection === 'company' ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {expandedSection === 'company' && (
                  <div className="pl-4 pt-2 flex flex-col space-y-2 bg-black/40 mt-2 rounded-lg p-2 border border-white/10">
                    <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary">
                      About Us
                    </Link>
                    <Link to="/Faq" className="block text-sm text-muted-foreground hover:text-primary">
                      FAQ
                    </Link>
                    <Link to="/team" className="block text-sm text-muted-foreground hover:text-primary">
                      Our Team
                    </Link>
                    <Link to="/mission" className="block text-sm text-muted-foreground hover:text-primary">
                      Mission & Vision
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Services Section */}
              <div>
                <button 
                  onClick={() => toggleSection('services')}
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  <span>SERVICES</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${expandedSection === 'services' ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {expandedSection === 'services' && (
                  <div className="pl-4 pt-2 flex flex-col space-y-2 bg-black/40 mt-2 rounded-lg p-2 border border-white/10 max-h-80 overflow-y-auto">
                    {services.map((service) => (
                      <Link 
                        key={service.to} 
                        to={service.to} 
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        {service.label}
                    </Link>
                  ))}
                </div>
                )}
              </div>

              {/* Software Expertise Section */}
              <div>
                <button 
                  onClick={() => toggleSection('software')}
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  <span>SOFTWARE EXPERTISE</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${expandedSection === 'software' ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {expandedSection === 'software' && (
                  <div className="pl-4 pt-2 flex flex-col space-y-2 bg-black/40 mt-2 rounded-lg p-2 border border-white/10">
                    <Link to="/autocad" className="block text-sm text-muted-foreground hover:text-primary">
                      AutoCAD
                    </Link>
                    <Link to="/revit" className="block text-sm text-muted-foreground hover:text-primary">
                      Revit
                    </Link>
                    <Link to="/etabs" className="block text-sm text-muted-foreground hover:text-primary">
                      ETABS
                    </Link>
                    <Link to="/staad-pro" className="block text-sm text-muted-foreground hover:text-primary">
                      STAAD Pro
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects Section */}
              <div>
                <button 
                  onClick={() => toggleSection('projects')}
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  <span>PROJECTS</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${expandedSection === 'projects' ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {expandedSection === 'projects' && (
                  <div className="pl-4 pt-2 flex flex-col space-y-2 bg-black/40 mt-2 rounded-lg p-2 border border-white/10">
                    <Link to="/residential" className="block text-sm text-muted-foreground hover:text-primary">
                      Residential Projects
                    </Link>
                    <Link to="/commercial" className="block text-sm text-muted-foreground hover:text-primary">
                      Commercial Projects
                    </Link>
                    <Link to="/industrial" className="block text-sm text-muted-foreground hover:text-primary">
                      Industrial Projects
                    </Link>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/inquiry">INQUIRY</Link>
                </Button>
                <Button size="sm">Contact Us</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
export { services };
