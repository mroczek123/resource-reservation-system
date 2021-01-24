import { Employee } from "@src/App/shared/modules/Employees/models/Employee";
import { connect } from "@src/App/shared/modules/Store/Store";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";
import { EmployeeEditModal } from "../modals/EmployeeEditModal";
import { EmployeeRemoveModal } from "../modals/EmployeeRemoveModal";

function Item(props: { employee: Employee }) {
  return (
    <li
      className="collection-item valign-wrapper"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span>
        {props.employee.fullName} <br />
        Role: {props.employee.role}
      </span>
      <span>
        <button
          className="btn blue"
          style={{marginRight: "10px"}}
          onClick={() => ModalService.displayModal(EmployeeEditModal({ employee: props.employee }))}
        >
          Modify
        </button>
        <button
          className="btn red"
          onClick={() =>
            ModalService.displayModal(EmployeeRemoveModal({ id: props.employee.id as string }))
          }
        >
          Delete
        </button>
      </span>
    </li>
  );
}

function _EmployeesList(props: StateProps) {
  const employees = props.state.resources.employees.entries;
  return (
    <ul className="collection">
      {employees.map((employee) => (
        <Item employee={employee} />
      ))}
    </ul>
  );
}

export const EmployeesList = connect(_EmployeesList);
