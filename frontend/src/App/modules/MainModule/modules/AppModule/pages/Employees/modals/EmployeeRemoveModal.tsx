import { Modal } from "@src/App/shared/components/Modal";
import { EmployeeService } from "@src/App/shared/modules/Employees/services/EmployeesService";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";

export function EmployeeRemoveModal(props: { id: string }): JSX.Element {
  const yesCallback = () => {
    EmployeeService.removeEmployee({employeeId: props.id});
    ModalService.removeModal();
  };

  const noCallback = () => {
    ModalService.removeModal();
  };

  return (
    <Modal>
      <div className="modal-content">
        <h4>Are you sure you want to delete this employee?</h4>
        <div className="modal-footer">
          <button
            className="waves-effect waves-light btn green"
            style={{ marginRight: "10px" }}
            onClick={noCallback}
          >
            NO
          </button>
          <button className="waves-effect waves-light btn red" onClick={yesCallback}>
            YES
          </button>
        </div>
      </div>
    </Modal>
  );
}
