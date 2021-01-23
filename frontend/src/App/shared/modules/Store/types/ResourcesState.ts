import { OrderEntry } from "../../Orders/types/OrderEntry";
import { Product } from "../../Products/models/Product";
import { ResourceState } from "./ResourceState";

export interface ResourcesState {
  products: ResourceState<Product>;
  orderEntries: ResourceState<OrderEntry>;
}
