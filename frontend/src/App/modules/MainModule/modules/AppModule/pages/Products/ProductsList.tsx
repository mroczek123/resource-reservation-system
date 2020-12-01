import * as React from "react";
import ProductItem from "./ProductItem";


function ProductsList(): JSX.Element {
  return (
    <ul className="collection">
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </ul>
  );
}

export default ProductsList;