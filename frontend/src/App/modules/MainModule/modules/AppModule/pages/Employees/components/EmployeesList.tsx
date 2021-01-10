import { connect } from "@src/App/shared/modules/Store/Store";
import * as React from "react";
import { EmployeesListItem } from "./EmployeesListItem";

function _EmployeesList(props: unknown) {
  return (
    <ul className="collection">
    </ul>
  );
}

export const EmployeesList = connect(_EmployeesList);
