import { EmployeeService } from "@src/App/shared/modules/Employees/services/EmployeesService";
import { connect } from "@src/App/shared/modules/Store/Store";
import * as React from "react";
import { Page } from "../../shared/components/Page";
import { EmployeesList } from "./components/EmployeesList";

class _Employees extends React.Component {
  constructor(props: any) {
    super(props);
    EmployeeService.getEmployees();
  }

  render() {
    return (
      <Page title="Employees">
        <EmployeesList />
      </Page>
    );
  }
}

export const Employees = connect(_Employees);
