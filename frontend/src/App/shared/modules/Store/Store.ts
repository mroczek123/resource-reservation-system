import { createStore } from "redux";
import { connect as redux_connect } from "react-redux";
import StoreState from "./types/State";
import StateProps from "./types/StateProps";
import Action from "./types/Action";

const StoreState: StoreState = {
  user: null,
  theme: {
    colors: {
      main: {
        className: "deep-purple darken-2",
        value: "#512da8"
      }
    },
    darkTheme: false
  }
};

export function defaultMapStateToProps<T>(state: StoreState, ownProps: T): T & StateProps {
  if (Object.keys(ownProps).find((key) => key == "state")) {
    throw Error("Remove key state.")
  }
  return {...ownProps, state}
}

function mainReducer(state: StoreState=StoreState, action:Action): StoreState {
  return {...state, ...action.payload};
}
const store = createStore(mainReducer);
export const connect = redux_connect(defaultMapStateToProps);
export default store;

