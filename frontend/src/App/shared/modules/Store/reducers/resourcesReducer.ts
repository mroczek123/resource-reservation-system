import { reducer as ProductsReducer } from "../../Products/reducer";
import { reducer as OrderEntriesReducer } from "../../Orders/reducer";
import { Action } from "../types/Action";
import { ResourcesState } from "../types/ResourcesState";
import { employeesReducer } from "../../Employees/reducer";
import { billsReducer } from "../../Bills/reducer";
import { ReservationReducer } from "../../Reservations/reducer";

export function resourcesReducer(state: ResourcesState, action: Action): ResourcesState {
  return {
    ...state,
    products: ProductsReducer(state.products, action),
    orderEntries: OrderEntriesReducer(state.orderEntries, action),
    employees: employeesReducer(state.employees, action),
    bills: billsReducer(state.bills, action),
    reservations: ReservationReducer(state.reservations, action)
  };
}
