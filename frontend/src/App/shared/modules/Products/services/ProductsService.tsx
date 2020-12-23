import { dispatch } from "../../Store/Store";
import { ActionType } from "../../Store/types/ActionType";
import { Product } from "../models/Product";

export class ProductsService {

  static getAll(): void {
    const entries = [
      new Product({ id: "1", name: "MOCK", price: 12, category: "łobiod" }),
      new Product({ id: "2", name: "MOCK", price: 12, category: "łobiod" }),
      new Product({ id: "3", name: "MOCK", price: 12, category: "łobiod" }),
    ];
    dispatch({ type: ActionType.REFRESH_PRODUCTS, payload: { entries } });
  }

  static delete(input: { id: string }): void {
    dispatch({ type: ActionType.REMOVE_PRODUCT, payload: input });
  }

  static create(input: { product: Omit<Product, "id"> }): void {
    dispatch({type: ActionType.APPEND_PRODUCTS, payload: {entries: [new Product({...input.product, id: ""})]}})
  }
}
