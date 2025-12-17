import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NombresSagrados from "@/pages/nombres-sagrados";
import Meditaciones from "@/pages/meditaciones";
import TarotBotanico from "@/pages/tarot-botanico";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/nombres-sagrados" component={NombresSagrados} />
      <Route path="/meditaciones" component={Meditaciones} />
      <Route path="/tarot-botanico" component={TarotBotanico} />
      <Route component={NotFound} />
    </Switch>
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
