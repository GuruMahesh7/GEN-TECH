import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";

// Pages
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Lazy Pages
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Projects = lazy(() => import("@/pages/Projects"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Page Transition Wrapper
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/">
          <PageWrapper><Home /></PageWrapper>
        </Route>
        <Route path="/about">
          <PageWrapper><About /></PageWrapper>
        </Route>
        <Route path="/services">
          <PageWrapper><Services /></PageWrapper>
        </Route>
        <Route path="/projects">
          <PageWrapper><Projects /></PageWrapper>
        </Route>
        <Route path="/pricing">
          <PageWrapper><Pricing /></PageWrapper>
        </Route>
        <Route path="/contact">
          <PageWrapper><Contact /></PageWrapper>
        </Route>
        <Route path="/blog">
          <PageWrapper><Blog /></PageWrapper>
        </Route>
        <Route path="/testimonials">
          <PageWrapper><Testimonials /></PageWrapper>
        </Route>
        <Route>
          <PageWrapper><NotFound /></PageWrapper>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          }
        >
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
