
import Header from "@/components/Header";
import { Switch, Route } from "wouter";
import Home from "./home";
import NombresSagrados from "./nombres-sagrados";
import Meditaciones from "./meditaciones";
import TarotBotanico from "./tarot-botanico";

export default function Todo() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Switch>
        <Route path="/todo" component={Home} />
        <Route path="/todo/" component={Home} />
        <Route path="/todo/nombres-sagrados" component={NombresSagrados} />
        <Route path="/todo/meditaciones" component={Meditaciones} />
        <Route path="/todo/tarot-botanico" component={TarotBotanico} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}
