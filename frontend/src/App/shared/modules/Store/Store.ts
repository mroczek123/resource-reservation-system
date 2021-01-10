import { createStore } from "redux";
import { connect as redux_connect } from "react-redux";
import { StoreState } from "./types/StoreState";
import { StateProps } from "./types/StateProps";
import { mainReducer } from "./reducers/mainReducer";
import { Action } from "./types/Action";
import {
  User,
  UserRole,
} from "@src/App/modules/MainModule/modules/AccountModule/services/UserService/types/User";

export const StoreInitialState: StoreState = {
  user: new User({
    firstName: "Maciej",
    lastName: "Kulesza",
    role: UserRole.WAITER,
    birthDate: new Date(),
    email: "mck.kulesza@gmail.com",
    avatarUrl: "",
  }),
  resources: {
    products: {
      entries: [],
    },
  },
  modals: {
    current: null,
  },
  settings: {
    language: "PL",
    theme: {
      colors: {
        main: {
          className: "deep-purple darken-2",
          value: "#512da8",
        },
      },
      darkTheme: false,
    },
  },
};

function defaultMapStateToProps<T>(state: StoreState, ownProps: T): T & StateProps {
  // if (Object.keys(ownProps).find((key) => key == "state")) {
  //   throw Error("Remove key state.");
  // }

  // return { ...ownProps, state };
  return { state };
}

export const Store = createStore(mainReducer);
export const dispatch = (action: Action) => Store.dispatch(action);
export function connect<T>(x: T): any {
  return redux_connect(defaultMapStateToProps)(x as any) as any; // TODO: fix typing
}
