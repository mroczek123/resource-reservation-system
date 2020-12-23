import * as React from "react";
import { Modal } from "@src/App/shared/components/Modal";
import { Select } from "@src/App/shared/modules/Materialize/components/Select";
import { Product } from "@src/App/shared/modules/Products/models/Product";
import { ModalService } from "@src/App/shared/services/ModalService";
import { ProductsService } from "@src/App/shared/modules/Products/services/ProductsService";

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

  const fieldsRefs = {
    name: React.createRef<HTMLInputElement>(),
    price: React.createRef<HTMLInputElement>(),
    category: React.createRef<Select>(),
  }

  function getFormData(): {name: string; price: number; category: string} | null {
    if (!fieldsRefs.category.current || !fieldsRefs.price.current || !fieldsRefs.name.current) {
      return null
    }
    return {
      name: fieldsRefs.name.current?.value,
      price: Number(fieldsRefs.price.current?.value),
      category: fieldsRefs.category.current?.value
    }
  }

  

  function saveProduct() {
    const formData = getFormData();
    if (!formData) {
      return
    }
    ProductsService.create({product:{...formData}})
  }

  const modal = (
    <Modal>
      <div className="modal-content">
        <h4>{props?.product ? "Edit product" : "Add product"}</h4>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input ref={fieldsRefs.name} name="name" type="text" placeholder="something" value={formData.name} />
          <label htmlFor="name">Price</label>
          <input ref={fieldsRefs.price} name="price" type="number" placeholder="something" value={formData.price} />
          <label htmlFor="category">Category</label>
          <Select ref={fieldsRefs.category}>
            <option value="1">MOCK</option>
            <option value="2">MOCK</option>
            <option value="3">MOCK</option>
          </Select>
        </form>
      </div>

      <div className="modal-footer">
        <button
          className="waves-effect waves-light btn red"
          style={{ marginRight: "10px" }}
          onClick={() => ModalService.removeModal()}
        >
          Cancel
        </button>
        <button className="waves-effect waves-light btn" onClick={saveProduct}>
          Save
        </button>
      </div>
    </Modal>
  );
  return modal;
}
