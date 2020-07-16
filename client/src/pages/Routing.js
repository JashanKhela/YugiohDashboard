import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";

export const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
