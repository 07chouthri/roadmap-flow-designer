
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// Import pages
import IndexPage from "./pages/index";
import NotFound from "./pages/NotFound";
import CloudMigrationPage from "./pages/CloudMigrationPage";
import AboutPage from "./pages/AboutPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";
import ContainerizationPage from "./pages/ContainerizationPage";
import FinOpsPage from "./pages/FinOpsPage";
import DevOpsPage from "./pages/DevOpsPage";
import SecurityCompliancePage from "./pages/SecurityCompliancePage";


// This will help us transition to Next.js in the future
const App = () => {
  // Create a client
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Services routes */}
            <Route path="/services/managed-services" element={<ContainerizationPage />} />
            <Route path="/services/devops-automation" element={<DevOpsPage />} />
            <Route path="/services/finops" element={<FinOpsPage />} />
            <Route path="/services/security" element={<SecurityCompliancePage />} />
            
            {/* Redirect /services to home */}
            <Route path="/services" element={<Navigate to="/" replace />} />
            
            {/* Placeholder routes */}
            <Route path="/careers" element={<NotFound />} />
            <Route path="/resources/:slug" element={<NotFound />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
