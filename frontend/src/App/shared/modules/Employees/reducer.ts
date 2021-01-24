import { Reducer } from "react";
import { Action } from "../Store/types/Action";
import { ActionType } from "../Store/types/ActionType";
import { ResourceState } from "../Store/types/ResourceState";
import { Employee } from "./models/Employee";

type ResourceReducer = Reducer<ResourceState<Employee>, Action>;

export function employeesReducer(state: ResourceState<Employee>, action: Action): ResourceState<Employee> {
  const actionFunctionMap = {
    [ActionType.APPEND_EMPLOYEES]: handleAppendEmployees,
    [ActionType.REFRESH_EMPLOYEES]: handleRefreshEmployees,
    [ActionType.REMOVE_EMPLOYEES]: handleRemoveEmployees,
    [ActionType.UPDATE_EMPLOYEE]: handleUpdateEmployee,
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

const handleAppendEmployees: ResourceReducer = (
  defaultValue: ResourceState<Employee>,
  action: Action,
) => {
  return {
    ...defaultValue,
    entries: [...defaultValue.entries, ...(action.payload.entries as Array<Employee>)],
  };
};

const handleRefreshEmployees: ResourceReducer = (
  defaultValue: ResourceState<Employee>,
  action: Action,
) => {
  return { ...defaultValue, entries: [...(action.payload.entries as Array<Employee>)] };
};

const handleRemoveEmployees = (
  defaultValue: ResourceState<Employee>,
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

const handleUpdateEmployee: ResourceReducer = (
  defaultValue: ResourceState<Employee>,
  action: Action,
) => {
  const updatedEntry = action.payload.entry;
  if (!(updatedEntry instanceof Employee)) {
    return defaultValue;
  }
  return {
    ...defaultValue,
    entries: [
      ...defaultValue.entries.map((entry) =>
        entry.id === updatedEntry.id ? (action.payload.entry as Employee) : entry,
      ),
    ],
  };
};
