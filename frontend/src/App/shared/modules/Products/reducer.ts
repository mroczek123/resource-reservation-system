import { Reducer } from "react";
import { Action } from "../Store/types/Action";
import { ActionType } from "../Store/types/ActionType";
import { ResourceState } from "../Store/types/ResourceState";
import { Product } from "./models/Product";

type ProductResourceReducer = Reducer<ResourceState<Product>, Action>;

export function reducer(state: ResourceState<Product>, action: Action): ResourceState<Product> {
  const actionFunctionMap = {
    [ActionType.APPEND_PRODUCTS]: handleAppendProducts,
    [ActionType.REFRESH_PRODUCTS]: handleRefreshProducts,
    [ActionType.REMOVE_PRODUCTS]: handleRemoveProducts,
    [ActionType.UPDATE_PRODUCT]: handleUpdateProduct,
  };
  const reducerIndex = Object.entries(actionFunctionMap).findIndex(
    ([key]) => parseInt(key) == action.type,
  );
  if (reducerIndex > -1) {
    return Object.entries(actionFunctionMap)[reducerIndex][1](state, action);
  }
  return dummyReducer(state, action);
}

const dummyReducer: ProductResourceReducer = (a) => {
  return { ...a };
};

const handleAppendProducts: ProductResourceReducer = (
  defaultValue: ResourceState<Product>,
  action: Action,
) => {
  return {
    ...defaultValue,
    entries: [...defaultValue.entries, ...(action.payload.entries as Array<Product>)],
  };
};

const handleRefreshProducts: ProductResourceReducer = (
  defaultValue: ResourceState<Product>,
  action: Action,
) => {
  return { ...defaultValue, entries: [...(action.payload.entries as Array<Product>)] };
};

const handleRemoveProducts: ProductResourceReducer = (
  defaultValue: ResourceState<Product>,
  action: Action,
) => {
  return {
    ...defaultValue,
    entries: [
      ...defaultValue.entries.filter(
        (entry) => !(action.payload.ids as Array<string>).find((id) => entry.id === id),
      ),
    ],
  };
};

const handleUpdateProduct: ProductResourceReducer = (
  defaultValue: ResourceState<Product>,
  action: Action,
) => {
  const updatedProduct = action.payload.product;
  if (!(updatedProduct instanceof Product)) {
    return defaultValue;
  }
  return {
    ...defaultValue,
    entries: [
      ...defaultValue.entries.map((entry) =>
        entry.id === updatedProduct.id ? (action.payload.product as Product) : entry,
      ),
    ],
  };
};
