import { resourcesReducer } from "./resourcesReducer";
import { StoreInitialState } from "../Store";
import { StoreState } from "../types/StoreState";
import { Reducer } from "redux";
import { Action } from "../types/Action";
import { currentModalReducer } from "./currentModalReducer";


export const mainReducer: Reducer<StoreState, Action> = (
  state: StoreState = StoreInitialState,
  action: Action,
) => {
  return {
    ...state,
    resources: resourcesReducer(state.resources, action),
    modals: currentModalReducer(state.modals, action)
  };
};
