import { Product } from "@src/App/shared/modules/Products/models/Product";
import { connect } from "@src/App/shared/modules/Store/Store";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";
import { ProductEditModal } from "./modals/ProductEditModal";
import { ProductRemoveModal } from "./modals/ProductRemoveModal";
import { ProductItem } from "./ProductItem";

export function ProductsList(props: { items: Array<Product> }): JSX.Element {
  return (
    <ul className="collection">
      {props.items.map((product) => {
          const displayEditModal = () => ModalService.displayModal(ProductEditModal({ product }));
          const displayRemoveModal = () => product.id ? ModalService.displayModal(ProductRemoveModal({ id: product.id })) : undefined;
        return (
          <ProductItem
            product={product}
            editCallback={displayEditModal}
            removeCallback={displayRemoveModal}
          />
        );
      })}
    </ul>
  );
}
