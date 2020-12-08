import { dispatch } from "../../Store/Store";
import { ActionType } from "../../Store/types/ActionType";
import { Product } from "../models/Product";

export class ProductsService {
  static getProducts(): void {
    const entries = [
      new Product({name: "MOCK", price: 12, category: "łobiod"}),
      new Product({name: "MOCK", price: 12, category: "łobiod"}),
      new Product({name: "MOCK", price: 12, category: "łobiod"}),
    ];
    dispatch({type: ActionType.REFRESH_PRODUCTS, payload: {entries}})
  }
}
