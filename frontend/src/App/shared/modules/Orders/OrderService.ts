import { dispatch, Store } from "../Store/Store";
import { ActionType } from "../Store/types/ActionType";
import { OrderEntry } from "./types/OrderEntry";

export class OrderService {
  static init(): void {
    dispatch({type: ActionType.REFRESH_ORDER_ENTRY, payload: {entries: []}})
  }

  static addToOrder(productId: string): void {
    const product = Store.getState().resources.products.entries.find((product) => productId == product.id);
    if (!product) {
      return
    }
    const existingOrderEntry = Store.getState().resources.orderEntries.entries.find((orderEntry) => productId == orderEntry.product.id);
    let orderEntry = new OrderEntry({product, amount: 1});
    if (existingOrderEntry) {
      orderEntry = existingOrderEntry;
      orderEntry.amount += 1;
      OrderService.updateOrderEntry(orderEntry)
    } else {
      const existingIds = [0, ...Store.getState().resources.orderEntries.entries.map((val) => parseInt(val.id as string))]
      orderEntry.id = String(Math.max(...existingIds)+1);
      dispatch({type: ActionType.APPEND_ORDER_ENTRY, payload: {entries: [orderEntry]}})
    }
  }
  static updateOrderEntry(orderEntry: OrderEntry): void {
    dispatch({type: ActionType.UPDATE_ORDER_ENTRY, payload: {entry: [orderEntry]}})
  }

  static removeFromOrder(orderEntryId: string): void {
    dispatch({type: ActionType.REMOVE_ORDER_ENTRY, payload: {ids: [orderEntryId]}})
  }

  static placeOrder(props: {tip: number}): void {
    M.toast({html: `Order for amount ${OrderService.getTotal()} PLN has been placed. <br> Estimated waiting time: 30 min.`});
    if (props.tip > 0) {
      M.toast({html: `Thank you for the tip.`});
    }
    OrderService.init();
  }

  static getTotal(): number {
    return Store.getState().resources.orderEntries.entries.reduce((acc, next) => acc+next.price, 0)
  }
}