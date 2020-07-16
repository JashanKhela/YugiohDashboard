import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { DuelArena } from './DuelArena'
export const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/duelarena" component={DuelArena} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
