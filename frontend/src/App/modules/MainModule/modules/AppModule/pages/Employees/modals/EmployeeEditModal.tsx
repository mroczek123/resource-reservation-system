import * as React from "react";
import { Modal } from "@src/App/shared/components/Modal";
import { ModalService } from "@src/App/shared/services/ModalService";
import { Employee } from "@src/App/shared/modules/Employees/models/Employee";
import { EmployeeService } from "@src/App/shared/modules/Employees/services/EmployeesService";

export function EmployeeEditModal(props?: { employee?: Employee }): JSX.Element {
  const formData: { firstName: string; lastName: string; role: string } = {
    firstName: "",
    lastName: "",
    role: "",
  };
  const fieldsRefs = {
    firstName: React.createRef<HTMLInputElement>(),
    lastName: React.createRef<HTMLInputElement>(),
    role: React.createRef<HTMLInputElement>(),
  };

  if (props?.employee) {
    formData.firstName = props.employee.firstName;
    formData.lastName = props.employee.lastName;
    formData.role = props.employee.role;
  }

  function getFormData(): { firstName: string; lastName: string; role: string } | null {
    if (!fieldsRefs.firstName.current || !fieldsRefs.lastName.current || !fieldsRefs.role.current) {
      return null;
    }
    return {
      firstName: fieldsRefs.firstName.current.value,
      lastName: fieldsRefs.lastName.current.value,
      role: fieldsRefs.role.current.value
    };
  }

  function saveEmployee() {
    const formData = getFormData();
    if (!formData) {
      return;
    }
    if (props?.employee?.id) {
      const newEmployee = new Employee({ ...formData, id: props.employee.id });
      EmployeeService.updateEmployee({employee: newEmployee});
    } else {
      EmployeeService.addEmployee({employee: new Employee(formData)})
    }
    ModalService.removeModal();
  }

  const modal = (
    <Modal>
      <div className="modal-content">
        <h4>{props?.employee ? "Edit employee" : "Add employee"}</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="firstName">First Name</label>
          <input
            ref={fieldsRefs.firstName}
            name="firstName"
            type="text"
            placeholder="Janusz..."
            defaultValue={formData.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            ref={fieldsRefs.lastName}
            name="lastName"
            type="text"
            placeholder="Kowalski..."
            defaultValue={formData.lastName}
          />
          <label htmlFor="role">Role</label>
          <input
            ref={fieldsRefs.role}
            name="role"
            type="text"
            placeholder="Chef..."
            defaultValue={formData.role}
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
        <button className="waves-effect waves-light btn" onClick={saveEmployee}>
          Save
        </button>
      </div>
    </Modal>
  );
  return modal;
}
