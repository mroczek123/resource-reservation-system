import Chat from "@src/App/shared/components/Chat";
import NavBar from "@src/App/shared/modules/Materialize/components/NavBar";
import { connect } from "@src/App/shared/modules/Store/Store";
import StateProps from "@src/App/shared/modules/Store/types/StateProps";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";

function LandingModule(props: StateProps) {
  const routeMatch = useRouteMatch();
  return (
    <>
      <NavBar title="Resource Reservation System" className={props.state.theme}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`${routeMatch.url}/about-us`}>About us</Link>
        </li>
        <li>
          <Link to="/app/log-in">Log in</Link>
        </li>
        <li>
          <Link to="/app/register">Register</Link>
        </li>
      </NavBar>
      <Router parentRoute={routeMatch.url} />

      <Chat style={{ position: "fixed", bottom: "50px", right: "50px" }} />
    </>
  );
};

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

export default connect(LandingModule);
