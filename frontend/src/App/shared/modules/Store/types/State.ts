import User from "@src/App/modules/MainModule/shared/services/UserService/types/User";

export interface StoreState {
  theme: string,
  user: User | null,
}

export default StoreState;