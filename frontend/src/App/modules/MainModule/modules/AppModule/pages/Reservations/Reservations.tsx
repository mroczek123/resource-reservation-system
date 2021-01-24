import { Reservation } from "@src/App/shared/modules/Reservations/models/Reservation";
import { ReservationService } from "@src/App/shared/modules/Reservations/ReservationsService";
import { connect, Store } from "@src/App/shared/modules/Store/Store";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";
import { Page } from "../../shared/components/Page";
import { ReservationEditModal } from "./modals/ReservationEditModal";

function Item(props: { reservation: Reservation }) {
  return (
    <li
      className="collection-item valign-wrapper"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span>
        TABLE: {props.reservation.table}
        <br />
        TIME: {props.reservation.date.toDateString()}
      </span>
      <span>
        <button className="btn" onClick={() => ReservationService.remove(props.reservation.id as string)}>Cancel Reservation</button>
      </span>
    </li>
  );
}

function List(props: { reservations: Array<Reservation> }): JSX.Element {
  return (
    <ul className="collection">
      {props.reservations.map((reservation) => (
        <Item reservation={reservation} />
      ))}
    </ul>
  );
}

class _Reservations extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const reservations = Store.getState().resources.reservations.entries;
    const buttons = (
      <button
        className="btn waves-effect waves-light"
        onClick={() => ModalService.displayModal(ReservationEditModal())}
      >
        Add Reservation
      </button>
    );
    return (
      <Page title="Reservations" buttons={buttons}>
        <List reservations={reservations}/>
      </Page>
    );
  }
}

export const Reservations = connect(_Reservations);
