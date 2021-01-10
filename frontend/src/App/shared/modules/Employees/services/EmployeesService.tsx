import { dispatch } from "../../Store/Store";
import { ActionType } from "../../Store/types/ActionType";
import { Employee } from "../models/Employee";

export class EmployeeService {
  static getEmployees(): void {
    //dispatch({ type: ActionType.APPEND_EMPLOYEES, payload: { employees: [new Employee()] } });
  }

  static addEmployee(data: { employee: Employee }): void {
    dispatch({ type: ActionType.APPEND_EMPLOYEES, payload: { employees: [data.employee] } });
  }

  static removeEmployee(data: {employeeId: string}): void {
    dispatch({ type: ActionType.REMOVE_EMPLOYEES, payload: { employeesIds: [data.employeeId] } });
  }
}
