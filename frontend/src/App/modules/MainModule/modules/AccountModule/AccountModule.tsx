import * as React from "react";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import { LogIn } from "./pages/LogIn/LogIn";

export function AccountModule(): JSX.Element {
  return (
    <>
      <Router />
    </>
  );
}

function Router() {
  const routeMatch = useRouteMatch();
  return (
    <Switch>
      <Route path={`${routeMatch.url}/log-in`}>
        <LogIn parentRoute={routeMatch.url} />
      </Route>
    </Switch>
  );
}
