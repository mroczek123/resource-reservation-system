import { Modal } from "../components/Modal";
import { dispatch } from "../modules/Store/Store";
import { ActionType } from "../modules/Store/types/ActionType";

export class ModalService {
  static displayModal(modal: JSX.Element): void {
    dispatch({type: ActionType.ADD_MODAL, payload: {modal}})
  }

  static removeModal(): void {
    dispatch({type: ActionType.REMOVE_MODAL, payload: {}})
  }
}