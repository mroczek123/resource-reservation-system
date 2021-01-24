import { connect } from "@src/App/shared/modules/Store/Store";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";
import { Page } from "../../shared/components/Page";
import { EmployeesList } from "./components/EmployeesList";
import { EmployeeEditModal } from "./modals/EmployeeEditModal";

class _Employees extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const buttons = (
      <button
        className="btn waves-effect waves-light"
        onClick={() => ModalService.displayModal(EmployeeEditModal())}
      >
        Add to Menu
      </button>
    );
    return (
      <Page title="Employees" buttons={buttons}>
        <EmployeesList />
      </Page>
    );
  }
}

export const Employees = connect(_Employees);
