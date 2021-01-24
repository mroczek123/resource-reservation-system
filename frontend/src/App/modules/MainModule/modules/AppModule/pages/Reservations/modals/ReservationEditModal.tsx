import * as React from "react";
import { Modal } from "@src/App/shared/components/Modal";
import { Select } from "@src/App/shared/modules/Materialize/components/Select";
import { ModalService } from "@src/App/shared/services/ModalService";
import { Reservation } from "@src/App/shared/modules/Reservations/models/Reservation";
import { ProductsService } from "@src/App/shared/modules/Products/services/ProductsService";
import { ReservationService } from "@src/App/shared/modules/Reservations/ReservationsService";

export function ReservationEditModal(): JSX.Element {
  const formData: { table: string; date: string; } = {
    table: "",
    date: "",
  };
  const fieldsRefs = {
    table: React.createRef<HTMLInputElement>(),
    date: React.createRef<HTMLInputElement>(),
  };

  function getFormData(): { table: string; date: Date; } | null {
    if (!fieldsRefs.table.current || !fieldsRefs.date.current) {
      return null;
    }
    return {
      table: fieldsRefs.table.current?.value,
      date: new Date(fieldsRefs.date.current?.value),
    };
  }

  function saveReservation() {
    const formData = getFormData();
    if (!formData) {
      return;
    }
    ReservationService.add(new Reservation(formData))
    ModalService.removeModal();
  }

  const modal = (
    <Modal>
      <div className="modal-content">
        <h4>Add reservation</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="table">Table</label>
          <input
            ref={fieldsRefs.table}
            name="table"
            type="text"
            placeholder="9"
            defaultValue={formData.table}
          />
          <label htmlFor="date">Date</label>
          <input
            ref={fieldsRefs.date}
            name="date"
            type="datetime-local"
            defaultValue={formData.date}
          />
        </form>
      </div>

      <div className="modal-footer">
        <button
          className="waves-effect waves-light btn red"
          style={{ marginRight: "10px" }}
          onClick={() => ModalService.removeModal()}
        >
          Cancel
        </button>
        <button className="waves-effect waves-light btn" onClick={saveReservation}>
          Save
        </button>
      </div>
    </Modal>
  );
  return modal;
}
