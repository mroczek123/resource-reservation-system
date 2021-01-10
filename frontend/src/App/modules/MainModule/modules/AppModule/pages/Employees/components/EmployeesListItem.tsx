import { Employee } from "@src/App/shared/modules/Employees/models/Employee";
import * as React from "react";

export function EmployeesListItem(props: {employee: Employee}): JSX.Element {
  return (
    <li className="collection-item valign-wrapper" style={{justifyContent: "space-between"}}>
      <span>
        <img
          className="responsive-img circle"
          style={{ height: "90px", width: "90px" }}
          src="static/img/nigga.jpeg"
        />
        <span>Name: {props.employee.fullName} Role: {props.employee.role}</span>
      </span>
      <span>
        <button className="btn blue" style={{ marginRight: "10px" }}>
          Modify
        </button>
        <button className="btn red">Delete</button>
      </span>
    </li>
  );
}
