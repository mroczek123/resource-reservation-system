import { Reducer } from "react";
import { Action } from "../Store/types/Action";
import { ActionType } from "../Store/types/ActionType";
import { ResourceState } from "../Store/types/ResourceState";
import { Reservation } from "./models/Reservation";

type ProductResourceReducer = Reducer<ResourceState<Reservation>, Action>;

export function ReservationReducer(state: ResourceState<Reservation>, action: Action): ResourceState<Reservation> {
  const actionFunctionMap = {
    [ActionType.APPEND_RESERVATIONS]: handleAppendReservations,
    [ActionType.REFRESH_RESERVATIONS]: handleRefreshReservations,
    [ActionType.REMOVE_RESERVATIONS]: handleRemoveReservations,
    [ActionType.UPDATE_RESERVATIONS]: handleUpdateReservations,
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

const handleAppendReservations: ProductResourceReducer = (
  defaultValue: ResourceState<Reservation>,
  action: Action,
) => {
  return {
    ...defaultValue,
    entries: [...defaultValue.entries, ...(action.payload.entries as Array<Reservation>)],
  };
};

const handleRefreshReservations: ProductResourceReducer = (
  defaultValue: ResourceState<Reservation>,
  action: Action,
) => {
  return { ...defaultValue, entries: [...(action.payload.entries as Array<Reservation>)] };
};

const handleRemoveReservations: ProductResourceReducer = (
  defaultValue: ResourceState<Reservation>,
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

const handleUpdateReservations: ProductResourceReducer = (
  defaultValue: ResourceState<Reservation>,
  action: Action,
) => {
  const updatedEntry = action.payload.entry;
  if (!(updatedEntry instanceof Reservation)) {
    return defaultValue;
  }
  return {
    ...defaultValue,
    entries: [
      ...defaultValue.entries.map((entry) =>
        entry.id === updatedEntry.id ? (action.payload.entry as Reservation) : entry,
      ),
    ],
  };
};
