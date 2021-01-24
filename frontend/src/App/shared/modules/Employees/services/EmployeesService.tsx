import { dispatch, Store } from "../../Store/Store";
import { ActionType } from "../../Store/types/ActionType";
import { Employee } from "../models/Employee";

export class EmployeeService {
  static addEmployee(data: { employee: Employee }): void {
    const nextId: string = Math.max(...Store.getState().resources.employees.entries.map((employee) => parseInt(employee.id as string))).toString();
    data.employee.id = nextId;
    dispatch({ type: ActionType.APPEND_EMPLOYEES, payload: { entries: [data.employee] } });
  }

  static removeEmployee(data: {employeeId: string}): void {
    dispatch({ type: ActionType.REMOVE_EMPLOYEES, payload: { ids: [data.employeeId] } });
  }

  static updateEmployee(data: {employee: Employee}): void {
    dispatch({ type: ActionType.UPDATE_EMPLOYEE, payload: { entry: data.employee } });
  }
}
