import { Product } from "@src/App/shared/modules/Products/models/Product";
import { connect, dispatch } from "@src/App/shared/modules/Store/Store";
import { ActionType } from "@src/App/shared/modules/Store/types/ActionType";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { StoreState } from "@src/App/shared/modules/Store/types/StoreState";
import * as React from "react";
import { ProductEditModal } from "./modals/ProductEditModal";
import { ProductItem } from "./ProductItem";

class _ProductsList extends React.Component {
  storeState: StoreState;

  constructor(props: StateProps) {
    super(props);
    this.storeState = props.state;
  }
  displayEditModal(product: Product) {
    dispatch({ type: ActionType.ADD_MODAL, payload: { modal: ProductEditModal({ product }) } });
  }

  deleteProductModal(product: Product) {
    //dispatch({ type: ActionType.ADD_MODAL, payload: { modal: ProductEditModal({product}) } });
  }

  render() {
    return (
      <ul className="collection">
        {this.storeState.resources.products.entries.map((product) => {
          return (
            <ProductItem
              product={product}
              editCallback={() => this.displayEditModal(product)}
              removeCallback={() => this.deleteProductModal(product)}
            />
          );
        })}
      </ul>
    );
  }
}

export const ProductsList = connect(_ProductsList);
