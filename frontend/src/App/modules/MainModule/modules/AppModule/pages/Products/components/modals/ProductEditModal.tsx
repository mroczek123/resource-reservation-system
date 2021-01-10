import * as React from "react";
import { Modal } from "@src/App/shared/components/Modal";
import { Select } from "@src/App/shared/modules/Materialize/components/Select";
import { Product, ProductCategory, ProductCategoryChoices } from "@src/App/shared/modules/Products/models/Product";
import { ModalService } from "@src/App/shared/services/ModalService";
import { ProductsService } from "@src/App/shared/modules/Products/services/ProductsService";

export function ProductEditModal(props?: { product?: Product }): JSX.Element {
  const formData: { name: string; price: string; category: string } = {
    name: "",
    price: "",
    category: "",
  };
  const fieldsRefs = {
    name: React.createRef<HTMLInputElement>(),
    price: React.createRef<HTMLInputElement>(),
    category: React.createRef<Select>(),
  };

  if (props?.product) {
    formData.category = String(props.product.category);
    formData.price = Number(props.product.price).toString();
    formData.name = props.product.name;
  }

  function getFormData(): { name: string; price: number; category: ProductCategory } | null {
    if (!fieldsRefs.category.current || !fieldsRefs.price.current || !fieldsRefs.name.current) {
      return null;
    }
    return {
      name: fieldsRefs.name.current?.value,
      price: Number(fieldsRefs.price.current?.value),
      category: ProductCategory[Number(fieldsRefs.category.current?.value)] as unknown as ProductCategory,
    };
  }

  function saveProduct() {
    const formData = getFormData();
    if (!formData) {
      return;
    }
    if (props?.product?.id) {
      const newProduct = new Product({ ...formData, id: props.product.id });
      ProductsService.update({ product: newProduct });
    } else {
      ProductsService.create({ product: { ...formData } });
    }
    ModalService.removeModal();
  }

  const modal = (
    <Modal>
      <div className="modal-content">
        <h4>{props?.product ? "Edit product" : "Add product"}</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input
            ref={fieldsRefs.name}
            name="name"
            type="text"
            placeholder="Tomato soup..."
            defaultValue={formData.name}
          />
          <label htmlFor="name">Price</label>
          <input
            ref={fieldsRefs.price}
            name="price"
            type="number"
            placeholder="12.99..."
            defaultValue={formData.price}
          />
          <label htmlFor="category">Category</label>
          <Select ref={fieldsRefs.category} value={formData.category}>
            <option value="">Choose category...</option>
            {Object.entries(ProductCategoryChoices).map(([val, description]) => {
              return <option value={val}>{description}</option>
            })}
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
