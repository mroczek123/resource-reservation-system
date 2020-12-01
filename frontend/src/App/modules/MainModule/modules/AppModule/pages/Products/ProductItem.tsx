import * as React from "react";


function ProductItem(): JSX.Element {
  return (
    <li className="collection-item right-align">
      <span className="left" style={{ marginTop: "6px" }}>
        Produkt 1
      </span>
      <a href="#!" className=" btn red " style={{marginRight: "10px"}}>
        Modify
      </a>
      <a href="#!" className=" btn red ">
        Delete
      </a>
    </li>
  );
}

export default ProductItem;
