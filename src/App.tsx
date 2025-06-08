
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import History from "./pages/History";
import Team from "./pages/Team";
import Mission from "./pages/Mission";
import StructuralDesign from "./pages/StructuralDesign";
import CivilEngineering from "./pages/CivilEngineering";
import ArchitecturalConsulting from "./pages/ArchitecturalConsulting";
import ProjectManagement from "./pages/ProjectManagement";
import AutoCAD from "./pages/AutoCAD";
import Revit from "./pages/Revit";
import ETABS from "./pages/ETABS";
import STAADPro from "./pages/STAADPro";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Industrial from "./pages/Industrial";
import Career from "./pages/Career";
import Inquiry from "./pages/Inquiry";

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
          <Route path="/history" element={<History />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
