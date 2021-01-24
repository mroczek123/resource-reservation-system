import { dispatch } from "../../Store/Store";
import { ActionType } from "../../Store/types/ActionType";
import { Product } from "../models/Product";

export class ProductsService {
  static delete(input: { id: string }): void {
    dispatch({ type: ActionType.REMOVE_PRODUCTS, payload: { ids: [input.id] } });
  }

  static create(input: { product: Omit<Product, "id"> }): void {
    dispatch({
      type: ActionType.APPEND_PRODUCTS,
      payload: { entries: [new Product({ ...input.product, id: "4" })] },
    });
  }

  static update(input: { product: Product }): void {
    dispatch({ type: ActionType.UPDATE_PRODUCT, payload: input });
  }
}
