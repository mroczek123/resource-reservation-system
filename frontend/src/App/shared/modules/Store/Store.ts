import { createStore } from "redux";
import { connect as redux_connect } from "react-redux";
import { StoreState } from "./types/StoreState";
import { StateProps } from "./types/StateProps";
import { mainReducer } from "./reducers/mainReducer";
import { Action } from "./types/Action";

export const StoreInitialState: StoreState = {
  user: null,
  theme: {
    colors: {
      main: {
        className: "deep-purple darken-2",
        value: "#512da8",
      },
    },
    darkTheme: false,
  },
  resources: {
    products: {
      entries: []
    }
  },
  modals: {
    current: null
  }
};

function defaultMapStateToProps<T>(state: StoreState, ownProps: T): T & StateProps {
  if (Object.keys(ownProps).find((key) => key == "state")) {
    throw Error("Remove key state.");
  }
  return { ...ownProps, state };
}

export const Store = createStore(mainReducer);
export const dispatch = (action: Action) => Store.dispatch(action);
export const connect = (x: any) => redux_connect(defaultMapStateToProps)(x); // TODO: remove any
