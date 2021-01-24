import { User } from "@src/App/modules/MainModule/modules/AccountModule/services/UserService/types/User";
import { ModalsState } from "./ModalsState";
import { ResourcesState } from "./ResourcesState";
import { SettingsState } from "./SettingsState";

export interface StoreState {
  user: User | null;
  resources: ResourcesState;
  modals: ModalsState;
  settings: SettingsState;
}

