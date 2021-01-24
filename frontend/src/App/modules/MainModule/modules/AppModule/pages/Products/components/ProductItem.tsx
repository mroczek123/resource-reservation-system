import { Product } from "@src/App/shared/modules/Products/models/Product";
import * as React from "react";

export function ProductItem(props: {
  product: Product;
  editCallback: any;
  removeCallback: any;
}): JSX.Element {
  return (
    <li
      className="collection-item valign-wrapper"
      style={{ justifyContent: "space-between", display: "flex" }}
    >
      <span>
        Name: {props.product.name} <br/>
        Price: {props.product.price} PLN
      </span>
      <span>
        <button onClick={props.editCallback} className="btn blue" style={{ marginRight: "10px" }}>
          Modify
        </button>
        <button onClick={props.removeCallback} className="btn red">
          Delete
        </button>
      </span>
    </li>
  );
}
