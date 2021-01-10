import { Product } from "@src/App/shared/modules/Products/models/Product";
import { ProductsService } from "@src/App/shared/modules/Products/services/ProductsService";
import { connect, Store } from "@src/App/shared/modules/Store/Store";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { StoreState } from "@src/App/shared/modules/Store/types/StoreState";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";
import { PageProps, Page } from "../../shared/components/Page";
import { ProductEditModal } from "./components/modals/ProductEditModal";
import { ProductsList } from "./components/ProductsList";

class _Products extends React.Component {
  constructor(props: StateProps) {
    super(props);
    ProductsService.getAll();
  }


  render(): JSX.Element {
    const products = Store.getState().resources.products.entries;
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
      children: <ProductsList  items={products}/>,
    };
    return Page(content);
  }
}

export const Products = connect(_Products);