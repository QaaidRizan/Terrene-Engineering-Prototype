import React, { useState } from 'react';
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Terrene Engineering</h1>
              <p className="text-sm text-muted-foreground">(Private) Limited</p>
            </div>
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
                  <div className="w-56 p-2">
                    <NavigationMenuLink asChild>
                      <Link to="/structural-design" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Structural Design
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/civil-engineering" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Civil Engineering
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/architectural-consulting" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Architectural Consulting
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/project-management" className="block px-3 py-2 text-sm hover:bg-accent rounded">
                        Project Management
                      </Link>
                    </NavigationMenuLink>
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
                <Link to="/career" className="text-foreground hover:text-primary transition-colors px-3 py-2">
                  CAREER
                </Link>
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
              <Link to="/structural-design" className="text-foreground hover:text-primary transition-colors">SERVICES</Link>
              <Link to="/autocad" className="text-foreground hover:text-primary transition-colors">SOFTWARE EXPERTISE</Link>
              <Link to="/residential" className="text-foreground hover:text-primary transition-colors">PORTFOLIO</Link>
              <Link to="/career" className="text-foreground hover:text-primary transition-colors">CAREER</Link>
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
