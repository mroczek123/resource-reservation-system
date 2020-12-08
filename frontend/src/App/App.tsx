import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "@src/App/shared/modules/Store/Store";
import { LandingModule } from "./modules/LandingModule/LandingModule";
import { MainModule } from "./modules/MainModule/MainModule";
import { Page404 } from "./pages/ErrorPages/Page404";
import { Footer } from "./shared/components/Footer";
import { StateProps } from "./shared/modules/Store/types/StateProps";

function _App(props: StateProps): JSX.Element {
  return (
    <>
      {props.state.modals?.current}
      <BrowserRouter>
        {Router}
        <Footer />
      </BrowserRouter>
    </>
  );
}

const Router = (
  <Switch>
    <Route exact path="/">
      <Redirect to="/welcome" />
    </Route>
    <Route path="/app/">
      <MainModule />
    </Route>
    <Route path="/welcome">
      <LandingModule />
    </Route>
    <Route path="/404">
      <Page404 />
    </Route>
    <Route>
      <Redirect to="/404" />
    </Route>
  </Switch>
);

export const App = connect(_App);
