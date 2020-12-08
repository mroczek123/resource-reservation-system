import { Product } from "@src/App/shared/modules/Products/models/Product";
import * as React from "react";

export function ProductItem(props: {
  product: Product;
  editCallback: any;
  removeCallback: any;
}): JSX.Element {
  return (
    <li className="collection-item right-align">
      <span className="left" style={{ marginTop: "6px" }}>
        {props.product.name} {props.product.price}
      </span>
      <button onClick={props.editCallback} className=" btn blue " style={{ marginRight: "10px" }}>
        Modify
      </button>
      <a href="#!" className=" btn red ">
        Delete
      </a>
    </li>
  );
}
