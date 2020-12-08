import { User } from "@src/App/modules/MainModule/modules/AccountModule/services/UserService/types/User";
import { Modal } from "@src/App/shared/components/Modal";
import { ModalsState } from "./ModalsState";
import { ResourcesState } from "./ResourcesState";
import { ThemeState } from "./ThemeState";

export interface StoreState {
  user: User | null;
  theme: ThemeState;
  resources: ResourcesState;
  modals: ModalsState;
}

