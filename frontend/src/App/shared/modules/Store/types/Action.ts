import { Action as ReduxAction } from "redux";
import { ActionType } from "./ActionType";

export interface Action extends ReduxAction<ActionType> {
  type: ActionType;
  payload: Record<string|number, unknown>;
}
