import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { MacbookPro } from "@/pages/MacbookPro";
import { ThankYou } from "@/pages/ThankYou";
import { Disqualify } from "@/pages/Disqualify";

function Router() {
  return (
    <Switch>
      <Route path="/" component={MacbookPro} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/disqualify" component={Disqualify} />
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
