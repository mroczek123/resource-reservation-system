import { dispatch } from "../Store/Store";
import { ActionType } from "../Store/types/ActionType";

export class BillService {
  static remove(data: {id: string}): void {
    dispatch({type: ActionType.REMOVE_BILLS, payload: {ids: [data.id]}})
  }
}