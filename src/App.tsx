import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrandPage from "./pages/BrandPage";
import GalleryPage from "./pages/GalleryPage";
import ProductsPage from "./pages/ProductsPage";
import AcademyPage from "./pages/AcademyPage";
import TechnicalPage from "./pages/TechnicalPage";
import CommunityPage from "./pages/CommunityPage";
import ColoursPage from "./pages/ColoursPage";
import LocationsPage from "./pages/LocationsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<BrandPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/academy/community" element={<CommunityPage />} />
          <Route path="/technical" element={<TechnicalPage />} />
          <Route path="/colours" element={<ColoursPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
