import * as ReactDom from "react-dom";
import * as React from "react";
import App from "./App/App";

function bootstrap() {
  const root = document.getElementsByTagName("app")[0];
  ReactDom.render(<App/>, root);
}

bootstrap();
