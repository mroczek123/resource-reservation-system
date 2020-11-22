import { createStore } from "redux";
import { connect as redux_connect } from "react-redux";
import StoreState from "./types/State";
import StateProps from "./types/StateProps";
import Action from "./types/Action";
import { ComponentType } from "react";

const defaultState: StoreState = {
  theme: "deep-purple",
  user: null,
};

export function defaultMapStateToProps<T>(state: StoreState, ownProps: T): T & StateProps {
  if (Object.keys(ownProps).find((key) => key == "state")) {
    throw Error("Remove key state.")
  }
  return {...ownProps, state}
}

function mainReducer(state: StoreState=defaultState, action:Action): StoreState {
  console.log("received" + JSON.stringify(action));
  return {...state, ...action.payload};
}
const store = createStore(mainReducer);
export const connect = redux_connect(defaultMapStateToProps);
export default store;
