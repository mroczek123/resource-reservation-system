import { ProductsService } from "@src/App/shared/modules/Products/services/ProductsService";
import { dispatch } from "@src/App/shared/modules/Store/Store";
import { ActionType } from "@src/App/shared/modules/Store/types/ActionType";
import * as React from "react";
import { PageProps, Page } from "../../shared/components/Page";
import { ProductEditModal } from "./modals/ProductEditModal";
import { ProductsList } from "./ProductsList";

export class Products extends React.Component {
  constructor(props: Record<string, unknown>) {
    super(props);
    ProductsService.getProducts();
  }

  displayAddProductModal(): void {
    dispatch({ type: ActionType.ADD_MODAL, payload: { modal: ProductEditModal() } });
  }

  render(): JSX.Element {
    const content: PageProps = {
      title: "Menu",
      buttons: (
        <button
          className="btn waves-effect waves-light"
          onClick={() => this.displayAddProductModal()}
        >
          Add to Menu
        </button>
      ),
      children: <ProductsList />,
    };
    return Page(content);
  }
}
