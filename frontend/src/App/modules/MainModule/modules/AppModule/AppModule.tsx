import { Route, Switch, useRouteMatch } from "react-router-dom";
import * as React from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { SideNav } from "./shared/components/SideNav";
import { Bills } from "./pages/Bills/Bills";
import { Products } from "./pages/Products/Products";
import { Employees } from "./pages/Employees/Employees";
import { Order } from "./pages/Order/Order";

export function AppModule(): JSX.Element {
  return (
    <>
      <div style={{ width: "100vw" }}>
        <div style={{ display: "grid" }}>
          <SideNav style={{ gridColumnStart: 1, gridColumnEnd: 2 }} />
          <div style={{ gridColumnStart: 2, gridColumnEnd: 20 }}>
            <Router />
          </div>
        </div>
      </div>
    </>
  );
}

function Router() {
  const routeMatch = useRouteMatch();
  return (
    <Switch>
      <Route path={`${routeMatch.url}/dashboard`}>
        <Dashboard />
      </Route>
      <Route path={`${routeMatch.url}/products`}>
        <Products />
      </Route>
      <Route path={`${routeMatch.url}/employees`}>
        <Employees />
      </Route>
      <Route path={`${routeMatch.url}/order`}>
        <Order />
      </Route>
      <Route path={`${routeMatch.url}/bills`}>
        <Bills />
      </Route>
    </Switch>
  );
}
