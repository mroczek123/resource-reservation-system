import { Action } from "../Store/types/Action";
import { ActionType } from "../Store/types/ActionType";
import { ResourceState } from "../Store/types/ResourceState";
import { Product } from "./models/Product";

export function reducer(state: ResourceState<Product>, action: Action): ResourceState<Product> {
  const output = { ...state };

  if (!(action.payload?.entries instanceof Array) || !action.payload?.entries.every((entry) => entry instanceof Product)) {
    return output;
  }
  switch (action.type) {
    case ActionType.APPEND_PRODUCTS:
      return  {...output, entries: action.payload.entries };
    case ActionType.REFRESH_PRODUCTS:
      return  {...output, entries: action.payload.entries };
  }
  return output;
}
