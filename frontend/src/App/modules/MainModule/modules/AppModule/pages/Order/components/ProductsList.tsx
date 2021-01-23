import { Product } from "@src/App/shared/modules/Products/models/Product";
import { connect, Store } from "@src/App/shared/modules/Store/Store";
import { OrderService } from "@src/App/shared/modules/Orders/OrderService";
import * as React from "react";

function SingleItem(props: {product: Product}) {
  const addToOrder = () => props.product.id ? OrderService.addToOrder(props.product.id): undefined;
  return (
    <li
      className="collection-item valign-wrapper"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {props.product.name} {props.product.price} PLN
      <button className="btn green" onClick={addToOrder}>
        <i className="material-icons">add</i>
      </button>
    </li>
  );
}

class _ProductsList extends React.Component {
  render(): JSX.Element {
    const products = Store.getState().resources.products.entries;
    return (
      <ul className="collection">
        {products.map((product) => (
          <SingleItem product={product}/>
        ))}
      </ul>
    );
  }
}

export const ProductsList = connect(_ProductsList);
