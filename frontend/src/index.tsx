import * as ReactDom from "react-dom";
import * as React from "react";
import App from "./App/App";
import "./index.scss";

function bootstrap() {
  const root = document.getElementById("app");
  ReactDom.render(<App/>, root);
}

bootstrap();
