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

// First, restructure your services data at the top of the file
const serviceCategories = [
  {
    category: "Architectural",
    services: [
      { label: "Architectural Consultancy", to: "/architectural-consulting" },
      { label: "Interior Design Services", to: "/interior-design" },
      { label: "Furniture Design & Supply", to: "/furniture-design" },
      { label: "Acoustic & Lighting Design", to: "/acoustic-lighting" },
      { label: "Master Planning & Urban Design", to: "/master-planning" }
    ]
  },
  {
    category: "Engineering",
    services: [
      { label: "Structural Consultancy", to: "/structural-consultancy" },
      { label: "MEP Engineering", to: "/mep-engineering" },
      { label: "HVAC Solutions", to: "/hvac-solutions" },
      { label: "ELV Services", to: "/elv-services" },
      { label: "Material Consultancy", to: "/material-consultancy" }
    ]
  },
  {
    category: "Technical",
    services: [
      { label: "Laboratory Testing", to: "/laboratory-testing" },
      { label: "Land Surveying & GIS Mapping", to: "/land-surveying" },
      { label: "BIM Services", to: "/bim-services" },
      { label: "Software Training", to: "/software-training" },
      { label: "Import & Export Materials", to: "/import-export" }
    ]
  },
  {
    category: "Project Management",
    services: [
      { label: "Construction Services", to: "/construction-services" },
      { label: "Project Management", to: "/project-management" },
      { label: "Quantity Surveying", to: "/quantity-surveying" },
      { label: "Construction Claims", to: "/construction-claims" },
      { label: "Tendering & Procurement", to: "/tendering-procurement" }
    ]
  }
];

// Keep the original flattened list for mobile menu
const services = serviceCategories.flatMap(category => category.services);

interface HeaderProps {
  mode?: 'transparent' | 'solid';
  className?: string;
  onNavigate?: {
    home: () => void;
    about: () => void;
    services: () => void;
    projects: () => void;
    contact: () => void;
  };
}

const Header = ({ mode = 'transparent', className = '', onNavigate }: HeaderProps) => {
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

  // Determine header classes based on mode
  const headerClasses = mode === 'transparent'
    ? "bg-transparent backdrop-blur-sm sticky top-0 z-50 transition-all duration-300"
    : "bg-background shadow-sm border-b border-border sticky top-0 z-50 transition-all duration-300";

  return (
    <header className={`${headerClasses} ${className}`}>
      <div className="container mx-auto px-4 py-4">
        {/* Text color updates for transparent mode */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={Logo} 
                alt="Terrene Engineering Logo" 
                  className="h-14 w-auto" // Increased from h-14 to h-20
                  style={{ marginTop: '-8px', marginBottom: '-8px' }} 
              />
            </Link>
          </div>

          {/* Navigation items - update text colors for transparent mode */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={`${mode === 'transparent' ? 'text-white' : 'text-foreground'} hover:text-primary-100 transition-colors px-3 py-2`}>
                  HOME
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger  className={`${mode === 'transparent' ? 'text-white' : 'text-foreground'} hover:text-primary-100 bg-transparent hover:bg-transparent`}>
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
                <NavigationMenuTrigger className={`${mode === 'transparent' ? 'text-white' : 'text-foreground'} hover:text-primary-100 bg-transparent hover:bg-transparent`}>
                  SERVICES
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                  <div className="w-[800px] p-6 bg-black/70 backdrop-blur-md rounded-lg border border-white/10 grid grid-cols-4 gap-6">
                    {serviceCategories.map((category, idx) => (
                      <div key={idx}>
                        <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                          {category.category}
                        </h5>
                        <ul className="space-y-2">
                          {category.services.map((service, serviceIdx) => (
                            <li key={serviceIdx}>
                              <NavigationMenuLink asChild>
                                <Link 
                                  to={service.to} 
                                  className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors"
                                >
                                  {service.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    
                    {/* Footer with View All Link */}
                    <div className="col-span-4 pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
                      <p className="text-xs text-white/60">Explore our comprehensive range of engineering and architectural services</p>
                      <Button variant="link" className="text-primary p-0 h-auto" asChild>
                        <Link to="/services" className="flex items-center">
                          View All Services <ChevronDown className="ml-1 h-3 w-3 rotate-270" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger  className={`${mode === 'transparent' ? 'text-white' : 'text-foreground'} hover:text-primary-100 bg-transparent hover:bg-transparent`}>
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
                <NavigationMenuTrigger  className={`${mode === 'transparent' ? 'text-white' : 'text-foreground'} hover:text-primary-100 bg-transparent hover:bg-transparent`}>
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
            <Button 
              variant="outline" 
              className={mode === 'transparent' ? "border-white text-white hover:bg-white/10" : ""} 
              asChild
            >
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
export { services, serviceCategories };
