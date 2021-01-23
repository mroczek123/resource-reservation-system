import { Reducer } from "react";
import { Action } from "../Store/types/Action";
import { ActionType } from "../Store/types/ActionType";
import { ResourceState } from "../Store/types/ResourceState";
import { OrderEntry } from "./types/OrderEntry";

type ProductResourceReducer = Reducer<ResourceState<OrderEntry>, Action>;

export function reducer(state: ResourceState<OrderEntry>, action: Action): ResourceState<OrderEntry> {
  const actionFunctionMap = {
    [ActionType.APPEND_ORDER_ENTRY]: handleAppendOrderEntries,
    [ActionType.REFRESH_ORDER_ENTRY]: handleRefreshOrderEntries,
    [ActionType.REMOVE_ORDER_ENTRY]: handleRemoveOrderEntries,
    [ActionType.UPDATE_ORDER_ENTRY]: handleUpdateOrderEntry,
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

const handleAppendOrderEntries: ProductResourceReducer = (
  defaultValue: ResourceState<OrderEntry>,
  action: Action,
) => {
  return {
    ...defaultValue,
    entries: [...defaultValue.entries, ...(action.payload.entries as Array<OrderEntry>)],
  };
};

const handleRefreshOrderEntries: ProductResourceReducer = (
  defaultValue: ResourceState<OrderEntry>,
  action: Action,
) => {
  return { ...defaultValue, entries: [...(action.payload.entries as Array<OrderEntry>)] };
};

const handleRemoveOrderEntries: ProductResourceReducer = (
  defaultValue: ResourceState<OrderEntry>,
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

const handleUpdateOrderEntry: ProductResourceReducer = (
  defaultValue: ResourceState<OrderEntry>,
  action: Action,
) => {
  const updatedEntry = action.payload.entry;
  if (!(updatedEntry instanceof OrderEntry)) {
    return defaultValue;
  }
  return {
    ...defaultValue,
    entries: [
      ...defaultValue.entries.map((entry) =>
        entry.id === updatedEntry.id ? (action.payload.entry as OrderEntry) : entry,
      ),
    ],
  };
};
