import * as React from "react";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AccountModule } from "./modules/AccountModule/AccountModule";
import { AppModule } from "./modules/AppModule/AppModule";

export function MainModule(): JSX.Element {
  return <Router />;
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
