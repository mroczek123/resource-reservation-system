import { connect } from "@src/App/shared/modules/Store/Store";
import * as React from "react";
import ProductsList from "./ProductsList";

function Products() {
  return (
    <div style={{ height: "100vh" }}>
      <h1>Menu</h1>
      <a className="btn">Add to Menu</a>
      <div className="container">
        <div className="z-depth-2">
          <ProductsList/>
        </div>
      </div>
    </div>
  );
}

export default connect(Products);
