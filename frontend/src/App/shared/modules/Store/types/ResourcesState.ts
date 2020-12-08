import { Product } from "../../Products/models/Product";
import { ResourceState } from "./ResourceState";

export interface ResourcesState {
  products: ResourceState<Product>;
}
