import { Route, Switch, useRouteMatch } from "react-router-dom";
import * as React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import LogIn from "./pages/LogIn/LogIn";
import SideNav from "./shared/components/SideNav";
import NavBar from "./shared/components/NavBar";

function MainModule(): JSX.Element {
  return (
    <>
      <div style={{ display: "grid" }}>
        <SideNav style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
        <div style={{ gridColumnStart: 3, gridColumnEnd: 13 }}>
          <Router />
        </div>
      </div>
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
      <Route path={routeMatch.url}>
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default MainModule;
