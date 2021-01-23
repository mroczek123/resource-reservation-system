import { OrderService } from "@src/App/shared/modules/Orders/OrderService";
import { OrderEntry } from "@src/App/shared/modules/Orders/types/OrderEntry";
import { connect } from "@src/App/shared/modules/Store/Store";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import * as React from "react";

function SingleItem(props: { orderEntry: OrderEntry }): JSX.Element {
  const removeEntry = () => OrderService.removeFromOrder(props.orderEntry.id as string);
  const addOne = () => {
    props.orderEntry.amount += 1;
    OrderService.updateOrderEntry(props.orderEntry);
  };
  const removeOne = () => {
    props.orderEntry.amount -= 1;
    if (props.orderEntry.amount == 0) {
      OrderService.removeFromOrder(props.orderEntry.id as string);
    } else {
      OrderService.updateOrderEntry(props.orderEntry);
    }
  };
  return (
    <li
      className="left collection-item valign-wrapper"
      style={{ width: "100%", justifyContent: "space-between", display: "flex" }}
    >
      {props.orderEntry.product.name} x{props.orderEntry.amount} {props.orderEntry.price}PLN
      <span>
        <button className="btn blue" onClick={addOne}>
          <i className="material-icons">exposure_plus_1</i>
        </button>
        <button className="btn blue" onClick={removeOne}>
          <i className="material-icons">exposure_minus_1</i>
        </button>
        <button className="btn red" onClick={removeEntry}>
          <i className="material-icons">delete</i>
        </button>
      </span>
    </li>
  );
}

function _OrderSideBar(props: StateProps): JSX.Element {
  const orderEntries = props.state.resources.orderEntries.entries;
  const getTipValue = () => parseInt((document.getElementById("tip_input") as HTMLInputElement).value);
  const placeOrder = () => OrderService.placeOrder({tip: getTipValue()});
  let footer = undefined;
  if (orderEntries.length > 0) {
    footer = (
      <>
        <div className="row">
          <h5>Total Cost: {OrderService.getTotal()} PLN</h5>
          Tip:
          <input id="tip_input" type="number" defaultValue="5" min="0" style={{ width: "80px", direction: "rtl" }}/> %<br/>
          <button className="btn" onClick={placeOrder}>
            Order
          </button>
        </div>
      </>
    );
  }
  return (
    <div style={{ minHeight: "100%" }} className="center">
      <h5 className="center">Order summary:</h5>
      <ul className="collection">
        {orderEntries.map((orderEntry) => (
          <SingleItem orderEntry={orderEntry} />
        ))}
      </ul>
      {footer}
    </div>
  );
}

export const OrderSideBar = connect(_OrderSideBar);
