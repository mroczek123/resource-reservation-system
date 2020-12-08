import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { Chat } from "@src/App/shared/components/Chat";
import { NavBar } from "@src/App/shared/modules/Materialize/components/NavBar";
import { AboutUs } from "./pages/AboutUs";
import { HomePage } from "./pages/HomePage";

export function LandingModule(props: unknown): JSX.Element {
  const routeMatch = useRouteMatch();
  return (
    <>
      <NavBar title="Resource Reservation System">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`${routeMatch.url}/about-us`}>About us</Link>
        </li>
        <li>
          <Link to="/app/account/log-in">Log in</Link>
        </li>
        <li>
          <Link to="/app/account/register">Register</Link>
        </li>
      </NavBar>
      <Router parentRoute={routeMatch.url} />

      <Chat style={{ position: "fixed", bottom: "50px", right: "50px" }} />
    </>
  );
}

const Router = (props: { parentRoute: string }) => (
  <Switch>
    <Route exact path={props.parentRoute}>
      <HomePage />
    </Route>
    <Route exact path={`${props.parentRoute}/about-us`}>
      <AboutUs />
    </Route>
  </Switch>
);
