import { connect } from "@src/App/shared/modules/Store/Store";
import * as React from "react";

function _Analytics(): JSX.Element {
  return (
    <div style={{ height: "100vh" }}>
      <h1>Analytics</h1>
    </div>
  );
}

export const Analytics = connect(_Analytics);
