import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Testimonials from "@/pages/Testimonials";
import NotFound from "@/pages/not-found";

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
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
