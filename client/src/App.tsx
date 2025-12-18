import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Welcome from "@/pages/welcome";
import MantrasReflexiones from "@/pages/mantras-reflexiones";
import NombresSagradosPath from "@/pages/nombres-sagrados-path";
import Meditaciones from "@/pages/meditaciones";
import MundoEsoterico from "@/pages/mundo-esoterico";
import Todo from "@/pages/todo";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/mantras-reflexiones" component={MantrasReflexiones} />
      <Route path="/mantras-reflexiones/meditaciones" component={MantrasReflexiones} />
      <Route path="/nombres-sagrados-path" component={NombresSagradosPath} />
      <Route path="/nombres-sagrados-path/meditaciones" component={NombresSagradosPath} />
      <Route path="/meditaciones" component={Meditaciones} />
      <Route path="/mundo-esoterico" component={MundoEsoterico} />
      <Route path="/todo/:rest*" component={Todo} />
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
