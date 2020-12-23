import { Product } from "@src/App/shared/modules/Products/models/Product";
import { connect, dispatch } from "@src/App/shared/modules/Store/Store";
import { ActionType } from "@src/App/shared/modules/Store/types/ActionType";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { StoreState } from "@src/App/shared/modules/Store/types/StoreState";
import { ModalService } from "@src/App/shared/services/ModalService";
import { Modal } from "materialize-css";
import * as React from "react";
import { ProductEditModal } from "./modals/ProductEditModal";
import { ProductRemoveModal } from "./modals/ProductRemoveModal";
import { ProductItem } from "./ProductItem";

class _ProductsList extends React.Component {
  storeState: StoreState;

  constructor(props: StateProps) {
    super(props);
    this.storeState = props.state;
  }

  render() {
    return (
      <ul className="collection">
        {this.storeState.resources.products.entries.map((product) => {
          return (
            <ProductItem
              product={product}
              editCallback={() => ModalService.displayModal(ProductEditModal({ product }))}
              removeCallback={() => ModalService.displayModal(ProductRemoveModal())}
            />
          );
        })}
      </ul>
    );
  }
}

export const ProductsList = connect(_ProductsList);
