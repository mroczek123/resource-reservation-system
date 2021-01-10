import { dispatch } from "../../Store/Store";
import { ActionType } from "../../Store/types/ActionType";
import { Product, ProductCategory, ProductCategoryChoices } from "../models/Product";

export class ProductsService {
  static getAll(): void {
    const entries = [
      new Product({ id: "1", name: "MOCK", price: 12, category: ProductCategory.DINNER }),
      new Product({ id: "2", name: "MOCK", price: 12, category: ProductCategory.BREAKFAST }),
      new Product({ id: "3", name: "MOCK", price: 12, category: ProductCategory.SUPPER }),
    ];
    dispatch({ type: ActionType.REFRESH_PRODUCTS, payload: { entries } });
  }

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
