import { Product } from "@src/App/shared/modules/Products/models/Product";
import * as React from "react";

export function ProductItem(props: {
  product: Product;
  editCallback: any;
  removeCallback: any;
}): JSX.Element {
  return (
    <li
      className="collection-item right-align valign-wrapper"
      style={{ justifyContent: "space-between" }}
    >
      <span>
        <span>
          {props.product.name} {props.product.price}
        </span>
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
