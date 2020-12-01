import { connect } from "@src/App/shared/modules/Store/Store";
import * as React from "react";

function Employees() {
  return (
    <div style={{ height: "100vh" }}>
      <h1>Employees</h1>
    </div>
  );
}

export default connect(Employees);