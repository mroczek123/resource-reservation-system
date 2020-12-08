import * as ReactDom from "react-dom";
import * as React from "react";
import { App } from "./App/App";
import "./index.scss";
import { Provider } from "react-redux";
import { Store } from "./App/shared/modules/Store/Store";

function bootstrap() {
  const root = document.getElementById("app");
  const appRoot = (
    <Provider store={Store}>
      <App />
    </Provider>
  );
  ReactDom.render(appRoot, root);
}

bootstrap();
