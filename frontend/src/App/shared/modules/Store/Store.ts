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
import { Product, ProductCategory } from "../Products/models/Product";
import { Employee } from "../Employees/models/Employee";
import { Bill } from "../Bills/models/Bill";

export const StoreInitialState: StoreState = {
  user: new User({
    firstName: "Jakiś",
    lastName: "Klient",
    role: UserRole.CLIENT,
    birthDate: new Date(),
    email: "mck.kulesza@gmail.com",
    avatarUrl: "",
  }),
  resources: {
    products: {
      entries: [
        new Product({ id: "1", name: "Gołąbki", price: 12, category: ProductCategory.DINNER }),
        new Product({ id: "2", name: "Jajecznica", price: 12, category: ProductCategory.BREAKFAST }),
        new Product({ id: "3", name: "Pomidorowa", price: 12, category: ProductCategory.SUPPER }),
      ],
    },
    orderEntries: {
      entries: []
    },
    employees: {
      entries: [
        new Employee({id: "1", firstName: "Jan", lastName: "Kowlaski", role: "Waiter"}),
        new Employee({id: "2", firstName: "Tadeusz", lastName: "Rydzyk", role: "Chef"}),
        new Employee({id: "3", firstName: "Grzegosz", lastName: "Brzęczyszczykiewicz", role: "Waiter"}),
      ]
    },
    bills: {
      entries: [
        new Bill({id: "1", displayData: "Table 1", value: 69}),
        new Bill({id: "2", displayData: "Table 2", value: 123}),
        new Bill({id: "3", displayData: "Table 3", value: 19}),
      ]
    },
    reservations: {
      entries: []
    }
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
export function connect<T>(x: any) {
  return redux_connect(defaultMapStateToProps)(x as any) as any; // TODO: fix typing
}
