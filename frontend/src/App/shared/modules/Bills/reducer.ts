import { Reducer } from "react";
import { Action } from "../Store/types/Action";
import { ActionType } from "../Store/types/ActionType";
import { ResourceState } from "../Store/types/ResourceState";
import { Bill } from "./models/Bill";

type ResourceReducer = Reducer<ResourceState<Bill>, Action>;

export function billsReducer(state: ResourceState<Bill>, action: Action): ResourceState<Bill> {
  const actionFunctionMap = {
    [ActionType.APPEND_BILLS]: handleAppendBills,
    [ActionType.REFRESH_BILLS]: handleRefreshBills,
    [ActionType.REMOVE_BILLS]: handleRemoveBills,
    [ActionType.UPDATE_BILLS]: handleUpdateBills,
  };
  const reducerIndex = Object.entries(actionFunctionMap).findIndex(
    ([key]) => parseInt(key) == action.type,
  );
  if (reducerIndex > -1) {
    return Object.entries(actionFunctionMap)[reducerIndex][1](state, action);
  }
  return dummyReducer(state, action);
}

const dummyReducer: ResourceReducer = (a) => {
  return { ...a };
};

const handleAppendBills: ResourceReducer = (
  defaultValue: ResourceState<Bill>,
  action: Action,
) => {
  return {
    ...defaultValue,
    entries: [...defaultValue.entries, ...(action.payload.entries as Array<Bill>)],
  };
};

const handleRefreshBills: ResourceReducer = (
  defaultValue: ResourceState<Bill>,
  action: Action,
) => {
  return { ...defaultValue, entries: [...(action.payload.entries as Array<Bill>)] };
};

const handleRemoveBills = (
  defaultValue: ResourceState<Bill>,
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

const handleUpdateBills: ResourceReducer = (
  defaultValue: ResourceState<Bill>,
  action: Action,
) => {
  const updatedEntry: Bill = action.payload.entry as Bill;
  if (!(updatedEntry instanceof Bill)) {
    return defaultValue;
  }
  return {
    ...defaultValue,
    entries: [
      ...defaultValue.entries.map((entry) =>
        entry.id === updatedEntry.id ? (action.payload.entry as Bill) : entry,
      ),
    ],
  };
};
