import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Postly from "./pages/Postly";
import Assistant from "./pages/Assistant";
import Quest from "./pages/Quest";
import Basic from "./pages/Basic";
import Intermediate from "./pages/Intermediate";
import Advanced from "./pages/Advanced";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/*"
            element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <div className="flex-1">
                    <header className="h-14 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10 flex items-center px-4">
                      <SidebarTrigger />
                    </header>
                    <Routes>
                      <Route path="/postly" element={<Postly />} />
                      <Route path="/assistant" element={<Assistant />} />
                      <Route path="/quest" element={<Quest />} />
                      <Route path="/basic" element={<Basic />} />
                      <Route path="/intermediate" element={<Intermediate />} />
                      <Route path="/advanced" element={<Advanced />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                </div>
              </SidebarProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
