import * as React from "react";
import { Modal } from "@src/App/shared/components/Modal";
import { Select } from "@src/App/shared/modules/Materialize/components/Select";
import { Product } from "@src/App/shared/modules/Products/models/Product";
import { dispatch } from "@src/App/shared/modules/Store/Store";
import { ActionType } from "@src/App/shared/modules/Store/types/ActionType";

export function ProductEditModal(props?: { product?: Product }): JSX.Element {
  const formData: { name: string; price: number; category: string } = {
    name: "",
    price: 0,
    category: "",
  };

  if (props?.product) {
    formData.category = props.product.category;
    formData.price = props.product.price;
    formData.name = props.product.name;
  }

  const modal = (
    <Modal>
      <div className="modal-content">
        <h4>{props?.product ? "Edit product" : "Add product"}</h4>
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" placeholder="something" value={formData.name} />
          <label htmlFor="name">Price</label>
          <input name="price" type="number" placeholder="something" value={formData.price} />
          <label htmlFor="category">Category</label>
          <Select>
            <option value="1">MOCK</option>
            <option value="2">MOCK</option>
            <option value="3">MOCK</option>
          </Select>
        </form>
      </div>

      <div className="modal-footer">
        <span style={{ marginRight: "10px" }}>
          <button className="waves-effect waves-light btn red" style={{ marginRight: "10px" }} onClick={() => dispatch({ type: ActionType.REMOVE_MODAL, payload: {} })}>
            Cancel
          </button>
          <button className="waves-effect waves-light btn">Save</button>
        </span>
      </div>
    </Modal>
  );
  return modal;
}
