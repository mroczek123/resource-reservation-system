import { Modal } from "@src/App/shared/components/Modal";
import { Action } from "../types/Action";
import { ActionType } from "../types/ActionType";
import { ModalsState } from "../types/ModalsState";

export function currentModalReducer(state: ModalsState, action: Action): ModalsState {
  const output = {...state};
  if ( action.type == ActionType.ADD_MODAL) {
    output.current = action.payload.modal as Modal; // TODO: remove AS
  } else if (action.type == ActionType.REMOVE_MODAL) {
    output.current = null;
  }
  return output;
}