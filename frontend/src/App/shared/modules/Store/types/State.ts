import User from "@src/App/modules/MainModule/modules/AccountModule/services/UserService/types/User";

export interface StoreState {
  user: User | null,
  theme: {
    colors: {
      [color: string]: {
        className: string,
        value: string
      },
    },
    darkTheme: boolean
  }
}

export default StoreState;