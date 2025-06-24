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

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={Logo} 
                alt="Terrene Engineering Logo" 
                className="h-14 w-auto" // Increased from h-10 to h-14
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-foreground hover:text-primary transition-colors px-3 py-2">
                  HOME
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  COMPANY
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <NavigationMenuLink asChild>
                      <Link to="/about" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        About Us
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/history" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Our History
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

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  SERVICES
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 max-h-96 overflow-y-auto p-2 grid grid-cols-1 gap-1">
                    {services.map((service) => (
                      <NavigationMenuLink asChild key={service.to}>
                        <Link to={service.to} className="block px-3 py-2 text-sm hover:bg-accent rounded whitespace-nowrap">
                          {service.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  SOFTWARE EXPERTISE
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
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
                  PORTFOLIO
                </NavigationMenuTrigger>
                <NavigationMenuContent>
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

              <NavigationMenuItem>
                <Link to="/inquiry" className="text-foreground hover:text-primary transition-colors px-3 py-2">
                  INQUIRY
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Get Quote</Button>
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
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">COMPANY</Link>
              <div>
                <div className="font-semibold text-foreground">SERVICES</div>
                <div className="pl-4 flex flex-col space-y-2">
                  {services.map((service) => (
                    <Link key={service.to} to={service.to} className="block text-sm text-muted-foreground hover:text-primary">
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/autocad" className="text-foreground hover:text-primary transition-colors">SOFTWARE EXPERTISE</Link>
              <Link to="/residential" className="text-foreground hover:text-primary transition-colors">PORTFOLIO</Link>
              <Link to="/inquiry" className="text-foreground hover:text-primary transition-colors">INQUIRY</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">Get Quote</Button>
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
