import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import History from "./pages/Faq";
import Team from "./pages/Team";
import Mission from "./pages/Mission";
import StructuralDesign from "./pages/StructuralDesign";
import CivilEngineering from "./pages/civilengineering/CivilEngineering";
import ArchitecturalConsulting from "./pages/achitecturalconsulting/ArchitecturalConsulting";
import ProjectManagement from "./pages/ProjectManagement";
import AutoCAD from "./pages/autocad/AutoCAD";
import Revit from "./pages/revit/Revit";
import ETABS from "./pages/etabs/ETABS";
import STAADPro from "./pages/staadpro/STAADPro";
import Residential from "./pages/Residential";
import Commercial from "./pages/commercial/Commercial";
import Industrial from "./pages/Industrial";
import Career from "./pages/Career";
import Inquiry from "./pages/Inquiry";
import Services from "./components/Services";
import Faq from "./pages/Faq";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/structural-design" element={<StructuralDesign />} />
          <Route path="/civil-engineering" element={<CivilEngineering />} />
          <Route path="/architectural-consulting" element={<ArchitecturalConsulting />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/autocad" element={<AutoCAD />} />
          <Route path="/revit" element={<Revit />} />
          <Route path="/etabs" element={<ETABS />} />
          <Route path="/staad-pro" element={<STAADPro />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/career" element={<Career />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/services" element={<Services />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
