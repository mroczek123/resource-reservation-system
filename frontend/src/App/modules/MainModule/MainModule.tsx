import { Route, Switch, useRouteMatch } from "react-router-dom";
import * as React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import LogIn from "./pages/LogIn/LogIn";

function MainModule(): JSX.Element {
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
        <LogIn parentRoute={routeMatch.url}/>
      </Route>
      <Route path={routeMatch.url}>
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default MainModule;
