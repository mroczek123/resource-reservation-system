import { reducer as ProductsReducer } from "../../Products/reducer";
import { Action } from "../types/Action";
import { ResourcesState } from "../types/ResourcesState";

export function resourcesReducer(state: ResourcesState, action: Action): ResourcesState {
  return {
    ...state,
    products: ProductsReducer(state.products, action),
  };
}
