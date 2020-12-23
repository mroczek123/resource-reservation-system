import { ProductsService } from "@src/App/shared/modules/Products/services/ProductsService";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";
import { PageProps, Page } from "../../shared/components/Page";
import { ProductEditModal } from "./modals/ProductEditModal";
import { ProductsList } from "./ProductsList";

export class Products extends React.Component {
  constructor(props: Record<string, unknown>) {
    super(props);
    ProductsService.getAll();
  }

  render(): JSX.Element {
    const content: PageProps = {
      title: "Menu",
      buttons: (
        <button
          className="btn waves-effect waves-light"
          onClick={() => ModalService.displayModal(ProductEditModal())}
        >
          Add to Menu
        </button>
      ),
      children: <ProductsList />,
    };
    return Page(content);
  }
}
