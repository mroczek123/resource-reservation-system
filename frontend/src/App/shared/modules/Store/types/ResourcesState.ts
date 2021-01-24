import { Bill } from "../../Bills/models/Bill";
import { Employee } from "../../Employees/models/Employee";
import { OrderEntry } from "../../Orders/types/OrderEntry";
import { Product } from "../../Products/models/Product";
import { ResourceState } from "./ResourceState";

export interface ResourcesState {
  products: ResourceState<Product>;
  orderEntries: ResourceState<OrderEntry>;
  employees: ResourceState<Employee>;
  bills: ResourceState<Bill>;
}
