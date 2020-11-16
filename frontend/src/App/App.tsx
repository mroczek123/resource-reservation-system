import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Store from "@src/App/shared/modules/Store/Store";
import LandingModule from "./modules/LandingModule/LandingModule";
import MainModule from "./modules/MainModule/MainModule";
import Page404 from "./pages/ErrorPages/Page404";
import Footer from "./shared/components/Footer";

function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        {Router}
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

const Router = (
  <Switch>
    <Route exact path="/">
      <Redirect to="/welcome"/>
    </Route>
    <Route path="/app/">
      <MainModule />
    </Route>
    <Route path="/welcome">
      <LandingModule />
    </Route>
    <Route>
      <Page404 />
    </Route>
  </Switch>
);
export default App;
