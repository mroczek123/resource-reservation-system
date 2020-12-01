import { Route, Switch, useRouteMatch } from "react-router-dom";
import * as React from "react";
import AccountModule from "./modules/AccountModule/AccountModule";
import AppModule from "./modules/AppModule/AppModule";

function MainModule(): JSX.Element {
  return (
      <Router />
  );
}

function Router() {
  const routeMatch = useRouteMatch();
  return (
    <Switch>
      <Route path={`${routeMatch.url}/account`}>
        <AccountModule />
      </Route>
      <Route path={routeMatch.url}>
        <AppModule />
      </Route>
    </Switch>
  );
}

export default MainModule;
