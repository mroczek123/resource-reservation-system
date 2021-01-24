import { dispatch, Store } from "../Store/Store";
import { ActionType } from "../Store/types/ActionType";
import { Reservation } from "./models/Reservation";

export class ReservationService {
  public static add(reservation: Reservation): void {
    const nextId = (Math.max(...Store.getState().resources.reservations.entries.map((reserv) => parseInt(reserv.id as string))) || 0)+1;
    reservation.id = nextId.toString();
    dispatch({type: ActionType.APPEND_RESERVATIONS, payload: {entries: [reservation]}})
  }

  public static remove(idToRemove: string): void {
    dispatch({type: ActionType.REMOVE_RESERVATIONS, payload: {ids: [idToRemove]}})
  }
}